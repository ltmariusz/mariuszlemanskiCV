import { Component, OnInit } from '@angular/core';
import { Experience, ManageCvService } from 'src/app/services/manage-cv.service';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {

  constructor(private manageCvService:ManageCvService) { }

  experience!:Array<Experience>

  ngOnInit(): void {
     this.manageCvService.getExperience().subscribe(data => {
      this.experience = data
      console.log(this.experience)
      
    })
  }
}
