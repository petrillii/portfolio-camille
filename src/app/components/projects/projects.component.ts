import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ProjectsService } from './projects.service';
import { Projects } from './projects.model';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(private productService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.productService.obterProjetos();
  }
}
