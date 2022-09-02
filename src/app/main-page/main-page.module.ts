import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SelfProfileComponent } from './self-profile/self-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ],
  declarations: [
    MainPageComponent,
    SelfProfileComponent
  ]
})
export class MainPageModule { }
