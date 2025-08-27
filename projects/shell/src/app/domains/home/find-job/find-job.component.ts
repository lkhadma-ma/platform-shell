import { Component, OnInit } from '@angular/core';
import { SectionComponent } from "@shared/section/section.component";

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss'],
  imports: [SectionComponent]
})
export class FindJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
