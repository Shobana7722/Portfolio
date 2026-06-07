import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private mockSkills: Skill[] = [

    // ── Programming Languages ──
    { id: 'pl1', name: 'Java',       icon: 'java',       category: 'backend',   proficiency: 80 },
    { id: 'pl2', name: 'C',          icon: 'c',          category: 'backend',   proficiency: 75 },
    { id: 'pl3', name: 'JavaScript', icon: 'javascript', category: 'frontend',  proficiency: 82 },

    // ── Web Technologies ──
    { id: 'wt1', name: 'HTML5',      icon: 'html5',      category: 'frontend',  proficiency: 90 },
    { id: 'wt2', name: 'CSS3',       icon: 'css3',       category: 'frontend',  proficiency: 85 },
    { id: 'wt3', name: 'DOM',        icon: 'dom',        category: 'frontend',  proficiency: 78 },
    { id: 'wt4', name: 'Angular',    icon: 'angular',    category: 'frontend',  proficiency: 80 },
    { id: 'wt5', name: 'ASP.NET',    icon: 'dotnet',     category: 'backend',   proficiency: 70 },
    { id: 'wt6', name: 'Node.js',    icon: 'nodejs',     category: 'backend',   proficiency: 75 },
    { id: 'wt7', name: 'J2EE',       icon: 'java',       category: 'backend',   proficiency: 68 },

    // ── Databases ──
    { id: 'db1', name: 'MySQL',      icon: 'mysql',      category: 'database',  proficiency: 80 },
    { id: 'db2', name: 'MSSQL',      icon: 'mssql',      category: 'database',  proficiency: 72 },

    // ── Developer Tools ──
    { id: 'dt1', name: 'VS Code',    icon: 'vscode',     category: 'tools',     proficiency: 90 },
    { id: 'dt2', name: 'Eclipse',    icon: 'eclipse',    category: 'tools',     proficiency: 78 },
    { id: 'dt3', name: 'Visual Studio 2022', icon: 'visualstudio', category: 'tools', proficiency: 75 },
    { id: 'dt4', name: 'Git',        icon: 'git',        category: 'tools',     proficiency: 82 },
    { id: 'dt5', name: 'GitHub',     icon: 'github',     category: 'tools',     proficiency: 80 },

  ];

  constructor() { }

  /**
   * Retrieves all skills.
   */
  getSkills(): Observable<Skill[]> {
    return of(this.mockSkills).pipe(delay(400));
  }

  /**
   * Retrieves skills filtered by category.
   */
  getSkillsByCategory(category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'): Observable<Skill[]> {
    const filtered = this.mockSkills.filter(s => s.category === category);
    return of(filtered).pipe(delay(400));
  }
}
