import { Component } from '@angular/core';
import { Shortcut } from "../../shared/components/shortcut/shortcut";
import { mainShortcuts } from '../../shared/constants/main-shortcuts';

@Component({
  selector: 'app-home',
  imports: [Shortcut],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  shortcuts = mainShortcuts;
}
