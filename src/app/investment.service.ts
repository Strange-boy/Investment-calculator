import type { InvestmentInput} from "./models/investment-input.model";
import type { InvestmentResultsModel} from "./models/investment-results.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    results ?: InvestmentResultsModel[]

    CalculateInvestmentResults(data: InvestmentInput) {
        const {initialInvestment, annualInvestment, duration, expectedReturn} = data;
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.results = annualData;
    }
}
