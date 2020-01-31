/*
	Version:		audio.js v0.7.
	Date:			18/02/2019
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
					o.audioProgress.children[0].setAttribute("style", "display: inline; right: 0;");
				}
				else {
					o.audioProgress.children[0].setAttribute("style", "display: inline;"); // Se hace visible al control «<div class="indicator></div>».
				}
				o.findText(o.currentTime.toFixed(2));
				if (o.status === "find") {
					if (o.audioPlaying === false) {
						o.pauseAudio();
					}
				}
				callback();
			}
			else {
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
			<div id="audioContainer" style="height: 100px; width: 100%;">
				<div id="controls">
					<div id="buttons">
						<button id="btnBackward" title="Retroceder"><i class="fa fa-backward"></i></button>
						<button id="btnPlay" title="Reproducir"><i class="fa fa-play-circle"></i></button>
						<button id="btnPause" title="Pausar" style="display: none;"><i class="fa fa-pause-circle"></i></button>
						<button id="btnStop" title="Detener" disabled="disabled"><i class="fa fa-stop-circle"></i></button>
						<button id="btnForward" title="Avanzar"><i class="fa fa-forward"></i></button>
					</div>
					<div id="volume">
						<div><span id="spanMinVolume"><i class="fa fa-volume-down"></i></span></div>
						<div><input type="range" min="0" max="1" step="0.01"></div>
						<div><span id="spanMaxVolume"><i class="fa fa-volume-up"></i></span></div>
					</div>
					<div id="toolbar">
						<ul>
							<li>
								<a id="aDownloadAudio" title="Descargar audio" href="blob:http://127.0.0.1:8080/eda43d96-92df-4568-848a-2aff9f568128"
								download="C6FADCD7592F4AE5B266FF55CEB57882.mp3">
									<i class="fa fa-file-audio-o"></i>
								</a>
							</li>
							<li>
								<a id="aDownloadTranscription" title="Descargar transcripción" download="C6FADCD7592F4AE5B266FF55CEB57882.html">
									<i class="fa fa-file-text-o"></i>
								</a>
							</li>
							<li>
								<a id="aPrint" title="Imprimir">
									<i class="fa fa-print"></i>
								</a>
							</li>
							<li>
								<a id="aTag" title="Comentar">
									<i class="fa fa-comment-o"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div id="waveform"><canvas id="audioContainer_canvas" class="canvas" height="100" width="900"></canvas>
					<div class="wave" id="audioContainer_wave" style="height: 100px; top: -100px; width: 100%;">
						<div class="waveProgress" id="audioContainer_waveProgress" style="width: 0%;">
							<div class="indicator"></div>
						</div>
						<div class="wavePins" id="audioContainer_wavePins">
							<span data-current-time="6.9132697042512365" title="Comentario 1." style="left: 2.7642022008201668%;"></span>
							<span data-current-time="34.92" title="Comentario de prueba..." style="left: 13.962415033986407%;"></span>
							<span data-current-time="86.62558199532215" title="Prueba," style="left: 34.636378246830134%;"></span>
							<span data-current-time="105.77066666666667" title="mencion" style="left: 42.291350126616024%;"></span>
							<span data-current-time="31.88" title="saludo al cliente 2" style="left: 12.746901239504199%;"></span>
							<span data-current-time="78.29619911115654" title="Otro comentario de prueba." style="left: 31.305957261557992%;"></span>
						</div>
						<div class="wavePoints" id="audioContainer_wavePoints">
							<time data-current-time="73.31" title="paquete " style="left: 29.312275089964015%;"></time>
							<time data-current-time="117.44" title="señor " style="left: 46.95721711315474%;"></time>
							<time data-current-time="120.17" title="beneficio " style="left: 48.048780487804876%;"></time>
							<time data-current-time="135.26" title="Señor " style="left: 54.08236705317873%;"></time>
							<time data-current-time="149.42" title="tiempo " style="left: 59.74410235905637%;"></time>
							<time data-current-time="181.23" title="lugar " style="left: 72.46301479408237%;"></time>
						</div>
					</div>
				</div>
			</div>
		*/
		o.create = function (options) {
			var t = this, html = "";
			t.id = options.id;
			t.height = options.height;
			t.width = options.width;

			var div = document.getElementById(t.id);
			html = "height: ";
			html += t.height;
			html += "px; width: 100%;";
			div.setAttribute("style", html);

			var divControls = document.createElement("div");
			divControls.id = "controls";
			divControls.className = o.theme;

			var divControlsButton = document.createElement("div"), btnBackward = document.createElement("button"), btnPlay = document.createElement("button"), btnPause = document.createElement("button"), btnStop = document.createElement("button"), btnForward = document.createElement("button"), iTag;
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
				}
				else {
					o.currentTime = 0;
				}
			};

			btnPlay.id = "btnPlay";
			btnPlay.title = options.titles.play;
			btnPlay.setAttribute("disabled", "disabled");
			btnPlay.onclick = function () {
				o.isSeek = false;
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
				o.playAudio(o.currentTime, function () {
					if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
						o.callbacks.timeChangedCallback();
					}
				});
			};

			iTag = document.createElement("i");
			iTag.className = "icon-speech-backward";
			btnBackward.appendChild(iTag);

			iTag = document.createElement("i");
			iTag.className = "icon-speech-play";
			btnPlay.appendChild(iTag);

			iTag = document.createElement("i");
			iTag.className = "icon-speech-pause";
			btnPause.appendChild(iTag);

			iTag = document.createElement("i");
			iTag.className = "icon-speech-stop";
			btnStop.appendChild(iTag);

			iTag = document.createElement("i");
			iTag.className = "icon-speech-forward";
			btnForward.appendChild(iTag);

			divControlsButton.appendChild(btnBackward);
			divControlsButton.appendChild(btnPlay);
			divControlsButton.appendChild(btnPause);
			divControlsButton.appendChild(btnStop);
			divControlsButton.appendChild(btnForward);
			divControls.appendChild(divControlsButton);

			var divVolumeButton = document.createElement("div");
			divVolumeButton.id = "volume";
			
			

			var divMinVolume = document.createElement("div"), spanMinVolume = document.createElement("span");
			spanMinVolume.id = "spanMinVolume";

			iTag = document.createElement("i");
			iTag.className = "icon-speech-volume-off";
			spanMinVolume.appendChild(iTag);

			divMinVolume.appendChild(spanMinVolume);

			var divRangeVolume = document.createElement("div"), divMaxVolume = document.createElement("div"), spanMaxVolume = document.createElement("span");
			spanMaxVolume.id = "spanMaxVolume";

			iTag = document.createElement("i");
			iTag.className = "icon-speech-volume-on";
			spanMaxVolume.appendChild(iTag);

			divMaxVolume.appendChild(spanMaxVolume);

			var rngVolume = document.createElement("input");
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

			var divToolbar = document.createElement("div");
			divToolbar.id = "toolbar";

			var ulToolbar = document.createElement("ul"), downloadAudio = options.permissions ? options.permissions.allowDownloadAudio ? options.permissions.allowDownloadAudio ? options.permissions.allowDownloadAudio : true : (options.permissions.allowDownloadAudio === undefined ? true : false) : true, downloadTranscription = options.permissions ? options.permissions.allowDownloadTranscription ? options.permissions.allowDownloadTranscription ? options.permissions.allowDownloadTranscription : true : (options.permissions.allowDownloadTranscription === undefined ? true : false) : true, tag = options.permissions ? options.permissions.allowTag ? options.permissions.allowTag ? options.permissions.allowTag : true : (options.permissions.allowTag === undefined ? true : false) : true;
			o.permissions.allowDownloadTranscription = downloadTranscription;
			o.permissions.allowTag = tag;
			o.permissions.showTopics = options.permissions ? options.permissions.showTopics ? options.permissions.showTopics ? options.permissions.showTopics : true : (options.permissions.showTopics === undefined ? true : false) : true;
			if (downloadAudio) {
				var liDownloadAudio = document.createElement("li"), aDownloadAudio = document.createElement("a");
				aDownloadAudio.id = "aDownloadAudio";
				aDownloadAudio.title = options.titles.downloadAudio;
				aDownloadAudio.href = URL.createObjectURL(new Blob([o.arrayBufferFile]));
				aDownloadAudio.download = options.audioId;
				aDownloadAudio.download += ".mp3";

				iTag = document.createElement("i");
				iTag.className = "icon-speech-sound-download";
				aDownloadAudio.appendChild(iTag);

				liDownloadAudio.appendChild(aDownloadAudio);
				ulToolbar.appendChild(liDownloadAudio);
			}

			if (downloadTranscription) {
				var liDownloadTranscription = document.createElement("li"), aDownloadTranscription = document.createElement("a");
				aDownloadTranscription.id = "aDownloadTranscription";
				aDownloadTranscription.title = options.titles.downloadTranscription;
				html = options.audioId;
				html += ".html";
				aDownloadTranscription.download = html;
				aDownloadTranscription.onclick = function () {
					var transcriptionZone = document.getElementById("transcriptionZone"), style = document.createElement("style");
					style.type = "text/css";
					style.textContent = "#transcriptionZone{background-color:#fff;border:#4a8bc9 solid 1px;box-sizing:border-box;color:inherit;margin:5px 0;padding:10px;width:100%;}#transcriptionZone div{display:flex;text-align:justify;}#transcriptionZone div div:nth-child(1){display:inline-block;width:80px;}#transcriptionZone div div:nth-child(1) span{font-weight:700;}#transcriptionZone div div:nth-child(2){display:inline-block;padding:2px;text-align:justify;width:85%;}#transcriptionZone div div:nth-child(2) span{outline-style:none;}#transcriptionZone div.in{background-color:inherit;color:#71c6c1;}#transcriptionZone div.out{background-color:inherit;color:#7e99ce;}";
					html = style.outerHTML;
					html += transcriptionZone.outerHTML;
					aDownloadTranscription.href = URL.createObjectURL(new Blob([(html)]));
				};

				iTag = document.createElement("i");
				iTag.className = "icon-speech-file-download";
				aDownloadTranscription.appendChild(iTag);

				liDownloadTranscription.appendChild(aDownloadTranscription);
				ulToolbar.appendChild(liDownloadTranscription);
			}

			if (downloadTranscription) {
				var liPrint = document.createElement("li"), aPrint = document.createElement("a");
				aPrint.id = "aPrint";
				aPrint.title = options.titles.print;
				aPrint.onclick = function () {
					o.oldTitle = document.title;
					document.title = options.audioId + ".pdf";
					window.print();
					document.title = o.oldTitle;
				};

				iTag = document.createElement("i");
				iTag.className = "icon-speech-print";
				aPrint.appendChild(iTag);

				liPrint.appendChild(aPrint);
				ulToolbar.appendChild(liPrint);
			}

			if (tag) {
				var liTag = document.createElement("li"), aTag = document.createElement("a");
				aTag.id = "aTag";
				aTag.title = options.titles.tag;
				aTag.onclick = function (e) {
					var position = { x: e.pageX, y: e.pageY }, tagLayout = o.renderTagLayout(options.titles, position);
					if (o.renderedTagLayout === false) {
						o.renderedTagLayout = tagLayout.open;
						document.body.appendChild(tagLayout.html);
					}
				};

				iTag = document.createElement("i");
				iTag.className = "icon-speech-comment";
				aTag.appendChild(iTag);

				liTag.appendChild(aTag);
				ulToolbar.appendChild(liTag);
			}
			divToolbar.appendChild(ulToolbar);

			var divWaveform = document.createElement("div");
			divWaveform.id = "waveform";

			var canvas = document.createElement("canvas");
			canvas.setAttribute("id", t.id + "_canvas");
			canvas.setAttribute("class", "canvas");
			canvas.setAttribute("height", t.height);
			canvas.setAttribute("width", t.width);

			var divWave = document.createElement("div");
			divWave.className = "wave";
			divWave.setAttribute("id", t.id + "_wave");
			html = "height: ";
			html += t.height;
			html += "px; top: -";
			html += t.height;
			html += "px; width: 100%;";
			divWave.setAttribute("style", html);

			var divWaveProgress = document.createElement("div");
			divWaveProgress.className = "waveProgress";
			divWaveProgress.setAttribute("id", t.id + "_waveProgress");
			divWaveProgress.setAttribute("style", "width: 0%;");

			var divWavePins = document.createElement("div"); // Pins de comentarios.
			divWavePins.className = "wavePins";
			divWavePins.setAttribute("id", t.id + "_wavePins");

			var divWavePoints = document.createElement("div"); // Points de palabras encontradas.
			divWavePoints.className = "wavePoints";
			divWavePoints.setAttribute("id", t.id + "_wavePoints");

			var indicator = document.createElement("div");
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

			div.appendChild(divControls);
			div.appendChild(divWaveform);

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
			});
		};
		// Método que detiene la reproducción de un audio.
		o.stopAudio = function () {
			o.reset("stop");
			o.resetText("div#transcriptionZone span.selected");
			o.resetParagraph();
			document.getElementById("transcriptionZone").scrollTop = 0;
		};
		o.setPosition = function (e, callback) {
			if (e.target.tagName !== "SPAN" && e.target.tagName !== "TIME") {
				var x = e.offsetX;
				if (x >= 0) {
					var newRenderedWidth = window.getComputedStyle(o.audioControl.children[1].children[0]).width.replace("px", "") * 1;
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
					}
					else {
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
			var btnStop = document.getElementById("btnStop");
			btnStop.removeAttribute("disabled");
			if ((o.status === "suspend") && o.isSeek === false) {
				o.setVolume();
				o.audioContext.resume().then(function () {
					o.status = "resume";
					o.audioPlaying = true;
				});
			}
			else {
				o.currentTime = currentTime;
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

					var btnPlay = document.getElementById("btnPlay"), btnPause = document.getElementById("btnPause");
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
		};
		o.loadFile = function (url, callback) {
			o.sendXHR("GET", "arraybuffer", url, null, function (response) {
				callback(response); // Ejecutar función una vez finalizado la obtención del request anterior.
			});
		};
		o.arrayBufferFile = null;
		o.onDecodeError = function () {
			alert("Ha sucedido un error al intentar cargar el archivo.");
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
			}
			else {
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
				elem.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }); // Posiciona la vista del «div» al centro de la palabra seleccionada.
				if (elem.parentNode.className.length === 0) {
					o.resetParagraph(); // Ejecutar esta función para encontrar los divs con la clase «selected». Es importante que se ejecute desde este punto.
					elem.parentNode.className = elem.className; // Le asigna la clase al div que contiene el span encontrado.
				}
			}
		};
		o.foundWordTimes = [];
		o.renderText = function (data, settings, options) {
			var span = document.createElement("span"), time, content = settings.titles[data[options.itemText]];
			if (content) {
				span.textContent = content;
				span.textContent += ": ";
			}
			else {
				span.textContent = data[options.itemText];
				if (o.terms.indexOf(data[options.itemText].toLowerCase()) > -1) {
					span.dataset.found = true;
					o.foundWordTimes.push(span);
				}
			}
			if (options.itemText !== "speaker") {
				span.textContent += " ";
			}
			if (options.title) {
				span.title = options.title;
				span.dataset.time = data.time; // Contenido proviene de JSON.words. (5.54)
			}
			span.onclick = function (e) {
				time = this.dataset.time * 1;
				o.currentTime = time;
				o.status = "find";
				o.findText(time);
				o.playAudio(o.currentTime, function () {
					if (o.callbacks && o.callbacks.timeChangedCallback && typeof o.callbacks.timeChangedCallback === "function") {
						o.callbacks.timeChangedCallback();
					}
				});
				o.audioControl.scrollIntoView({ behavior: "smooth", height: 100 });
			};
			return span;
		};
		o.renderTranscription = function (settings) {
			if (o.words) {
				var len = o.words.length, word, newSpeaker = { state: true, current: "" }, divTranscription = document.getElementById("transcriptionZone"), div, divSpeaker, divContent;
				if (divTranscription) {
					divTranscription.innerHTML = "";

					for (var i = 0; i < len; i++) {
						word = o.words[i];
						if (word.speaker.length > 0 && newSpeaker.current !== word.speaker) {
							div = document.createElement("div");
							div.className = word.speaker;
							divSpeaker = document.createElement("div");

							divContent = document.createElement("div");

							divSpeaker.appendChild(o.renderText(word, settings, { itemText: "speaker", title: null }));

							divContent.appendChild(o.renderText(word, settings, { itemText: "name", title: o.decimalToTime(word.time) }));

							div.appendChild(divSpeaker);
							div.appendChild(divContent);
							divTranscription.appendChild(div);

							newSpeaker.current = word.speaker;
						}
						else {
							divContent.appendChild(o.renderText(word, settings, { itemText: "name", title: o.decimalToTime(word.time) }));
							div.appendChild(divContent);
							divTranscription.appendChild(div);

							newSpeaker.current = word.speaker;
						}
					}
				}
			}
		};
		o.renderTopics = function (settings) {
			var topics = settings.topics, len = topics.length, topic, span, topicsElement = document.getElementById("topics");
			if (topicsElement) {
				for (var i = 0; i < len; i++) {
					topic = topics[i];
					span = document.createElement("span");
					span.className = "label label-default";
					span.textContent = topic;
					topicsElement.appendChild(span);
				}
			}
		};
		o.renderedTagLayout = false;
		o.renderTagLayout = function (titles, position) {
			// Crear el contenido de una zona flotante donde se muestre un campo de textarea para comentario y mostrar el indicador de tiempo capturado.
			var frmTagLayout = document.createElement("form"), p = document.createElement("p"), label = document.createElement("label"), span = document.createElement("span"), txtTag = document.createElement("input"), txtComment = document.createElement("textarea"), btnCancel = document.createElement("button"), btnSubmit = document.createElement("button"), style = "";
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

			label = document.createElement("label");
			label.textContent = titles.lblTag;
			label.setAttribute("for", "txtTag");

			txtTag.id = "txtTag";
			txtTag.className = "form-control form-control-sm";
			txtTag.type = "text";
			txtTag.onkeypress = txtTag.onkeyup = function (event) {
				var pattern = /^[a-zA-Z0-9-_.]+$/, txtValue = this.value;
				if (!pattern.test(txtValue)) {
					this.value = this.value.replace(/[^a-zA-Z0-9-_.]+/g, "");
				}
			};

			p = document.createElement("p");
			p.className = "form-group";
			p.appendChild(label);
			p.appendChild(txtTag);
			frmTagLayout.appendChild(p);

			label = document.createElement("label");
			label.textContent = titles.lblComment;
			label.setAttribute("for", "txtComment");

			txtComment.id = "txtComment";
			txtComment.className = "form-control form-control-sm";
			txtComment.maxLength = 200;

			p = document.createElement("p");
			p.className = "form-group";
			p.appendChild(label);
			p.appendChild(txtComment);
			frmTagLayout.appendChild(p);

			p = document.createElement("p");
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
				o.audioControl.scrollIntoView({ behavior: "smooth", height: 100 });
			}
			var divTags = document.getElementById(id), len = data.length, obj, divTitle, h3Title, divData, divTagRow, divTagContent, p, spanAuthor, spanTime, divTagActions, button;
			if (divTags) {
				divTags.innerHTML = "";
				divTitle = document.createElement("div");
				divTitle.className = "tags-header";
				h3Title = document.createElement("h3");
				h3Title.textContent = "(";
				h3Title.textContent += len;
				h3Title.textContent += ") ";
				h3Title.textContent += titles.tagTitle;
				h3Title.className = o.theme;
				divTitle.appendChild(h3Title);

				divTags.appendChild(divTitle);

				divData = document.createElement("div");
				divData.className = "tags-data";
				for (var i = 0; i < len; i++) {
					obj = data[i];
					divTagRow = document.createElement("div");
					divTagRow.className = "tag-row";
					divTagContent = document.createElement("div");
					divTagContent.className = "tag-content";
					p = document.createElement("p");
					spanAuthor = document.createElement("span");
					spanTime = document.createElement("span");
					spanTime.onclick = spanAction;
					divTagActions = document.createElement("div");
					divTagActions.className = "tag-actions";
					button = document.createElement("button");

					spanAuthor.className = "author";
					spanAuthor.textContent = obj.createdByUserId;

					spanTime.className = "time";
					spanTime.textContent = o.decimalToTime(obj.currentTime);
					spanTime.dataset.currentTime = obj.currentTime;
					p.appendChild(spanAuthor);
					p.appendChild(spanTime);
					divTagContent.appendChild(p);
					divTagRow.appendChild(divTagContent);

					p = document.createElement("p");
					p.textContent = obj.comment;
					p.title = obj.tag;
					divTagContent.appendChild(p);

					button.className = "btn btn-xs btn-primary tag-edit";
					button.id = ["btnEdit_", obj.tag].join("");
					button.textContent = titles.btnEdit;
					button.type = "button";
					divTagActions.appendChild(button);

					button = document.createElement("button");
					button.className = "btn btn-xs btn-secondary tag-delete";
					button.id = ["btnDelete_", obj.tag].join("");
					button.textContent = titles.btnDelete;
					button.type = "button";
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
				o.audioControl.scrollIntoView({ behavior: "smooth", height: 100 });
			}
			var spanPin, len = data.length, i, obj, html = "", divPins;
			divPins = document.getElementById(o.id + "_wavePins");
			divPins.innerHTML = "";
			for (i = 0; i < len; i++) {
				obj = data[i];
				spanPin = document.createElement("i");
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
					spanText.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }); // Posiciona la vista del «div» al centro de la palabra seleccionada.
				}
			}
			var timePoint, data = o.foundWordTimes, len = data.length, i, obj, html = "", divPoints;
			divPoints = document.getElementById(o.id + "_wavePoints");
			if (divPoints) {
				divPoints.innerHTML = "";
				for (i = 0; i < len; i++) {
					obj = data[i];
					timePoint = document.createElement("time");
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
					context.strokeStyle = channels === 1 ? o.findWords(o.getAudioTime(o.getFixedTime(drawLines, i))).color : o.colors[c];
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

			var audioContainer_waveProgress = document.getElementById("audioContainer_waveProgress");
			if (audioContainer_waveProgress !== null) {
				audioContainer_waveProgress.setAttribute("style", "width: 0%;");
				audioContainer_waveProgress.children[0].removeAttribute("style");
			}
			if (type === null) {
				o.audioControl = null;
				o.audioTotalDuration = 0;
				o.audioProgress = null;
				o.html = "";
				o.htmlCurrentWidth = "";
				o.buffer = null;
				o.terms = [];
				if (audioContainer_waveProgress !== null) {
					audioContainer_waveProgress.setAttribute("style", "width: 0%;");
					audioContainer_waveProgress.children[0].removeAttribute("style");
				}
				var divTranscription = document.getElementById("transcriptionZone"), topicsElement = document.getElementById("topics");
				if (divTranscription) {
					divTranscription.innerHTML = "";
				}
				if (topicsElement) {
					topicsElement.innerHTML = "";
				}
			}
		};
		o.init = function (options, callback) {
			o.reset(null);
			document.getElementById(options.id).innerHTML = "";
			o.audioId = options.audioId;
			o.theme = options.theme;
			o.permissions = options.permissions;
			o.terms = options.terms;
			o.titles = options.titles;
			o.arrayBufferFile = options.data;
			o.callbacks = options.callbacks;
			var canvas = o.create(options);
			o.words = options.words;
			o.width = options.width;
			o.audioControl = document.getElementById(options.id);
			o.audioProgress = document.getElementById(options.id + "_waveProgress");
			o.renderedWidth = window.getComputedStyle(o.audioControl.children[1].children[0]).width.replace("%", "").replace("px", "") * 1;
			var elems = document.querySelectorAll("div.transcription"), len = elems.length, elem, i;
			if (options.permissions.allowDownloadTranscription && o.words && o.words.length > 0) {
				o.renderTranscription(options);
			} else {
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
			o.audioContext = new o.AudioContext();
			var arrayBuffer = options.data;
			o.audioContext.decodeAudioData(arrayBuffer,
				function (buffer) {
					o.audioControl.children[0].children[0].children[1].removeAttribute("disabled");
					o.audioTotalDuration = buffer.duration;
					o.displayBuffer(canvas.context, buffer, function () {
						o.renderPoints();
						callback();
					});
				}, o.onDecodeError);
			window.onresize = function () {
				o.renderedWidth = window.getComputedStyle(o.audioControl.children[1].children[0]).width.replace("px", "") * 1;
			};
		};
		o.bufferToArrayBuffer = function (buffer) {
			var arrayBuffer = new ArrayBuffer(buffer.length), view = new Uint8Array(arrayBuffer);
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
			var time = now(), value, currentX, currentY, elapsed = (time - context.startTime) / SCROLL_TIME;
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
			var scrollable, startX, startY, method, startTime = now(), frame;
			if (el === d.body) {
				scrollable = w;
				startX = w.scrollX || w.pageXOffset;
				startY = w.scrollY || w.pageYOffset;
				method = original.scroll;
			}
			else {
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
			var scrollableParent = findScrollableParent(this), parentRects = scrollableParent.getBoundingClientRect(), clientRects = this.getBoundingClientRect();
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
			}
			else {
				w.scrollBy({
					left: clientRects.left,
					top: clientRects.top - arguments[0].height,// #header #top position: fixed.
					behavior: "smooth"
				});
			}
		};
	}
	polyfill();
})(window, document);