import { Component } from '@angular/core';
import { TpoProjectComponent } from "../tpo-project/tpo-project.component";
import { DungeonsnakefightersProjectComponent } from "../dungeonsnakefighters-project/dungeonsnakefighters-project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TpoProjectComponent, DungeonsnakefightersProjectComponent],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.css'
})
export class ProjectsContainerComponent {

}
