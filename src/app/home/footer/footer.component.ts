import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  subform!: FormGroup;
  currentYear = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.subform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sub(): void {
    if (this.subform.valid) {
      alert('Thank you for subscribing to our newsletter!');
      this.subform.reset();
    }
  }
}
