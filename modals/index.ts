import { NgModule }            from '@angular/core'

//import { PipeModules }     from '@sys/pipes'
 
import { LoginModalModule }    from './login.js'
import { AlertModalModule }    from './alert.js'
import { ConfirmModalModule }  from './confirm.js'
import { InputModalModule }    from './input.js'


@NgModule({
	imports:   [
		//PipeModules,
		LoginModalModule,
		AlertModalModule,
		ConfirmModalModule,
		InputModalModule
	],
	//exports: [ PipeModules ]
})
export class ModalsModule { }

export { LoginModalComponent }   from './login.js'
export { AlertModalComponent }   from './alert.js'
export { ConfirmModalComponent } from './confirm.js'
export { InputModalComponent }   from './input.js'