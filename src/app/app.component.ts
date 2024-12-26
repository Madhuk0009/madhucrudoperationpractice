import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private shiva:ApiService){}

  obser1:any;
  obser(){
    this.shiva.Observable$.subscribe(res=>{
      console.log(res,"this observable");
      this.obser1=res;
    })
  }
  save:any;
  savedata(){
    this.shiva.Observable$.next(this.save);
  }

  ngOnInit() {
    this.obser();
  }

}
