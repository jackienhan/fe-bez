import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {RegisterComponent} from '../register/register.component';
import {ProfileComponent} from '../profile/profile.component';
import {BoardUserComponent} from '../board-user/board-user.component';
import {BoardModeratorComponent} from '../board-moderator/board-moderator.component';
import {BoardAdminComponent} from '../board-admin/board-admin.component';
import {LoginComponent} from '../login/login.component';
import {UploadFilesComponent} from '../upload-files/upload-files.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'files', component: UploadFilesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
