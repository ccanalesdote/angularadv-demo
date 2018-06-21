import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncremetalComponent } from '../components/incremetal/incremetal.component';
import { TestComponent } from './test/test.component';
import { ChartDonutComponent } from '../components/chart-donut/chart-donut.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		DashboardComponent,
		ProgressComponent,
		Graficas1Component,
		PagesComponent,
		IncremetalComponent,
		ChartDonutComponent,
		TestComponent
	],
	exports: [
		DashboardComponent,
		ProgressComponent,
		Graficas1Component,
		PagesComponent
	],
	imports: [
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule,
		CommonModule
	]
})

export class PagesModule { }
