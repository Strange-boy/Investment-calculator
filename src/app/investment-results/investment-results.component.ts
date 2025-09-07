import {Component, Input} from "@angular/core";
import {InvestmentResultsModel} from "../models/investment-results.model";
import {CurrencyPipe} from "@angular/common";

@Component({
    standalone : true,
    selector: 'app-investment-results',
    templateUrl : './investment-results.component.html',
    styleUrls : ['./investment-results.component.css'],
    imports : [CurrencyPipe]
})

export class InvestmentResultsComponent {
    @Input() investmentResults ?: InvestmentResultsModel[]
}
