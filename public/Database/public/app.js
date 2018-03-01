(function() {

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyBTHw32LbzphDFfTgRW7CjEWFUg1i-Ck18",
        authDomain: "armsync.firebaseapp.com",
        databaseURL: "https://armsync.firebaseio.com",
        projectId: "armsync",
        storageBucket: "armsync.appspot.com",
        messagingSenderId: "334031887550"
      };
      firebase.initializeApp(config);

      // Get elements

      const preObject = document.getElementById('object');

      // Create references

      const dbRefObject = firebase.database().ref().child('object');

      // Sync object changes

      dbRefObject.on('value', snap => console.log(snap.val()));


}());