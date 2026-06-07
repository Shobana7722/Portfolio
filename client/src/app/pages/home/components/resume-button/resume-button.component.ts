import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../../../core/services/resume.service';

@Component({
  selector: 'app-resume-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-button.component.html',
  styleUrl: './resume-button.component.scss'
})
export class ResumeButtonComponent {
  constructor(private resumeService: ResumeService) {}

  downloadResume() {
    this.resumeService.downloadResume();
  }
}
