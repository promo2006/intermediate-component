// Función para obtener los valores únicos.
function setUnique(arr, property) {
	var newArr = [], len = arr.length, obj;
	for (var i = 0; i < len; i++) {
		obj = arr[i][property];
		if (newArr.length === 0) {
			newArr.push(obj);
		}
		if (newArr.length > 0 && (newArr.indexOf(obj) > -1) === false) {
			newArr.push(obj);
		}
	}
	return newArr;
}
// Función que permite sumar los Totales sobre un array de cierta propiedad y valor.
// property = Category1
// value = Venta
function sumTotal(data, property, value) {
	// Script que sirve para filtrar por categoría y permitir sumar su Total.
	var resultTest = data.filter(function (x) {
		return x[property] === value;
	}), n = 0, len = resultTest.length, obj;
	for (var i = 0; i < len; i++) {
		obj = resultTest[i];
		n += obj.total;
	}
	return n;
}
// Función que retorna un objeto con valores adecuados para HighCharts.
function buildItemGraph(data, arr, property, next, type) {
	var array = [], len = arr.length, obj;
	if (property === "category1" && type === "series") {
		for (var i = 0; i < len; i++) {
			obj = arr[i];
			if (next) {
				array.push({
					name: obj,
					y: sumTotal(data, property, obj),
					drilldown: obj,
					category: property,
					next: next || ""
				});
			}
		}
	}
	else {
		len = arr.length;
		for (var j = 0; j < len; j++) {
			obj = arr[j];
			if (obj !== null) {
				if (next) {
					array.push({
						id: obj,
						name: obj,
						data: [],
						category: property,
						next: next || ""
					});
				}
			}
		}
	}
	return array;
}
// Función que se encarga de almacenar los objetos hijos para los objetos padre.
function fillDrilldownData(data, current) {
	// «result» debe contener la lista de los elementos hijos del objeto current padre.
	var item = {}, items = [], result = data.filter(function (x) {
		return x[current.category] === current.name;
	}), len = result.length, index = -1, obj;
	function search(x) {
		return x.name === obj && x.y === 0;
	}

	for (var i = 0; i < len; i++) {
		obj = result[i][current.next];
		if (current.next.length > 0) {
			if (obj !== null) {
				item = {
					name: obj,
					y: sumTotal(data, current.next, obj),
					drilldown: (current.next === "description" || result[i].category2 === null || result[i].category3 === null || result[i].description === null) ? undefined : obj
				};
				// No se pueden generar los hijos repetidos.
				if (items.length === 0) {
					items.push(item);
				}
				else {
					index = items.findIndex(search);
					if (index === -1) {
						items.push(item);
					}
				}
			}
		}
	}
	return items;
}
// Función que retorna el objeto completo de configuración para la gráfica en HighCharts.
function showHighChartDrillDown(config) {
	var categoriesDTO = ["category1", "category2", "category3", "description"], series = [], drilldown = { series: [] }, drilldownData = [], leni = categoriesDTO.length, unique = [], obj;
	for (var i = 0; i < leni; i++) {
		unique = setUnique(config.data, categoriesDTO[i]);
		if (categoriesDTO[i] === "category1") {
			series.push({
				name: config.name,
				colorByPoint: true,
				data: buildItemGraph(config.data, unique, categoriesDTO[i], categoriesDTO[i + 1], "series")
			});
		}
		if (categoriesDTO[i + 1]) {
			drilldownData.push(buildItemGraph(config.data, unique, categoriesDTO[i], categoriesDTO[i + 1], "drilldown"));
		}
	}
	drilldown.series = [].concat.apply([], drilldownData);
	leni = drilldown.series.length;
	var items, itemsLen;
	for (i = 0; i < leni; i++) {
		obj = drilldown.series[i];
		items = fillDrilldownData(config.data, obj);
		itemsLen = items.length;
		if (itemsLen > 0) {
			obj.data.push(items);
		}
		obj.data = [].concat.apply([], obj.data);
	}
	drilldown.series = drilldown.series.filter(function (x) {
		return x.data.length > 0;
	});
	if (drilldown.series.length > 0) {
		drilldown.series[0].data.splice(1, 1);
	}
	printHighCharts(config.name, config.yAxisText, {
		series: series || [{ name: '', colorByPoint: true, data: [] }],
		drilldown: drilldown.series || []
	});
}
function printHighCharts(title, yAxisText, data) {
	window.Highcharts.chart('container', {
		chart: {
			backgroundColor: null,
			height: 250,
			type: 'column',
			events: {
				load: function () {
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
				}
			}
		},
		lang: {
			drillUpText: ''
		},
		credits: {
			enabled: false
		},
		title: {
			style: {
				fontSize: "14px"
			},
			text: title,
			verticalAlign: 'bottom'
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			min: 0.0,
			minRange: 1,
			title: {
				text: yAxisText
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true
				}
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size: 11px;">{series.name}</span><br />',
			pointFormat: '<span style="color: {point.color};">{point.name}</span>: <b>{point.y}</b>'
		},
		series: data.series,
		drilldown: {
			drillUpButton: {
				position: {
					width: 50,
					height: 20,
					x: 52.6,
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
			},
			series: data.drilldown
		}
	});
}