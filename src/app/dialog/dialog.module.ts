import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBgComponent } from './dialog-bg/dialog-bg.component';
import { DialogInputComponent } from './dialog-input/dialog-input.component';
import { FriendBlockComponent } from './friend-block/friend-block.component';
import { MessageComponent } from './message/message.component';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogRoutingModule,
    SharedModule
  ],
  declarations: [
    DialogComponent,
    DialogBgComponent,
    DialogInputComponent,
    FriendBlockComponent,
    MessageComponent,
    ModalProfileComponent
  ]
})
export class DialogModule { }
