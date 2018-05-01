import { NavController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { TestPage } from '../test/test';
import { Http } from '@angular/http';
import 'rxjs';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  private basePath:string = '/cerva';
  public bears: Array<{}>;

  public url:string;

  constructor(public navCtrl: NavController, public http: Http, public _platform:Platform ) {

    if(this._platform.is('Cordova')){
        this.basePath = 'http://localhost:5000/api';
    }

    this.http.get(this.basePath + '/todo')
              .map(res => res.json())
              .subscribe(data =>{
                this.bears = data;
              });

  }
  goToTestePage(){
    this.navCtrl.push(TestPage)
  }
  getBeerDetails(id){
    // alert(id);
    this.url ='http://localhost:5000/api/cerveja/';
    this.navCtrl.push(TestPage, {
      'beer_id' : id,
      'api_url' : this.url
    });
  }
}
