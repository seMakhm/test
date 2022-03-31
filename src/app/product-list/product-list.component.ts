import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  choosecatphone() {
    var choosencat = 'phone';
    window.alert(choosencat);
  }
  choosecatbottle() {
    var choosencat = 'bottle';
    window.alert(choosencat);
  }
  choosecatwatch() {
    var choosencat = 'watch';
    window.alert(choosencat);
  }
  choosecatcamera() {
    var choosencat = 'camera';
    window.alert(choosencat);
  }
  choosecatpaper() {
    var choosencat = 'paper';
    window.alert(choosencat);
  }
  like(){
    
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
