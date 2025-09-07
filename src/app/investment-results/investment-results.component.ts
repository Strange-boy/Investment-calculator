import {Component, inject} from "@angular/core";
import {InvestmentService} from "../investment.service";

@Component({
    selector: 'app-investment-results',
    templateUrl : './investment-results.component.html',
    styleUrls : ['./investment-results.component.css']
})

export class InvestmentResultsComponent {
    private investmentService = inject(InvestmentService);

    get investmentResults() {
        return this.investmentService.results;
    }
}
