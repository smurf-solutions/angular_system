import { NgModule }            from '@angular/core';

import { LoginModalModule }    from './login.js';
import { AlertModalModule }    from './alert.js';
import { ConfirmModalModule }  from './confirm.js';
import { InputModalModule }    from './input.js';


@NgModule({
	imports:   [
		LoginModalModule,
		AlertModalModule,
		ConfirmModalModule,
		InputModalModule
	]
})
export class ModalsModule { }

export { LoginModalComponent }   from './login.js';
export { AlertModalComponent }   from './alert.js';
export { ConfirmModalComponent } from './confirm.js';
export { InputModalComponent }   from './input.js';