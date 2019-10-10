import { Pipe, PipeTransform } from '@angular/core';
import { TIMESLOT } from '../data';

@Pipe({
  name: 'timeslot'
})
export class TimeslotPipe implements PipeTransform {
  resultText:string;
  transform(value: string): string {
    for(var Idx=0;Idx<TIMESLOT.length;Idx++){
      if(TIMESLOT[Idx].value == value){
        this.resultText = TIMESLOT[Idx].text;
        break;
      }
    }
    console.log(this.resultText);
    return this.resultText;
  }

}
