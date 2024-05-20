import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header/>
    <main>
     <router-outlet/>
    </main>
    <app-footer/>
  `,
  styles: [`:host{display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;}
    main{
      flex-grow: 1;
      
    }`],
})
export class AppComponent {

}
