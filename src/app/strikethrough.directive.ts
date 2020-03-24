import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'//[] makes the selector a attribute directive
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}
    @HostListener("click") onclicks(){
      this.textDeco('line-through')
    }
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
   }

}
