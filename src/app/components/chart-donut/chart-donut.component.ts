import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-chart-donut',
	templateUrl: './chart-donut.component.html',
	styles: []
})
export class ChartDonutComponent implements OnInit {

	@Input() doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	@Input() doughnutChartData: number[] = [350, 450, 100];
	@Input() doughnutChartType: string = 'doughnut';
	@Input() leyenda: string = 'Datos';

	constructor() { }

	ngOnInit() {
	}

}
