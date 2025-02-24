import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-dungeonsnakefighters-project',
  standalone: true,
  imports: [],
  templateUrl: './dungeonsnakefighters-project.component.html',
  styleUrl: './dungeonsnakefighters-project.component.css'
})
export class DungeonsnakefightersProjectComponent implements OnInit{
  constructor(public globalService : GlobalService) {}

  imagePath: string = ''
  videoPath: string = ''

  ngOnInit(): void {
    this.imagePath = `${this.globalService.mediaFolder}/dungeonsnakefighters/image.png`;
    this.videoPath = `${this.globalService.mediaFolder}/dungeonsnakefighters/unity.mp4`;
  }

  

}
