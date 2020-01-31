function decimalToTime(num) {
	var hours, minutes, seconds;
	hours = Math.floor(num / 3600);
	num %= 3600;
	minutes = Math.floor(num / 60);
	seconds = Math.floor(num % 60);

	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds = seconds < 10 ? "0" + seconds : seconds;
	return [hours, minutes, seconds].join(":");
}

// Función que recibe un array de objetos de PNL y el valor máximo de éstos para retornar el mismo objeto con el key «y» que contiene el porcentaje equivalente.
function convertToPercentages(arr, max) {
	return arr.map(function (d) {
		return {
			color: d.color,
			item: d.name,
			value: d.value,
			y: (100 * d.value / max) | 0
		};
	});
}

function setAudioDashboard(config, callback) {
	try {
		var graphPNLIn = document.getElementById("graph-pnl-in"), graphPNLOut = document.getElementById("graph-pnl-out");
		if (graphPNLIn && graphPNLOut) {
			graphPNLIn.classList.remove('hide-transcription');
			graphPNLOut.classList.remove('hide-transcription');
		}

		var dataIn = [], dataOut = [], nlpIn = config.data.resultTranscription.nlp.in, nlpOut = config.data.resultTranscription.nlp.out, item, colors = { "visual": "#cac5ea", "auditive": "#ffdad1", "kinestesic": "#e8bee6" }, chartIn, chartOut;
		// Establecer contenido de objetos para mostrar indicadores de PNL para IN y OUT.
		for (item in nlpIn) {
			if (nlpIn.hasOwnProperty(item)) {
				dataIn.push({
					color: colors[item],
					name: item,
					value: nlpIn[item]
				});
			}
		}

		if (dataIn && dataIn.length > 0) {
			dataIn.sort(function (a, b) {
				return b.value - a.value;
			});
			dataIn = convertToPercentages(dataIn, dataIn[0].value);
		}

		for (item in nlpOut) {
			if (nlpOut.hasOwnProperty(item)) {
				dataOut.push({
					color: colors[item],
					name: item,
					value: nlpOut[item]
				});
			}
		}

		if (dataOut && dataOut.length > 0) {
			dataOut.sort(function (a, b) {
				return b.value - a.value;
			});
			dataOut = convertToPercentages(dataOut, dataOut[0].value);
		}

		// Implementación de gráficas con Higcharts con los objetos configurados.
		if (graphPNLIn) {
			chartIn = window.Highcharts.chart("graph-pnl-in", {
				chart: {
					backgroundColor: null,
					type: "column"
				},
				credits: {
					enabled: false
				},
				legend: {
					enabled: false
				},
				title: {
					style: { color: "#fff" },
					text: config.titleIn
				},
				tooltip: {
					headerFormat: ""
				},
				xAxis: {
					categories: [config.visual, config.auditive, config.kinestesic],
					labels: {
						style: {
							color: "#fff"
						}
					}
				},
				yAxis: {
					gridLineWidth: 1,
					max: 100,
					min: 0,
					title: {
						style: { color: "#fff" },
						text: config.yAxisText
					},
					labels: {
						style: {
							color: "#fff"
						}
					}
				},
				series: [
					{
						data: dataIn
					}
				]
			});
			chartIn.series[0].name = config.valueText;
			chartIn.redraw();
		}

		if (graphPNLOut) {
			chartOut = window.Highcharts.chart("graph-pnl-out", {
				chart: {
					backgroundColor: null,
					type: "column"
				},
				credits: {
					enabled: false
				},
				legend: {
					enabled: false
				},
				title: {
					style: { color: "#fff" },
					text: config.titleOut
				},
				tooltip: {
					headerFormat: ""
				},
				xAxis: {
					categories: [config.visual, config.auditive, config.kinestesic],
					labels: {
						style: {
							color: "#fff"
						}
					}
				},
				yAxis: {
					gridLineWidth: 1,
					max: 100,
					min: 0,
					title: {
						style: { color: "#fff" },
						text: config.yAxisText
					},
					labels: {
						style: {
							color: "#fff"
						}
					}
				},
				series: [
					{
						data: dataOut
					}
				]
			});
			chartOut.series[0].name = config.valueText;
			chartOut.redraw();
		}

		// Implementación de preselección de las estrellas de calificación de transcripción.
		var stars = document.getElementsByName("rating"), i, len = stars.length, value = config.data.transcriptionQualification * 1, obj;
		if (value !== null) {
			for (i = 0; i < len; i++) {
				obj = stars[i];
				if (obj.value * 1 === value) {
					obj.checked = true;
					obj.setAttribute("checked", "checked");

				}
				else {
					obj.checked = false;
					obj.removeAttribute("checked");
				}
			}
		}
		else {
			for (i = 0; i < len; i++) {
				obj = stars[i];
				obj.checked = false;
				obj.removeAttribute("checked");
			}
		}

		// Sección para renderizar gráficas en vista.
		var source = { summarySpeechData: config.data.resultTranscription.summarySpeechData, confidence: config.data.resultTranscription.confidence }, sourceResult = [],
			item2, item3, item4;
		obj = {};
		item = undefined;
		for (item in source) {
			if (source.hasOwnProperty(item)) {
				if (item === "summarySpeechData") {
					for (item2 in source[item]) {
						if (source[item].hasOwnProperty(item2)) {
							obj = {
								config: { id: "", text: "Tiempo Total", formatter: "s." }, data: []
							};
							if (item2 === "dataTotalIn") {
								obj.config.id = "containerTotalTimeIn";
								for (item3 in source[item][item2]) {
									if (source[item][item2].hasOwnProperty(item3)) {
										obj.data.push({
											name: item3 === "duration" ? "Duración" : "Silencio",
											y: source[item][item2][item3],
											color: item3 === "duration" ? "#e8bee6" : "#cac5ea"
										});
									}
								}
								sourceResult.push(obj);
							}
							else {
								obj.config.id = "containerTotalTimeOut";
								for (item3 in source[item][item2]) {
									if (source[item][item2].hasOwnProperty(item3)) {
										obj.data.push({
											name: item3 === "duration" ? "Duración" : "Silencio",
											y: source[item][item2][item3],
											color: item3 === "duration" ? "#e8bee6" : "#cac5ea"
										});
									}
								}
								sourceResult.push(obj);
							}
						}
					}
				}
				else {
					for (item4 in source[item]) {
						if (source[item].hasOwnProperty(item4)) {
							obj = {
								config: { id: "", text: "Confidence", formatter: "%" }, data: []
							};
							if (item4 === "in_confidence") {
								obj.config.id = "containerConfidenceIn";
								obj.data.push({
									name: "Confidence",
									y: (source[item][item4] * 100).toFixed(2) * 1,
									color: "#cac5ea"
								});
								sourceResult.push(obj);
							} else {
								obj.config.id = "containerConfidenceOut";
								obj.data.push({
									name: "Confidence",
									y: (source[item][item4] * 100).toFixed(2) * 1,
									color: "#cac5ea"
								});
								sourceResult.push(obj);
							}
						}
					}
				}
			}
		}

		function renderPie(source) {
			var pie = new window.Highcharts.Chart({
				chart: {
					backgroundColor: null,
					renderTo: source.config.id,
					type: 'pie'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format: "{point.name}: {point.percentage:.1f}%",
							distance: 5,
							style: {
								textOutline: '0px contrast',
								color: '#fff'
							}
						}
					}
				},
				title: {
					margin: 5,
					text: source.config.text,
					style: {
						fontSize: "12px",
						fontWeight: "bold"
					}
				},
				tooltip: {
					formatter: function () {
						return this.point.name + ": " + decimalToTime(this.y);
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					data: source.data
				}]
			});
		}

		function setJustGageGraph(name, value, id) {
			var gage = new window.JustGage({
				id: id,
				value: value,
				min: 0,
				max: 100,
				title: name,
				titleFontColor: "#333333",
				startAnimationTime: 2000,
				startAnimationType: ">",
				refreshAnimationTime: 1000,
				refreshAnimationType: "bounce",
				decimals: 2,
				symbol: "%",
				labelFontColor: "#333333",
				levelColors: ["#FF6A71", "#FFEE6A", "#76FB68"]
			});
		}

		len = sourceResult.length;
		for (i = 0; i < len; i++) {
			if (sourceResult[i].config.id === 'containerTotalTimeIn' || sourceResult[i].config.id === 'containerTotalTimeOut') {
				renderPie(sourceResult[i]);
			} else {
				setJustGageGraph(config.confidence, sourceResult[i].data[0].y, sourceResult[i].config.id);
			}
		}
		callback();
	} catch (ex) {
		console.log('setAudioDashboard: ', ex);
	}
}