import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() id = '';
  @Input() label = '';
  @Input() checked = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }

  toStr(v: unknown): string {
    return String(v ?? '');
  }
}
