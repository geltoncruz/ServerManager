import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  // users = ['Gelton', 'Jatoba','Tarso','Iure'];
  users = [
    {id: 1, name : 'Gelton', func: 'EngSoft'},
    {id: 2, name : 'Jatoba', func: 'EngSoft'},
    {id: 3, name : 'Tarso', func: 'EngSoft'},
    {id: 4, name : 'Iure', func: 'EngSoft'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
