import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SelectComponent} from './select.component.js';
import {SelectDropdownComponent} from './select-dropdown.component.js';

@NgModule({
    declarations: [
        SelectComponent,
        SelectDropdownComponent
    ],
    exports: [
        SelectComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SelectModule {}
