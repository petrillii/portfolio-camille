import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  scrollToContact() {
    const element = document.getElementById('about-me');
    if (element)
      element.scrollIntoView({ behavior: 'smooth' });
  }
}
