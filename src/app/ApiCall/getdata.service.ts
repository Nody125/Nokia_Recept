
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http'
import { Observable, observable, BehaviorSubject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { IToken } from '../DataModel/Token.model';
import { JsonPipe } from '@angular/common';
import { IUser } from '../DataModel/User.model';
import { IBuilding } from '../DataModel/building.model';
import { IVisitorCard } from '../DataModel/visitorCard.model';
import { ICardtype } from '../DataModel/cardType.model';
import { IVisitor } from '../DataModel/visitor.model';
import { IVisits } from '../DataModel/visits.model';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  Token: String;
  srch:object={
    "srch":{}
  }
 
  constructor(private http:HttpClient) {
   
   }

   
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  
 //////////////Get Token of Authorized Users////////////
  getToken(username:string,password:string):Observable<IToken>{
    const headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*")
    headers.append("Access-Control-Allow-Credentials", "true")
    let params = new HttpParams().set("username",username).set("password", password);
    return this.http.get<IToken>('http://localhost:50432/api/Authentication/authenticate',{ headers: headers, params: params , observe: 'body', responseType: 'json'});
    
  }

 
  getUsers():Observable<IUser[]>{
    
   this.Token= localStorage.getItem("token")
   console.log("Tokens from get users : "+this.Token)
    let headers2 = new HttpHeaders({
      'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
      'Content-Type':'application/json; charset=utf-8'
    });

    headers2=headers2.append("Access-Control-Allow-Origin", "*")
    headers2=headers2.append("Access-Control-Allow-Credentials", "true")
    console.log(headers2.get("Authorization"));
    return this.http.get<IUser[]>('http://localhost:50432/api/Authentication/searchAll',{headers:headers2,observe: 'body', responseType: 'json'})
  }


///////////////////////////getAll cards will give for visitor///////////////////////
getVisitorCard():Observable<IVisitorCard[]>{
  this.Token= localStorage.getItem("token")
    let headers2 = new HttpHeaders({
      'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
      'Content-Type':'application/json; charset=utf-8'
    });

    headers2=headers2.append("Access-Control-Allow-Origin", "*")
    headers2=headers2.append("Access-Control-Allow-Credentials", "true")
    return this.http.get<IVisitorCard[]>('http://localhost:50432/api/VisitorCard/SearchAll',{headers:headers2,observe: 'body', responseType: 'json'})
 
}
///////////////////////get Card type SSN or Drive liscense///////////////////////
getCardType():Observable<ICardtype[]>{
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });

  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<ICardtype[]>('http://localhost:50432/api/Card/searchAll',{headers:headers2,observe: 'body', responseType: 'json'})


}

searchCardTypebyID(id){
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
  let params = new HttpParams().set("id",id)
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<ICardtype>('http://localhost:50432/api/Card/searchCard',{headers:headers2,params:params,observe: 'body', responseType: 'json'})

}

searchCardTypebyname(name){
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
  let params = new HttpParams().set("card_name",name)
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<ICardtype>('http://localhost:50432/api/Card/searchCardByname',{headers:headers2,params:params,observe: 'body', responseType: 'json'})

}

searchVCardbyID(id){
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
  let params = new HttpParams().set("id",id)
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<IVisitorCard>('http://localhost:50432/api/VisitorCard/VCardbyID',{headers:headers2,params:params,observe: 'body', responseType: 'json'})

}

searchVCardbyCardno(card_number){
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
  let params = new HttpParams().set("card_number",card_number)
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<IVisitorCard>('http://localhost:50432/api/VisitorCard/VCardbyCardno',{headers:headers2,params:params,observe: 'body', responseType: 'json'})

}


SearchbyCardnumber(cardnumber:string){
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
  let params = new HttpParams().set("Cnumber",cardnumber)
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<IVisitor[]>('http://localhost:50432/api/Visitor/GetVisitByVisitorCnumber',{headers:headers2,params:params,observe: 'body', responseType: 'json'})

}


searchVisitByVisitorId(){
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });
 
  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<IVisits[]>('http://localhost:50432/api/Visit/search',{headers:headers2,observe: 'body', responseType: 'json'})

}

getVisitorsData():Observable<IVisitor[]>{
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });

  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<IVisitor[]>('http://localhost:50432/api/Visitor/search',{headers:headers2,observe: 'body', responseType: 'json'})

}



getVisits():Observable<IVisits[]>{
  this.Token= localStorage.getItem("token")
  let headers2 = new HttpHeaders({
    'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
    'Content-Type':'application/json; charset=utf-8'
  });

  headers2=headers2.append("Access-Control-Allow-Origin", "*")
  headers2=headers2.append("Access-Control-Allow-Credentials", "true")
  return this.http.get<IVisits[]>('http://localhost:50432/api/Visit/search',{headers:headers2,observe: 'body', responseType: 'json'})

}





////////////////////////////Search For Buildings /////////////////////
/*  getBuildings():Observable<IBuilding[]>{
    let headers2 = new HttpHeaders({
      'Authorization':'Bearer '+JSON.parse(localStorage.getItem("token")),
      'Content-Type':'application/json; charset=utf-8'
    });
    headers2=headers2.append("Access-Control-Allow-Origin", "*")
    headers2=headers2.append("Access-Control-Allow-Credentials", "true")
    let options ={
      headers:headers2,
      body:this.srch
    }
    console.log(options.headers);
    return this.http.get<IBuilding[]>('http://localhost:50432/api/Building/search',options).pipe(map(result => result),(success => success));
  }*/
}
