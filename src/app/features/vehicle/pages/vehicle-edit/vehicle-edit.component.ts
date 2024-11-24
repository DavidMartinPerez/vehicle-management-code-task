import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArrowBackComponent } from '@shared/components/arrow-back/arrow-back.component';
import { InputComponent } from '@shared/components/input/input.component';
import { SelectComponent } from "../../../../shared/components/select/select.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { Subscription } from 'rxjs';
import { VehicleService } from '@features/vehicle/service/vehicle.service';
import { Vehicle } from '@features/vehicle/models/vehicle.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectedVehicle, selectIsLoadingVehicle } from '@store/vehicle/vehicle.selector';

@Component({
  selector: 'app-vehicle-edit',
  imports: [ArrowBackComponent, InputComponent, ReactiveFormsModule, CommonModule, SelectComponent, ButtonComponent],
  templateUrl: './vehicle-edit.component.html',
  styleUrl: './vehicle-edit.component.scss'
})
export class VehicleEditComponent implements OnInit, OnDestroy {
  private id: number | null = null
  private readonly activetedRoute = inject(ActivatedRoute);
  private readonly vehicleService = inject(VehicleService)
  private readonly store = inject(Store);
  private readonly vehicleToEdit = this.store.selectSignal(selectedVehicle);
  public readonly isLoading = this.store.selectSignal(selectIsLoadingVehicle);
  public isCreate: boolean = true;

  constructor() {
    this.activetedRoute.params.subscribe( params => {
      this.id = +params['id'];
      this.isCreate = false;
      this.vehicleService.getVehicleById(this.id);
    });

    effect(() => {
      //This effect execute when we have a vehicle to edit loaded
      const vehicle: Vehicle | null = this.vehicleToEdit();
      if(vehicle) {
        //Fill data on the form
        this.form.setValue({
          modelName: vehicle.modelName,
          picture: vehicle.picture,
          maxSpeed: `${vehicle.maxSpeed}`,
          color: vehicle.color,
          registrationDate: vehicle.registrationDate,
          type: vehicle.type,
          hasAirbag: `${vehicle.specificData.hasAirbag}`,
          fuelType: `${vehicle.specificData.fuelType}`,
          maxWeightSupported: `${vehicle.specificData.maxWeightSupported}`,
          canAttachTrailer: `${vehicle.specificData.canAttachTrailer}`
        });

        this.form.updateValueAndValidity();
      }
    })
  }

  public form = new FormGroup({
    modelName: new FormControl('', [Validators.required]),
    picture: new FormControl('https://via.placeholder.com/400x300'),
    maxSpeed: new FormControl('', [Validators.required]),
    color: new FormControl('red', [Validators.required]),
    registrationDate: new FormControl('', [Validators.required]),
    type: new FormControl('car', [Validators.required]),
    hasAirbag: new FormControl(''),
    fuelType: new FormControl(''),
    maxWeightSupported: new FormControl(''),
    canAttachTrailer: new FormControl('')
  });
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.form.get('type')?.valueChanges.subscribe((type) => {

      this.form.get('hasAirbag')?.reset();
      this.form.get('fuelType')?.reset();
      this.form.get('maxWeightSupported')?.reset();
      this.form.get('canAttachTrailer')?.reset();

      this.form.get('hasAirbag')?.removeValidators([Validators.required]);
      this.form.get('fuelType')?.removeValidators([Validators.required]);
      this.form.get('maxWeightSupported')?.removeValidators([Validators.required]);
      this.form.get('canAttachTrailer')?.removeValidators([Validators.required]);

      if(type === 'car') {
        this.form.get('hasAirbag')?.addValidators([Validators.required])
        this.form.get('hasAirbag')?.setValue('true')
        this.form.get('fuelType')?.addValidators([Validators.required])
        this.form.get('fuelType')?.setValue('diesel')
      } else if( type === 'truck') {
        this.form.get('maxWeightSupported')?.addValidators([Validators.required])
        this.form.get('canAttachTrailer')?.addValidators([Validators.required])
        this.form.get('maxWeightSupported')?.setValue('')
        this.form.get('canAttachTrailer')?.setValue('true')
      }

      this.form.get('hasAirbag')?.updateValueAndValidity();
      this.form.get('fuelType')?.updateValueAndValidity();
      this.form.get('maxWeightSupported')?.updateValueAndValidity();
      this.form.get('canAttachTrailer')?.updateValueAndValidity();
    });

    this.form.get('type')?.setValue('car')
  }

  submit() {
    const vehicle: Vehicle = this.mappingFormToVehicle(this.form.value);

    this.vehicleService.saveVehicle(vehicle);
  }

  ngOnDestroy(): void {
    if(this.subscription && this.subscription.unsubscribe) {
      this.subscription.unsubscribe();
    }
  }


  private mappingFormToVehicle(value: any): Vehicle {
    return {
      id: this.id,
      modelName: value.modelName,
      picture: value.picture,
      maxSpeed: value.maxSpeed,
      color: value.color,
      registrationDate: value.registrationDate,
      type: value.type,
      specificData: {
        hasAirbag: value.hasAirbag,
        fuelType: value.fuelType,
        maxWeightSupported: value.maxWeightSupported,
        canAttachTrailer: value.canAttachTrailer
      }
    }
  }

}
