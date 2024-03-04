import { Injectable } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    lesFacesSnaps : FaceSnap[] = [
        {
          title: 'Le plombier',
          description: 'Un gars rouge',
          imageUrl: "https://cdn.pixabay.com/photo/2017/08/28/16/17/mario-2690254_1280.jpg",
          createdDate: new Date(),
          snaps: 300,
          location: 'Royaume Champignon'
        },
        {
          title: 'Le Dino',
          description: 'Un dinosaure vert',
          imageUrl: "https://cdn.pixabay.com/photo/2016/07/30/14/28/yoschi-1557253_1280.jpg",
          createdDate: new Date(),
          snaps: 0,
          location: 'afghanistan'
        } 
      ]
}