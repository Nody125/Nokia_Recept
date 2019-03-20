import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IVisitor } from '../DataModel/visitor.model';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  
  Token:String;
  constructor(private http:HttpClient) { }



  AddVisitor(fname,lname,mobile,Cnumber,Ctype,nationality,isInternal){

    this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  var body ={
    first_name: fname,
    last_name: lname,
    mobile: mobile,
    card_number: Cnumber,
    card_type: Ctype,
    nationality: nationality,
    is_internal: isInternal,
    
  }
  return this.http.post<IVisitor>('http://localhost:50432/api/Visitor/addVisitor',body,{ headers: headers2,observe:'body' }).pipe(map(result => result))

  }
   


  AddVisit(
    visitor_id,arrival,visit_reason,host_mail,
    visitorCard_id){
    var body={
        "visitor_id": visitor_id,
        "arrival": arrival,
        "visit_reason": visit_reason,
        "host_mail": host_mail,
        "visitorCard_id":visitorCard_id,
        
    }
    console.log(body);
    let headers2 = new HttpHeaders({
      'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
      'Content-Type':'application/json; charset=utf-8'
    });

    return this.http.post('http://localhost:50432/api/Visit/addVisit',body,{ headers: headers2,observe:'response' }).pipe(map(result => result))

  }




  
  AddUser(firstName:string,lastName:string,mobile:string,email:string,password:string,categoryId:number,nokiaId:number,buildingId:number){
    let headers2 = new HttpHeaders({
      'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
      'Content-Type':'application/json; charset=utf-8'
    });
    
   var body={
     "first_name":firstName,
     "last_name":lastName,
     "mobile":mobile,
     "email":email,
     "password":password,
     "category_id":categoryId,
     "nokiaID":nokiaId,
     "buildingID":buildingId
   }
    console.log(body)
    return this.http.post('http://localhost:50432/api/Authentication/addUser',body,{ headers: headers2,observe:'response' })

  }
}
