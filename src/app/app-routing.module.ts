import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {path: 'dialog',
  loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule)
  },
  {path: 'friends',
  loadChildren: () => import('./friend-list/friend.module').then(m => m.FriendModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
