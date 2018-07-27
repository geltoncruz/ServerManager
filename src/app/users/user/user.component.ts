import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user: { id: number, name: string }

  //To fecthing with router parameter is need import ActivateRoute and pass to constructor params

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.user = {
      id: this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    }  
    
    // To pass url data once components already rendered
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }

}
