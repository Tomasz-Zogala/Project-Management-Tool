import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [project1, project2, project3, project4, project5, project6];

  getStatusName(status: ProjectStatus): string {
    return ProjectStatus[status];
  }

  getPriorityName(status: ProjectPriority): string {
    return ProjectPriority[status];
  }

}

// Temporary model
enum ProjectPriority {
  Low,
  Medium,
  High,
}

enum ProjectStatus {
  NotStarted,
  InProgress,
  Completed,
  Archived,
}

interface Project {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectTeam: string[];
  projectPriority: ProjectPriority;
  projectStatus: ProjectStatus;
  projectTasks: string[];
}

// Flat Data

const project1: Project = {
  projectId: 1,
  projectName: 'Projekt A',
  projectDescription: 'Opis projektu A',
  projectTeam: ['User1', 'User2'],
  projectPriority: ProjectPriority.High,
  projectStatus: ProjectStatus.NotStarted,
  projectTasks: ['Zadanie 1', 'Zadanie 2'],
};

const project2: Project = {
  projectId: 2,
  projectName: 'Projekt B',
  projectDescription: 'Opis projektu B',
  projectTeam: ['User3', 'User4'],
  projectPriority: ProjectPriority.Medium,
  projectStatus: ProjectStatus.Completed,
  projectTasks: ['Zadanie 3', 'Zadanie 4'],
};

const project3: Project = {
  projectId: 3,
  projectName: 'Projekt C',
  projectDescription: 'Opis projektu C',
  projectTeam: ['User5', 'User6'],
  projectPriority: ProjectPriority.Low,
  projectStatus: ProjectStatus.Archived,
  projectTasks: ['Zadanie 5', 'Zadanie 6'],
};

const project4: Project = {
  projectId: 4,
  projectName: 'Projekt D',
  projectDescription: 'Opis projektu D',
  projectTeam: ['User7', 'User8'],
  projectPriority: ProjectPriority.High,
  projectStatus: ProjectStatus.InProgress,
  projectTasks: ['Zadanie 7', 'Zadanie 8'],
};

const project5: Project = {
  projectId: 5,
  projectName: 'Projekt E',
  projectDescription: 'Opis projektu E',
  projectTeam: ['User9', 'User10'],
  projectPriority: ProjectPriority.Medium,
  projectStatus: ProjectStatus.Completed,
  projectTasks: ['Zadanie 9', 'Zadanie 10'],
};

const project6: Project = {
  projectId: 6,
  projectName: 'Projekt F',
  projectDescription: 'Opis projektu F',
  projectTeam: ['User11', 'User12'],
  projectPriority: ProjectPriority.Low,
  projectStatus: ProjectStatus.Archived,
  projectTasks: ['Zadanie 11', 'Zadanie 12'],
};

