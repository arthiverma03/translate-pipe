import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'costPrice'
})
export class PricePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        const stringVal = `${value}`;

        if (stringVal.match(/\d+\.\d\d/)) {
            return stringVal;
        }

        if (stringVal.match(/\d+\.\d/)) {
            return `${stringVal}0`;
        }

        if (stringVal.match(/\d+/)) {
            return `${stringVal}.00`;
        }

        return stringVal;
    }
}
