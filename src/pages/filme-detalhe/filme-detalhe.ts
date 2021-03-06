import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Filme } from '../../model/filme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../../model/post';

@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
})
export class FilmeDetalhePage {

  filme: Filme;

  post: Post[] = [];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

    this.filme = this.navParams.get('filme');
  }

  getPost(){

    var postRef = firebase.firestore().collection("post");

    postRef.get().then(query => {
      query.forEach(doc => {
        let p = new Filme();
        p.id = doc.id;
        p.setDados(doc.data());
        this.post.push();
      });
    });
    
  }
    
 
  }