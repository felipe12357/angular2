//Funcion que tiene 1 parametro obligatorio
//2nd parametro predefinido
//3rd parametro opcional
function activar(quien:string,objeto:string="batiseñal",momento?:string){

  let mensaje:string;
  if(momento)
    mensaje=`${momento} ${quien} activo la ${objeto}`
  else
    mensaje=`${quien} activo la ${objeto}`
  console.log(mensaje);
}

activar("gordon");
activar("gordon","controladora","en la noche");
