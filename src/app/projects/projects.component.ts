import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  client: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'IOCL Tank Farm Construction',
      description: 'Complete civil and structural works for petroleum storage tank foundations and related infrastructure.',
      image: 'tank.jpeg',
      category: 'Oil & Gas',
      location: 'Gujarat',
      client: 'IOCL'
    },
    {
      id: 2,
      title: 'BPCL Refinery Expansion',
      description: 'Structural and mechanical works for refinery expansion project including boiler foundations.',
      image: 'bpcl.png',
      category: 'Industrial',
      location: 'Maharashtra',
      client: 'BPCL'
    },
    {
      id: 3,
      title: 'HPCL Storage Facility',
      description: 'Mounded storage vessel construction and associated civil infrastructure development.',
      image: 'hpcl.png',
      category: 'Oil & Gas',
      location: 'Telangana',
      client: 'HPCL'
    },
    {
      id: 4,
      title: 'Thermal Power Plant Foundation',
      description: 'Complete foundation works for thermal power plant including turbine and generator bases.',
      image: 'petrolium.jpeg',
      category: 'Power',
      location: 'Bihar',
      client: 'NTPC'
    },
    {
      id: 5,
      title: 'Industrial Building Complex',
      description: 'Multi-story industrial complex with modern facilities and infrastructure.',
      image: 'worksta.jpeg',
      category: 'Commercial',
      location: 'Hyderabad',
      client: 'Private'
    },
    {
      id: 6,
      title: 'Pipeline Infrastructure',
      description: 'Civil works for petroleum pipeline installation and pump station construction.',
      image: 'canner.jpeg',
      category: 'Oil & Gas',
      location: 'Rajasthan',
      client: 'IOCL'
    }
  ];
}
