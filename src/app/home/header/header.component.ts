import { Component, OnInit, Output } from '@angular/core';
import { AttributesService } from 'src/app/attributes.service';
import { IToken } from 'src/app/DataModel/Token.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',

 ]
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,private attr:AttributesService) { }
  adminName=(localStorage.getItem('name').replace(/"/g,""));
  
  ngOnInit() {

  }
  Logout() {
    localStorage.removeItem('userToken');
    this.route.navigate(['/login']);
  }
  
}
