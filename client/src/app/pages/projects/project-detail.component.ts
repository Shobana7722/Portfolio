import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project?: Project;
  errorMessage = '';
  isLoading = true;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        this.errorMessage = 'Project ID is missing.';
        this.isLoading = false;
        return;
      }

      this.projectService.getProjectById(id).subscribe({
        next: (project) => {
          if (!project) {
            this.errorMessage = 'Project not found.';
          } else {
            this.project = project;
          }
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Unable to load project details.';
          this.isLoading = false;
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['/projects']).catch((err) => {
      console.error('Navigation failed:', err);
      window.history.back();
    });
  }
}
