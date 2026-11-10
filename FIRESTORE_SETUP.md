# Firebase Firestore setup

The web app code is connected to the existing Firebase project `ict-hub-a2a85`. Complete these one-time console steps:

1. Open [Firestore Database](https://console.firebase.google.com/project/ict-hub-a2a85/firestore) and create a database. Choose a location close to your users (for example, asia-south1 if available).
2. Open [Authentication users](https://console.firebase.google.com/project/ict-hub-a2a85/authentication/users). Make sure Email/Password sign-in is enabled under Sign-in method, then add one administrator account.
3. Open Firestore > Rules. Copy the rules from [firestore.rules](https://github.com/bhayga-sanka/ict-hub/blob/main/firestore.rules).
4. Replace `REPLACE-WITH-ADMIN-EMAIL` with the exact administrator email you created in Firebase Authentication. Publish the rules.
5. Open the deployed Student Manager site and sign in using that administrator email/password.

The app stores records in three Firestore collections: `students`, `attendance`, and `marks`. They are created automatically when the first record is saved.

Security: the rules allow access only to the administrator email you set. Do not remove that email condition or use public read/write rules. Keep the administrator password private.
