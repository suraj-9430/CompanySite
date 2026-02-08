import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directormessage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './directormessage.component.html',
  styleUrl: './directormessage.component.css'
})
export class DirectormessageComponent {}
