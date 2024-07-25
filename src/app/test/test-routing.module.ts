import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  
  {
    path:'main',
    component:MainComponent,
    children:[
      {
        path:'my',
        component:MyComponentComponent
      },
    ]
  },
  {
    path:'side',
    component:PruebaComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
