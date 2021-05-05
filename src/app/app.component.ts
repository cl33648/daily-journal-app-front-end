import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Day } from './day';
import { DayService } from './day.service';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Daily Journal';

  public days: Day[];
  public tasks: Task[];

  constructor(private dayService:DayService){}

  //initially load all days available 
  ngOnInit(){
    this.getDays();
  }

  //if getAllDays method of DayService returns a valid response, load the response into days
  //if errored, show error message
  public getDays(): void{
    this.dayService.getAllDays().subscribe(
      //(response: Day[]) => console.log(response),
      //(error: HttpErrorResponse) => console.log(error)
      (response: Day[]) => {this.days = response;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

}
