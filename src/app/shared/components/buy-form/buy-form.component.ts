import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Buyer } from '../../models/buyer';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-buy-form',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    FluidModule
  ],
  templateUrl: './buy-form.component.html',
  styleUrl: './buy-form.component.scss'
})
export class BuyFormComponent {
  data!: Buyer;
  formGroup!: FormGroup;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private fb: FormBuilder) {
    if(this.config.data) {
      this.data = this.config.data;
    } else {
      this.data = {
        name: '',
        numbers: ''
      };
    }

    this.formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required]],
      numbers: [{value: this.data.numbers, disabled: true}, [Validators.required]]
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get numbers() {
    return this.formGroup.get('numbers');
  }

  convertFormToObject() {
    this.data.name = this.name?.value;
    this.data.numbers = this.numbers?.value;
  }

  close(data?: Buyer) {
    this.ref.close(data);
  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.convertFormToObject();
    this.close(this.data);
  }
}
