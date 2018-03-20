import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPcariauth]'
})
export class PcariauthDirective {

  private this_element: ElementRef;
  @Input() mustBeAll: boolean;
  @Input() mustHavePermission: string[];

  constructor(private el: ElementRef) {
    this.this_element = el;
    console.log(el.nativeElement.style.display, 'DISPLAY');
    // el.nativeElement.style.display = 'block';
    // console.log(el.nativeElement.style.display, 'DISPLAY');
    // el.nativeElement.style.display = 'none';
  }// --constructor

  ngOnInit() {
    console.log(this.mustBeAll, 'METHOD');
    console.log(this.mustHavePermission, 'NEED');

    const permissions = localStorage.getItem('permissions');
    console.log(permissions, 'PERMS OF USER');
    if (permissions) {
      // logged in so return true
      const all_permissions = new Set(JSON.parse(permissions));
      console.log(all_permissions, 'PERMISSIONS');
      let IS_ALLOWED = false;
      const total_musthave = this.mustHavePermission.length;
      if (total_musthave === 0) {
        IS_ALLOWED = true;
      }
      for (let i = 0; i < total_musthave; ++i) {
        console.log(this.mustHavePermission[i], 'CHECK PERMISSION');
        if (!(all_permissions.has(this.mustHavePermission[i]))) {
          console.log('waley');
          if (this.mustBeAll) {
            console.log('LAYAS');
            IS_ALLOWED = false;
            break;
          }
        } else {
          if (!this.mustBeAll) {
            console.log('LAYAS');
            IS_ALLOWED = true;
            break;
          } else {
            if (i === (total_musthave - 1)) {
              IS_ALLOWED = true;
            }
          }
        }
      }

      if (!IS_ALLOWED) {
        console.log('ouch!');
        this.el.nativeElement.style.display = 'none';
      } else {
        console.log('hoooray!');
      }
    }
  }// --OnInit
}
