import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { GetdataService } from 'src/app/ApiCall/getdata.service';
import { IUser } from 'src/app/DataModel/User.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Binary } from 'selenium-webdriver/firefox';
 
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  public user ='';
constructor(private service:GetdataService){

}
Users:IUser[]=[]
  ngOnInit() {
    this.service.getUsers().subscribe((res)=>{
      for (let i in res){
        this.Users.push(res[i])
        console.log(this.Users[i].first_name);
        console.log(this.Users[i].last_name);
        
      }
       

    }
    
    )
   
  }
  onAddUser(){
    var x = document.getElementById("addDiv")
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    
    
  }


}
