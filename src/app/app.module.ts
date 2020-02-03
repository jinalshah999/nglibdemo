import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoLibModule } from "demo-lib";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
