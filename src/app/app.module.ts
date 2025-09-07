import {NgModule, LOCALE_ID} from "@angular/core";
import {registerLocaleData} from "@angular/common";
import localeIn from '@angular/common/locales/en-IN';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserInputModule} from "./user-input/user-input.module";

registerLocaleData(localeIn, 'en-IN');


@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
    imports : [BrowserModule, UserInputModule],
    bootstrap : [AppComponent],
    providers : [{provide: LOCALE_ID, useValue:'en-IN'}]
})

export class AppModule {}
