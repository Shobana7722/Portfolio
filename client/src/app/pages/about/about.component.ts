import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  strengths = [
    'Quick learner with ability to adapt to new technologies',
    'Strong problem-solving and analytical abilities',
    'Excellent teamwork and communication skills',
    'Commitment to continuous learning and professional growth',
    'Passionate about building innovative software solutions'
  ];

}
