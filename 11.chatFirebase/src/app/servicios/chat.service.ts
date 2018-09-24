//https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {iChat} from './../interfaces/chat.interface'


@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<iChat>;
  public chats:iChat[]=[];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    //Esto retorna un observable
    this.itemsCollection = this.afs.collection<iChat>('chats');
    
    return this.itemsCollection.valueChanges()
    .map(mensajes=>{
      this.chats=mensajes;
      console.log(mensajes);
    });
  }

  agregarMensaje(texto:string){
    const Mensaje={
      nombre:"Felipe",
      mensaje:texto,
      fecha:new Date().getTime()
    }
   // console.log(Mensaje);
    return this.itemsCollection.add(Mensaje);
  }

}
