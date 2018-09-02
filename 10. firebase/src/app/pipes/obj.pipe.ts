import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obj',
  pure:false
})
export class ObjPipe implements PipeTransform {

  transform(value: any): any {
    //console.log("en el pipe");
    //console.log(value);
    let keys=[];
    for(let key in value){
     // console.log(value);
      keys.push(key)
    }
    
    return keys;
  }

}
