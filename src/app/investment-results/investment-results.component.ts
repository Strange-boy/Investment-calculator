import {Component, Input} from "@angular/core";
import {InvestmentResultsModel} from "../models/investment-results.model";

@Component({
    standalone : true,
    selector: 'app-investment-results',
    templateUrl : './investment-results.component.html',
    styleUrls : ['./investment-results.component.css'],
    imports : []
})

export class InvestmentResultsComponent {
    @Input() investmentResults ?: InvestmentResultsModel[]
}
