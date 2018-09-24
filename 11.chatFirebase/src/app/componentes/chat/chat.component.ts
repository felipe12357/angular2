import { Component, OnInit } from '@angular/core';
import { ChatService} from "../../servicios/chat.service";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  formMensaje:string="";
  constructor(public _chatService:ChatService) { 
    this._chatService.cargarMensajes()
    .subscribe();
  }

  ngOnInit() {
  }

  enviarMensaje(){

    if(this.formMensaje!==""){
      this._chatService.agregarMensaje(this.formMensaje)
      .then(()=>this.formMensaje="")
      .catch(()=>console.log("error al enviar"));
    }
    console.log(this.formMensaje);
    console.log("clikc");
  }
}
