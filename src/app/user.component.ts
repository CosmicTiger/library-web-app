import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {
  users = ['Luis', 'Reyna', 'Tito'];
  username = '';
  visible = false;

  constructor() {
    setTimeout(() => {
      this.visible = true;
    }, 3000);
  }

  onAddUser() {
    this.users.push(this.username);
  }
}
