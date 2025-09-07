import {Component, EventEmitter, Output} from "@angular/core";
import type {InvestmentInput} from "../models/investment-input.model";

import {InvestmentService} from "../investment.service";


@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-component.component.css']
})

export class UserInputComponent {
    @Output() calculate = new EventEmitter<InvestmentInput>()

    enteredInitialInvestment = '0';
    enteredAnnualInvestment = '0';
    enteredExpectedReturns = '3';
    enteredDuration = '5';

    constructor(private investmentService: InvestmentService) {
    }

    onSubmit(): void {
        this.investmentService.CalculateInvestmentResults({
            initialInvestment: +this.enteredInitialInvestment,
            annualInvestment: +this.enteredAnnualInvestment,
            expectedReturn: +this.enteredExpectedReturns,
            duration: +this.enteredDuration
        })
    }
}
