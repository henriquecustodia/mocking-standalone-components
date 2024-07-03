import { Component } from '@angular/core';
import { CustomComponent } from './shared/components/custom/custom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mocking-standalone-components';
}
