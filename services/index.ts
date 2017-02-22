/* �� Inject-���� �� ������ � ������ *
1. ���������� ����������� � app.module
	+
2. ��-������� ��������� �� export-� ���
 = ����������� ��-����� ������������� �� ������������ � �������� �����.
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





