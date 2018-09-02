import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
export class SinFotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    let noImagen='assets/img/noimage.png';
    if(!imagenes || imagenes.length==0 )
      return noImagen;

    return imagenes[1].url;
  }

}
