import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { MaterialModule }              from '@angular/material';
import { CommonModule }                from '@angular/common';
import { FormsModule }                 from '@angular/forms';

import { AppService }                  from '@app/service';


@Component({
	selector: 'app-search',
	moduleId: module.id,
	template: `<md-input type="search" placeholder="Търси" (input)="searchChange.emit(search)" [(ngModel)]="search">
				<span md-prefix><md-icon>search</md-icon></span>
				<span md-suffix title="Намерени" style="color:#aaa">{{ searchInfo.founded }} / {{ searchInfo.all }}</span>
			</md-input>`, 
	inputs: [ 'searchInfo', 'search' ]
})
export class SearchComponent {
	@Output() searchChange = new EventEmitter();
	
	constructor(
		public app: AppService
	){}
}


@NgModule({
	imports: [ CommonModule, MaterialModule, FormsModule ],
	declarations: [ SearchComponent ],
	exports: [ SearchComponent ]
})
export class SearchModule {}