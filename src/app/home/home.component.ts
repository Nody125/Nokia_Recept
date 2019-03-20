import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { GetdataService } from '../ApiCall/getdata.service';
import { IUser } from '../DataModel/User.model';
import { IBuilding } from '../DataModel/building.model';
import { IToken } from '../DataModel/Token.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private route:Router,private service:GetdataService) { 
    route.navigate(['/home/content/dashboard'])
  }

  ngOnInit() {
   
  }
  


}
