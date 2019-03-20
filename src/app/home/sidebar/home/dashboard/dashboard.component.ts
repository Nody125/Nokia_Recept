import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  LineChart=[];
  constructor() { }

  ngOnInit() {
    this.LineChart=new Chart('lineChart',{
      type:'line',
      data:{
        labels:["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],
        datasets:[{
          label:'Number Of Guests in Months',
          borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [100, 78, 32, 48, 50, 90,50,22,15,98,33,101]
        }]
      },
      options:
      {
        legend: {
          position: "bottom"
      },
        title:{
         // text:"Visitors Dashboard",
          display:true
        },
        scales:{
          yAxes:[{
            ticks: {
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
          },
          gridLines: {
              drawTicks: false,
              display: false
          }
          }],
          xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"

},
            ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
        }
      }
    })
  }

}
