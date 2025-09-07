import {Component, inject} from "@angular/core";
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../investment.service";

@Component({
    standalone : true,
    selector: 'app-investment-results',
    templateUrl : './investment-results.component.html',
    styleUrls : ['./investment-results.component.css'],
    imports : [CurrencyPipe]
})

export class InvestmentResultsComponent {
    private investmentService = inject(InvestmentService);

    get investmentResults() {
        return this.investmentService.results;
    }
}
