import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MondayPageComponent } from './monday-page/monday-page.component';
import { TuesdayPageComponent } from './tuesday-page/tuesday-page.component';
import { WednesdayPageComponent } from './wednesday-page/wednesday-page.component';


const appRoutes: Routes = [
  {path: 'monday-page', component: MondayPageComponent},
  {path: 'tuesday-page', component: TuesdayPageComponent},
  {path: 'wednesday-page', component: WednesdayPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MondayPageComponent,
    TuesdayPageComponent,
    WednesdayPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(appRoutes),

    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
