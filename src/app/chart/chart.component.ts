import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { HttpClient } from "@angular/common/http";
import { Data } from "../data";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  
  termilarNumber = [1,3,2];
  flightNumber = [];
  
  linechart = [];
  flights = []
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Data>("https://data.sfgov.org/resource/chfu-j7tc.json")
      .subscribe((res: any) => {
        let flightNumber_1 = [];
        let flightNumber_2 = [];
        let flightNumber_3 = [];
        let Terminal =[]
        res.forEach(x => {
        // this.termilarNumber.push(x.terminal);
          
          if (x.terminal === "1") {
            flightNumber_1.push(x.flight_number);
            
          } if (x.terminal === "2") {
            flightNumber_2.push(x.flight_number);
          } if (x.terminal === "3") {
            flightNumber_3.push(x.flight_number);
          }
  });
        this.flightNumber.push(flightNumber_1.length, flightNumber_2.length, flightNumber_3.length)
        // console.log(this.flightNumber)
        // console.log(this.termilarNumber)
        // let term = [...new Set(Terminal)]
        // this.termilarNumber.push(Terminal.map(Number))
        //   console.log(this.termilarNumber)
          // console.log(term)
        
      });
      
      // console.log(this.flightNumber_1.length);
      console.log(this.termilarNumber);
      console.log(this.flightNumber);
      
    this.linechart = new Chart("canvas", {
      type: "line",
      data: {
        labels: this.flightNumber,
        datasets: [
          {
            label: '# of Votes',
            data: this.termilarNumber,
            borderColor: "#3cb371",
            //  backgroundColor: "#0000FF",
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
