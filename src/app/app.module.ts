import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactComponent,
    EditContactComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
