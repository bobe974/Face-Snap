import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  boutonClique! : boolean;
  textBoutton! : string;

  ngOnInit(): void {
    this.boutonClique = false;
    this.textBoutton = "J'aime";
  }

  OnSnaps(){
    if(this.boutonClique == false){
      this.faceSnap.snaps++; 
      this.textBoutton = "Je n'aime plus";
      this.boutonClique = true;
    }else{
      this.faceSnap.snaps--; 
      this.textBoutton = "J'aime";
      this.boutonClique = false;
    }

  }


}
