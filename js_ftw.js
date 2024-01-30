// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHpvRWEcdbk97Eyfdg3jUGPWG2iUCcUDo",
  authDomain: "my-first-project-dht11.firebaseapp.com",
  databaseURL: "https://my-first-project-dht11-default-rtdb.firebaseio.com",
  projectId: "my-first-project-dht11",
  storageBucket: "my-first-project-dht11.appspot.com",
  messagingSenderId: "401227211810",
  appId: "1:401227211810:web:65ff939fb69f5d4453167b",
  measurementId: "G-PSCS7SSSV9",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

let navbar = document.querySelector(".navbar");
document.getElementById("on1").addEventListener("click", on1);
function on1() {
  firebase.database().ref("/Bedroom").update({
    Light: 1,
  });
}
document.getElementById("off1").addEventListener("click", off1);
function off1() {
  firebase.database().ref("/Bedroom").update({
    Light: 0,
  });
}





database.ref("/Bedroom/Light").on("value", function (snapshot) {
  var status_light = snapshot.val();
  if (status_light == 1) {
    document.getElementById("status1").innerHTML = "On!";
    document.getElementById("light-bub").style.boxShadow = " 3px 3px 5px green";
    document.getElementById("dv1").style.boxShadow = " 7px 7px 7px green";
    document.getElementById("Statistics1").innerHTML = "Wokin properly!";
    document.getElementById("myCheck2").checked = true;
  } else {
    document.getElementById("status1").innerHTML = "Off!";
    document.getElementById("light-bub").style.boxShadow = " 3px 3px gray";
    document.getElementById("dv1").style.boxShadow = " 6px 6px gray";
    document.getElementById("Statistics1").innerHTML = "Đang Tắt!";
    document.getElementById("myCheck2").checked = false;
  }
});
database.ref("/Bedroom/buzzer").on("value", function (snapshot) {
  var status_Buzzer = snapshot.val();
  if (status_Buzzer == 1) {
    document.getElementById("status2").innerHTML = "On!";
    document.getElementById("Buzzer").style.boxShadow =
      " 3px 3px 5px green";
    document.getElementById("dv4").style.boxShadow = " 7px 7px 7px green";
    document.getElementById("Statistics2").innerHTML = "Wokin properly!";
    document.getElementById("myCheck4").checked = true;
  } else {
    document.getElementById("status2").innerHTML = "Off!";
    document.getElementById("Buzzer").style.boxShadow = " 3px 3px gray";
    document.getElementById("dv4").style.boxShadow = " 6px 6px gray";
    document.getElementById("Statistics2").innerHTML = "Đang Tắt!";
    document.getElementById("myCheck4").checked = false;
  }
});
database.ref("/Bedroom/Fan").on("value", function (snapshot) {
  var status_Fan = snapshot.val();
  if (status_Fan == 1) {
    document.getElementById("status3").innerHTML = "On!";
    document.getElementById("fanz").style.boxShadow = " 3px 3px 5px green";
    document.getElementById("dv2").style.boxShadow = " 7px 7px 7px green";
    document.getElementById("Statistics3").innerHTML = "Wokin properly!";
    document.getElementById("myCheck1").checked = true;
  } else {
    document.getElementById("status3").innerHTML = "Off!";
    document.getElementById("fanz").style.boxShadow = " 3px 3px gray";
    document.getElementById("dv2").style.boxShadow = " 6px 6px gray";
    document.getElementById("Statistics3").innerHTML = "Đang Tắt!";
    document.getElementById("myCheck1").checked = false;
  }
});



database.ref("/Bedroom/AirQuality").on("value", function (snapshot) {
  var statistic_Airquality = snapshot.val();
  document.getElementById("Statistics4").innerHTML = statistic_Airquality;
});
database.ref("/Bedroom/Temp").on("value", function (snapshot) {
  var statistic_Temp = snapshot.val();
  document.getElementById("Statistics5").innerHTML = statistic_Temp;
});
database.ref("/Bedroom/Lightsensor").on("value", function (snapshot) {
  var statistic_Humi = snapshot.val();
  document.getElementById("Statistics6").innerHTML = statistic_Humi;
});





document.getElementById("myCheck3").checked = true;
document.getElementById("myCheck5").checked = true;
document.getElementById("myCheck6").checked = true;
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};
