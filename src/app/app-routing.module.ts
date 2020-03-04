import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerkComponent } from './pages/perk/perk.component';
import { AboutComponent } from './pages/about/about.component';
import { TourComponent } from './pages/tour/tour.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: 'perk', component: PerkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tour', component: TourComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
