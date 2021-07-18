import { Component } from '@angular/core'

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="alert alert-success alert-success--gradient" role="alert">This is a success alert!</div>
  `,
  styles: [`
    .alert-success--gradient {
      color: #494949;
      background-color: #7ee8fa;
      background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
    }
  `],
})
export class SuccessAlertComponent {}
