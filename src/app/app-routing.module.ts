import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

// use a custom url matcher to regex that username starts with @
export function username(url: UrlSegment[]) {
  return url.length === 1 && url[0].path.match(/^@.+/g) ? ({consumed: url}) : null;
}

const routes: Routes = [
  {
    component: AccountComponent,
    path: 'account/:id'
  },
  // naive approach to match on anything for username
  // {
  //   component: ProfileComponent,
  //   path: ':username'
  // },
  {
    component: ProfileComponent,
    matcher: username
  },
  {
    component: HomeComponent,
    path: ''
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
