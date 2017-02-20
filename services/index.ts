export { SysService }         from './sys.service.js';
export { CollectionsService } from './collections.service.js';
export { AuthService }        from './auth.service.js';
export { LanguageService }    from './language.service.js';
export { EventsService }      from './events.service.js';
export { ToastService }       from './toast.service.js';

import { NgModule }           from '@angular/core';
import { 
	SysService,
	AuthService,
	CollectionsService,
	LanguageService,
	EventsService,
	ToastService
} from '@sys/services';

@NgModule({
	providers: [
		AuthService, 
		SysService,
		CollectionsService,
		LanguageService,
		EventsService,
		ToastService
	]
})
export class SysServicesModule {}





