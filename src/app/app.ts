import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { mainShortcuts } from './shared/constants/main-shortcuts';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    MatListModule,
    MatIcon
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  links = mainShortcuts;
}
