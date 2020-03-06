import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort, MatSortable } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import { ExportService } from '../export.service';


export interface data {
  time: string;
  airline: string;
  flight_number: string;
  transaction: string;
  terminal: string;
  gate: string;
}
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private flights: any = []
  private hiddeForm: boolean = false
  private flightForm: FormGroup;
  p: number = 1;
  private searchItem: string = ''
  constructor(private fb: FormBuilder, private Http: HttpClient, private exportservice: ExportService) { 
    this.flightForm = this.fb.group({
      time: [null, [Validators.required]],
      airline: [null, [Validators.required]],
      flight_number: [null, [Validators.required]],
      transaction: [null, [Validators.required]],
      terminal: [null, [Validators.required]],
      gate: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    
    this.Http.get<data>('https://data.sfgov.org/resource/chfu-j7tc.json').subscribe(
      (res:any)=>{
        console.log(res)
        this.flights= res
        
      }
    )
    

  }
  private exportAsXLSX():void {
    this.exportservice.exportAsExcelFile(this.flights, 'flight_details');
  }

  private deleteFlightEntry(id:number){
        this.Http.delete('https://data.sfgov.org/resource/chfu-j7tc.json/'+id).subscribe(
          (res)=>{
            console.log(res)
          }
        )
  }

 private  editFlightEntry(flight:data){
    ///
  }
  private addFlightHandler(){
    console.log(this.flightForm.value)
    this.Http.post('https://data.sfgov.org/resource/chfu-j7tc.json', this.flightForm.value).subscribe(
      (res)=>{
        console.log(res)
        this.hiddeForm = true
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  hiddeFormHandler(){
    this.hiddeForm = !this.hiddeForm
  }

}
