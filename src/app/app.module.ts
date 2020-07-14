import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderNavComponent } from './layouts/header-nav/header-nav.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AntdModule } from './shared/antd.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderNavComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AntdModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
