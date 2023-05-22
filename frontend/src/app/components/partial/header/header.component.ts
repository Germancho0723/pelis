import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search='';
  user!:User;
  constructor(activatedRoute:ActivatedRoute, private router:Router, private userService:UserService){
    activatedRoute.params.subscribe((params) =>{
      if(params.search) this.search = params.search;

    })

    userService.userObservable.subscribe((newUser)=> {
      this.user = newUser;
    })
  }

  ngOnInit(): void {

  }

  logout(){
    this.userService.logout();
  }

  buscar(term:string):void{
    if(term)
    this.router.navigateByUrl('/buscar/'+term);
  }
}
