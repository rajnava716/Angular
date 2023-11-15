import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    
declarations: [ AppComponent ],
imports: [
BrowserModule,
HttpClientModule,
],
bootstrap: [ AppComponent ]
})
export class AppModule { }