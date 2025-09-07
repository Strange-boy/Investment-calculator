import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIn from '@angular/common/locales/en-IN';

registerLocaleData(localeIn, 'en-IN');

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: LOCALE_ID, useValue: 'en-IN' }
    ]
};
