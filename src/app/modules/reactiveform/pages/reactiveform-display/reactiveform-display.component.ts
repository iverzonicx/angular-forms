import { checkHasNumberValidator } from './../../validators/hasnumber.validator';
import { AntiHero } from './../../models/anti-hero';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-display',
  templateUrl: './reactiveform-display.component.html',
  styleUrls: ['./reactiveform-display.component.scss']
})
export class ReactiveformDisplayComponent implements OnInit, AfterViewInit {

  antiHeroForm: FormGroup
  powersArray: FormArray
  constructor(private fb: FormBuilder) {
    this.antiHeroForm = this.fb.group({
      firstName: [{value: 'Bruce', disabled: false}, [Validators.required, Validators.maxLength(50), checkHasNumberValidator()]],
      lastName: ['Banner'],
      knownAs: [''],
      address: this.fb.group({
        street: [''],
        city: ['Makati City'],
        country: ['']
      }),
      powers: this.fb.array([
        new FormControl('Zap'), 
        new FormControl('Web-update'), 
        new FormControl('Flame')
      ])
    })
    // this.powers = this.antiHeroForm.controls['powers'] as FormArray
    this.powersArray = this.antiHeroForm.get('powers') as FormArray
  }

  ngOnInit(): void {
    this.antiHeroForm.valueChanges.subscribe(data => {
      console.log(data)
    })
    
  }

  ngAfterViewInit(): void {
      
  }

  onSubmit = () => {
    //console.log(this.antiHeroForm.value)
    // const myAntiHero:AntiHero = this.antiHeroForm.value as AntiHero
    const myAntiHero:AntiHero = this.antiHeroForm.getRawValue() as AntiHero
    console.log('myAntiHero', myAntiHero)
  }

  addPower = () => {
    this.powersArray.push(new FormControl())
  }

  deletePower = (i:number) => {
    this.powersArray.removeAt(i)
  }

  clear = () => {
    this.antiHeroForm.reset()
  }

  manualChange = () => {
    // this.antiHeroForm.get('lastName')?.disable()
    // this.antiHeroForm.addControl('newControl', new FormControl())
    // this.antiHeroForm.get('firstName')?.setErrors({incorrect:true})
  }

  get firstName() {
    return this.antiHeroForm.get('firstName') as FormControl
  }

}
