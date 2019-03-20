import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective } from 'ngx-bootstrap/modal'
import { FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetdataService } from 'src/app/ApiCall/getdata.service';
import { PostdataService } from 'src/app/ApiCall/postdata.service';
import { IVisitorCard } from 'src/app/DataModel/visitorCard.model';
import { ICardtype } from 'src/app/DataModel/cardType.model';
import { IVmerge } from 'src/app/DataModel/Vmerge.model';
import { IVisitor } from 'src/app/DataModel/visitor.model';
import { IVisits } from 'src/app/DataModel/visits.model';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newvisitor',
  templateUrl: './newvisitor.component.html',
  styleUrls: ['./newvisitor.component.css'],
  exportAs:'child'
})
export class NewvisitorComponent implements OnInit {
  date = new Date();
  name = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email);
  license = new FormControl('', Validators.minLength(5));
  public radioData:string;
  public search = false;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  names:string[]=[]
  visits=new FormControl();
  searchCard=""
  flagIfSelected=false
  
  arrival:any
  fname=""
  lName=""
  mobile=""
  Hmail=""
  vReason=""
  cardNo=""
  nationality=""
  cardType=""
  Cnumber=""
  nrSelect=""
  Ctype=""
  radioFlag=false;
  /////////////get Value of selected cardType//////////////
  onChange(e){
    this.Ctype = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.Ctype)
  }
  onChangeVCard(e){
    this.cardNo = e.target.options[e.target.options.selectedIndex].text;
    console.log(this.cardNo)
  }
  /////////////////////Show Modal/////////////////////
  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {
      console.log('DemoModalChildComponent.showChildModal fired!');
      this.childModal.show();
  }
/////////////////////Hide Modal/////////////////////
  public hideChildModal(): void {
      this.resetForm()
      this.childModal.hide();
  }
  



  constructor(private http: HttpClient,private service:GetdataService , private postservice:PostdataService,private toast:ToastrService) { 
  //////////////////////////Current Date///////////////////////////////// 
    this.radioData = "int";
    setInterval(() => { this.date = new Date();
     }, 1);
     
  }
  
  //////////////////Control Search design//////////////////////////
  onSearch() {
    this.search = true;

  }

  resetSearch() {
    this.search = false;
  }


///////////////////////////////////////////////////////////////////////////////////



//change checkbox value
  onsubmitNo() {
    document.getElementById('extVisitor').style.display="block"
    document.getElementById('intVisitor').style.display="none"
    this.radioFlag = true;
   }
  onSubmitYes(){
    document.getElementById('extVisitor').style.display="none"
    document.getElementById('intVisitor').style.display="block"

  }





Vdata:IVisitor[]=[]
//////////////////////Get Data From serve/////////////////////////
getData(){
  this.service.getVisitorsData().subscribe(result => {
    for(var key in result){
     this.names.push(result[key].card_number);
     this.Vdata=result
    }
  
}, error => console.error(error));
}

VisitorCards:IVisitorCard[]=[]
CardType:ICardtype[]=[]
cardtype;




ngOnInit() {
 console.log(this.date)
this.getData();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
        
    );

///////////////////////Search VisitorCard////////////////////////////
    this.service.getVisitorCard().subscribe(result => {
      for (let i in result){
        this.VisitorCards.push(result[i])
        }
        
  }, error => console.error(error));
   



///////////////////////Search CardType////////////////////////////
  this.service.getCardType().subscribe(result => {
    for (let i in result){
      this.CardType.push(result[i])
     }
      
}, error => console.error(error));
 


  }
  /////////////////////////Filter Data Returned/////////////////////////////// 
  private _filter(value: string): string[] {
    for (var i=0; i<this.names.length; i++) {
      if(this.names[i]!=value){
      //  console.log("NotFound");
      //  this.visits;
      }
      const filterValue = value.toLowerCase();
      return this.names.filter(option => 
        option.toLocaleLowerCase().indexOf(filterValue) === 0
        
        );
    }
  }

  //////////////////////Get Cardnumber form dropdown ///////////////////////
 resetForm(){
 this.fname=""
 this.lName=""
 this.mobile=""
 this.cardNo=""
 this.nationality=""
 this.Cnumber=""
 this.vReason=""
 this.Hmail=""
 this.Ctype=""
 this.cardNo=""
 }
  visitor:IVisitor[]=[]
  visit:IVisits[]=[]
  visitor_id :number
