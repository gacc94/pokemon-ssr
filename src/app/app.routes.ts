import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.AboutPage),
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage),
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing').then((m) => m.PricingPage),
    },
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
    },
];
