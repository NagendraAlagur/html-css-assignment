import { Component, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  firstName: string = 'Nagendra';
  productName = 'Moto';

  courseName = signal<string>('Angular');

  courseDuration = signal('15 videos');

  courseDetail = computed(() => this.courseName() + '-' + this.courseName());

  constructor() {
    this.firstName = 'vasu';
    console.log(this.firstName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set('React');
    }, 5000);

    console.log(this.courseName());
  }
}
