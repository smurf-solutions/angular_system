import { NgModule }           from '@angular/core';

import { SysService }         from './sys.service.js';
import { AuthService }        from './auth.service.js';
import { CollectionsService } from './collections.service.js';
import { LanguageService }    from './language.service.js';


@NgModule({
	providers: [
		AuthService, 
		SysService,
		CollectionsService,
		LanguageService
	]
})
export class SysServicesModule {}