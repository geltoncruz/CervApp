import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http/';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public basePath:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    let basePath = this.navParams.get('api_url')
    let beer_id = this.navParams.get('beer_id');
    // alert(basePath +`/` beer_id);
    alert(`${basePath}/${beer_id}`);
    let url = `${basePath}${beer_id}`;
    this.http.get(url)
    .map(res => res.json())
    .subscribe(data =>{
      console.log(data);
      let cervaItem = data;
    });

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

  }

}
