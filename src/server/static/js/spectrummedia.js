/*
	Version:		spectrummedia.js v0.1.
	Date:			20/03/2019
	Author:			Danny Fardy Jhonston Bermúdez
*/
(function () {
	var audio = (function (o) {
		o.words = {}; // Propiedad de tipo objeto que contendrá los datos de words del archivo de transcripción JSON.
		o.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext; // Simplificar uso de window.AudioContext entre navegadores.
		// Simplificar uso de window.requestAnimFrame entre navegadores.
		window.requestAnimFrame = (function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 5000);
				};
		}());
		o.newXHR = null; // Propiedad que contendrá instancia de XMLHttpRequest o window.ActiveXObject("Microsoft.XMLHTTP") para naveadores IE inferiores a 9.
		// Método helper para hacer solicitudes a través de XMLHttpRequest o window.ActiveXObject("Microsoft.XMLHTTP").
		o.sendXHR = function (type, responseType, url, data, callback) {
			o.newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
			o.newXHR.responseType = responseType;
			o.newXHR.open(type, url, true);
			o.newXHR.send(data);
			o.newXHR.onreadystatechange = function () {
				if (this.status === 200 && this.readyState === 4) {
					callback(this.response);
				}
			};
		};
		o.gebid = function (id) {
			return document.getElementById(id);
		};
		o.ce = function (elem) {
			return document.createElement(elem);
		};
		o.sampleSize = 0; // Tamaño por defecto de un buffer.
		o.audioContext = null; // Propiedad que contiene «AudioContext()».
		o.gainNode = null; // Propiedad que contiene la interfaz GainNode que representa un cambio en el volumen.
		o.analyserNode = null; // Propiedad que contiene «AnalyserNode(context, options)».
		o.sourceNode = null; // Propiedad que contiene «o.audioContext.createBufferSource()».
		o.javascriptNode = null; // Propiedad que contiene «o.audioContext.createScriptProcessor(o.sampleSize, 1, 1)», para seguimiento de reproducción de audio.
		o.audioControl = null; // Propiedad que contiene el HTML del canvas generado por código.
		o.audioTotalDuration = 0; // Propiedad que contiene la duración total de un audio.
		o.currentTime = 0; // Propiedad que contiene el tiempo actual durante la reproducción de un audio.
		o.audioProgress = null; // Propiedad que contiene el HTML de la etiqueta <wave> que muestra el progreso de la reproducción de un audio.
		o.html = ""; // Propiedad que contiene los atributos de una etiqueta.
		o.htmlCurrentWidth = ""; // Propiedad que contiene el valor en píxeles del progreso de la reproducción de un audio.
		o.currentWidth = 0; // Propiedad que contiene el valor numérico que representa el pixel del progreso de la reproducción de un audio.
		o.isSeek = false; // Propiedad que indica si se ha realizado un búsqueda en el audio.
		o.status = ""; // init = Primera vez de ejecución, suspend = audio detenido, resume = continúa ejecución.
		o.audioPlaying = false; // Propiedad que indica si el audio se está reproduciendo.
		o.i = 0; // Propiedad numérica que contiene el tiempo en la reproducción de un audio, luego de una búsqueda dentro del espectro.
		o.buffer = null; // Propiedad que contiene un «AudioBuffer».
		o.width = 0; // Propiedad numérica que contiene el ancho del control de reproducción de audio.
		o.audioId = null;
		o.theme = "";
		o.renderedWidth = null;
		o.permissions = null;
		o.oldTitle = null;
		o.titles = null;
		o.callbacks = null;
		o.videoContainer = null;
		o.signature = null;
		o.renderVideo = function (arrayBufferFile) {
			var canvas = o.gebid("video"), ctx = canvas.getContext("2d"), video = o.ce("video"), base64 = "data:video/mp4;base64,";
			base64 += o.arrayBufferToBase64(arrayBufferFile);
			video.src = base64;
			video.autoPlay = false;
			video.loop = false;
			video.muted = true;
			o.videoContainer = {
				video: video,
				ready: false
			};
			video.oncanplay = function (event) {
				o.videoContainer.scale = Math.min(
					canvas.width / this.videoWidth,
					canvas.height / this.videoHeight);
				o.videoContainer.ready = true;
				window.requestAnimationFrame(updateCanvasVideo);
			};
			function updateCanvasVideo() {
				// Sólo renderizar cuando esté listo.
				if (o.videoContainer !== undefined && o.videoContainer.ready) {
					video.muted = true;
					var scale = o.videoContainer.scale, vidH = o.videoContainer.video.videoHeight, vidW = o.videoContainer.video.videoWidth, top = canvas.height / 2 - (vidH / 2) * scale, left = canvas.width / 2 - (vidW / 2) * scale;
					// Dibujar el vídeo con el tamaño correcto.
					ctx.drawImage(o.videoContainer.video, left, top, vidW * scale, vidH * scale);
				}
				// Solicita al siguiente marco en 1/60 vez por segundo.
				window.requestAnimationFrame(updateCanvasVideo);
			}
		};
		// Método que muestra el progreso de la reproducción de un audio.
		o.setProgress = function (callback) {
			if (!isNaN(o.currentWidth) && o.currentWidth !== Infinity) {
				o.htmlCurrentWidth = o.currentWidth;
				o.htmlCurrentWidth += "%";
				o.html = "width: ";
				o.html += o.htmlCurrentWidth;
				o.html += ";";
				o.audioProgress.setAttribute("style", o.html); // Se establece estilo del ancho con el porcentaje relacionado a la reproducción del audio.
				o.audioProgress.setAttribute("data-progress", o.htmlCurrentWidth); // Se imprime el valor del porcentaje en una propiedad data-progress, sólo para visualización en código.
				o.audioProgress.setAttribute("data-current-time", o.currentTime); // Se imprime el valor numérico que representa al procentaje de la reproducción del audio.
				o.audioProgress.children[0].textContent = o.decimalToTime(o.currentTime); // Se imprime el tiempo de la posición en el reproducción del audio en la etiqueta «<div class="indicator></div>»".
				if (o.currentWidth >= 1) {
					o.audioProgress.children[0].setAttribute("style", "display: inline;");
				} else {
					o.audioProgress.children[0].setAttribute("style", "display: inline;"); // Se hace visible al control «<div class="indicator></div>».
				}
				o.findText(o.currentTime.toFixed(2));
				if (o.status === "find") {
					if (o.audioPlaying === false) {
						o.pauseAudio();
					}
				}
				callback();
			} else {
				o.audioProgress.children[0].removeAttribute("style");
			}
		};
		// Método que convierte de un número decimal su representación en hh:mm:ss.
		o.decimalToTime = function (num) {
			var hours, minutes, seconds;
			hours = Math.floor(num / 3600);
			num %= 3600;
			minutes = Math.floor(num / 60);
			seconds = Math.floor(num % 60);

			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds = seconds < 10 ? "0" + seconds : seconds;
			return [hours, minutes, seconds].join(":");
		};
		/*
			<div id="spectrum" style="width: 100%;">
				<div class="videoContainer">
					<canvas id="video" height="300" width="900"></canvas>
				</div>
				<div class="audioContainer" style="height: 100px;">
					<div id="controls" class="dark-theme">
						<div id="buttons">
							<button id="btnBackward" title="Retroceder">
								<i class="fa fa-backward"></i>
							</button>
							<button id="btnPlay" title="Reproducir">
								<i class="fa fa-play-circle"></i>
							</button>
							<button id="btnPause" title="Pausar" style="display: none;">
								<i class="fa fa-pause-circle"></i>
							</button>
							<button id="btnStop" title="Detener" disabled="disabled">
								<i class="fa fa-stop-circle"></i>
							</button>
							<button id="btnForward" title="Avanzar">
								<i class="fa fa-forward"></i>
							</button>
						</div>
						<div id="volume">
							<div>
								<span id="spanMinVolume">
									<i class="fa fa-volume-down"></i>
								</span>
							</div>
							<div>
								<input type="range" min="0" max="1" step="0.01">
							</div>
							<div>
								<span id="spanMaxVolume">
									<i class="fa fa-volume-up"></i>
								</span>
							</div>
						</div>
						<div id="toolbar">
							<ul>
								<li>
									<a id="aDownloadAudio" title="Descargar audio"
										href="blob:http://127.0.0.1:8080/5a3be33f-9217-4738-a4fc-35c058e4b564"
										download="C6FADCD7592F4AE5B266FF55CEB57882.mp4">
										<i class="fa fa-file-audio-o"></i>
									</a>
								</li>
								<li>
									<a id="aDownloadTranscription" title="Descargar transcripción"
										download="C6FADCD7592F4AE5B266FF55CEB57882.html">
										<i class="fa fa-file-text-o"></i>
									</a>
								</li>
								<li>
									<a id="aPrint" title="Imprimir">
										<i class="fa fa-print"></i>
									</a>
								</li>
								<li>
									<a id="aTag" title="Etiquetar">
										<i class="fa fa-comment-o"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div id="waveform">
						<canvas id="spectrum_canvas" class="canvas" height="100" width="900"></canvas>
						<div class="wave" id="spectrum_wave" style="height: 100px; top: -100px; width: 100%;">
							<div class="waveProgress" id="spectrum_waveProgress" style="width: 62.56126075314449%;"
								data-progress="62.56126075314449%" data-current-time="32.61242928204678">
								<div class="indicator" style="display: inline;">00:00:32</div>
							</div>
							<div class="wavePins" id="spectrum_wavePins">
								<span data-current-time="91.81101498945509" title="null"
									style="left: 176.1234282515758%;"></span>
								<span data-current-time="14.5782807741018" title="Otro comentario..."
									style="left: 27.965890457084516%;"></span>
								<span data-current-time="77.53787400369946" title="null"
									style="left: 148.7428952880955%;"></span>
								<span data-current-time="104.54111370648035" title="Etiqueta 6..."
									style="left: 200.54390359738247%;"></span>
							</div>
							<div class="wavePoints" id="spectrum_wavePoints">
								<time data-current-time="73.31" title="paquete " style="left: 140.63245599240983%;"></time>
								<time data-current-time="117.44" title="señor " style="left: 225.28816848654495%;"></time>
								<time data-current-time="120.17" title="beneficio "
									style="left: 230.52519760752816%;"></time>
								<time data-current-time="135.26" title="Señor " style="left: 259.4727321993364%;"></time>
								<time data-current-time="149.42" title="tiempo " style="left: 286.63622390377674%;"></time>
								<time data-current-time="181.23" title="lugar " style="left: 347.65816395450054%;"></time>
							</div>
						</div>
					</div>
					<ul class="legend">
						<li class="in" title="Cliente"></li>
						<li class="out" title="Agente"></li>
					</ul>
				</div>
			</div>
		*/
		o.create = function (options) {
			var t = this, html = "";
			t.id = options.id;
			t.height = options.height;
			t.width = options.width;

			var div = o.gebid(t.id); // "spectrum".
			html += "width: 100%;";
			div.setAttribute("style", html);

			var divAudioContainer = o.ce("div");
			divAudioContainer.className = "audioContainer row";
			divAudioContainer.id = "audioContainer2";
			html = "";
			html += "height: ";
			html += t.height;
			html += "px;";
			divAudioContainer.setAttribute("style", html);

			var divControls = o.ce("div");
			divControls.id = "controls";
			divControls.className = "col-12 d-flex justify-content-center align-items-center";

			var divControlsButton = o.ce("div"), btnBackward = o.ce("button"), btnPlay = o.ce("button"), btnPause = o.ce("button"), btnStop = o.ce("button"), btnForward = o.ce("button"), iTag;
			divControlsButton.id = "buttons";

			btnBackward.id = "btnBackward";
			btnBackward.title = options.titles.backward;
			btnBackward.onclick = function () {
				o.currentTime -= 2;
				o.status = "find";
				o.isSeek = true;
				if (o.currentTime >= 0) { // No debe ser menor a 0.
					o.playAudio(o.currentTime, function () {
						if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
							o.callbacks.timeChangedCallback();
						}
					});
				} else {
					o.currentTime = 0;
				}
			};

			btnPlay.id = "btnPlay";
			btnPlay.title = options.titles.play;
			btnPlay.setAttribute("disabled", "disabled");
			btnPlay.onclick = function () {
				o.isSeek = false;
				if (o.currentTime < o.audioTotalDuration) {
					o.playAudio(o.currentTime, function () {
						if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
							o.callbacks.timeChangedCallback();
						}
					});
					btnPlay.setAttribute("style", "display: none;");
					btnPause.removeAttribute("style");
					if (o.callbacks && o.callbacks.playCallback && typeof o.callbacks.playCallback === "function") {
						o.callbacks.playCallback();
					}
				}
			};

			btnPause.id = "btnPause";
			btnPause.title = options.titles.pause;
			btnPause.setAttribute("style", "display: none;");
			btnPause.onclick = function () {
				o.isSeek = false;
				o.audioPlaying = false;
				o.pauseAudio();
				btnPlay.removeAttribute("style");
				this.setAttribute("style", "display: none;");
				if (o.callbacks && o.callbacks.pauseCallback && typeof o.callbacks.pauseCallback === "function") {
					o.callbacks.pauseCallback();
				}
			};

			btnStop.id = "btnStop";
			btnStop.title = options.titles.stop;
			btnStop.setAttribute("disabled", "disabled");
			btnStop.onclick = function () {
				o.isSeek = false;
				o.audioPlaying = false;
				o.stopAudio();
				btnPlay.removeAttribute("style");
				btnPause.setAttribute("style", "display: none;");
				this.setAttribute("disabled", "disabled");
				if (o.callbacks && o.callbacks.stopCallback && typeof o.callbacks.stopCallback === "function") {
					o.callbacks.stopCallback();
				}
			};

			btnForward.id = "btnForward";
			btnForward.title = options.titles.forward;
			btnForward.onclick = function () {
				o.currentTime += 2;
				o.status = "find";
				o.isSeek = true;
				if (o.currentTime < o.audioTotalDuration) {
					o.playAudio(o.currentTime, function () {
						if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
							o.callbacks.timeChangedCallback();
						}
					});
				} else {
					o.currentTime = o.audioTotalDuration;
				}
			};

			iTag = o.ce("i");
			iTag.className = "icon-speech-backward";
			btnBackward.appendChild(iTag);

			iTag = o.ce("i");
			iTag.className = "icon-speech-play";
			btnPlay.appendChild(iTag);

			iTag = o.ce("i");
			iTag.className = "icon-speech-pause";
			btnPause.appendChild(iTag);

			iTag = o.ce("i");
			iTag.className = "icon-speech-stop";
			btnStop.appendChild(iTag);

			iTag = o.ce("i");
			iTag.className = "icon-speech-forward";
			btnForward.appendChild(iTag);

			divControlsButton.appendChild(btnBackward);
			divControlsButton.appendChild(btnPlay);
			divControlsButton.appendChild(btnPause);
			divControlsButton.appendChild(btnStop);
			divControlsButton.appendChild(btnForward);
			divControls.appendChild(divControlsButton);

			var divVolumeButton = o.ce("div");
			divVolumeButton.id = "volume";
			divVolumeButton.className = "d-flex justify-content-center align-items-center mx-4";

			var divMinVolume = o.ce("div"), spanMinVolume = o.ce("span");
			spanMinVolume.id = "spanMinVolume";

			iTag = o.ce("i");
			iTag.className = "icon-speech-volume-off";
			spanMinVolume.appendChild(iTag);

			divMinVolume.appendChild(spanMinVolume);

			var divRangeVolume = o.ce("div"), divMaxVolume = o.ce("div"), spanMaxVolume = o.ce("span");
			spanMaxVolume.id = "spanMaxVolume";

			iTag = o.ce("i");
			iTag.className = "icon-speech-volume-on";
			spanMaxVolume.appendChild(iTag);

			divMaxVolume.appendChild(spanMaxVolume);

			var rngVolume = o.ce("input");
			rngVolume.type = "range";
			rngVolume.min = 0;
			rngVolume.max = 1;
			rngVolume.step = 0.01;
			rngVolume.type = "range";
			rngVolume.value = o.volume;
			rngVolume.oninput = function () {
				o.volume = this.value * 1;
				if (o.gainNode !== null) {
					o.gainNode.gain.setValueAtTime(o.volume, o.audioContext.currentTime);
				}
			};

			divRangeVolume.appendChild(rngVolume);

			divVolumeButton.appendChild(divMinVolume);
			divVolumeButton.appendChild(divRangeVolume);
			divVolumeButton.appendChild(divMaxVolume);

			var divToolbar = o.ce("div");
			divToolbar.id = "toolbar";

			var ulToolbar = o.ce("ul"), downloadAudio = options.permissions ? options.permissions.allowDownloadAudio ? options.permissions.allowDownloadAudio ? options.permissions.allowDownloadAudio : true : (options.permissions.allowDownloadAudio === undefined ? true : false) : true, downloadTranscription = options.permissions ? options.permissions.allowDownloadTranscription ? options.permissions.allowDownloadTranscription ? options.permissions.allowDownloadTranscription : true : (options.permissions.allowDownloadTranscription === undefined ? true : false) : true, tag = options.permissions ? options.permissions.allowTag ? options.permissions.allowTag ? options.permissions.allowTag : true : (options.permissions.allowTag === undefined ? true : false) : true;
			o.permissions.allowDownloadTranscription = downloadTranscription;
			o.permissions.allowTag = tag;
			o.permissions.showTopics = options.permissions ? options.permissions.showTopics ? options.permissions.showTopics ? options.permissions.showTopics : true : (options.permissions.showTopics === undefined ? true : false) : true;
			if (downloadAudio) {
				var liDownloadAudio = o.ce("li"), aDownloadAudio = o.ce("a");
				aDownloadAudio.id = "aDownloadAudio";
				aDownloadAudio.title = options.titles.downloadAudio;
				aDownloadAudio.href = URL.createObjectURL(new Blob([o.arrayBufferFile]));
				aDownloadAudio.download = options.audioId;
				aDownloadAudio.download += ".";
				aDownloadAudio.download += o.signature.type.toLowerCase();

				iTag = o.ce("i");
				iTag.className = "icon-speech-sound-download";
				aDownloadAudio.appendChild(iTag);

				liDownloadAudio.appendChild(aDownloadAudio);
				ulToolbar.appendChild(liDownloadAudio);
			}

			if (downloadTranscription) {
				var liDownloadTranscription = o.ce("li"), aDownloadTranscription = o.ce("a");
				aDownloadTranscription.id = "aDownloadTranscription";
				aDownloadTranscription.title = options.titles.downloadTranscription;
				html = options.audioId;
				html += ".html";
				aDownloadTranscription.download = html;
				aDownloadTranscription.onclick = function () {
					var transcriptionZone = o.gebid("transcriptionZone");
					if (transcriptionZone && transcriptionZone.innerHTML.length > 0) {
						var style = o.ce("style");
						style.type = "text/css";
						style.textContent = "#transcriptionZone{background-color:#fff;border:#4a8bc9 solid 1px;box-sizing:border-box;color:inherit;margin:5px 0;padding:10px;width:100%;}#transcriptionZone div{display:flex;text-align:justify;}#transcriptionZone div div:nth-child(1){display:inline-block;width:80px;}#transcriptionZone div div:nth-child(1) span{font-weight:700;}#transcriptionZone div div:nth-child(2){display:inline-block;padding:2px;text-align:justify;width:85%;}#transcriptionZone div div:nth-child(2) span{outline-style:none;}#transcriptionZone div.in{background-color:inherit;color:#71c6c1;}#transcriptionZone div.out{background-color:inherit;color:#7e99ce;}";
						html = style.outerHTML;
						html += transcriptionZone.outerHTML;
						aDownloadTranscription.href = URL.createObjectURL(new Blob([(html)]));
					}
				};

				iTag = o.ce("i");
				iTag.className = "icon-speech-file-download";
				aDownloadTranscription.appendChild(iTag);

				liDownloadTranscription.appendChild(aDownloadTranscription);
				ulToolbar.appendChild(liDownloadTranscription);
			}

			if (downloadTranscription) {
				var liPrint = o.ce("li"), aPrint = o.ce("a");
				aPrint.id = "aPrint";
				aPrint.title = options.titles.print;
				aPrint.onclick = function () {
					var transcriptionZone = o.gebid("transcriptionZone");
					if (transcriptionZone && transcriptionZone.innerHTML.length > 0) {
						o.oldTitle = document.title;
						document.title = options.audioId + ".pdf";
						window.print();
						document.title = o.oldTitle;
					}
				};

				iTag = o.ce("i");
				iTag.className = "icon-speech-print";
				aPrint.appendChild(iTag);

				liPrint.appendChild(aPrint);
				ulToolbar.appendChild(liPrint);
			}

			if (tag) {
				var liTag = o.ce("li"), aTag = o.ce("a");
				aTag.id = "aTag";
				aTag.title = options.titles.tag;
				// aTag.onclick = function (e) {
				// 	var position = { x: e.pageX, y: e.pageY }, tagLayout = o.renderTagLayout(options.titles, position);
				// 	if (o.renderedTagLayout === false) {
				// 		o.renderedTagLayout = tagLayout.open;
				// 		document.body.appendChild(tagLayout.html);
				// 	}
				// };

				iTag = o.ce("i");
				iTag.className = "icon-speech-comment";
				aTag.appendChild(iTag);

				liTag.appendChild(aTag);
				ulToolbar.appendChild(liTag);
			}
			divToolbar.appendChild(ulToolbar);

			var divWaveform = o.ce("div");
			divWaveform.id = "waveform";
			divWaveform.className = "col-12";

			var canvas = o.ce("canvas");
			canvas.setAttribute("id", t.id + "_canvas");
			canvas.setAttribute("class", "canvas");
			canvas.setAttribute("height", t.height);
			canvas.setAttribute("width", t.width);

			var divWave = o.ce("div");
			divWave.className = "wave";
			divWave.setAttribute("id", t.id + "_wave");
			html = "height: ";
			html += "50";
			html += "px; top: -52";
			html += "px; width: 100%;";
			divWave.setAttribute("style", html);

			var divWaveProgress = o.ce("div");
			divWaveProgress.className = "waveProgress";
			divWaveProgress.setAttribute("id", t.id + "_waveProgress");
			divWaveProgress.setAttribute("style", "width: 0%;");

			var divWavePins = o.ce("div"); // Pins de comentarios.
			divWavePins.className = "wavePins";
			divWavePins.setAttribute("id", t.id + "_wavePins");

			var divWavePoints = o.ce("div"); // Points de palabras encontradas.
			divWavePoints.className = "wavePoints";
			divWavePoints.setAttribute("id", t.id + "_wavePoints");

			var indicator = o.ce("div");
			indicator.className = "indicator";

			divWave.onmousedown = function (e) {
				o.setPosition(e, function () {
					if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
						o.callbacks.timeChangedCallback();
					}
				});
			};

			divControls.appendChild(divVolumeButton);
			divControls.appendChild(divToolbar);

			divWaveProgress.appendChild(indicator);

			divWave.appendChild(divWaveProgress);
			divWave.appendChild(divWavePins); // Pins de comentarios.
			divWave.appendChild(divWavePoints); // Points de palabras encontradas.

			divWaveform.appendChild(canvas);
			divWaveform.appendChild(divWave);

			divAudioContainer.appendChild(divControls);
			divAudioContainer.appendChild(divWaveform);

			var ulLegend = o.ce("ul"), li;
			ulLegend.className = "legend";
			li = o.ce("li");
			li.className = "in";
			li.title = options.titles.in;
			li.innerHTML += options.titles.in;
			ulLegend.appendChild(li);
			li = o.ce("li");
			li.className = "out";
			li.innerHTML += options.titles.out;
			li.title = options.titles.out;
			ulLegend.appendChild(li);
			divAudioContainer.appendChild(ulLegend);

			if (o.signature.type === "MP4") {
				var divVideoContainer = o.ce("div");
				divVideoContainer.className = "videoContainer";

				var canvasVideo = o.ce("canvas");
				canvasVideo.id = "video";
				canvasVideo.height = 300;
				canvasVideo.width = 900;
				divVideoContainer.appendChild(canvasVideo);
				div.appendChild(divVideoContainer);
			}
			div.appendChild(divAudioContainer);

			return {
				element: div.innerHTML,
				context: canvas.getContext("2d")
			};
		};
		// Método que suspende o pausa la reproducción de un audio.
		o.pauseAudio = function () {
			o.audioContext.suspend().then(function () {
				o.status = "suspend";
				o.audioPlaying = false;
				if (o.signature.type === "MP4") {
					o.videoContainer.video.pause();
					o.videoContainer.video.paused = true;
				}
			});
		};
		// Método que detiene la reproducción de un audio.
		o.stopAudio = function () {
			if (o.signature.type === "MP4") {
				o.videoContainer.video.currentTime = 0;
				o.videoContainer.video.pause();
			}
			o.reset("stop");
			o.resetText("div#transcriptionZone span.selected");
			o.resetParagraph();
			var transcriptionZone = o.gebid("transcriptionZone");
			if (transcriptionZone) {
				transcriptionZone.scrollTop = 0;
			}
		};
		o.setPosition = function (e, callback) {
			if (e.target.tagName !== "SPAN" && e.target.tagName !== "TIME") {
				var x = e.offsetX;
				if (x >= 0) {
					var newRenderedWidth = window.getComputedStyle(o.audioControl.children[(o.signature.type === "MP4" ? 1 : 0)].children[1].children[0]).width.replace("px", "") * 1;
					if (o.renderedWidth !== newRenderedWidth) {
						o.renderedWidth = newRenderedWidth;
					}
					o.isSeek = true;
					o.currentTime = o.getAudioTime(x);
					o.currentWidth = x;
					o.currentWidth = (o.currentWidth * 100) / o.renderedWidth; // Se convierte a porcentaje.
					if ((o.status === "" || o.status === "suspend") && o.audioPlaying === false) {
						o.status = "";
						window.requestAnimFrame(function () {
							o.setProgress(callback);
						});
					} else {
						o.playAudio(o.currentTime, function () {
							if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
								o.callbacks.timeChangedCallback();
							}
						});
					}
				}
			}
		};
		o.volume = 0.5;
		o.setVolume = function () {
			if (o.audioContext) {
				o.gainNode = o.audioContext.createGain();
				o.gainNode.gain.value = (o.status === "find" && o.audioPlaying === false) ? 0 : o.volume;
				o.gainNode.connect(o.audioContext.destination);
				o.sourceNode.connect(o.gainNode);
			}
		};
		// Método que vuelve a reproducir un audio suspendido o crea e inicializa la instancia para la reproducción, contexto de ejecución, implementación de evento de progreso y finalización de reproducción de audio.
		o.playAudio = function (currentTime, callback) {
			var btnStop = o.gebid("btnStop");
			btnStop.removeAttribute("disabled");
			if ((o.status === "suspend") && o.isSeek === false) {
				o.setVolume();
				o.audioContext.resume().then(function () {
					o.status = "resume";
					o.audioPlaying = true;
					if (o.signature.type === "MP4") {
						o.videoContainer.video.currentTime = o.currentTime;
						o.videoContainer.video.play();
						o.videoContainer.video.paused = false;
					}
				});
			}
			else {
				o.currentTime = currentTime;
				if (o.currentTime < o.audioTotalDuration) {
					if (o.signature.type === "MP4") {
						o.videoContainer.video.currentTime = o.currentTime;
						o.videoContainer.video.play();
						o.videoContainer.video.paused = false;
					}
					if (o.audioContext) o.audioContext.close();
					o.audioContext = new o.AudioContext();
					o.analyserNode = o.audioContext.createAnalyser();
					o.sourceNode = o.audioContext.createBufferSource();
					o.sourceNode.buffer = o.buffer;

					o.javascriptNode = o.audioContext.createScriptProcessor(o.sampleSize, 1, 1);
					o.sourceNode.connect(o.analyserNode);
					o.analyserNode.connect(o.javascriptNode);
					o.javascriptNode.connect(o.audioContext.destination);
					o.audioTotalDuration = o.buffer.duration;
					o.sourceNode.loop = false;

					o.sourceNode.start(o.audioContext.currentTime, currentTime);
					o.javascriptNode.onaudioprocess = function () {
						if (o.audioContext) {
							o.i = o.audioContext.currentTime;
							o.currentTime = currentTime + o.i;
							o.currentWidth = (o.renderedWidth * o.currentTime) / o.audioTotalDuration;
							o.currentWidth = (o.currentWidth * 100) / o.renderedWidth; // Se convierte a porcentaje.
							window.requestAnimFrame(function () {
								o.setProgress(callback);
							});
						}
					};
					o.sourceNode.onended = function () {
						o.javascriptNode.disconnect(o.audioContext.destination);
						o.sourceNode.stop(o.currentTime);

						var btnPlay = o.gebid("btnPlay"), btnPause = o.gebid("btnPause");
						btnPlay.removeAttribute("style");
						btnPause.setAttribute("style", "display: none;");
						o.status = "";
						o.audioPlaying = false;
					};
					o.setVolume();
					if (o.status !== "find") {
						o.audioPlaying = true;
					}
				}
			}
		};
		o.loadFile = function (url, callback) {
			o.sendXHR("GET", "arraybuffer", url, null, function (response) {
				callback(response); // Ejecutar función una vez finalizado la obtención del request anterior.
			});
		};
		o.arrayBufferFile = null;
		o.onDecodeError = function () {
			if (o.callbacks && o.callbacks.onDecodeErrorCallback && typeof o.callbacks.onDecodeErrorCallback === "function") {
				o.callbacks.onDecodeErrorCallback();
			}
		};
		// Función que retorna un tiempo del audio en el momento de su reproducción.
		o.getAudioTime = function (n) {
			return (o.audioTotalDuration * n) / o.renderedWidth;
		};
		o.getPercentPosition = function (currentTime) {
			return (currentTime * 100) / o.audioTotalDuration;
		};
		o.colors = ["#71c6c1", "#7e99ce"];
		o.findWords = function (time) {
			var result = {};
			result.data = o.words.filter(function (x) {
				return Math.floor(x.time) === Math.floor(time);
			});
			if (result.data && result.data.length > 0) {
				result.color = (result.data[0].speaker === "in") ? o.colors[0] : o.colors[1];
			} else {
				result.color = o.colors[1];
			}
			return result;
		};
		o.resetParagraph = function () {
			var elems = document.querySelectorAll("div#transcriptionZone div.selected"), len = elems.length, elem;
			for (var i = 0; i < len; i++) {
				elem = elems[i];
				if (elem) {
					elem.removeAttribute("class");
				}
			}
		};
		o.resetText = function (selector) {
			var elems = document.querySelectorAll(selector), len = elems.length, elem;
			for (var i = 0; i < len; i++) {
				elem = elems[i];
				if (elem) {
					elem.removeAttribute("class");
				}
			}
		};
		o.findText = function (time) {
			time = time * 1;
			var html = "span[data-time=\"", elem;
			html += time;
			html += "\"]";
			elem = document.querySelector(html);
			if (elem) {
				o.resetText("div#transcriptionZone span.selected"); // Es importante que se ejecute desde este punto.
				elem.className = "selected"; // Le asigna la clase al span encontrado.
				elem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" }); // Posiciona la vista del «div» en la posición más cercana a la palabra encontrada.
				if (elem.parentNode.className.length === 0) {
					o.resetParagraph(); // Ejecutar esta función para encontrar los divs con la clase «selected». Es importante que se ejecute desde este punto.
					elem.parentNode.className = elem.className; // Le asigna la clase al div que contiene el span encontrado.
				}
			}
		};
		o.foundWordTimes = [];
		o.renderText = function (data, settings, options) {
			var span = o.ce("span"), time, content = settings.titles[data[options.itemText]];
			if (content) {
				span.textContent = content;
				span.textContent += ": ";
			} else {
				span.textContent = data[options.itemText];
				if (o.terms.indexOf(data[options.itemText].toLowerCase()) > -1) {
					span.dataset.found = true;
					o.foundWordTimes.push(span);
				}
			}
			if (options.itemText !== "speaker") {
				span.textContent += " ";
				span.onclick = function (e) {
					time = this.dataset.time * 1;
					o.currentTime = time;
					o.status = "find";
					o.findText(time);
					if (o.buffer) {
						o.playAudio(o.currentTime, function () {
							if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
								o.callbacks.timeChangedCallback();
							}
						});
						window.scrollTo({
							top: o.signature.type === "MP4" ? 400 : 570,
							behavior: "smooth",
						});
					}
				};
			}
			if (options.title) {
				span.title = options.title;
				span.dataset.time = data.time; // Contenido proviene de JSON.words. (5.54)
			}
			return span;
		};
		o.renderTranscription = function (settings) {
			if (o.words) {
				var len = o.words.length, word, newSpeaker = { state: true, current: "" }, divTranscription = o.gebid("transcriptionZone"), div, divSpeaker, divContent;
				if (divTranscription) {
					divTranscription.innerHTML = "";

					for (var i = 0; i < len; i++) {
						word = o.words[i];
						if (word.speaker.length > 0 && newSpeaker.current !== word.speaker) {
							div = o.ce("div");
							div.className = word.speaker;
							divSpeaker = o.ce("div");

							divContent = o.ce("div");

							divSpeaker.appendChild(o.renderText(word, settings, {
								itemText: "speaker",
								title: null
							}));

							divContent.appendChild(o.renderText(word, settings, {
								itemText: "name",
								title: o.decimalToTime(word.time)
							}));

							div.appendChild(divSpeaker);
							div.appendChild(divContent);
							divTranscription.appendChild(div);

							newSpeaker.current = word.speaker;
						} else {
							divContent.appendChild(o.renderText(word, settings, {
								itemText: "name",
								title: o.decimalToTime(word.time)
							}));
							div.appendChild(divContent);
							divTranscription.appendChild(div);

							newSpeaker.current = word.speaker;
						}
					}
				}
			}
		};
		o.getElementBySelectedText = function (selectedText, childNodes) {
			var focusElement = null, i, len = childNodes.length, nodeElement;
			for (i = 0; i < len; i++) {
				nodeElement = childNodes[i];
				if (nodeElement.textContent.indexOf(selectedText) > -1) {
					focusElement = nodeElement;
					break;
				} else {
					focusElement = childNodes[len - 1];
				}
			}
			return focusElement;
		};
		o.setUtterance = function (options) {
			var selectedText = new o.SelectedText({
				anchorOffset: options.anchorOffset,
				focusOffset: options.focusOffset,
				focusNode: options.focusNode,
				selection: options.selection,
				textContent: options.textContent
			});
			o.renderSelectedZone(selectedText, function (getSpanText) {
				var spanText = getSpanText;
				if (spanText) {
					if (options.dataIntent) {
						spanText.setAttribute("style", "background-color: " + options.dataIntent.color);
					}
					// Verifica la cantidad de elementos hijo.
					if (options.spanElement.childNodes && options.spanElement.childNodes.length) {
						var length = options.spanElement.childNodes.length, startPosition; // Almacena la cantidad de elementos hijo.
						startPosition = options.anchorOffset > options.focusOffset ? options.focusOffset : options.anchorOffset; // Siempre obtiene la posición inicial del texto.
						try {
							var sourceElement, focusElement;
							// Si tiene más de un hijo.
							if (length > 1) {
								sourceElement = options.spanElement.childNodes[length - 1];
								focusElement = o.getElementBySelectedText(options.textContent, options.spanElement.childNodes);

								// Validar que el valor del offset no sea mayor que la longitud del text node.
								if (startPosition <= focusElement.length) {
									sourceElement.parentElement.insertBefore(spanText, focusElement.splitText(startPosition));
								}
							} else {
								// Si sólo tiene un elemento hijo.
								options.spanElement.insertBefore(spanText, options.focusNode.splitText(startPosition));
							}
							// Aplica el reemplazo del contenido.
							spanText.nextSibling.textContent = spanText.nextSibling.textContent.replace(options.textContent, "");
						} catch (ex) {
							return;
						}
					}
					if (window.getSelection()) {
						window.getSelection().removeAllRanges();
					}
					if (o.callbacks && o.callbacks.setUtteranceCallback && typeof o.callbacks.setUtteranceCallback === "function" && options.selection) {
						var audioId, section, part, data = o.audioId.split("_");
						audioId = data[0];
						section = data[1] || 0;
						part = data[2] || 0;
						var utteranceData = {
							audioId: audioId,
							section: section,
							part: part,
							speaker: options.spanElement.dataset.speaker,
							currentTime: options.spanElement.dataset.currentTime,
							endCurrentTime: options.spanElement.dataset.endCurrentTime,
							dataIntent: options.dataIntent,
							selectedText: selectedText
						};
						console.warn("Callback");
						console.log(JSON.stringify(utteranceData));
						o.callbacks.setUtteranceCallback(utteranceData);
					}
				}
			});
		};
		o.renderIntents = function (settings) {
			function setUtterance(e) {
				var dataIntent = e.target.dataset.data ? JSON.parse(e.target.dataset.data) : null;
				if (o.selectionData && o.selectionData.selectedText && o.selectionData.selectedText.textContent && o.selectionData.selectedText.textContent.length > 0) {
					o.setUtterance({
						spanElement: o.selectionData.currentElement,
						selection: o.selectionData.selectedText.selection,
						anchorOffset: o.selectionData.selectedText.anchorOffset,
						focusOffset: o.selectionData.selectedText.focusOffset,
						focusNode: o.selectionData.selectedText.focusNode,
						dataIntent: dataIntent,
						textContent: o.selectionData.selectedText.textContent
					});
					o.selectionData.selectedText.textContent = ""; // Se establece el contenido en blanco para que no pueda ser reutilizado y fuerce a la validación.
				}
			}
			var intents = settings.intents, len = intents.length, intent, span, intentsElement = o.gebid("intents");
			if (intentsElement) {
				for (var i = 0; i < len; i++) {
					intent = intents[i];
					span = o.ce("span");
					span.className = "btn btn-xs btn-default";
					span.dataset.data = JSON.stringify(intent);
					span.textContent = intent.name;
					span.setAttribute("style", "background-color: " + intent.color + ";");
					span.onclick = setUtterance;
					intentsElement.appendChild(span);
				}
			}
		};
		o.renderUtterances = function (intents, utterances) {
			function findIntent(x) {
				return x.intentId === utterance.intentId;
			}
			var i, j, len = utterances.length, utterance, lenj, spans, spanSelector = "", span, index = -1, dataIntent;
			// Por cada utterance, buscar su intent y ubicar en el span correcto.
			for (i = 0; i < len; i++) {
				utterance = utterances[i];
				// Con el utterance obtenido se debe buscar dentro de la zona de transcripción.
				// Buscar por el speaker.
				spanSelector = "span[data-speaker=\"";
				spanSelector += utterance.speaker;
				spanSelector += "\"]";
				if (spanSelector && spanSelector.length > 0) {
					spans = document.querySelectorAll(spanSelector);
					// Se obtiene los spans que coinciden con el speaker del utterance.
					if (spans && spans.length) {
						lenj = spans.length;
						for (j = 0; j < lenj; j++) {
							span = spans[j];
							// Buscar por el contenido.
							index = span.textContent.indexOf(utterance.textContent);
							if (index > -1) {
								// Del span encontrado verificar si coincide con el currentTime.
								if (span.dataset.currentTime * 1 === utterance.currentTime) {
									// Una vez encontrado el rango de texto a seleccionar buscar el intent para obtener el color.
									dataIntent = intents.find(findIntent);
									if (dataIntent) {
										// Encontramos intent.
										o.setUtterance({
											spanElement: span,
											selection: null,
											anchorOffset: utterance.anchorOffset,
											focusOffset: utterance.focusOffset,
											focusNode: span.firstChild,
											dataIntent: dataIntent,
											textContent: utterance.textContent
										});
									}
								}
							}
						}
					}
				}
			}
		};
		o.renderTopics = function (settings) {
			var topics = settings.topics, len = topics.length, topic, span, topicsElement = o.gebid("topics");
			if (topicsElement) {
				for (var i = 0; i < len; i++) {
					topic = topics[i];
					span = o.ce("span");
					span.className = "label label-default";
					span.textContent = topic;
					topicsElement.appendChild(span);
				}
			}
		};
		o.renderedTagLayout = false;
		o.renderTagLayout = function (titles, position) {
			// Crear el contenido de una zona flotante donde se muestre un campo de textarea para comentario y mostrar el indicador de tiempo capturado.
			var frmTagLayout = o.ce("form"), p = o.ce("p"), label = o.ce("label"), span = o.ce("span"), txtTag = o.ce("input"), txtComment = o.ce("textarea"), btnCancel = o.ce("button"), btnSubmit = o.ce("button"), style = "";
			frmTagLayout.id = "frmTagLayout";
			style += "left: ";
			style += position.x;
			style += "px; top: ";
			style += position.y;
			style += "px;";
			frmTagLayout.setAttribute("style", style);
			label.textContent = titles.lblTime;

			span.id = "spnCurrentTime";
			span.dataset.currentTime = o.currentTime;
			span.textContent = o.decimalToTime(o.currentTime);

			p.appendChild(label);
			p.appendChild(span);

			frmTagLayout.appendChild(p);

			label = o.ce("label");
			label.textContent = titles.lblTag;
			label.setAttribute("for", "txtTag");

			txtTag.id = "txtTag";
			txtTag.className = "form-control form-control-sm";
			txtTag.type = "text";
			txtTag.onkeypress = txtTag.onkeyup = function (event) {
				var pattern = /[a-zA-Z0-9-_.]+$/, txtValue = this.value;
				if (pattern.test(txtValue)) {
					this.value = this.value.replace(/[^a-zA-Z0-9-_.]+/g, "");
				}
			};

			p = o.ce("p");
			p.className = "form-group";
			p.appendChild(label);
			p.appendChild(txtTag);
			frmTagLayout.appendChild(p);

			label = o.ce("label");
			label.textContent = titles.lblComment;
			label.setAttribute("for", "txtComment");

			txtComment.id = "txtComment";
			txtComment.className = "form-control form-control-sm";
			txtComment.maxLength = 200;

			p = o.ce("p");
			p.className = "form-group";
			p.appendChild(label);
			p.appendChild(txtComment);
			frmTagLayout.appendChild(p);

			p = o.ce("p");
			btnCancel.id = "btnCancel";
			btnCancel.onclick = function () {
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
				o.renderedTagLayout = false;
			};
			btnCancel.className = "btn btn-xs btn-default";
			btnCancel.textContent = titles.btnCancel;
			btnCancel.type = "button";

			btnSubmit.className = "btn btn-xs btn-primary";
			btnSubmit.textContent = titles.btnSave;
			btnSubmit.type = "submit";

			p.appendChild(btnCancel);
			p.appendChild(btnSubmit);
			frmTagLayout.appendChild(p);

			return {
				html: frmTagLayout,
				open: true
			};
		};
		o.renderTags = function (titles, id, data, callback) {
			function spanAction(e) {
				var currentTime = e.target.dataset.currentTime * 1;
				o.status = "find";
				o.playAudio(currentTime, function () {
					if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
						o.callbacks.timeChangedCallback();
					}
				});
				window.scrollTo({
					top: o.signature.type === "MP4" ? 400 : 570,
					behavior: "smooth",
				});
			}
			var divTags = o.gebid(id), len = data.length, obj, divTitle, h3Title, divData, divTagRow, divTagContent, p, spanAuthor, spanTime, spanTag, spanCommment, divTagActions, button;
			if (divTags) {
				divTags.innerHTML = "";
				divTitle = o.ce("div");
				divTitle.className = "tags-header";
				h3Title = o.ce("h3");
				h3Title.textContent = "(";
				h3Title.textContent += len;
				h3Title.textContent += ") ";
				h3Title.textContent += titles.tagTitle;
				h3Title.className = o.theme;
				divTitle.appendChild(h3Title);

				divTags.appendChild(divTitle);

				divData = o.ce("div");
				divData.className = "tags-data";
				for (var i = 0; i < len; i++) {
					obj = data[i];
					divTagRow = o.ce("div");
					divTagRow.className = "tag-row";
					divTagContent = o.ce("div");
					divTagContent.className = "tag-content";
					p = o.ce("p");
					spanAuthor = o.ce("span");
					spanTime = o.ce("span");
					spanTime.onclick = spanAction;
					divTagActions = o.ce("div");
					divTagActions.className = "tag-actions filtersButtons";
					button = o.ce("button");

					spanAuthor.className = "author";
					spanAuthor.textContent = obj.createdByUserId;

					spanTime.className = "time";
					spanTime.textContent = o.decimalToTime(obj.currentTime);
					spanTime.dataset.currentTime = obj.currentTime;
					p.appendChild(spanAuthor);
					p.appendChild(spanTime);
					divTagContent.appendChild(p);
					divTagRow.appendChild(divTagContent);

					p = o.ce("p");
					p.className = "d-flex align-items-center border-left-gray";

					spanTag = o.ce("span");
					spanTag.className = "label label-default ml-2";
					spanTag.textContent = obj.tag;
					p.appendChild(spanTag);

					spanCommment = o.ce("span");
					spanCommment.className = "ml-2 commentpin";
					spanCommment.textContent = obj.comment;
					p.appendChild(spanCommment);

					divTagContent.appendChild(p);

					button.className = "btn btn-sm btn-primary tag-edit";
					button.id = ["btnEdit_", obj.tag].join("");
					button.textContent = titles.btnEdit;
					button.type = "button";

					// Determinar si se debe mostrar el botón Editar Tag/Comentario. Si está en false, no mostrar botón.
					if (!o.permissions.allowTag) {
						button.setAttribute("style", "display: none;");
					}

					divTagActions.appendChild(button);

					button = o.ce("button");
					button.className = "btn btn-sm btn-secondary tag-delete";
					button.id = ["btnDelete_", obj.tag].join("");
					button.textContent = titles.btnDelete;
					button.type = "button";

					// Determinar si se debe mostrar el botón Editar Tag/Comentario. Si está en false, no mostrar botón.
					if (!o.permissions.allowTag) {
						button.setAttribute("style", "display: none;");
					}

					divTagActions.appendChild(button);
					divTagRow.appendChild(divTagActions);
					divData.appendChild(divTagRow);
					divTags.appendChild(divData);
					divTags.setAttribute("style", "display: block;");
				}
				callback();
				return divTags;
			}
		};
		o.renderPins = function (data) {
			// Función que se debe ejecutar una vez que se hayan cargado los comentarios.
			function spanAction(e) {
				var currentTime = e.target.dataset.currentTime * 1;
				o.status = "find";
				o.playAudio(currentTime, function () {
					if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
						o.callbacks.timeChangedCallback();
					}
				});
				window.scrollTo({
					top: o.signature.type === "MP4" ? 400 : 570,
					behavior: "smooth",
				});
			}
			var spanPin, len = data.length, i, obj, html = "", divPins;
			divPins = o.gebid(o.id + "_wavePins");
			divPins.innerHTML = "";
			for (i = 0; i < len; i++) {
				obj = data[i];
				spanPin = o.ce("i");
				spanPin.className = "fa fa-thumb-tack";
				spanPin.dataset.currentTime = obj.currentTime;
				spanPin.title = obj.comment;
				spanPin.onclick = spanAction;
				html = "left: ";
				html += o.getPercentPosition(obj.currentTime);
				html += "%;";
				spanPin.setAttribute("style", html);
				divPins.appendChild(spanPin);
			}
		};
		o.renderPoints = function () {
			function spanAction(e) {
				var currentTime = e.target.dataset.currentTime * 1, spanText, html;
				o.status = "find";
				o.playAudio(currentTime, function () {
					if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
						o.callbacks.timeChangedCallback();
					}
				});
				html = "span[data-time=\"";
				html += currentTime;
				html += "\"]";
				spanText = document.querySelector(html);
				if (spanText) {
					o.resetText("div#transcriptionZone span.active"); // Es importante que se ejecute desde este punto.
					spanText.className = "active";
					spanText.scrollIntoView({
						behavior: "smooth",
						block: "center",
						inline: "center"
					}); // Posiciona la vista del «div» en la posición más cercana a la palabra encontrada.
				}
			}
			var timePoint, data = o.foundWordTimes, len = data.length, i, obj, html = "", divPoints;
			divPoints = o.gebid(o.id + "_wavePoints");
			if (divPoints) {
				divPoints.innerHTML = "";
				for (i = 0; i < len; i++) {
					obj = data[i];
					timePoint = o.ce("time");
					timePoint.dataset.currentTime = obj.dataset.time;
					timePoint.title = obj.textContent;
					timePoint.onclick = spanAction;
					html = "left: ";
					html += o.getPercentPosition(obj.dataset.time);
					html += "%;";
					timePoint.setAttribute("style", html);
					divPoints.appendChild(timePoint);
				}
			}
		};
		// Función que retorna un valor numérico en función del canvasWidth y no del drawLines para que la búsqueda con los tiempos de o.words tenga coincidencia.
		o.getFixedTime = function (drawLines, i) {
			var result = 0;
			result = (i * o.renderedWidth) / drawLines;
			return result;
		};
		o.displayBuffer = function (context, buffer, callback) {
			o.buffer = buffer;
			var channels = o.buffer.numberOfChannels, channel = null, canvasWidth = context.canvas.width, canvasHeight = context.canvas.height, c, i, drawLines = 5000, totalLength, eachBlock, lineGap, audioBuffKey, x, y;
			channels = (channels > 2 ? 2 : channels);
			for (c = 0; c < channels; c++) {
				channel = o.buffer.getChannelData(c); // Obtiene la información del canal correspondiente.
				totalLength = channel.length;
				eachBlock = Math.floor(totalLength / drawLines);
				lineGap = (canvasWidth / drawLines);
				context.save();
				context.translate(0.5, canvasHeight / 2);

				for (i = 0; i <= drawLines; i++) {
					audioBuffKey = Math.floor(eachBlock * i);
					x = i * lineGap;
					y = (channel[audioBuffKey] * canvasHeight / 2);
					if (o.signature.type === "MP4") {
						y *= 10; // Para el caso de que el bit rate del audio sea muy bajo se debe multiplicar a un valor. #BitRate.
						context.strokeStyle = o.colors[c]; // Asignar el color de acuerdo a la reproducción del canal.
					} else {
						context.strokeStyle = channels === 1 ? o.findWords(o.getAudioTime(o.getFixedTime(drawLines, i))).color : o.colors[c];
					}

					context.beginPath();
					context.moveTo(x, y);
					context.lineTo(x, (y * -1));
					context.stroke();
				}
				context.restore();
			}
			callback();
		};
		o.terms = [];
		o.topics = []; // Lista de palabras topics.
		o.intents = []; // Lista de intents.
		// Método que restablece los objetos de configuración de reproducción y visualización de audio.
		o.reset = function (type) {
			if (o.audioContext) o.audioContext.close();
			o.audioContext = null;
			o.gainNode = null;
			o.analyserNode = null;
			o.sourceNode = null;
			o.javascriptNode = null;
			o.currentTime = 0;
			o.currentWidth = 0;
			o.isSeek = false;
			o.status = ""; // "" = Primera vez de ejecución, "suspend" = audio detenido, "resume" = continúa ejecución, "find" = encontrado por click, "running" = en ejecución.
			o.audioPlaying = false;
			o.i = 0;
			o.width = 0;

			var spectrum_waveProgress = o.gebid("spectrum_waveProgress");
			if (spectrum_waveProgress !== null) {
				spectrum_waveProgress.setAttribute("style", "width: 0%;");
				spectrum_waveProgress.children[0].removeAttribute("style");
			}
			if (type === null) {
				o.audioControl = null;
				o.audioTotalDuration = 0;
				o.audioProgress = null;
				o.html = "";
				o.htmlCurrentWidth = "";
				o.buffer = null;
				o.terms = [];
				if (spectrum_waveProgress !== null) {
					spectrum_waveProgress.setAttribute("style", "width: 0%;");
					spectrum_waveProgress.children[0].removeAttribute("style");
				}
				var divTranscription = o.gebid("transcriptionZone"), topicsElement = o.gebid("topics");
				if (divTranscription) {
					divTranscription.innerHTML = "";
				}
				if (topicsElement) {
					topicsElement.innerHTML = "";
				}
			}
		};
		o.getFileTypeBySignature = function (arrayBuffer) {
			var data = null, view = new DataView(arrayBuffer), signature = view.getUint32(0, false).toString(16);
			if (signature) {
				switch (signature.substring(0, 4)) {
					case "5249":
						data = {
							signature: signature,
							type: "WAV"
						};
						break;
					case "4944":
					case "ffe3":
						data = {
							signature: signature,
							type: "MP3"
						};
						break;
					case "20":
					case "1c":
						data = {
							signature: signature,
							type: "MP4"
						};
						break;
					case "504b":
						data = {
							signature: signature,
							type: "XLSX"
						};
						break;
					case "3c21":
						data = {
							signature: signature,
							type: "HTML"
						};
						break;
					case "6361":
						data = {
							signature: signature,
							type: "CSS"
						};
						break;
					case "2866":
					case "2f2a":
						data = {
							signature: signature,
							type: "JS"
						};
						break;
					default:
						data = {
							signature: signature,
							type: "MP3"
						};
						break;
				}
			}
			return data;
		};
		// Implementación subrayado.
		// Función que permite evitar selección de palabras de una sola sílaba.
		// Detecta una palabra de dos caracteres, también si un de esos dos caracteres es un espacio en blanco.
		o.twoCharacters = function (textContent) {
			var result = null, regex = /^[A-Za-zá-ú]{1,2}(\s)?$/gm;
			result = regex.test(textContent);
			return result;
		};
		o.selectionData = null;
		// Función que renderiza el contenido de una transcripción disponible para selección de texto.
		o.renderTranscriptionUnderline = function (settings) {
			function mouseup(e) {
				e.target.normalize(); // Normaliza el contenido de un SPAN tras eliminación de textos seleccionados. Un SPAN debe contener un textNode.
				var selectedText = o.getSelectionHTML();
				if (selectedText) {
					if (selectedText.selection.anchorNode === selectedText.selection.focusNode) {
						o.selectionData = {
							currentElement: e.target, // Referencia a la etiqueta SPAN que contiene el texto seleccionado a remarcar.
							selectedText: selectedText,
							spanText: spanText
						};
						spanText.onmousemove = function (e) {
							e.preventDefault();
							e.stopPropagation();
						};
					} else {
						window.getSelection().removeAllRanges();
					}
				}
			}
			if (o.words) {
				var divSelection = o.gebid("underlineZone"), div, divContent;
				if (divSelection) {
					divSelection.innerHTML = "";
					var i, spanText, content, textNode, lastSpeaker, len = o.words.length, word, newSpeaker = { state: true, current: "" };
					for (i = 0; i < len; i++) {
						word = o.words[i];
						if (word.speaker.length > 0 && newSpeaker.current !== word.speaker) {
							content = word.name;
							content += " ";
							if (lastSpeaker !== word.speaker) {
								// Crea un textNode para almacenar el texto.
								textNode = document.createTextNode(content);

								// Si son diferentes debe crear un nuevo SPAN.
								spanText = o.ce("span");
								spanText.appendChild(textNode);
								spanText.dataset.speaker = word.speaker;
								spanText.dataset.currentTime = word.time;
								spanText.dataset.endCurrentTime = word.end_time;
								spanText.setAttribute("style", "color: " + ((word.speaker === "in") ? o.colors[0] : o.colors[1]) + ";");
								spanText.onmouseup = mouseup;
							} else {
								// Si se trata del mismo, sólo debe anexar el textNode al actual span creado.
								textNode.textContent += content;
								spanText.appendChild(textNode);
							}
							// Almacena el speaker (canal) para una próxima evaluación.
							lastSpeaker = word.speaker;
							divSelection.appendChild(spanText);
						} else {
							div.appendChild(divContent);
							divSelection.appendChild(div);
							newSpeaker.current = word.speaker;
						}
					}
				}
			}
		};
		o.selectedsText = []; // Debe almcenar un objeto que contenga los índices de selección con el contenido del texto seleccionado.
		o.SelectedText = function (data) {
			var t = this;
			t.anchorOffset = data.anchorOffset;
			t.color = data.color || null;
			t.focusOffset = data.focusOffset;
			t.focusNode = data.focusNode;
			t.selection = data.selection;
			t.textContent = data.textContent;
			return t;
		};
		o.getSelectionHTML = function () {
			var result, html = "";
			try {
				if (typeof window.getSelection !== "undefined") {
					var sel = window.getSelection();
					if (sel) {
						// «sel» contiene el objeto «Selection».
						// Si se trata de una palabra, la longitud de caracteres de la selección de texto debe ser > 1.
						if (Math.abs(sel.anchorOffset - sel.focusOffset) > 1) {
							if (sel.rangeCount) {
								var container = document.createElement("div"), i, len = sel.rangeCount;
								for (i = 0; i < len; i++) {
									container.appendChild(sel.getRangeAt(i).cloneContents());
								}
								html = container.textContent;
								var twoCharactersResult = o.twoCharacters(html);
								if (twoCharactersResult) {
									if (o.callbacks.twoCharactersCallback && typeof o.callbacks.twoCharactersCallback === "function") {
										o.callbacks.twoCharactersCallback();
									}
								} else {
									result = new o.SelectedText({
										anchorOffset: sel.anchorOffset,
										focusOffset: sel.focusOffset,
										focusNode: sel.focusNode,
										selection: sel,
										textContent: html
									});
								}
							}
						}
					} else {
						console.log("No se puede obtener el valor seleccionado.");
						throw "Error al intentar obtener el texto seleccionado.";
					}
				} else if (typeof document.selection !== "undefined") {
					if (document.selection.type == "Text") {
						html = document.selection.createRange().htmlText;
					}
				}
			} catch (ex) {
				console.log(ex);
				throw "window.getSelection() no soportado.";
			}
			return result;
		};
		o.removeSelectedText = function (selectedText) {
			var index = o.selectedsText.findIndex(function (x) {
				return x.anchorOffset === selectedText.anchorOffset && x.focusOffset === selectedText.focusOffset && x.textContent && selectedText.textContent;
			});
			if (index > -1) {
				o.selectedsText.splice(index, 1);
			}
		};
		o.removeNodeFromSelection = function (currentElement, selectedText, currentNode, nodeList) {
			var result = false, c, len = nodeList.length;
			try {
				for (c = 0; c < len; c++) {
					// Revisar error que aparece.
					if (currentNode.textContent === nodeList[c].textContent) {
						// Una vez que encuentra, debe consultar al elemento anterior.
						nodeList[c - 1].textContent += currentNode.textContent;
						nodeList[c].remove();
						len = nodeList.length;
						result = true;
						o.removeSelectedText(selectedText);
						break;
					}
				}
			} catch (ex) {
				console.log(ex);
				result = false;
			}
			return result;
		};
		// Función que recibe el objeto del texto seleccionado para que retorne el mismo contenido con una etiqueta <span> después de un callback.
		o.renderSelectedZone = function (selectedText, callback) {
			var span = o.ce("span");
			// Debe recorrer el contenido de los caracteres del div para llegar a la posición y a partir de allí realizar el reemplazo.
			if (selectedText) {
				span.textContent = selectedText.textContent;
				var iRemove = o.ce("i");
				iRemove.onclick = function (e) {
					var result = o.removeNodeFromSelection(selectedText, this.parentNode.childNodes[0], this.parentNode.parentNode.childNodes);
					if (result) {
						console.log("OK");
					} else {
						console.log("MAL");
					}
				};
				span.appendChild(iRemove);
			}
			if (callback && typeof callback === "function") {
				callback(span);
			}
		};
		// Fin implementación subrayado.
		o.init = function (options, callback) {
			o.reset(null);
			o.gebid(options.id).innerHTML = "";
			o.audioId = options.audioId;
			o.theme = options.theme;
			o.permissions = options.permissions;
			o.terms = options.terms;
			o.titles = options.titles;
			o.words = options.words;

			var elems = document.querySelectorAll("div.transcription"), len = elems.length, elem, i;
			if (options.permissions.allowDownloadTranscription && o.words && o.words.length > 0) {
				if (options.permissions.allowUnderline) {
					elem = document.getElementById("transcriptionZone");
					if (elem) elem.remove();
					o.renderTranscriptionUnderline(options);
				} else {
					elem = document.getElementById("underlineZone");
					if (elem) elem.remove();
					o.renderTranscription(options);
				}
			} else {
				if (elems && elems.length) {
					for (i = 0; i < len; i++) {
						elem = elems[i];
						elem.setAttribute("style", "display: none;");
					}
				}
			}
			if (o.permissions.allowUnderline && options.intents && options.intents.length > 0) {
				o.renderIntents(options);
				if (options.utterances && options.utterances.length > 0) {
					o.renderUtterances(options.intents, options.utterances);
				}
			} else {
				elems = document.querySelectorAll("div.intents");
				len = elems.length;
				if (elems && elems.length) {
					for (i = 0; i < len; i++) {
						elem = elems[i];
						elem.setAttribute("style", "display: none;");
					}
				}
			}
			if (o.permissions.showTopics && options.topics && options.topics.length > 0) {
				o.renderTopics(options);
			} else {
				elems = document.querySelectorAll("div.topics");
				len = elems.length;
				if (elems && elems.length) {
					for (i = 0; i < len; i++) {
						elem = elems[i];
						elem.setAttribute("style", "display: none;");
					}
				}
			}

			if (options && options.data) {
				o.arrayBufferFile = options.data;
				o.signature = o.getFileTypeBySignature(options.data);
				o.callbacks = options.callbacks;
				if (o.signature.type !== "NOT_FOUND") { // Sólo renderizará el reproductor para contenido reproducible.
					var canvas = o.create(options);

					o.width = options.width;
					o.audioControl = o.gebid(options.id);
					o.audioProgress = o.gebid(options.id + "_waveProgress");
					o.renderedWidth = window.getComputedStyle(o.audioControl.children[(o.signature.type === "MP4" ? 1 : 0)].children[1].children[0]).width.replace("%", "").replace("px", "") * 1;

					o.audioContext = new o.AudioContext();
					if (o.signature.type === "MP4") {
						o.renderVideo(options.data);
					}

					o.audioContext.decodeAudioData(options.data,
						function (buffer) {
							try {
								o.audioControl.children[(o.signature.type === "MP4" ? 1 : 0)].children[0].children[0].children[1].removeAttribute("disabled");
								o.audioTotalDuration = buffer.duration;

								o.displayBuffer(canvas.context, buffer, function () {
									o.renderPoints();
									callback();
								});
							}
							catch (ex) {
								console.error('[spectrummedia.js::o.init] ex:', ex);
							}
						}, o.onDecodeError);
					window.onresize = function () {
						o.renderedWidth = window.getComputedStyle(o.audioControl.children[(o.signature.type === "MP4" ? 1 : 0)].children[0]).width.replace("px", "") * 1;
					};
				}
			}
		};
		o.arrayBufferToBase64 = function (arrayBuffer) {
			var base64 = btoa(new Uint8Array(arrayBuffer).reduce(function (data, byte) {
				return data + String.fromCharCode(byte);
			}, ""));
			return base64;
		};
		o.bufferToArrayBuffer = function (buffer) {
			var arrayBuffer = new ArrayBuffer(buffer.length),
				view = new Uint8Array(arrayBuffer);
			for (var i = 0; i < buffer.length; ++i) {
				view[i] = buffer[i];
			}
			return arrayBuffer;
		};
		return o;
	}(audio || {}));
	window.audio = audio;
}());
(function (w, d) {
	"use strict";

	function polyfill() {
		if ("scrollBehavior" in d.documentElement.style) {
			return;
		}
		var Element = w.HTMLElement || w.Element;
		var SCROLL_TIME = 468;
		var original = {
			scroll: w.scroll || w.scrollTo,
			scrollBy: w.scrollBy,
			scrollIntoView: Element.prototype.scrollIntoView
		};
		var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

		function ease(k) {
			return 0.5 * (1 - Math.cos(Math.PI * k));
		}

		function shouldBailOut(x) {
			if (typeof x !== "object" || x.behavior === undefined || x.behavior === "auto" || x.behavior === "instant") {
				return true;
			}
			if (typeof x === "object" && x.behavior === "smooth") {
				return false;
			}
			throw new TypeError("Behavior not valid.");
		}

		function findScrollableParent(el) {
			do {
				el = el.parentNode;
			}
			while (el !== d.body && !(el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth));
			return el;
		}

		function step(context) {
			context.frame = w.requestAnimationFrame(step.bind(w, context));
			var time = now(),
				value, currentX, currentY, elapsed = (time - context.startTime) / SCROLL_TIME;
			elapsed = elapsed > 1 ? 1 : elapsed;
			value = ease(elapsed);
			currentX = context.startX + (context.x - context.startX) * value;
			currentY = context.startY + (context.y - context.startY) * value;
			context.method.call(context.scrollable, currentX, currentY);
			if (currentX === context.x && currentY === context.y) {
				w.cancelAnimationFrame(context.frame);
				return;
			}
		}

		function smoothScroll(el, x, y) {
			var scrollable, startX, startY, method, startTime = now(),
				frame;
			if (el === d.body) {
				scrollable = w;
				startX = w.scrollX || w.pageXOffset;
				startY = w.scrollY || w.pageYOffset;
				method = original.scroll;
			} else {
				scrollable = el;
				startX = el.scrollLeft;
				startY = el.scrollTop;
			}
			if (frame) {
				w.cancelAnimationFrame(frame);
			}
			if (method !== undefined) {
				step({
					scrollable: scrollable,
					method: method,
					startTime: startTime,
					startX: startX,
					startY: startY,
					x: x,
					y: y,
					frame: frame
				});
			}
		}
		w.scroll = w.scrollTo = function () {
			if (shouldBailOut(arguments[0])) {
				original.scroll.call(
					w,
					arguments[0].left || arguments[0],
					arguments[0].top || arguments[1]
				);
				return;
			}
			smoothScroll.call(
				w,
				d.body,
				~~arguments[0].left,
				~~arguments[0].top
			);
		};
		w.scrollBy = function () {
			if (shouldBailOut(arguments[0])) {
				original.scrollBy.call(
					w,
					arguments[0].left || arguments[0],
					arguments[0].top || arguments[1]
				);
				return;
			}
			smoothScroll.call(
				w,
				d.body,
				~~arguments[0].left + (w.scrollX || w.pageXOffset),
				~~arguments[0].top + (w.scrollY || w.pageYOffset)
			);
		};
		Element.prototype.scrollIntoView = function () {
			if (shouldBailOut(arguments[0])) {
				original.scrollIntoView.call(this, arguments[0] || true);
				return;
			}
			var scrollableParent = findScrollableParent(this),
				parentRects = scrollableParent.getBoundingClientRect(),
				clientRects = this.getBoundingClientRect();
			if (scrollableParent !== d.body) {
				smoothScroll.call(
					this,
					scrollableParent,
					scrollableParent.scrollLeft + clientRects.left - parentRects.left,
					scrollableParent.scrollTop + clientRects.top - parentRects.top
				);
				w.scrollBy({
					left: parentRects.left,
					top: parentRects.top,
					behavior: "smooth"
				});
			} else {
				w.scrollBy({
					left: clientRects.left,
					top: clientRects.top - arguments[0].height, // #header #top position: fixed.
					behavior: "smooth"
				});
			}
		};
	}
	polyfill();
})(window, document);