let namespace = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(namespace, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
for (var i = 0; i < 1200; i++) {
	var colors = ["#E28413", "#DE3C4B", "#C42847", "#C42847", "#588B8B"];
	var color = colors[Math.floor(Math.random() * colors.length)];
	let circle = document.createElementNS(namespace, "circle");
	circle.setAttribute("fill", color);
	circle.setAttribute("viewbox", "0 0 500 500");
	circle.setAttribute("cx", Math.floor(Math.random() * 500));
	circle.setAttribute("cy", Math.floor(Math.random() * 500));
	circle.setAttribute("r", Math.floor(Math.random() * 12) + 3);
	svg.appendChild(circle);
}

document.body.appendChild(svg);
