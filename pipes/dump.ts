/**
	Usage set: | dump : 'key_saved_in_AppService'
	Usage get: AppService.dump.key_saved_in_AppService']
**/
import { NgModule, Pipe } from '@angular/core';

import { AppService }     from '@app/service';


@Pipe({
    name: 'dump'
})
export class DumpPipe {
	constructor(
		private app: AppService
	){}

    transform( items: object[], obj: object ) {
		if( items && obj ) {
			obj.dump = items;
		}
        return items;
    }
}


@NgModule({
    declarations: [ DumpPipe ],
    exports: [ DumpPipe ]
})
export class DumpModule {}