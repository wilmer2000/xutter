import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { XuHeaderComponent } from './xu-header/xu-header.component';
import { XuEditorComponent } from './xu-editor/xu-editor.component';
import { XuViewerComponent } from './xu-viewer/xu-viewer.component';
import { XuTweetComponent } from './xu-tweet/xu-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    XuHeaderComponent,
    XuEditorComponent,
    XuViewerComponent,
    XuTweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
