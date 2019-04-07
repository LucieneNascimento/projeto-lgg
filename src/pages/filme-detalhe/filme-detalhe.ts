import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Filme } from '../../model/filme';

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
})
export class FilmeDetalhePage {

  filme: Filme;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.filme = this.navParams.get('filme');

  }
 
  }