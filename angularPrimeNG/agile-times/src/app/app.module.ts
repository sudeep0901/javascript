import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuModule, PanelModule,
ChartModule,
InputTextModule,
ButtonModule,
InputMask,
InputMaskModule,
InputTextareaModule,
EditorModule,
CalendarModule,
RadioButtonModule,
FieldsetModule,
DropdownModule,
MultiSelectModule,
ListboxModule,
SpinnerModule,
SliderModule,
RatingModule,
DataTableModule,
ContextMenuModule,
TabViewModule,
DialogModule,
StepsModule} from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import 'rxjs/Rx';



const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "alltimes", component: AlltimesComponent },
  { path: "timesheet", component: TimesheetComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "profile", component: ProfileComponent},
  { path: "settings", component: SettingsComponent},
];

@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    SettingsComponent,
    StatisticsComponent,
    AlltimesComponent,
    TimesheetComponent,
    ProjectsComponent,
    ProfileComponent,
    FielderrorsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ButtonModule,
    ChartModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
