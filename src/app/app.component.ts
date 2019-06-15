import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'jinu';

  val: any = 1;

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    db.list('buttons').valueChanges().subscribe(data => {
      console.log(data);
      this.val = data;
    });

    db.list('buttons2').valueChanges().subscribe(data => {
      console.log(data);
      this.val = data;
    });

    db.list('buttons3').valueChanges().subscribe(data => {
      console.log(data);
      this.val = data;
    });
  }
}
