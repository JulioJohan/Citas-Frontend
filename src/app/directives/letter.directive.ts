import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
    selector: 'input[lettersOnly]'
})
export class LetterDirective {

    constructor(private _el: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event: any) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z\s]/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }

}