import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestService } from './rest.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { InsertComponent } from './insert/insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    DataComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut:500
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [RestService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
