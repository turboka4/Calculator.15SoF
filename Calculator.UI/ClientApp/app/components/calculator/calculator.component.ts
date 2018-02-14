import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'calculator',
    templateUrl: './calculator.component.html'
})

export class CalculatorComponent {

    private http: Http;
    private baseUrl: string;
    public result: string | null;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    onSubmit(form: NgForm) {

        let model: CalculationModel =
        {
            value1: form.value.value1,
            value2: form.value.value2,
            value3: form.value.value3,
            value4: form.value.value4,
        };

        this.http.post(this.baseUrl + 'api/Calculation/calculate', model)
            .subscribe(result => this.result = result.text(),
                       error => this.result = error.statusText);
    }
}

interface CalculationModel {
    value1: number;
    value2: number;
    value3: number;
    value4: number;
}
