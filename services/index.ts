/* �� Inject-���� �� ������ � ������ *
1. ���������� ����������� � app.module
	+
2. ��-������� ��������� �� export-� ���
 = ����������� ��-����� ������������� �� ������������ � �������� �����.
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





