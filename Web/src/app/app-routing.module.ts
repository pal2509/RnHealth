import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CreateNewsFormComponent } from './create-news-form/create-news-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataFormComponent } from './data-form/data-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RadonInfoComponent } from './radon-info/radon-info.component';
import { ReadingFormComponent } from './reading-form/reading-form.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ReadingsGetEmailComponent } from './readings-get-email/readings-get-email.component';
import { ReadingsUserListComponent } from './readings-user-list/readings-user-list.component';
import { SubmitReadingComponent } from './submit-reading/submit-reading.component';
import { AvaliationsListComponent } from './avaliations-list/avaliations-list.component';
import { NewsListComponent } from './news-list/news-list.component';
import { LocationsMapComponent } from './locations-map/locations-map.component';
import { NutsDashboardComponent } from './nuts-dashboard/nuts-dashboard.component';
import { FormInfoComponent } from './form-info/form-info.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'avaliation', component: MapComponent },
  { path: 'avaliation-info', component: FormInfoComponent },
  { path: 'reading', component: ReadingFormComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reading-list',
    component: ReadingListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'readings/:email', component: ReadingsUserListComponent },
  { path: 'radon', component: RadonInfoComponent },

  { path: 'submit-new', component: CreateNewsFormComponent, canActivate:[AuthGuard] },
  { path: 'avaliation-list', component: AvaliationsListComponent, canActivate:[AuthGuard] },
  { path: 'locations', component: LocationsMapComponent, canActivate:[AuthGuard] },
  { path: 'nuts-dashboard', component: NutsDashboardComponent, canActivate:[AuthGuard] },
  { path: 'news-list', component: NewsListComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
