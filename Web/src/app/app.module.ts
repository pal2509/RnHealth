import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DataFormComponent } from './data-form/data-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { ReadingFormComponent } from './reading-form/reading-form.component';
import { AvaliationComponent } from './avaliation/avaliation.component';
import { LoginComponent } from './login/login.component';
import { SubmitReadingComponent } from './submit-reading/submit-reading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReadingsUserListComponent } from './readings-user-list/readings-user-list.component';
import {MatRippleModule} from '@angular/material/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ReadingsGetEmailComponent } from './readings-get-email/readings-get-email.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateNewsFormComponent } from './create-news-form/create-news-form.component';
import { ImageService } from './images/image-service';
import { NewsListComponent } from './news-list/news-list.component';
import { RadonInfoComponent } from './radon-info/radon-info.component';
import { FooterComponent } from './footer/footer.component';
import { AvaliationsListComponent } from './avaliations-list/avaliations-list.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AuthGuard } from './auth/auth.guard';
import {MatMenuModule} from '@angular/material/menu';
import { LocationsMapComponent } from './locations-map/locations-map.component';
import { AgGridModule } from 'ag-grid-angular';
import { ModuleRegistry } from 'ag-grid-community';
import { NutsDashboardComponent } from './nuts-dashboard/nuts-dashboard.component';
import { FormInfoComponent } from './form-info/form-info.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DataFormComponent,
    ReadingFormComponent,
    AvaliationComponent,
    LoginComponent,
    SubmitReadingComponent,
    ReadingListComponent,
    DashboardComponent,
    HomeComponent,
    ReadingsUserListComponent,
    ReadingsGetEmailComponent,
    ConfirmEmailComponent,
    CreateNewsFormComponent,
    NewsListComponent,
    RadonInfoComponent,
    FooterComponent,
    AvaliationsListComponent,
    LocationsMapComponent,
    NutsDashboardComponent,
    FormInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatSortModule,
    MatSidenavModule,
    AgGridModule,
    MatDialogModule,
    MatMenuModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [AuthService, AuthGuard, ImageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
