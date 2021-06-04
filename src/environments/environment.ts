// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyClYGRPv-xhmx9iBobV27oeKivrENbzl8E",
    authDomain: "prayer-online-test.firebaseapp.com",
    projectId: "prayer-online-test",
    storageBucket: "prayer-online-test.appspot.com",
    messagingSenderId: "776321446592",
    appId: "1:776321446592:web:0fca72f83845418a92f325",
    measurementId: "G-0BSBCXKE6S"
  },
  loginPage: '/sign/in',
  afterLoginPage: '/post',
  afterLogoutPage: '/home'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
