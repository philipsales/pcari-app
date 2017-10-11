import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuTitleComponent } from './side-menu/side-menu-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    PageContentComponent,
    FooterComponent,
    SideMenuComponent,
    SideMenuTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
