import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aim',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aim.component.html',
  styleUrl: './aim.component.css'
})
export class AimComponent {}
