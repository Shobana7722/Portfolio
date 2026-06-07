import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  
  // Path to the resume in the assets folder
  private readonly resumeUrl = 'assets/resume/SHOBANA_R_Resume.pdf';

  constructor() { }

  /**
   * Triggers a download of the resume file.
   */
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'SHOBANA_R_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  /**
   * Opens the resume file in a new browser tab.
   */
  viewResume(): void {
    window.open(this.resumeUrl, '_blank');
  }
}
