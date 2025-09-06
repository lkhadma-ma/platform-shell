import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionComponent } from "@shared/ui/section/section.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [ SectionComponent, RouterLink ]
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear()

  constructor() { }

  ngOnInit() {
  }

}
