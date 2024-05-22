import { Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'page1', component: Page1Component
    },
    {
        path: 'info', component: InfoComponent
    }
];
