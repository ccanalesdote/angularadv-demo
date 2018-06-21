import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-incremetal',
	templateUrl: './incremetal.component.html',
	styleUrls: ['./incremetal.component.css']
})
export class IncremetalComponent implements OnInit {

	@ViewChild('txtProgress') txtProgress: ElementRef;

	@Input() leyenda: string = 'Leyenda';
	@Input() progreso: number = 50;

	@Output() cambioValor: EventEmitter<number> = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	onChanges( newValue: number ) {

		// let elemHTML: any = document.getElementsByName('progreso')[0];

		if ( newValue >= 100 ) {
			this.progreso = 100;
		} else if ( newValue <= 0 ) {
			this.progreso = 0;
		} else {
			this.progreso = newValue;
		}
		// elemHTML.value = this.progreso;
		this.txtProgress.nativeElement.value = this.progreso;
		this.cambioValor.emit( this.progreso );
	}

	changeValue( value: number ) {
		if (this.progreso >= 100 && value > 0) {
			this.progreso = 100;
			return;
		}

		if (this.progreso <= 0 && value < 0) {
			this.progreso = 0;
			return;
		}
		this.progreso = this.progreso + value;
		this.cambioValor.emit( this.progreso );
		this.txtProgress.nativeElement.focus();
	}

}