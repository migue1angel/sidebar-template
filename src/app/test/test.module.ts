import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { ButtonModule } from 'primeng/button';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    MyComponentComponent,
    PruebaComponent,
    ],
    imports: [
      CommonModule,
      TestRoutingModule,
      ButtonModule,
      PanelMenuModule
  ]
})
export class TestModule { }
