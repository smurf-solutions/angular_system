/* �� Inject-���� �� ������ � ������ *
1. ���������� ����������� � app.module
	+
2. ��-������� ��������� �� export-� ���
 = ����������� ��-����� ������������� �� ������������ � �������� �����.
 */
 /** Export **/
 // first init
export { EventsService }      from './events.service.js'
export { LanguageService }    from './language.service.js'
export { AuthService }        from './auth.service.js'
export { ProgressService }    from './progress.service.js'

// second init
export { SysService }         from './sys.service.js'
export { CollectionsService } from './collections.service.js'

// not injectable
export { QueryService }       from './query.service.js'


/** Ibject **/
import { NgModule }           from '@angular/core';
import { 
	EventsService,
	AuthService,
	SysService,
	CollectionsService,
	LanguageService,
	ProgressService
} from '@sys/services'

@NgModule({ providers: [
	LanguageService,
	EventsService
]})
export class SysServicesModule_0 {}

@NgModule({ providers: [
	AuthService,
	ProgressService,	
	SysService
]})
export class SysServicesModule_1 {}

@NgModule({ providers: [
	CollectionsService
]})
export class SysServicesModule_2 {}





