import { Component, OnInit, Input } from '@angular/core';
import { AttributesService } from 'src/app/attributes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input()Modal='modal';
Zoom=""
 D:any
  constructor(private router:Router) { }
 
   
  ngOnInit() {
   //this.onClickDashboard();
  }
 /* onClickDashboard(){
    this.D = document.getElementById("myDiv")
    if (this.D.style.display === "none") {
      this.D.style.display = "block";
      console.log('Iam in dashboard')
    } }

    onClickVisitors(){
      var x = document.getElementById("myDiv1")
   //   var v = document.getElementById("myDiv")
      if (x.style.display === "none") {
        x.style.display = "block";
        this.D.style.display="none"
      }
    }*/
  
}
