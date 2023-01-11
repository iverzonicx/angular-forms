import { AbstractControl, ValidationErrors } from "@angular/forms"

export const checkHasNumberValidator = () => {
    return (control: AbstractControl) :ValidationErrors | null => {
        const error=/\d/.test(control.value)
        return error ? {hasNumbers: {value: control.value}} : null
    }
}