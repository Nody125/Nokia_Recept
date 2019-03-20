
import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective } from 'ngx-bootstrap/modal'
import { ToastrService } from 'ngx-toastr';
import { PostdataService } from 'src/app/ApiCall/postdata.service';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.css'],
  exportAs:'newUser'
})
export class AddnewuserComponent implements OnInit {

  
  ngOnInit() {
  }
  constructor(private tostr:ToastrService,private service:PostdataService){

  }
  
  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {      
      this.childModal.show(); 
  }

  public hideChildModal(): void {
      this.childModal.hide();
  }


  onClickSubmit(e){
    var firstname = e.target.elements[0].value;
    var lastname = e.target.elements[1].value;
    var password =e.target.elements[2].value;
    var email = e.target.elements[3].value;
    var nokiaId = e.target.elements[4].value;
    var phone = e.target.elements[5].value;
    var BuildingID = e.target.elements[6].value;
    var Category = e.target.elements[7].value;

    
     if (firstname!=''&&lastname!=''&&nokiaId!=''&&email!=''&&phone!=''&&password!=''&&BuildingID!=''&&Category!='') {
      // console.log(firstname);
      this.service.AddUser(firstname,lastname,phone,email,password,Category,nokiaId,BuildingID).subscribe((res)=>{
       console.log(res)
       },
       err=>{
       console.log(" Error..",err);
        } )
       this.tostr.success('Created successfully');
       this.childModal.hide();
     }
     else 
     alert('Please Fill all Fields')
 
   }


}
