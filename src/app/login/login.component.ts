import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { PostdataService } from '../ApiCall/postdata.service';
import { GetdataService } from '../ApiCall/getdata.service';
import { post, Response } from 'selenium-webdriver/http';
import { HttpResponse, HttpResponseBase } from '@angular/common/http';
import { IToken } from '../DataModel/Token.model';
import { container } from '@angular/core/src/render3';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwords:string[]=[]
  emails:string[]=[]
  max:any;
  status=false
 // token:string[]=[];
  tokenParam:any;
  constructor(
    private route:Router,
    private service:GetdataService,
    private tostr:ToastrService) { }

  ngOnInit() {
    
  }


  onLogin(e){
   var username= e.target.elements[0].value;
   var password= e.target.elements[1].value;
   this.service.getToken(username,password).subscribe((res)=>{
    var token:IToken = res
    localStorage.setItem("token",JSON.stringify(token.token))
    localStorage.setItem("name",JSON.stringify(token.name))
    localStorage.setItem("username",JSON.stringify(token.username))

    console.log(token)
    if(res){
      this.tostr.success('logged in successfully');
      this.route.navigate(['home']);
   }
   },
   err=>{
    
   console.log("Error in Server side : ",err)
    // alert("Invalid UserName or Password..")
     this.status=true;
    } )
  }

 


}
