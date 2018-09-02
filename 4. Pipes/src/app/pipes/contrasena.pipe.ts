import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args: boolean): string {
    if(args==false)
      return value;
    else{
      return "*****";
    }
  //  console.log(value);
  //  console.log(args)
  //  return null;
  }

}
