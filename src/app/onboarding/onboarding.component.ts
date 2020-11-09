import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Detail {
  title: string;
  value: string;
}

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {

  customerFormGroup: FormGroup;
  vehicleFormGroup: FormGroup;
  customerDetails: Detail[] = [];
  cardDetails: Detail[] = [];
  vehicleDetails: Detail[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
      cardNumber: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(20)]],
      cardHolderName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    });

    this.vehicleFormGroup = this.formBuilder.group({
      carMake: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      carModel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      carYear: ['', [Validators.required]],
      carMileage: ['', [Validators.required]],
    });
  }

  onSelectionChange(event): void {
    this.setCustomerDetails();
    this.setVehicleDetails();
  }

  private setCustomerDetails(): void {
    this.customerDetails = [];
    this.customerDetails.push({ title: 'Full Name', value: this.customerFormGroup.get('fullName').value });
    this.customerDetails.push({ title: 'Address', value: this.customerFormGroup.get('address').value });

    this.cardDetails = [];
    this.cardDetails.push({ title: 'Card Number', value: this.customerFormGroup.get('cardNumber').value });
    this.cardDetails.push({ title: 'Card Holder Name', value: this.customerFormGroup.get('cardHolderName').value });
    if (this.customerFormGroup.get('expiryDate').value) {
      this.cardDetails.push({ title: 'Expiry Date', value: this.customerFormGroup.get('expiryDate').value.format('MM/YYYY') });
    }
    this.cardDetails.push({ title: 'CVV', value: this.customerFormGroup.get('cvv').value });
  }

  private setVehicleDetails(): void {
    this.vehicleDetails = [];
    this.vehicleDetails.push({ title: 'Car Make', value: this.vehicleFormGroup.get('carMake').value });
    this.vehicleDetails.push({ title: 'Car Model', value: this.vehicleFormGroup.get('carModel').value });
    if (this.vehicleFormGroup.get('carYear').value) {
      this.vehicleDetails.push({ title: 'Car Year', value: this.vehicleFormGroup.get('carYear').value.format('YYYY') });
    }
    this.vehicleDetails.push({ title: 'Car Mileage', value: this.vehicleFormGroup.get('carMileage').value + ' kmpl' });
  }
}
