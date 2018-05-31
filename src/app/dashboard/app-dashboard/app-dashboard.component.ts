import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'appDashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {

  chartData ;
  chart;
  temp_max;
  temp_min;
  alldates;
  weatherDates: Array<any>;
  
  constructor() { 
    this.chartData = {"message":"","cod":"200","city_id":2643743,"calctime":0.0875,"cnt":3,"list":[{"main":{"temp":279.946,"temp_min":279.946,"temp_max":279.946,"pressure":1016.76,"sea_level":1024.45,"grnd_level":1016.76,"humidity":100},"wind":{"speed":4.59,"deg":163.001},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"rain":{"3h":2.69},"dt":1485717216},{"main":{"temp":282.597,"temp_min":282.597,"temp_max":282.597,"pressure":1012.12,"sea_level":1019.71,"grnd_level":1012.12,"humidity":98},"wind":{"speed":4.04,"deg":226},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"rain":{"3h":0.405},"dt":1485745061},{"main":{"temp":279.38,"pressure":1011,"humidity":93,"temp_min":278.15,"temp_max":280.15},"wind":{"speed":2.6,"deg":30},"clouds":{"all":90},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"},{"id":741,"main":"Fog","description":"fog","icon":"50d"}],"dt":1485768552}]};
    this.temp_max = this.chartData["list"].map(res => res.main.temp_max);
    this.temp_min = this.chartData["list"].map(res => res.main.temp_min);
    this.alldates = this.chartData["list"].map(res => res.dt);
    this.weatherDates = [];
    this.alldates.forEach((res) => {
        let jsdate = new Date(res * 1000)
        this.weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    })
  }

  ngOnInit() {
    var me = this;
    setTimeout(this.loadGraph, 5000,this);
  }

  loadGraph(me){
    let elem = <HTMLCanvasElement> document.getElementById('canvas');
    let context = elem.getContext('2d');
    me.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: me.weatherDates,
        datasets: [
          { 
            data: me.temp_max,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: me.temp_min,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
