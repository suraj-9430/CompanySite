import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"/Home",pathMatch:"full"},
    {path:"Home",loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent),title:"Home"},
    {path:"project",loadComponent:()=>import('./projects/projects.component').then(m=>m.ProjectsComponent),title:"Projects"},
    {path:"imagegallary",loadComponent:()=>import('./image-gallary/image-gallary.component').then(m=>m.ImageGallaryComponent),title:"Gallary"},
    {path:"dmessage",loadComponent:()=>import('./directormessage/directormessage.component').then(m=>m.DirectormessageComponent),title:"Director Message"},
    {path:"aboutus",loadComponent:()=>import('./About/aboutus/aboutus.component').then(m=>m.AboutusComponent),title:"About US"},
    {path:"aim",loadComponent:()=>import('./About/aim/aim.component').then(m=>m.AimComponent),title:"Aim"},
    // {path:"vision",loadComponent:()=>import('./About/vision/vision.component').then(m=>m.VisionComponent),title:"Vision"},
    {path:"mission",loadComponent:()=>import('./About/mission/mission.component').then(m=>m.MissionComponent),title:"mission"},
    {path:"safety",loadComponent:()=>import('./About/safty/safty.component').then(m=>m.SaftyComponent),title:"safety Measures"},
    // {path:"whyus",loadComponent:()=>import('./About/whyus/whyus.component').then(m=>m.WhyusComponent),title:"WHY US"},
    {path:"contact",loadComponent:()=>import('./contactmain/contactmain.component').then(m=>m.ContactmainComponent),title:"contact Page"},
    {path:"**",component:PageNotFoundComponent,title:"error-404"}
];
