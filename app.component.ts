import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'client';
 
  
  constructor( private accountService: AccountService){}
  ngOnInit() {
  
  }
 

  }
