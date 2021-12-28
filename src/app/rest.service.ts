import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  index =0;
  payload=null;
  constructor() { }
  data = [
    {name:'Anila' , roll: 1, phone:7674017598},
    {name:'Hemanth' , roll: 2, phone:9573006076},
    {name:'Gopikumar' , roll: 3, phone:9963833288},
  ];
  getData() {
    // return [
    //   {name:'Anila' , roll: 1, phone:7674017598},
    //   {name:'Hemanth' , roll: 2, phone:9573006076},
    //   {name:'Gopikumar' , roll: 3, phone:9963833288},
    // ];
    return this.data;
  }
  setData(payload: any){
    this.data.push(payload);
  }
  upDateData(i: any, payload: any) {
    this.index=1;
    this.payload=payload;
  } 
  getPayload() {
    return this.payload;
  }
  updateDataAtIndex(index:any,payload:any) {
    this.data.splice(index,1,payload)
  }
}
