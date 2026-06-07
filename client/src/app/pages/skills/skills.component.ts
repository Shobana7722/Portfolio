import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  programmingSkills = [
    { name: 'Java' },
    { name: 'C' },
    { name: 'JavaScript' }
  ];

  webSkills = [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'DOM' },
    { name: 'Angular' },
    { name: 'ASP.NET' },
    { name: 'Node.js' },
    { name: 'J2EE' }
  ];

  databaseSkills = [
    { name: 'MySQL' },
    { name: 'MSSQL' }
  ];

  toolsSkills = [
    { name: 'VS Code' },
    { name: 'Eclipse' },
    { name: 'Visual Studio 2022' },
    { name: 'Git' },
    { name: 'GitHub' }
  ];
}
