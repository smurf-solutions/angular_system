import { NgModule }     from '@angular/core';

import { SearchModule } from './search.js';
import { DumpModule }    from './dump.js';

@NgModule({
	imports: [ SearchModule, DumpModule ],
	exports: [ SearchModule, DumpModule ]
})
export class PipeModules {}