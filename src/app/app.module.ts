import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MessageComponent } from './components/message/message.component';
import { FriendListComponent } from './pages/friend-list/friend-list.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FriendBlockComponent } from './components/friend-block/friend-block.component';
import { DialogBgComponent } from './components/dialog-bg/dialog-bg.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalProfileComponent } from './components/modal-profile/modal-profile.component';
import { DialogInputComponent } from './components/dialog-input/dialog-input.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';
import { FocusDirective } from './directives/focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FocusDirective
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
