import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChange,
} from '@angular/core';
import {
  BehaviorSubject,
  interval,
  Observable,
  of,
  range,
  Scheduler,
  SchedulerLike,
  Subject,
} from 'rxjs';
import { delay, map, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count-widget',
  templateUrl: './count-widget.component.html',
  styleUrls: ['./count-widget.component.scss'],
})
export class CountWidgetComponent implements OnInit, OnDestroy {
  @Input()
  public get count() {
    return this._count;
  }
  public set count(v: number) {
    this._count = v;
    if (this.animate) {
      this.pushInIntervals();
    }
  }
  _count = 0;
  @Input() label = '';
  displayCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  displayPercent: Observable<number> = this.displayCount.pipe(map(v => {
    return v/this.count*100;
  }))
  @Input() animate = true;
  @Input() delay = 1000;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {}

  done = new BehaviorSubject<boolean>(true);
  display = 0;
  pushInIntervals() {
    if (this.count) {
      interval(this.count / this.delay)
        .pipe(takeWhile(() => this.displayCount.getValue() !== this.count))
        .subscribe((c) => {
          this.displayCount.next(Math.floor((c * this.count) / 20));
        });
    }
  }

  ngOnDestroy() {
    this.displayCount.complete();
  }
}
