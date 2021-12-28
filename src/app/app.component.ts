import { Component ,OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data:any;
  title = 'CrudAplicationBput';
  constructor(private rest:RestService, private toastr:ToastrService) { }
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
  ngOnInit(){
    this.reciveData();
  }
}
