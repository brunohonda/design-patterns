import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { ShortcutData } from '../../interfaces/shortcut-data';

@Component({
  selector: 'app-shortcut',
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink
],
  templateUrl: './shortcut.html',
  styleUrl: './shortcut.scss',
})
export class Shortcut {
  @Input({ required: true }) data!: ShortcutData;
}
