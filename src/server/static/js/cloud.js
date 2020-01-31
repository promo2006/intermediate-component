function generate(config) {
	var data = config.data;
	// Se debe ejecutar una función que retorne la vista normal de palabras populares para mostrarse en WordCloud.
	if (data !== null && data.length > 0) {
		if (data.length > 0) {
			var dataIn = config.data.find(function (x) {
				return x.type === "in";
			}), dataOut = config.data.find(function (x) {
				return x.type === "out";
			});
			if (dataIn) {
				config.data = dataIn;
				printHighChartsBar("bar-wordcloud-in", config, config.in);
			}
			if (dataOut) {
				config.data = dataOut;
				printHighChartsBar("bar-wordcloud-out", config, config.out);
			}
		}
	}
}
function searchTranscription(text) {
	window.processDetailComponent.zone.run(function () {
		var hdnProcessId = document.getElementById("hdnProcessId");
		window.processDetailComponent.component.Redirect(hdnProcessId.value, text);
	});
}
function printHighChartsBar(id, config, title) {
	var data = config.data, chartPopularWords;
	data = data.tags.map(function (x, y) {
		return {
			name: x.key,
			y: x.value
		};
	});
	document.getElementById(id).removeAttribute("class");
	chartPopularWords = window.Highcharts.chart(id, {
		chart: {
			backgroundColor: null,
			height: 600,
			type: 'bar',
			width: 460
		},
		plotOptions: {
			series: {
				cursor: 'pointer'
			}
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		title: {
			text: [config.wordcloudTitle, title].join(" - ")
		},
		xAxis: {
			categories: data.map(function (x) { return x.name; })
		},
		yAxis: {
			min: 0,
			title: {
				text: config.wordcloudLength
			}
		},
		series: [
			{
				data: data
			}
		]
	});
	chartPopularWords.series[0].name = config.wordcloudLength;
	chartPopularWords.redraw();
}