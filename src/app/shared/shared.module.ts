import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { ModalService } from './services/modal.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ModalComponent,
    FocusDirective
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalComponent,
    FocusDirective
  ]
})
export class SharedModule { }
