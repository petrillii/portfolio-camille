import { Component } from '@angular/core';

@Component({
  selector: 'app-appresentation',
  standalone: true,
  imports: [],
  templateUrl: './appresentation.component.html',
  styleUrl: './appresentation.component.scss'
})
export class AppresentationComponent {
  scrollToAbout() {
    const element = document.getElementById('about-me');
    if (element)
      element.scrollIntoView({ behavior: 'smooth' });
  }
}
