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

  constructor(public navCtrl: NavController, public http: Http, public _platform:Platform ) {

    if(this._platform.is('Cordova')){
        this.basePath = 'http://184.171.245.138/~ladimacom/app/bears.json';
    }

    this.http.get(this.basePath + '/bears.json')
              .map(res => res.json())
              .subscribe(data =>{
                this.bears = data;
              });

  }
  goToTestePage(){
    this.navCtrl.push(TestPage)
  }
}
