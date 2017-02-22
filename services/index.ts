/* За Inject-ване на сервиз в сервиз *
1. Директното провайдване в app.module
	+
2. По-ранното изписване на export-а тук
 = предизвиква по-ранно иницализиране от дефинирането в тукащния модул.
 */
export { AuthService }        from './auth.service.js';

export { SysService }         from './sys.service.js';
export { CollectionsService } from './collections.service.js';
export { LanguageService }    from './language.service.js';
export { EventsService }      from './events.service.js';
export { ToastService }       from './toast.service.js';



import { NgModule }           from '@angular/core';
import { 
	//AuthService,
	SysService,
	CollectionsService,
	LanguageService,
	EventsService,
	ToastService
} from '@sys/services';

@NgModule({
	providers: [
		//AuthService, 
		SysService,
		CollectionsService,
		LanguageService,
		EventsService,
		ToastService,
	]
})
export class SysServicesModule {}





