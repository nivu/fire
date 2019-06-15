import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {
  AngularFirestore
} from '@angular/fire/firestore';

import { AngularFireDatabase } from '@angular/fire/database';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
