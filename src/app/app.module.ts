import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Módulos
import { PagesModule } from './pages/pages.module';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

// temporal
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NopagefoundComponent,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		PagesModule,
		APP_ROUTES,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
