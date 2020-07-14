// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBCAmT1YPekhrgv5B64kuGfC9pXSc7EaLQ',
    authDomain: 'hello-todolist.firebaseapp.com',
    databaseURL: 'https://hello-todolist.firebaseio.com',
    projectId: 'hello-todolist',
    storageBucket: 'hello-todolist.appspot.com',
    messagingSenderId: '439154215081',
    appId: '1:439154215081:web:0004b4070b83b2260f01b8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
