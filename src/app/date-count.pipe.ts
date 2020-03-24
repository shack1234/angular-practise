import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date;  // gets the current date and time
    let todayWithNoTime:any = new Date (today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime) // this returns the value in milliseconds
    const secondsInDay = 86400; // 60 sec * 60 min in an hour 824 hrs in a day
    const dateDifferencecSeconds = dateDifference*0.001; //converts milliseconds to seconds
    var dateCounter= dateDifferencecSeconds/secondsInDay;
    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else if(dateCounter<=1 && value < todayWithNoTime){
       return dateCounter;
    }else{
       return 0;
    }
  }
}
