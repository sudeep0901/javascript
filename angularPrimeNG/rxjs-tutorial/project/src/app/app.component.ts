import { Component, ViewChild, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { Subscription, fromEvent, range, interval, merge } from 'rxjs';
import { Observable } from 'rxjs';
import { take, map, combineAll } from 'rxjs/operators';

//  import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {

  clicks: any;
  timer: any;
  clicksOrTimer: any;
  data: any;


  ngOnInit(): void {
    this.subscription =
      fromEvent(document, 'mousemove')
        .subscribe(e => {
          console.log(e);
        });


    this.clicks = fromEvent(document, 'click');
    this.timer = interval(1000);


    this.numberObs = range(0, 10);
    this.numberObs.subscribe(num => console.log(num * 10));

    // merging Observables
    this.clicksOrTimer = merge(this.clicks, this.timer)
    console.log(this.clicksOrTimer);

    this.clicksOrTimer.subscribe(data => console.log(this.data = data));

  }
  ngOnChanges(): void {

  }
  title = 'project';
  obs: Observable<any>;
  numberObs: Observable<any>;

  name: string;
  clickSubscription: Subscription;
  subscription: Subscription;
  rangeSubs: Subscription;

  @ViewChild('mybutton') Button;

  constructor() {
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    console.log(this.Button.nativeElement);
    this.obs = fromEvent(this.Button.nativeElement, 'click');
    console.log(this.obs);
  }
  onBlurMethod(): void {
    console.log(this.obs)
    this.clickSubscription = this.obs.subscribe(() => {
      console.log("Button Clicked by :" + this.name);
      this.clickSubscription.unsubscribe();
      console.log(this.clickSubscription)

    });
  }

  //combileall Combination
  //emit every 1s and take 2
  source =  interval(1000).pipe(take(2));


}
