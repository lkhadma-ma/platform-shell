import { Component, OnInit } from '@angular/core';
import { SectionComponent } from "@shared/ui/section/section.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [SectionComponent]
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear()

  constructor() { }

  ngOnInit() {
  }

}
