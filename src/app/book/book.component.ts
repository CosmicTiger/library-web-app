import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() bookTitle: string;
  @Output() bookClicked = new EventEmitter();

  onClicked() {
    this.bookClicked.emit();
  }
};
