import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/commons/header.component';
import { FooterComponent } from './pages/commons/footer.component';
import { HomeComponent } from './pages/home.component';
// import { SakatiaComponent } from './pages/sakatia.component';
import { ExcursionComponent } from './pages/excursion.component';
import { NotFoundComponent } from './pages/commons/not-found.component';
// import { NguiInViewComponent } from './pages/common/ngui-in-view.component';
import { AboutComponent } from './pages/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // SakatiaComponent,
    ExcursionComponent,
    NotFoundComponent,
    // NguiInViewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
