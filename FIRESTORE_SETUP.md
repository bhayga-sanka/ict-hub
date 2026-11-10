# Firestore setup

1. Open https://console.firebase.google.com/project/ict-hub-a2a85/firestore
2. Create a Firestore database (production mode is fine).
3. Open the Rules tab and replace the rules with the contents of firestore.rules in this repository, then Publish.
4. Open Authentication > Sign-in method and enable Email/Password.
5. In Authentication > Users, add an administrator email/password. Use that account on the Student Manager login screen.
6. Open the deployed site over HTTPS and sign in.

Security note: these starter rules permit any signed-in Firebase Authentication account to access the collections. Do not create student accounts in this Firebase project while using these rules. For a multi-role production system, restrict access to an administrator UID/custom claim before collecting real student records.
