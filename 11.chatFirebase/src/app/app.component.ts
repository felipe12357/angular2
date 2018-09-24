import { Component } from '@angular/core';
//documentacion: https://github.com/angular/angularfire2
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chats: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.chats = db.collection('chats').valueChanges();
  }
}
