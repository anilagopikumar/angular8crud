import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {



  data:any;
  title = 'CrudAplicationBput';
  constructor(private rest:RestService, private toastr:ToastrService,private router: Router) { }
  reciveData() {
    this.data = this.rest.getData();
    alert(this.data);
  }
  showSuccess() {
    this.toastr.success('Item!','successfully deleted the');
  }
  delete(value: any) {
  this.data.splice(value,1);
  this.showSuccess();
  }
  insert() {
    this.router.navigate(['/insert']);
  }
  update(index: any , data: any) {
    this.rest.upDateData(index,data);
    this.router.navigate(['/insert']);
  }
  ngOnInit(){
    this.reciveData();
  }

}
