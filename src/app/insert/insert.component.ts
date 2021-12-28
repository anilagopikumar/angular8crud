import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private restService:RestService,private toastr:ToastrService) { }
  userDetails!: FormGroup;
  payload:any;
  details() {
    this.userDetails=this.fb.group({
      name:new FormControl(),
      roll:new FormControl(),
      phone:new FormControl() 
    });
    
  }
  save( ) {
    if(this.restService.payload != null) {
      const index = this.restService.index;
      const payload = this.userDetails.value;
      this.restService.updateDataAtIndex(index,payload)
      this.restService.payload = null;
      this.toastr.success('Item!','Successfully Updated the!')
    } 
    else {
    this.restService.setData(this.userDetails.value);
    this.toastr.success('Item!','Successfully Inserted the!')
    }
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    if(this.restService.payload === null) {
      this.details();
    } else {
        this.payload = this.restService.payload;
        this.userDetails=this.fb.group({
          name:new FormControl(this.payload.name),
          roll:new FormControl(this.payload.Roll),
          phone:new FormControl(this.payload.phone) 
        });
    }
  }
}
