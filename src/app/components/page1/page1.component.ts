import { Component, HostBinding } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  @HostBinding('style') bg = "background-image: url(/assets/gg_tran.png)";
}
