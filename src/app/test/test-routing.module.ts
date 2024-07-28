import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SideBarComponent } from './sidebar/sidebar.component';

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
    component:SideBarComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
