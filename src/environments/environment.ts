// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    apiUrl: 'https://aphospital.onrender.com',
    // servLogin: "https://18.220.73.90/backendlogin/api"

    // apiUrl: 'http://localhost:4000',

    recaptcha: {
        captchaId: '6LcGmr8kAAAAAHXgMigTHdTGGbmWR8F-KJok4OKV',
    }

  };

  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it w
ill have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
