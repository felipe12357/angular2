import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCapitalizado'
})
export class pipeCapitalizado implements PipeTransform {
  transform(value: string,todas:boolean=true): string {
    value=value.toLowerCase();
    let nombres=value.split(" ");
    if(todas==true){
      for(let i in nombres){
        nombres[i]=nombres[i][0].toUpperCase()+nombres[i].substr(1);
      }
    }
    else{ //solo capiltaliza la primera palabra
      nombres[0]=nombres[0][0].toUpperCase()+nombres[0].substr(1);
    }
    return nombres.join(" ") ;

  }
}
