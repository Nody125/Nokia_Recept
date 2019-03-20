import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/ApiCall/getdata.service';
import { IVisitor } from 'src/app/DataModel/visitor.model';
import { IVisits } from 'src/app/DataModel/visits.model';
import { ICardtype } from 'src/app/DataModel/cardType.model';
import { IVisitorCard } from 'src/app/DataModel/visitorCard.model';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  show_results;
  disableButton;
  constructor(private service:GetdataService) {
    this.show_results = false;
    this.disableButton=false;
  }
  visitors:IVisits[]=[]
  VCardno:any
  cardType:any
  ngOnInit() {
    
  }
  onSearch() {
  this.service.searchVisitByVisitorId().subscribe((res)=>{
    for (let i in res){
    this.visitors.push(res[i])
    console.log(this.visitors[i])
    this.service.searchCardTypebyID(this.visitors[i].visitor.card_type).subscribe(res=>{
      var card:ICardtype = res
    this.cardType=card[0].name
   // console.log(this.cardType)
    })
    this.service.searchVCardbyID(this.visitors[i].visitorCard_id).subscribe(res=>{
        this.VCardno=res[0].cardNumber

    })
    }
   
  }),console.error();
  
    this.show_results = true;
    this.disableButton=true
  }


}
