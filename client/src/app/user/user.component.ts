import { Component, OnInit } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit() {
    this.user = new User(0, 'josh', 'rehman', new Date('1968-11-16T00:00:00'));
  }

}
