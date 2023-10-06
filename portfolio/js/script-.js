jQuery(document).ready(function () {
	jQuery("#carousel-slider").carousel({
		interval: 1e4,
		pause: !1
	});
	var e = new WOW({
		boxClass: "wow",
		animateClass: "animated",
		offset: 0,
		mobile: !0,
		live: !0,
		callback: function (e) {
			if ("chartContainerwow" == e.id && jQuery("#chartContainer").length) {
				var a = new CanvasJS.Chart("chartContainer", {
					toolTip: {
						enabled: !0,
						Color: "#333",
						fontFamily: "'Teko', sans-serif",
						fontWeight: "300",
						borderColor: "white"
					},
					title: {
						text: "81.2% Repeat Customers",
						fontColor: "white",
						fontFamily: "'Teko', sans-serif",
						fontWeight: "300",
						verticalAlign: "center",
						fontSize: 26,
						maxWidth: 150
					},
					animationEnabled: !0,
					animationDuration: 5e3,
					data: [{
						type: "doughnut",
						startAngle: -90,
						radius: "100%",
						innerRadius: "50%",
						toolTipContent: "{legendText}:  <span style='\"'color: #333;'\"'>{y} %</span>",
						dataPoints: [{
							y: 81.2,
							legendText: " Repeat Customers "
						}, {
							y: 18.8,
							legendText: "New Customers "
						}]
					}]
				});
				a.render()
			}
		}
	});
	e.init()
});