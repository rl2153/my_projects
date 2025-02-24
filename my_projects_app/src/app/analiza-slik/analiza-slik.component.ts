import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-analiza-slik',
  standalone: true,
  imports: [],
  templateUrl: './analiza-slik.component.html',
  styleUrl: './analiza-slik.component.css'
})
export class AnalizaSlikComponent implements OnInit{
  constructor(public globalService : GlobalService) {}

  imagePath = ''
  pdfPath = ''

  ngOnInit(): void {
    this.imagePath = `${this.globalService.mediaFolder}/analiza_slik/image.png`;
    this.pdfPath = `${this.globalService.mediaFolder}/analiza_slik/ERK2024.pdf`;

  }
}
