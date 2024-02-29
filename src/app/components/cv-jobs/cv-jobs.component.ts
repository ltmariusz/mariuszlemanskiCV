import { Component, OnInit } from '@angular/core';
import {
  Experience,
  ManageCvService,
} from 'src/app/services/manage-cv.service';

@Component({
  selector: 'app-cv-jobs',
  templateUrl: './cv-jobs.component.html',
  styleUrls: ['./cv-jobs.component.scss'],
})
export class CvJobsComponent implements OnInit {
  constructor(private manageCvService: ManageCvService) {}

  experience!: Array<Experience>;

  ngOnInit(): void {
    this.manageCvService.getExperience().subscribe((data) => {
      this.experience = data;
      console.log(this.experience);
    });
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  getPictureNames(pictureName: string | string[] | undefined): string[] {
    if (typeof pictureName === 'string') {
      return [pictureName]; // Zwraca tablicę z jednym elementem, jeśli jest string
    } else if (Array.isArray(pictureName)) {
      return pictureName; // Zwraca tablicę, jeśli pictureName jest już tablicą
    }
    return []; // Zwraca pustą tablicę, jeśli pictureName jest undefined
  }
}
