import { Pipe, PipeTransform } from '@angular/core';
import { PadDirection } from '../enums/pad-direction';

@Pipe({
  name: 'padNumber',
  standalone: true
})
export class PadNumberPipe implements PipeTransform {
  transform(value: number, digits: number, character: string = '0', direction: PadDirection = PadDirection.Left): string {
    let paddedNumber: string = value.toString();
    
    if (direction == PadDirection.Left) {
      paddedNumber = paddedNumber.padStart(digits, character);
    } else {
      paddedNumber = paddedNumber.padEnd(digits, character);
    }

    return paddedNumber;
  }
}
