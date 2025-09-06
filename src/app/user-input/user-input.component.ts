import {Component, EventEmitter, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import type {InvestmentInput} from "../models/investment-input.model";


@Component({
    selector: 'app-user-input',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-component.component.css']
})

export class UserInputComponent {
    @Output() calculate = new EventEmitter<InvestmentInput>()

    enteredInitialInvestment = '0';
    enteredAnnualInvestment = '0';
    enteredExpectedReturns = '3';
    enteredDuration = '5';

    onSubmit(): void {
        this.calculate.emit({
            initialInvestment: +this.enteredInitialInvestment,
            annualInvestment: +this.enteredAnnualInvestment,
            expectedReturn: +this.enteredExpectedReturns,
            duration: +this.enteredDuration
        })
    }
}
