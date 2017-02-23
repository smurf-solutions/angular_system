/* За Inject-ване на сервиз в сервиз *
1. Директното провайдване в app.module
	+
2. По-ранното изписване на export-а тук
 = предизвиква по-ранно иницализиране от дефинирането в тукащния модул.
 */
export { EventsService }      from './events.service.js';
export { LanguageService }    from './language.service.js';
export { AuthService }        from './auth.service.js';

export { SysService }         from './sys.service.js';
export { CollectionsService } from './collections.service.js';


import { NgModule }           from '@angular/core';
import { 
	EventsService,
	AuthService,
	SysService,
	CollectionsService,
	LanguageService,
} from '@sys/services';


@NgModule({ providers: [
	LanguageService,
	EventsService
]})
export class SysServicesModule_0 {}

@NgModule({ providers: [
	AuthService, 
	SysService,
]})
export class SysServicesModule_1 {}

@NgModule({ providers: [
	CollectionsService,
]})
export class SysServicesModule_2 {}





