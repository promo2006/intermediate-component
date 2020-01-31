function getMax(data) {
	var result = null;
	if (data.length > 0) {
		result = Math.max.apply(Math, data.map(function (o) {
			return o.y;
		}));
		result += 10;
		result = Math.round(result);
	} else {
		result = 50;
	}
	return result;
}

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

var averageConfidenceOutGraph = null, averageConfidenceInGraph = null;

function setSearchDashboard(config) {
	window.config = config;  // Se expone el contenido del objeto «config» de manera global para ser recuperado por cualquier archivo.
	var obj = {}, lenResults = config.data.documents.results.length, lenWords, result, word, durationIn = 0, silenceIn = 0, durationOut = 0, silenceOut = 0, confidenceIn = 0, confidenceOut = 0, arrayConfidenceIn = [], arrayConfidenceOut = [], lenWordsIn = 0, lenWordsOut = 0, averageConfidenceGraph = null;

	for (var i = 0; i < lenResults; i++) {
		result = config.data.documents.results[i];
		lenWords = result.words.length;
		for (var j = 0; j < lenWords; j++) {
			word = result.words[j];
			if (word.speaker === "in") {
				durationIn += word.duration;
				silenceIn += word.silence;
				confidenceIn += word.confidence;
			}
			else {
				durationOut += word.duration;
				silenceOut += word.silence;
				confidenceOut += word.confidence;
			}
		}

		lenWordsIn = result.words.filter(function (x) {
			return x.speaker === "in";
		}).length;
		lenWordsOut = result.words.filter(function (x) {
			return x.speaker === "out";
		}).length;

		if (lenWordsIn > 0) {
			confidenceIn = (confidenceIn / lenWordsIn);
			arrayConfidenceIn.push(confidenceIn);
		}

		if (lenWordsOut > 0) {
			confidenceOut = (confidenceOut / lenWordsOut);
			arrayConfidenceOut.push(confidenceOut);
		}
	}
	if (arrayConfidenceIn.length > 0) {
		confidenceIn = arrayConfidenceIn.reduce(function (a, b) { // Sumar valores de datos obtenidos de «confidenceIn».
			return a + b;
		}, 0) / arrayConfidenceIn.length;
	}

	if (arrayConfidenceOut.length > 0) {
		confidenceOut = arrayConfidenceOut.reduce(function (a, b) { // Sumar valores de datos obtenidos de «confidenceOut».
			return a + b;
		}, 0) / arrayConfidenceOut.length;
	}

	// Contiene resultado de tiempos y confidence de las transcripciones retornadas por IDATHA, luego de la búsqueda.

	var source = {
		"summarySpeechData": {
			"dataTotalIn": {
				"duration": durationIn.toFixed(2) * 1,
				"silence": silenceIn.toFixed(2) * 1
			},
			"dataTotalOut": {
				"duration": durationOut.toFixed(2) * 1,
				"silence": silenceOut.toFixed(2) * 1
			}
		},
		"confidence": {
			"confidenceIn": confidenceIn,
			"confidenceOut": confidenceOut
		}
	};

	// Código que se prepara en Componet TypeScript en el lado de cliente.
	var sourceResult = [], item2, item3, item4;
	for (item in source) {
		if (source.hasOwnProperty(item)) {
			if (item === "summarySpeechData") {
				for (item2 in source[item]) {
					if (source[item].hasOwnProperty(item2)) {
						obj = {
							config: { id: "", text: "Tiempo Total", formatter: "s." }, data: []
						};
						if (item2 === "dataTotalIn") {
							obj.config.id = "containerTotalTimeInSearch";
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
							obj.config.id = "containerTotalTimeOutSearch";
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
			else if (item === "confidence") {
				for (item4 in source[item]) {
					if (source[item].hasOwnProperty(item4)) {
						obj = {
							config: { id: "", text: "Confidence", formatter: "%" }, data: []
						};
						if (item4 === "confidenceIn") {
							obj.config.id = "containerConfidenceInSearch";
							obj.data.push({
								name: "Confidence",
								y: (source[item][item4] * 100).toFixed(2) * 1,
								color: "#cac5ea"
							});
							sourceResult.push(obj);
						} else {
							obj.config.id = "containerConfidenceOutSearch";
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
			else {
				//
			}
		}
	}

	// Código que se encuentra en el archivo JavaScript externo.
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
						distance: 15,
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

	function setJustGageGraphIn(name, value, id) {
		if (averageConfidenceInGraph) {
			averageConfidenceInGraph.refresh(value);
		} else {
			averageConfidenceInGraph = new window.JustGage({
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
	}

	function setJustGageGraphOut(name, value, id) {
		if (averageConfidenceOutGraph) {
			averageConfidenceOutGraph.refresh(value);
		} else {
			averageConfidenceOutGraph = new window.JustGage({
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
	}

	var len = sourceResult.length;
	for (i = 0; i < len; i++) {
		if (sourceResult[i].config.id === 'containerTotalTimeInSearch' || sourceResult[i].config.id === 'containerTotalTimeOutSearch') {
			renderPie(sourceResult[i]);
		} else {
			if (sourceResult[i].config.id === 'containerConfidenceInSearch') {
				setJustGageGraphIn(config.confidence, sourceResult[i].data[0].y, sourceResult[i].config.id);
			} else {
				setJustGageGraphOut(config.confidence, sourceResult[i].data[0].y, sourceResult[i].config.id);
			}
		}
	}
}
