import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './components/main/main.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MainComponent ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
