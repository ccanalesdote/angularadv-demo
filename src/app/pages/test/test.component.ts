import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	array: any = {
		0 : {
			'dev_id_contratante' : 1,
			'dev_rut_contratante' : 174945764,
			'dev_nombre_contratante' : 'Cristian',
			'dev_email_contratante' : 'ccanalesdote@gmail.com'
		},
		1 : {
			'dev_id_contratante' : 1,
			'dev_rut_contratante' : 174945764,
			'dev_nombre_contratante' : 'Diego',
			'dev_email_contratante' : 'dsanmartin@gmail.com'
		},
		2 : {
			'dev_id_contratante' : 1,
			'dev_rut_contratante' : 174945764,
			'dev_nombre_contratante' : 'Felipe',
			'dev_email_contratante' : 'felipe.calderon@gmail.com'
		}
	};

	constructor() { }

	ngOnInit() {
		console.log(this.array);
		this.array = this.groupArray(this.array);
		console.log(this.array);
	}

	groupArray(data: any) {
		return data;
	}

}
