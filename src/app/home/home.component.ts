import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SliderImageComponent,
    FooterComponent,
    ContactusComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  textItems: { title: string; subtitle: string; path: string }[] = [
    {
      title: 'Building the Future',
      subtitle: 'Anand Construction is dedicated to seamlessly integrating technology with innovative designs. Our team operates with unwavering commitment to execute plans effectively and deliver exceptional results.',
      path: 'canner.jpeg'
    },
    {
      title: '100% Client Satisfaction',
      subtitle: 'Our team is committed to ensuring that every client is completely satisfied and delighted with the final project outcome, leading to exceptional customer retention.',
      path: 'stas.jpeg'
    },
    {
      title: 'Excellence & Commitment',
      subtitle: 'Our focus on delivering exceptional quality and achieving complete customer satisfaction remains at the heart of everything we do, leaving no stone unturned in our pursuit of excellence.',
      path: 'tank.jpeg'
    }
  ];

  currentItem = this.textItems[0];
  index: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.textItems.length;
      this.currentItem = this.textItems[this.index];
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
