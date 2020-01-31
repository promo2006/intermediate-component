import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from './app.module.ngfactory';

if (<string>'<%= ENV %>' === 'prod') { enableProdMode(); }

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
