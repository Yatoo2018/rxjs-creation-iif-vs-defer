import { iif, of, pipe, defer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import './eg1';

const source$ = of('some data');

function emulateBackendRequest$(data: string) {
  console.log('Hello from the first $');
  return of(1);
}

function emulateBackendRequest2$(data: string) {
  console.log('Hello from the second $');
  return of(2);
}

// source$
//   .pipe(
//     switchMap(value =>
//       iif(
//         () => value === "some data",
//         emulateBackendRequest$(value),
//         emulateBackendRequest2$(value)
//       )
//     )
//   )
//   .subscribe(result => console.log(`Result is ${result}`));

// Fix with defer

source$
  .pipe(
    switchMap((value) =>
      defer(() =>
        value === 'some data'
          ? emulateBackendRequest$(value)
          : emulateBackendRequest2$(value)
      )
    )
  )
  .subscribe((result) => console.log(`True result is ${result}`));
