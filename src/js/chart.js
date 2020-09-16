/* global Chart */
const ucfCharts = function ($) {

  if ($('.custom-chart').length) {
    $.each($('.custom-chart'), function () {
      const $chart = $(this);
      const type = $chart.attr('data-chart-type');
      const jsonPath = $chart.attr('data-chart-data');
      const optionsPath = $chart.attr('data-chart-options');
      const dataObj = $.parseJSON($chart.attr('data-chart-data-obj').replaceAll(/'/g, '"'));
      const optionsObj = $.parseJSON($chart.attr('data-chart-options-obj').replaceAll(/'/g, '"'));
      const $canvas = $('<canvas></canvas>');
      const ctx = $canvas.get(0).getContext('2d');
      let data = {};

      // Set default options
      const options = {
        responsive: true,
        scaleShowGridLines: false,
        pointHitDetectionRadius: 5
      };

      $chart.append($canvas);

      const chartID = $chart.attr('id').replace('custom-chart-', '');
      const $chartLegend = $(`.chart-legend-${chartID}`);

      if (dataObj) {

        $.extend(options, options, optionsObj);

        const chart = new Chart(ctx, {
          type: type.toLowerCase(),
          data: dataObj,
          options: optionsObj
        });

        if ($chartLegend.length) {
          $chartLegend.html(chart.generateLegend());
        }

      } else {

        $.when(
          $.getJSON(jsonPath, (json) => {
            data = json;
          }),
          $.getJSON(optionsPath, (json) => {
            $.extend(options, options, json);
          })
        ).then(() => {
          const chart = new Chart(ctx, {
            type: type.toLowerCase(),
            data,
            options
          });
          /*
          switch (type.toLowerCase()) {
            case 'bar':
              chart = new Chart(ctx).Bar(data, options);
              break;
            case 'line':
              chart = new Chart(ctx).Line(data, options);
              break;
            case 'radar':
              chart = new Chart(ctx).Radar(data, options);
              break;
            case 'polar-area':
              chart = new Chart(ctx).PolarArea(data, options);
              break;
            case 'pie':
              chart = new Chart(ctx).Pie(data, options);
              break;
            case 'doughnut':
              chart = new Chart(ctx).Doughnut(data, options);
              break;
            default:
              break;
          }
          */

          if ($chartLegend.length) {
            $chartLegend.html(chart.generateLegend());
          }
        });
      }
    });
  }
};

if (typeof jQuery !== 'undefined') {
  jQuery(document).ready(($) => {
    ucfCharts($);
  });
}
