(function () {
	var study = (function (o) {
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
		o.sumResults = function (data, property, textValue, valueField, category1, category2, isDetail) {
			var resultTest = data.filter(function (x) {
				if (isDetail) {
					return x.category1 === category1 && x.category2 === category2 && x[property] === textValue;
				} else {
					return x[property] === textValue;
				}
			}), n = 0, len = resultTest.length, obj;
			for (var i = 0; i < len; i++) {
				obj = resultTest[i];
				n += obj[valueField];
			}
			if (valueField === "confidence") {
				return ((n / len) * 100).toFixed(2) * 1;
			}
			return n;
		};
		// Esta función retornará el objeto necesario para «series».
		o.setSeriesData = function (data, valueField) {
			var len = data.length, obj, items = {}, result = {
				name: "Overview",
				colorByPoint: true,
				data: []
			};
			for (var i = 0; i < len; i++) {
				obj = data[i];
				if (obj.category1 && obj.category2 && obj.description) {
					items[obj.category1] = { key: "category1", category1: obj.category1, category2: obj.category2, description: obj.description };
				}
				else if (obj.category1 && obj.category2 === null && obj.description) {
					items[obj.category1] = { key: "category1", category1: obj.category1, category2: obj.category2, description: obj.description };
				}
				else if (obj.category1 === null && obj.category2 === null && obj.description) {
					items[obj.description] = { key: "description", category1: obj.category1, category2: obj.category2, description: obj.description };
				}
			}
			for (var item in items) {
				if (items[item].key !== "description") {
					result.data.push({
						name: item,
						y: o.sumResults(data, items[item].key, item, valueField, items[item].category1, items[item].category2, false),
						drilldown: item
					});
				}
				else {
					result.data.push([item, o.sumResults(data, items[item].key, item, valueField, items[item].category1, items[item].category2, true)]);
				}
			}
			return [result];
		};
		o.getDrilldownObject = function (source, data, property, textValue, valueField) {
			data = data.filter(function (x) {
				return x[property] === textValue;
			});
			var len = data.length, obj, result = [];
			function testFilter(x) {
				return x.name === obj.category2;
			}
			function sourceFilter(x) {
				return x.category2 === obj.category2;
			}
			function mapFilter(x) {
				return [x.description, o.sumResults(data, "description", x.description, valueField, x.category1, x.category2, true)];
			}
			for (var i = 0; i < len; i++) {
				obj = data[i];
				if (obj.category2) {
					// Mostrar category2.
					var test = result.filter(testFilter);
					if (test.length === 0) {
						result.push({
							name: obj.category2,
							y: o.sumResults(data, "category2", obj.category2, valueField, obj.category1, obj.category2, false),
							drilldown: obj.category2
						});
						source.push({
							id: obj.category2,
							name: obj.category2,
							data: data.filter(sourceFilter).map(mapFilter)
						});
					}
				}
				else {
					// Mostrar dato de description.
					result.push([obj.description, o.sumResults(data, "description", obj.description, valueField, obj.category1, obj.category2, true)]);
				}
			}
			return result;
		};
		o.setDrilldownData = function (series, data, valueField) {
			var seriesLen = series.data.length, serie, result = {
				series: []
			};
			for (var i = 0; i < seriesLen; i++) {
				serie = series.data[i];
				if (serie.drilldown) {
					result.series.push({
						id: serie.drilldown,
						name: serie.drilldown,
						data: o.getDrilldownObject(result.series, data, "category1", serie.drilldown, valueField)
					});
				}
			}
			return result;
		};
		o.setHighchartsData = function (config, callback) {
			var series = o.setSeriesData(config.data.studyResultSummary, config.valueField), drilldown = o.setDrilldownData(series[0], config.data.studyResultSummary, config.valueField);
			drilldown.drillUpButton = {
				position: {
					width: 50,
					height: 20,
					x: 35,
					y: -6
				},
				theme: {
					fill: 'url(#arrow)',
					'stroke-width': 1,
					stroke: 'silver',
					r: 0,
					states: {
						hover: {
							fill: 'url(#coloured-arrow)',
						}
					}
				}
			};
			window.Highcharts.setOptions({
				lang: {
					drillUpText: ""
				}
			});
			var options = {
				chart: {
					height: 400,
					events: {
						load: function () {
							var data = this.series[0].chart.series[0].data[0].series.data, lastLevelItems = data.filter(function (x) {
								return x.drilldown === undefined;
							});
							o.buildUniqueResultByThemes(lastLevelItems);

							var chart = this,
								renderer = chart.renderer,
								pattern = renderer.createElement('pattern').add(renderer.defs).attr({
									width: 25,
									height: 25,
									id: 'arrow'
								});
							renderer.image('/static/img/back-arrow.png', 0, 0, 15, 13).add(pattern);

							pattern = renderer.createElement('pattern').add(renderer.defs).attr({
								width: 25,
								height: 25,
								id: 'coloured-arrow'
							});
							renderer.rect(0, 0, 70, 32)
								.attr({
									fill: '#a4edba'
								})
								.add(pattern);
							renderer.image('/static/img/back-arrow.png', 0, 0, 15, 13).add(pattern);
						},
						redraw: function () {
							var data = this.series[0].chart.series[0].data[0].series.data, lastLevelItems = data.filter(function (x) {
								return x.drilldown === undefined;
							});
							o.buildUniqueResultByThemes(lastLevelItems);
						}
					}
				},
				title: {
					text: config.titles.drilldownTitle
				},
				tooltip: {
					formatter: function () {
						if (config.valueField === "confidence") {
							return window.Highcharts.numberFormat(this.y) + "%";
						}
						else if (config.valueField === "duration" || config.valueField === "silence") {
							return o.decimalToTime(this.y);
						}
						else {
							return this.y;
						}
					}
				},
				xAxis: {
					categories: true
				},
				yAxis: {
					title: {
						enabled: false
					}
				},
				legend: {
					enabled: false
				},
				plotOptions: {
					series: {
						events: {
							click: function (event) {
								var name = event.point.name, result = o.config.data.studyResultSummary.filter(function (x) {
									return x.category1 === name || x.category2 === name;
								});
								if (result && result.length > 0) {
									o.renderStudyResultSummaryDetail(name);
									o.setDrilldownDetail(result);
								}
							}
						},
						dataLabels: {
							enabled: true,
							formatter: function () {
								if (config.valueField === "confidence") {
									return window.Highcharts.numberFormat(this.y) + "%";
								}
								else if (config.valueField === "duration" || config.valueField === "silence") {
									return o.decimalToTime(this.y);
								}
								else {
									return this.y;
								}
							}
						},
						shadow: false
					},
					pie: {
						size: "80%"
					}
				},
				credits: {
					enabled: false
				},
				series: series,
				drilldown: drilldown,
			};

			// Column chart
			options.chart.renderTo = "drilldownResults";
			options.chart.type = "column";
			var chart1 = new window.Highcharts.Chart(options);
			callback();
		};
		o.getDrilldownData = function (config, data) {
			var result = null;
			if (data && data.length) {
				var len = data.length, obj, total = 0, totalDuration = 0, totalSilence = 0, averageDuration = 0, averageSilence = 0, confidence = 0;
				for (var i = 0; i < len; i++) {
					obj = data[i];
					totalDuration += obj.duration;
					totalSilence += obj.silence;
					confidence += obj.confidence;
					total += obj.total;
				}
				averageDuration = totalDuration / total;
				averageSilence = totalSilence / total;
				confidence = confidence / len;
				result = {
					totalTime: {
						items: [
							{
								name: config.titles.duration,
								y: totalDuration,
								color: "#e8bee6"
							},
							{
								name: config.titles.silence,
								y: totalSilence,
								color: "#cac5ea"
							}
						]
					},
					averageTime: {
						items: [
							{
								name: config.titles.duration,
								y: averageDuration,
								color: "#e8bee6"
							},
							{
								name: config.titles.silence,
								y: averageSilence,
								color: "#cac5ea"
							}
						]
					},
					confidence: confidence
				};
			}
			return result;
		};
		o.setPieGraph = function (source) {
			var pie = new window.Highcharts.Chart({
				chart: {
					backgroundColor: null,
					renderTo: source.config.id,
					type: "pie"
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: "pointer",
						dataLabels: {
							enabled: true,
							format: "{point.name}: {point.percentage:.1f}%",
							distance: 30
						}
					}
				},
				title: {
					margin: 5,
					text: source.config.text,
					style: {
						fontSize: "14px"
					}
				},
				tooltip: {
					formatter: function () {
						return this.point.name + ": " + o.decimalToTime(this.y);
					}
				},
				credits: {
					enabled: false
				},
				series: [{
					data: source.data.items
				}]
			});
		};
		o.averageConfidenceGraph = null;
		o.setJustGageGraph = function (name, value) {
			if (o.averageConfidenceGraph) {
				o.averageConfidenceGraph.refresh(value);
			} else {
				o.averageConfidenceGraph = new window.JustGage({
					id: "averageConfidence",
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
					levelColors: ["#FF6A71", "#FFEE6A", "#76FB68"]
				});
			}
		};
		o.setDrilldownDetail = function (summaryData) {
			if (summaryData && summaryData.length > 0) {
				var data = o.getDrilldownData(o.config, summaryData);
				if (data) {
					var source = {
						config: { id: "containerTotalTime", text: o.config.titles.total },
						data: data.totalTime
					};
					o.setPieGraph(source);
					source = {
						config: { id: "containerAverageTime", text: o.config.titles.average },
						data: data.averageTime
					};
					o.setPieGraph(source);
					o.setJustGageGraph(o.config.titles.confidence, data.confidence * 100);
				}
			}
		};
		o.renderStudyResultSummaryDetail = function (name) {
			// Se debe ocultar las tablas.
			var tables = document.querySelectorAll("#studyResultSummaryDetail table"), len = tables.length, table;
			for (var i = 0; i < len; i++) {
				table = tables[i];
				table.classList.add("hide");
			}
			name = name.toLowerCase().split(" ").join("");
			var elem = document.getElementById(name);
			if (elem) {
				elem.classList.remove("hide");
			}
		};
		o.getTotalHeader = function (templateThemeId) {
			var result = o.studySummaryData.data.studyResultSummaryDetailViewModel.filter(function (x) {
				return x.templateThemeId === templateThemeId;
			}).length || 0;
			return result;
		};
		o.getTotalDetail = function (obj, templateThemeItemId) {
			var result = o.studySummaryData.data.studyResultSummaryDetailViewModel.filter(function (x) {
				return x.templateThemeId === obj.templateThemeId && x.templateThemeItemId === templateThemeItemId;
			}).map(function (x) {
				return {
					id: x.transcriptionId,
					section: x.section,
					part: x.part,
					agent: x.agent
				};
			});
			return {
				total: result.length || 0,
				transcriptions: result
			};
		};
		o.getThemes = function (lastLevelItems) {
			function findTheme(x) {
				return x.description === obj.name; // Se elimina /* && x.total === obj.y*/.
			}
			var result = [], len = lastLevelItems.length, obj, found;
			for (var i = 0; i < len; i++) {
				obj = lastLevelItems[i];
				found = o.studySummaryData.data.studyResultSummary.find(findTheme);
				if (found) {
					result.push(found);
				}
			}
			return result;
		};
		o.buildStudyResultHeader = function (lastLevelItems) {
			// Por defecto, si las barras no tienen navegabilidad entonces, se debe generar los headers con sus totales.
			var header = [], studyResultSummaryFiltered = o.getThemes(lastLevelItems), len = studyResultSummaryFiltered.length, obj;
			for (var i = 0; i < len; i++) {
				obj = studyResultSummaryFiltered[i];
				header.push({
					templateThemeId: obj.templateThemeId,
					name: obj.description,
					total: o.getTotalHeader(obj.templateThemeId)
				});
			}
			return header;
		};
		o.buildStudyResultDetail = function (headerData) {
			function findFilter(x) {
				return x.templateThemeId === header.templateThemeId;
			}
			function onlyUnique(value, index, self) {
				return self.map(function (x) {
					return x.templateThemeItemId;
				}).indexOf(value.templateThemeItemId) === index;
			}
			var themes = [], details = [], headerLen = headerData.length, header, result, templateThemeItems, templateThemeItemsLen, templateThemeItem, totalDetail, i, j;
			for (i = 0; i < headerLen; i++) {
				header = headerData[i];
				result = o.studySummaryData.data.studyResultSummaryDetailViewModel.filter(findFilter);
				if (result.length > 0) {
					templateThemeItems = result.filter(onlyUnique);
					templateThemeItemsLen = templateThemeItems.length;
					details = [];
					for (j = 0; j < templateThemeItemsLen; j++) {
						templateThemeItem = templateThemeItems[j];
						totalDetail = o.getTotalDetail(header, templateThemeItem.templateThemeItemId);
						details.push({
							templateThemeId: header.templateThemeId,
							templateThemeItemId: templateThemeItem.templateThemeItemId,
							query: templateThemeItem.query,
							total: totalDetail.total,
							transcriptions: totalDetail.transcriptions,
						});
					}
					themes.push({
						templateThemeId: header.templateThemeId,
						items: details
					});
				}
			}
			return themes;
		};
		o.getUniqueResults = function (themesResult) {
			function findIndex(i) {
				return i.transcriptionId === objk.id;
			}
			var leni = themesResult.length, obji, lenj, objj, lenk, objk, index;
			for (var i = 0; i < leni; i++) {
				obji = themesResult[i];
				lenj = obji.details.items.length;
				obji.report = [];
				for (var j = 0; j < lenj; j++) {
					objj = obji.details.items[j];
					lenk = objj.transcriptions.length;
					for (var k = 0; k < lenk; k++) {
						objk = objj.transcriptions[k];
						index = obji.report.findIndex(findIndex);
						if (index === -1) {
							obji.report.push({
								name: obji.name,
								query: objj.query,
								transcriptionId: objk.id,
								section: objk.section,
								part: objk.part,
								agent: objk.agent
							});
						}
					}
				}
			}
			return themesResult;
		};
		o.buildUniqueResultByThemes = function (lastLevelItems) {
			// var themes = o.buildStudyResultHeader(lastLevelItems); // Retorna el encabezado de resultado único por temas, basado en studyResultSummaryDetailViewModel.
			// var themeItems = o.buildStudyResultDetail(themes); // Retorna la lista de datos de queries con sus transcripciones, basado en resultado de buildStudyResultHeader y studyResultSummaryDetailViewModel.
			var themes = o.buildStudyResultHeader(lastLevelItems), details = o.buildStudyResultDetail(themes), themeItem = null, themesResult = themes.map(function (x) {
				themeItem = details.find(function (y) {
					return y.templateThemeId === x.templateThemeId;
				});
				if (themeItem) {
					x.details = themeItem;
					return x;
				}
				return null;
			});
			themesResult = o.getUniqueResults(themesResult);
			window.studyResultComponent.zone.run(function () {
				window.studyResultComponent.component.SetUniqueResultByTheme(themesResult);
			});
			return themesResult;
		};
		o.exportToCSV = function (studyResultDetail, data) {
			if (studyResultDetail && data && data.report && data.report.length > 0) {
				var csvContent = "Estudio,Proceso,Tema,Consulta,Identificador,Sección,Part,Agente\n", obj, len = data.report.length;
				for (var i = 0; i < len; i++) {
					obj = data.report[i];
					csvContent += studyResultDetail.studyName;
					csvContent += ",";
					csvContent += studyResultDetail.processName;
					csvContent += ",";
					csvContent += obj.name;
					csvContent += ",";
					csvContent += obj.query;
					csvContent += ",";
					csvContent += obj.transcriptionId;
					csvContent += ",";
					csvContent += obj.section;
					csvContent += ",";
					csvContent += obj.part;
					csvContent += ",";
					csvContent += obj.agent;
					csvContent += "\r\n";
				}
				if (csvContent && csvContent.length > 0) {
					var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" }), link = document.createElement("a"), url = URL.createObjectURL(blob), fileName = "";
					fileName = studyResultDetail.studyName;
					fileName += "_";
					fileName += studyResultDetail.processName;
					fileName += "_";
					fileName += data.name;
					fileName += ".csv";
					link.setAttribute("href", url);
					link.setAttribute("download", fileName);
					link.style.visibility = "hidden";
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				}
			}
		};
		o.studySummaryData = null;
		o.config = {};
		/**
		 * Método inicial que inicializa la construcción de la gráfica Drilldown a partir de datos de configuración, datos de base de datos y valor númérico a mostrar.
		 * @method init
		 * @param {} config
		 * @param {} data
		 * @param {} valueField
		 * @return 
		 */
		o.init = function (config) {
			o.studySummaryData = config;
			o.setHighchartsData(config, function () {
				o.config = config;
				o.setDrilldownDetail(config.data.studyResultSummary);
			});
		};
		return o;
	}(study || {}));
	window.study = study;
}());