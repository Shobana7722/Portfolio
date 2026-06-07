import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResumeButtonComponent } from '../resume-button/resume-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ResumeButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
