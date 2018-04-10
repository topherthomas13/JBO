import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ApiPathsInjectable } from "./apiPathsInjectable";
import { InstructorApiPath } from "./config";

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { InstructorService } from './services/instructor.service';
import { InstructorComponent } from './components/instructor/instructor.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        InstructorComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'instructor', component: InstructorComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
  providers: [InstructorService, InstructorApiPath, ApiPathsInjectable]
})
export class AppModuleShared {
}
