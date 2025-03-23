import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';

@Component({
  selector: 'app-home',
  imports: [NgCircleProgressModule,SliderImageComponent,FooterComponent,ContactusComponent],
  providers:[ (NgCircleProgressModule.forRoot({ }) as ModuleWithProviders<NgCircleProgressModule>).providers!,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  textItems: { title: string; subtitle: string ; path:string }[] = [
    {title:'Build the Future',subtitle:'Anand Construction is dedicated to seamlessly integrating technology with innovative designs. Our team operates with unwavering commitment to execute plans effectively and deliver the desired results.',path:"/canner.jpeg"},
    { title: '100% client Statisfaction',subtitle: "Our team is committed to ensuring that every client is completely satisfied and delighted with the final project outcome, leading to exceptional customer retention." ,path:"/stas.jpeg"},
    { title: 'Perfection and Commentment', subtitle: "Our focus on delivering exceptional quality and achieving complete customer satisfaction remains at the heart of everything we do, leaving no stone unturned in our pursuit of excellence." ,path:"/tank.jpeg"},
  

   
  ];
  currentItem = this.textItems[0];
  index: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.textItems.length;
      this.currentItem = this.textItems[this.index];
    }, 5000); 
  }


}
