import{initializeApp}from"https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";import{getAnalytics}from"https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";import{getDatabase,ref,child,get}from"https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";const app=initializeApp({apiKey:"AIzaSyAg_3ncEmrp0O29_3jM6LkzL1yOu5paIPI",authDomain:"cnfrmpage.firebaseapp.com",databaseURL:"https://cnfrmpage-default-rtdb.europe-west1.firebasedatabase.app",projectId:"cnfrmpage",storageBucket:"cnfrmpage.appspot.com",messagingSenderId:"672008583246",appId:"1:672008583246:web:04e62617ab39a150632b1f",measurementId:"G-9BQZPWC9SG"}),analytics=getAnalytics(app),database=getDatabase(app);let gebi=a=>document.getElementById(a);export{app,database,getDatabase,ref,child,get,gebi};
/* …or push an existing repository from the command line
git remote add origin2 https://github.com/check.github.io.git
git branch -M main
git push -u origin2 main */