/////////////////////////////////////Add Visitor///////////////////////////////////

onAddVisit(){
  if(this.flagIfSelected==true&&this.fname!=""&&this.lName!=""&&this.vReason!=""&&this.Hmail!=""){
    console.log ("search for someone visit us before ")
    this.service.SearchbyCardnumber(this.searchCard).subscribe(res=>{
      if(res){
        for (var i=0; i<res.length; i++) {
          this.visitor_id=res[i].id
          console.log(this.visitor_id)
          console.log("visitor_id: "+this.visitor_id+","+"date"+this.date+","+"reason: "+this.vReason+","+"host mail"+this.Hmail)
         this.postservice.AddVisit(this.visitor_id,this.date,this.vReason,this.Hmail,this.cardNo).subscribe(res=>{
          if(res){
            console.log(res)
            this.toast.success('Added successfully'); 
            this.childModal.hide();
            this.resetForm()
            
          }else{this.toast.error("error while adding visit"+res)}
          
    
          })
        }
      }else{this.toast.error("error while adding visit"+res)}
     
    })
   
        
    }
   if(this.flagIfSelected==false&&this.fname!=""&&this.lName!=""&&this.vReason!=""&&this.Hmail!=""){
    console.log ("search for someone doesnot visit us before ")
    console.log(this.fname,this.lName,this.mobile,this.Cnumber,2,this.nationality,this.radioFlag);
    console.log(this.Ctype)

    //--------------------First search for ID type ----------------------//
  this.service.searchCardTypebyname(this.Ctype).subscribe(res=>{
    if(res){
      console.log(res[0].id)
    
   //--------------------Then Add new visitor and fill all the required parameters ----------------------//
    this.postservice.AddVisitor(this.fname,this.lName,this.mobile,this.Cnumber,res[0].id,this.nationality,this.radioFlag).subscribe(res=>{
     if(res){
 //--------------------Then get Id of Card number as it require as a parameter while adding visit  ----------------------//
 this.service.SearchbyCardnumber(this.Cnumber).subscribe(result=>{
   if(result){
    for (var i=0; i<result.length; i++) {
    
      //--------------------Then get Visitor Card as it require as a parameter while adding visit  ----------------------//
          this.service.searchVCardbyCardno(this.cardNo).subscribe(res=>{
            if(res){
              var Card:IVisitorCard=res
            console.log("Card id is : "+Card[0].id)
      
      //--------------------Finally after getting all required parameters new Visit will be added ----------------------//
            this.postservice.AddVisit(result[0].id,this.date,this.vReason,this.Hmail,Card[0].id).subscribe(res=>{
                //console.log(res)
                if(res){
                  this.toast.success('Added successfully');
                  this.childModal.hide();
                  this.resetForm();
                  }
            })
            }
            else{ alert("error"+res);}
            
          })
        
        }
   }
   else{
    alert("error"+res);
   }

 }
 
 )
     }else{
       alert("error"+res);
     }
     
   })
    }
    else{
      this.toast.error("Cannot Add Visitor"+res)
    }
    
  })

   }
   else{
     this.toast.error("Please Fill All Fields")
   }
}



 onItemSelected(){
 this.service.SearchbyCardnumber(this.searchCard).subscribe(result=>{
   console.log("search by card result :"+result)
   for (var i=0; i<result.length; i++) {
    // this.visitor.push(result[i])
    // this.visitor_id=result[i].id;
   this.Cnumber = result[i].card_number ;
   this.mobile=result[i].mobile;
   this.fname= result[i].first_name ;
  this.lName = result[i].last_name ;
  this.nationality= result[i].nationality ;
   
   this.service.searchCardTypebyID(result[i].card_type).subscribe((res)=>{
    var card:ICardtype = res
       this.nrSelect= card[0].name
       this.Ctype=card[0].name
      for(let i;i<this.CardType.length;i++){
        this.CardType[i].name = card[0].name
      }
       console.log("type selected is "+this.nrSelect)

   })
   }
 })
  this.flagIfSelected=true;
  
 }


 

}
