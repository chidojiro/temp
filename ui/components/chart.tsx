import React, { useLayoutEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(am4themes_animated)

const Chart = () => {
    useLayoutEffect(() => {
        let chart = am4core.create('chartdiv', am4charts.XYChart)
        chart.colors.step = 2
        
        chart.legend = new am4charts.Legend()
        chart.legend.position = "top"
        chart.legend.paddingBottom = 20
        chart.legend.markers.template.width = 15
        chart.legend.markers.template.height = 15
        chart.legend.paddingRight = 1330
        
        let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        xAxis.dataFields.category = 'year'
        xAxis.renderer.cellStartLocation = 0.2
        xAxis.renderer.cellEndLocation = 0.8
        xAxis.renderer.grid.template.location = 0
        xAxis.renderer.grid.template.disabled = true
        
        let yAxis = chart.yAxes.push(new am4charts.ValueAxis())
        yAxis.min = 0
        yAxis.extraMax = 0.1

        let lineYAxis = chart.yAxes.push(new am4charts.ValueAxis())
        lineYAxis.renderer.opposite = true
        lineYAxis.min = 0
        lineYAxis.max = 100
        lineYAxis.renderer.labels.template.adapter.add("text", (value) => {
            return value + ".0%"
        })

        const createSeries = (name: string, color: string) => {
            let series = chart.series.push(new am4charts.ColumnSeries())
            
            series.dataFields.valueY = name
            series.dataFields.categoryX = 'year'
            series.yAxis = yAxis
            series.name = name
            series.fill = am4core.color(color)
            series.stroke = am4core.color(color)
            series.columns.template.strokeOpacity = 0
            series.columns.template.column.cornerRadiusTopRight = 5
            series.columns.template.column.cornerRadiusTopLeft = 5
        
            let bullet = series.bullets.push(new am4charts.LabelBullet())
            bullet.interactionsEnabled = false
            bullet.dy = -10
            bullet.label.text = "{values.valueY.workingValue}"
            bullet.label.fill = am4core.color(color)
        
            return series
        }
        
        chart.data = [
            {
              year: "2021/06",
              F1: 232,
              F2: 48,
              F2_conversion_rate: 21.1
            },
            {
              year: "2021/07",
              F1: 322,
              F2: 78,
              F2_conversion_rate: 30.5
            },
            {
              year: "2021/08",
              F1: 289,
              F2: 70,
              F2_conversion_rate: 34.9
            },
            {
              year: "2021/09",
              F1: 423,
              F2: 120,
              F2_conversion_rate: 31.1
            },
            {
              year: "2021/10",
              F1: 399,
              F2: 101,
              F2_conversion_rate: 28.2,
            },
            {
              year: "2021/11",
              F1: 402,
              F2: 118,
              F2_conversion_rate: 21.1
            },
            {
              year: "2021/12",
              F1: 398,
              F2: 112,
              F2_conversion_rate: 30.5
            },
            {
              year: "2022/01",
              F1: 422,
              F2: 129,
              F2_conversion_rate: 21.1
            },
            {
              year: "2022/02",
              F1: 398,
              F2: 112,
              F2_conversion_rate: 30.5
            },
            {
              year: "2021/03",
              F1: 398,
              F2: 112,
              F2_conversion_rate: 30.5
            },
            {
              year: "2022/04",
              F1: 422,
              F2: 129,
              F2_conversion_rate: 21.1
            },
            {
              year: "2022/05",
              F1: 398,
              F2: 112,
              F2_conversion_rate: 30.5
            },
        ]

        
        createSeries("F1","#FFBA00")
        createSeries('F2', '#55C5D9')

        let lineSeries = chart.series.push(new am4charts.LineSeries())
        lineSeries.name = "F2転換率"
        lineSeries.dataFields.valueY = "F2_conversion_rate"
        lineSeries.dataFields.categoryX = "year"
        lineSeries.yAxis = lineYAxis
        lineSeries.stroke = am4core.color("#FF7D58")
        lineSeries.strokeWidth = 2

        let bullet = lineSeries.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        bullet.dy = -10
        bullet.label.text = "{values.valueY.workingValue}%"
    })
    
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    )
}
export default Chart