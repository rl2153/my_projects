import { Component } from '@angular/core';
import { ProjectsContainerComponent } from "../projects-container/projects-container.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProjectsContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
