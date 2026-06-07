import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
  },
  {
    path: 'projects',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent,
      ),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./pages/projects/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./pages/education/education.component').then(
        (m) => m.EducationComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
