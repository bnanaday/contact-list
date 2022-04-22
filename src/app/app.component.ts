import { Component } from '@angular/core';

export type EditorType = 'list-contact' | 'add-contact' | 'edit-contact';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editor: EditorType = 'list-contact';

  get showListContact() {
    return this.editor === 'list-contact';
  }

  get showAddContact() {
    return this.editor === 'add-contact';
  }

  get showEditContact() {
    return this.editor === 'edit-contact';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
