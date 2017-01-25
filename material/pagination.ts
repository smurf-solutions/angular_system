import { NgModule, Component}     from '@angular/core';
import { Output, EventEmitter }   from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { MaterialModule }         from '@angular/material'


@Component({
	selector: 'app-pagination',
	moduleId: module.id,
	styles: ['button[md-raised-button] { box-shadow:none!important; }',
			 'button:not(.active) { background:transparent!important; color: #333 }'],
	template: ` <div>
					<button *ngFor="let p of getPagesAsArray()" md-raised-button color="primary"
						[class.active]="p==active"
						(click)="setActive(p)"
					>{{ p }}</button>
				</div>`
	inputs: [ 'active', 'pages' ]
})
export class PaginationComponent {
	@Output() activeChange = new EventEmitter();
	
	getPagesAsArray() {
		let arrOfPages = []; for( let i = 1; i <= this.pages; i++ ) arrOfPages.push(i);
		return arrOfPages;
	}
	setActive(a) {
		this.active=a; 
		this.activeChange.emit(a);
	}
}


@NgModule({
	imports: [ CommonModule, FormsModule, MaterialModule ],
	declarations: [ PaginationComponent ],
	exports: [ PaginationComponent ]
})
export class PaginationModule {}