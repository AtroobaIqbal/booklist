<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA5UpEpEfaMmlY9Ar_NSw-ZwADB_ZTNcnQ",
    authDomain: "book-list-app-a180b.firebaseapp.com",
    projectId: "book-list-app-a180b",
    storageBucket: "book-list-app-a180b.appspot.com",
    messagingSenderId: "815320865513",
    appId: "1:815320865513:web:273e8c693737ca97032e78",
    measurementId: "G-W2TKP2XHY8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>