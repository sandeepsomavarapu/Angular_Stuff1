import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderpipePipe implements PipeTransform {

  transform(name:string,gender:string){
    if(gender.toLowerCase()=="male")
      return "MR."+name;
    else
      return "Miss."+name
  }

}
