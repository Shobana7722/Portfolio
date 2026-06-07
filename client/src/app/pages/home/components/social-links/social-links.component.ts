import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  socials = [
    { name: 'GitHub', url: 'https://github.com/Shobana7722', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/r-shobana/?skipRedirect=true', icon: 'linkedin' },
    { name: 'Twitter / X', url: 'https://x.com/Shoban16077095', icon: 'twitter' }
  ];
}
