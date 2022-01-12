import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule } from '@angular/material/dialog';


import { ComponentsModule } from './views/components/components.module';
import { PagesModule } from './views/pages/pages.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProvidersModule } from './providers/providers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ProvidersModule.forRoot(),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
