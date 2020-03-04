import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PerkComponent } from './pages/perk/perk.component';
import { AboutComponent } from './pages/about/about.component';
import { TourComponent } from './pages/tour/tour.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLinksComponent } from './pages/social-links/social-links.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PerkComponent,
    AboutComponent,
    TourComponent,
    ContactComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
