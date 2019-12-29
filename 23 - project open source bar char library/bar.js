/**
 * 
 * bar.js
 * simple, elegant, bar chart library
 * 30/12/2019 - version 1.0
 * https://github.com/elliotmoule/learn_html5_canvas
 * 
 * Copyright 2017 Elliot Moule
 * Released under the MIT License
 * https://github.com/elliotmoule/learn_html5_canvas/blob/master/LICENSE
 * 
 */

 'use-strict';

// Constructor
function BarChart(targetId, width, height, data) {
    // Base
    var chart = this;
    
    // Specify Configuration
    chart.configureChart(targetId, width, height, data);
}

BarChart.prototype.configureChart = function (targetId, width, height, data) {
    // Base
    var chart = this;

    // Global Canvas Configuration
    chart.setCanvasParameters(targetId, width, height, data);

    // Global Chart Specifications
    chart.setChartParameters();
};

BarChart.prototype.setCanvasParameters = function (targetId, width, height, data) {
    // Base
    var chart = this;

    // Canvas Specifications (external)
    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
};

BarChart.prototype.setChartParameters = function () {
    // Base
    var chart = this;

    // Axe Configuration
    chart.axeRatio = 10;        // in terms of percentage
    chart.verticalMargin = (chart.height * chart.axeRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axeRatio) / 100;
    chart.axeColor = '#b1b1b1';
    chart.axeWidth = 0.75;

    // Label Configuration
    chart.fontRatio = 3;        // in terms of percentage
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = '300';
    chart.fontColor = '#666';
    chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

    // Guideline Configurations
    chart.guidelineColor = '#e5e5e5';
    chart.guidelineWidth = 0.5;
};