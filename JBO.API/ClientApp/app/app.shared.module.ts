import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ApiPathsInjectable } from "./apiPathsInjectable";
import { InstructorApiPath, ProjectApiPath } from "./config";

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { ProjectComponent } from './components/project/project.component';

import { InstructorService } from './services/instructor.service';
import { ProjectService } from './services/project.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    InstructorComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'instructor', component: InstructorComponent },
      { path: 'project', component: ProjectComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [InstructorService, InstructorApiPath, ProjectApiPath, ApiPathsInjectable, ProjectService]
})
export class AppModuleShared {
}
