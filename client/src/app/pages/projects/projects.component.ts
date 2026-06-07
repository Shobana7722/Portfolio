import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  isLoading = true;
  activeFilter = 'All';
  filters = ['All', 'Angular', 'React', 'Node.js'];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.filteredProjects = projects;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
        this.isLoading = false;
      }
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    if (filter === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => 
        p.technologies.some(t => t.toLowerCase().includes(filter.toLowerCase()))
      );
    }
  }
}
