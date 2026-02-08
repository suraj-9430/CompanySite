import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {}
