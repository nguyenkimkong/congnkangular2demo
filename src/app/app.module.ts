import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { SidebarmenuComponent } from './modules/core/sidebarmenu/sidebarmenu.component';
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./modules/core/core.module";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, CoreModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
