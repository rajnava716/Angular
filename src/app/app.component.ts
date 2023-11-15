import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataImportService } from './services/data-import.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'import-file-upload';

  progress: number = 0;

  constructor(private dataImportService: DataImportService) {}

  startImport() {
    this.progress = 0;

    this.dataImportService.startImport().subscribe(
      (response) => {
        console.log(response); // Log the immediate response
        this.pollProgress(); // Start polling for progress updates
      },
      (error) => {
        console.error('Error during data import', error);
      }
    );
  }

  private pollProgress() {
    // Periodically check for progress
    const intervalId = setInterval(() => {
      this.dataImportService.getProgress().subscribe(
        (progress) => {
          this.progress = progress;
          if (this.progress === 100) {
            console.log('Import completed');
            clearInterval(intervalId);
          }
        },
        (error) => {
          console.error('Error getting progress', error);
          clearInterval(intervalId);
        }
      );
    }, 1000);
  }
}