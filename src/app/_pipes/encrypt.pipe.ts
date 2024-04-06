import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt',
  standalone: true
})
export class EncryptPipe implements PipeTransform {
  cardNumberRegex = /^[0-9]{8}-[0-9]{8}$/;
  phoneNumberRegex = /^\d{2}-\d{2}-\d{3}-\d{4}$/;

  transform(input: string): string {
    if (this.cardNumberRegex.test(input)) {
      return "*" + input.substring(16);
    } else if (this.phoneNumberRegex.test(input)) {
      return "**-**-***-**" + input.substring(12);
    } else {
      return input.split('').map(() => '*').join('');
    }
  }

}
