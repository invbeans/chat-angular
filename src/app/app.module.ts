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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessageComponent,
    FriendListComponent,
    DialogComponent,
    MainPageComponent,
    FriendBlockComponent,
    DialogBgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
