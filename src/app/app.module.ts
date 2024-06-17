import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatter } from './core/utils/calendar.util';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalModule } from './principal/principal.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
		SharedModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [
		provideRouter(
			routes,
			withComponentInputBinding()
		),
		{ provide: NgbDateParserFormatter, 
			useClass: CustomDateParserFormatter 
		},
	],
  bootstrap: [AppComponent],
})
export class AppModule {}
