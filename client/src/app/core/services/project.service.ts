import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private mockProjects: Project[] = [
    {
      id: 'the-road-travel-website',
      title: 'The Road - Interactive Travel Website 🌍✈️',
      tagline: 'Explore the world through immersive digital storytelling',
      description:
        'The Road is a visually immersive single-page tourism website designed to inspire wanderlust through engaging animations, interactive elements, and a modern responsive layout. The website combines creative visual storytelling with smooth user interactions to deliver an engaging travel exploration experience across all devices.',
      imageUrl: 'assets/images/tour.png',
      images: ['assets/images/tour.png'],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Design',
        'CSS Animations',
        'CSS Keyframes',
        'DOM Manipulation',
        'Flexbox',
        'CSS Grid',
      ],
      projectUrl: 'https://tour-webiste-mu.vercel.app/',
      githubUrl: 'https://github.com/Shobana7722/TourWebiste',
      featured: true,
      challenge:
        "The goal was to create a highly interactive and visually appealing tourism website that captures users' attention while maintaining excellent performance and responsiveness. Balancing complex animations, video backgrounds, and rich content with a seamless user experience across desktop, tablet, and mobile devices was a key challenge.",
      solution:
        'The website was built using HTML5, CSS3, and JavaScript, leveraging advanced CSS animations, keyframes, transforms, and responsive design techniques. Interactive navigation menus, 3D parallax header effects, flip-card tour showcases, customer story sections, and a video background were integrated to create an immersive user experience while ensuring optimal responsiveness and accessibility.',
      highlights: [
        'Interactive navigation menu with smooth animations',
        'Dynamic hero section with 3D parallax effects',
        'Flip-card tour package showcases',
        'Customer testimonials and story sections',
        'Full-screen video background integration',
        'Responsive design optimized for all screen sizes',
        'Modern UI with engaging visual storytelling',
        'Interactive contact form with custom styling',
      ],
      features: [
        'Single-page responsive website',
        'Animated navigation system',
        '3D CSS transform effects',
        'Tour package showcase cards',
        'Video background section',
        'Customer review section',
        'Smooth scrolling interactions',
        'Contact and inquiry form',
        'Mobile-friendly layout',
        'Cross-browser compatibility',
      ],
      timeline: 'Completed',
      metrics: [
        { value: '100%', label: 'Responsive Design' },
        { value: '10+', label: 'Interactive Components' },
        { value: '3D', label: 'Parallax Effects' },
        { value: 'HTML/CSS/JS', label: 'Core Technologies' },
      ],
    },
  ];

  constructor() {}

  /**
   * Retrieves all projects, simulating a network delay.
   */
  getProjects(): Observable<Project[]> {
    return of(this.mockProjects).pipe(delay(800));
  }

  /**
   * Retrieves featured projects for the home page.
   */
  getFeaturedProjects(): Observable<Project[]> {
    const featured = this.mockProjects.filter((p) => p.featured);
    return of(featured).pipe(delay(600));
  }

  /**
   * Retrieves a specific project by ID.
   */
  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.mockProjects.find((p) => p.id === id);
    return of(project).pipe(delay(500));
  }
}
