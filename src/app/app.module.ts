import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { MessageComponent } from './dialog/message/message.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FriendBlockComponent } from './dialog/friend-block/friend-block.component';
import { DialogBgComponent } from './dialog/dialog-bg/dialog-bg.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalProfileComponent } from './dialog/modal-profile/modal-profile.component';
import { DialogInputComponent } from './dialog/dialog-input/dialog-input.component';
import { ScrollBarComponent } from './shared/components/scroll-bar/scroll-bar.component';
import { FocusDirective } from './shared/directives/focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelfProfileComponent } from './main-page/self-profile/self-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessageComponent,
    FriendListComponent,
    DialogComponent,
    MainPageComponent,
    FriendBlockComponent,
    DialogBgComponent,
    ModalComponent,
    ModalProfileComponent,
    DialogInputComponent,
    ScrollBarComponent,
    FocusDirective,
    SelfProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
