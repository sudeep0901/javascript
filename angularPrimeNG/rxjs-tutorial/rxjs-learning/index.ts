import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

console.log("Heelo typescript");

//emit every 1s, take 2
const source = interval(1000).pipe(take(2));

source.subscribe((val) => { console.log(val) });
