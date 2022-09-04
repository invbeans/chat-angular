import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { FocusDirective } from './directives/focus.directive';
import { ModalService } from './services/modal.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModalComponent,
    ScrollBarComponent,
    FocusDirective
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalComponent,
    ScrollBarComponent,
    FocusDirective
  ]
})
export class SharedModule { }
