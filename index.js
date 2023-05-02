console.log("Script linked");
// create new plot
TESTER = document.getElementById("plot-area");
Plotly.newPlot(TESTER, [{
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 3, 6, 12, 24, 34, 39, 40, 40, 41]
}, {margin: {t: 0}}]);

