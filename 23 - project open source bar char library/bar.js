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

    // Pre Operations
    chart.performPreOperations();

    
};

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

BarChart.prototype.performPreOperations = function () {
    // Base
    var chart = this;

    // Create Canvas
    chart.createCanvas();

    // Get Data
    chart.handleData();

    // Prepare Data
    chart.prepareData();
};

BarChart.prototype.createCanvas = function () {
    // Base
    var chart = this;

    // Create Canvas
    var canvas = document.createElement('canvas');
    canvas.id = chart.id + '-' + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;

    // Append canvas to target container.
    document.getElementById(chart.id).innerHtml = '';  // clear container
    document.getElementById(chart.id).appendChild(canvas);  // add canvas to clean container

    // Add canvas to chart object
    chart.canvas = canvas;
    chart.context = canvas.getContext('2d');
};

BarChart.prototype.handleData = function () {
    // Base
    var chart = this;

    // Data sets
    chart.labels = [];
    chart.values = [];

    // Handle Data
    chart.data.forEach(function(item) {
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });

};

BarChart.prototype.prepareData = function () {
    // Base
    var chart = this;

    // Global Variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);

    // Axe Specifications
    chart.verticalAxeWidth = chart.height - 2 * chart.verticalMargin;       // bottom and top margins
    chart.horizontalAxeWidth = chart.width - 2 * chart.horizontalMargin;    // left and right margins

    // Label Specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFrequency = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFrequency = chart.horizontalAxeWidth / chart.itemsNum;
};