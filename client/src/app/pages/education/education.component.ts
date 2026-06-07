import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educations = [
    {
      degree: "Bachelor's Degree in Aeronautical Engineering",
      institution: 'PSN College of Engineering and Technology, Tirunelveli',
      period: '2020 – 2024',
      description: 'CGPA: 7.91'
    }
  ];

  certifications = [
    {
      name: 'Java Programming',
      issuer: 'Accord InfoMatrix',
      year: '2024'
    },
    {
      name: 'Web Designing',
      issuer: 'Accord InfoMatrix',
      year: '2024'
    },
    {
      name: 'Dotnet',
      issuer: 'Accord InfoMatrix',
      year: '2024'
    }
  ];
}
