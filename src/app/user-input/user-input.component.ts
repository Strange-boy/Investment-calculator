import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
    selector : 'app-user-input',
    standalone : true,
    imports: [FormsModule],
    templateUrl : './user-input.component.html',
    styleUrls : ['./user-component.component.css']
})

export class UserInputComponent {
    enteredInitialInvestment = '0';
    enteredAnnualInvestment = '0';
    enteredExpectedReturns = '3';
    enteredDuration = '5';

    onSubmit() : void {
        console.log("Form submitted");
        console.log(this.enteredAnnualInvestment);
        console.log(this.enteredInitialInvestment);
        console.log(this.enteredDuration);
        console.log(this.enteredExpectedReturns)
    }
}
