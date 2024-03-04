import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import {CommonModule} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Init } from 'v8';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  tab! : FaceSnap[];

  //constructeur. Angular va instancier l'objet par lui meme par l'injection de dependance
  constructor(private tabFacesnapRecupDepuisLeService : FaceSnapsService ){}

  ngOnInit(): void {
    this.tab = this.tabFacesnapRecupDepuisLeService.lesFacesSnaps;
  }
}
