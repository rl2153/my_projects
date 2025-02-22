import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tpo-project',
  standalone: true,
  imports: [],
  templateUrl: './tpo-project.component.html',
  styleUrl: './tpo-project.component.css'
})
export class TpoProjectComponent implements OnInit{
  images: string[] = []
  currentIndex = 0

  constructor(public globalService : GlobalService) {}
  
  ngOnInit(): void {
    const basePath = `${this.globalService.mediaFolder}/TPO/`; // Base folder path
    console.log('image path: '+basePath)
    for (let i = 1; i <= 13; i++) {
      this.images.push(`${basePath}image${i}.png`);
    }
    this.autoSlide()
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  autoSlide() {
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

}
