import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements OnInit{
  constructor(private formbuilder:FormBuilder){}
  subform!:FormGroup
  ngOnInit(): void {
    this.subform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
    });
  }
  
  sub(){
    alert("Thank you for subscribe")
  }

}
