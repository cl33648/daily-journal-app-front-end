import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Day } from './day';
import { DayService } from './day.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public days: Day[];

  constructor(private dayService:DayService){}

  //initially load all days available 
  ngOnInit(){
    this.getDays();
  }

  //if getAllDays method of DayService returns a valid response, load the response into days
  //if errored, show error message
  public getDays(): void{
    this.dayService.getAllDays().subscribe(
      (response: Day[]) => {
        this.days = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
