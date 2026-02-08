import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-safty',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './safty.component.html',
  styleUrl: './safty.component.css'
})
export class SaftyComponent {}
