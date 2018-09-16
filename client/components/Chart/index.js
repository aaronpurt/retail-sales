import React from "react";
import { render } from "react-dom";

import { Line } from "react-chartjs";

import './style.scss';

/*
* Description: This component displays the chart diagram. Using Chart.js at core. React-chartjs is the wrapper
* Proposition: 
*              - The hard coded values would be moved to external CMS. 
*              - The ChartJS data could be moved to external files or CMS to edited. 
*              - some values depending on environment might need ENV values. 
*  Chart Options: https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/01-Line-Chart.md
*/


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log('chart props ', this.props);
    this.state = {
      chartData: this.setChartData(),
      chartOptions: this.setChartOptions(),
      chartTitle: 'Retail Sales'
    };
    
  }


  /**
   * setChartOptions - sets the chart Options for chart.js
   * *  Proposition: Move these to external file. CMS, config, etc. 
   */
  setChartOptions() {
    const chartOptions = {
      scaleShowGridLines : false,
      pointDot : false,
      datasetFill: false,
      scaleShowVerticalLines: false,
      responsive: true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<this.props.sales.length; i++){%><li><span style=\"background-color:<%=this.props.sales[i].strokeColor%>\"><%if(this.props.sales[i].label){%><%=this.props.sales[i].label%><%}%></span></li><%}%></ul>"
     
    }
    return chartOptions;
  }


  /**
   * setChartOptions - sets the chart Options for chart.js
   * *  Proposition: Move these to external file. CMS, config, etc. 
   */
  setChartData() {
    let data = {
      labels: ["JAN", "FEB", "MAR", "JUN", "JULY", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Retail Sales",
          strokeColor: "rgba(70,168,246,1)",
          pointColor: "rgba(70,168,246,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(70,168,246,1)",
          data: this.props.sales.map(data => {return data.retailSales })
        },
        {
          label: "Wholesale Sales",
          strokeColor: "rgba(155,166,191,1)",
          pointColor: "rgba(155,166,191,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(155,166,191,1)",
          data: this.props.sales.map(data => {return data.wholesaleSales })
        }
      ]
    };
    return data;
  }


  render() {
    let { chartData, chartOptions } = this.state;

    return (
      <div className='chart chart-container'> 
      <h4 className='chart-header'>{ this.state.chartTitle }</h4>
       <Line 
       data={ chartData } 
       options={ chartOptions } 
       width="800" height="500"
       />
      </div>
    );
  }
}
