import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {
    path:"contact",
    component:ContactComponent,
    children: [
      {path:"add",component:AddComponent},
      {path:"edit/:id",component:AddComponent}
    ]
  },
  {path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path:"**",component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
