import { NgModule }             from '@angular/core';

import { SearchModule }         from './search.js';
import { DumpModule }           from './dump.js';
import { getValueOfTypeModule } from './getValueOfType.js';

@NgModule({
	imports: [ SearchModule, DumpModule, getValueOfTypeModule ],
	exports: [ SearchModule, DumpModule, getValueOfTypeModule ]
})
export class PipeModules {}