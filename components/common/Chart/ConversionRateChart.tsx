import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ConversionRate } from '@/types';
import { useAmcharts } from '@/hooks/useAmcharts';

am4core.useTheme(am4themes_animated);

export type ConversionRateChartProps = {
  firstColumn: ChartInfo;
  secondColumn: ChartInfo;
  lineChart: ChartInfo;
  data: ConversionRate[] | [];
};

export type ChartInfo = {
  name: string;
  title: string;
  color: string;
};

const ConversionRateChart = ({
  firstColumn,
  secondColumn,
  lineChart,
  data,
}: ConversionRateChartProps) => {
  const { amchartsElRef } = useAmcharts(am4charts.XYChart, chart => {
    chart.data = data;
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.paddingBottom = 20;
    chart.legend.markers.template.width = 15;
    chart.legend.markers.template.height = 15;
    chart.legend.paddingRight = 1200;

    chart.events.on('beforedatavalidated', function () {
      for (let i = 0; i < chart.data.length; i++) {
        chart.data[i] = {
          ...chart.data[i],
          year_month: `${chart.data[i].year}/${chart.data[i].month}`,
        };
      }
    });

    const categoryField = 'year_month';

    const xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = categoryField;

    xAxis.renderer.cellStartLocation = 0.2;
    xAxis.renderer.cellEndLocation = 0.8;
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.grid.template.disabled = true;

    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.extraMax = 0.1;

    const lineYAxis = chart.yAxes.push(new am4charts.ValueAxis());
    lineYAxis.renderer.opposite = true;
    lineYAxis.min = 0;
    lineYAxis.max = 100;
    lineYAxis.renderer.labels.template.adapter.add('text', value => {
      return value + '.0%';
    });

    const createSeries = (name: string, title: string, color: string) => {
      const series = chart.series.push(new am4charts.ColumnSeries());

      series.dataFields.valueY = name;
      series.dataFields.categoryX = categoryField;
      series.yAxis = yAxis;
      series.name = title;
      series.fill = am4core.color(color);
      series.stroke = am4core.color(color);
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusTopRight = 5;
      series.columns.template.column.cornerRadiusTopLeft = 5;

      const bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = -10;
      bullet.label.text = '{values.valueY.workingValue}';
      bullet.label.fill = am4core.color(color);
    };

    createSeries(firstColumn.name, firstColumn.title, firstColumn.color);
    createSeries(secondColumn.name, secondColumn.title, secondColumn.color);

    const lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = lineChart.title;
    lineSeries.dataFields.valueY = lineChart.name;
    lineSeries.dataFields.categoryX = categoryField;
    lineSeries.yAxis = lineYAxis;
    lineSeries.stroke = am4core.color(lineChart.color);
    lineSeries.strokeWidth = 2;

    const bullet = lineSeries.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false;
    bullet.dy = -10;
    bullet.label.text = '{values.valueY.workingValue}%';
  });

  return <div ref={amchartsElRef} style={{ width: '100%', height: '500px' }} />;
};
export default ConversionRateChart;
