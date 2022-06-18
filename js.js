let find = document.getElementById("search");
let mac = document.getElementById("mac");
let active = document.getElementsByClassName("find")[0];

let leftmenu = document.getElementById("leftmenu");

let close = document.getElementById("crash");
close.onclick = function () {
  leftmenu.classList.toggle("active");
  // close.parentElement.parentElement.classList.add("new");
};

find.onclick = function () {
  if (active.classList.contains("act") === true) {
    active.classList.remove("act");
  } else if (active.classList.contains("act") === false) {
    active.classList.add("act");
  }
  if (logiNform.classList.contains("active") === true) {
    logiNform.classList.remove("active");
  }
  nav.classList.remove("active");
};
// let close = document.getElementById("crash");
// close.onclick = function () {
//   close.parentElement.remove();
// };

let logiNform = document.getElementsByClassName("login")[0];
let loginIcon = document.getElementsByClassName("fa-user")[0];
loginIcon.onclick = function () {
  logiNform.classList.toggle("active");
  if (active.classList.contains("act") === true) {
    active.classList.remove("act");
  }
  nav.classList.remove("active");
};

/////////////////// start saaving infomation of user //////////////

let loginusername = document.querySelector(`[type="email"]`);
let loginuserpassword = document.querySelector(`[type="password"]`);
let loginsubmit = document.querySelector(`[type="submit"]`);

loginsubmit.addEventListener("click", () => {
  window.sessionStorage.setItem("user", loginusername.value);
  window.sessionStorage.setItem("password", loginuserpassword.value);
});

loginusername.addEventListener("focus", function () {
  if (window.sessionStorage.getItem("user")) {
    loginusername.value = window.sessionStorage.getItem("user");
  }
});
loginuserpassword.addEventListener("focus", function () {
  if (window.sessionStorage.getItem("password")) {
    loginuserpassword.value = window.sessionStorage.getItem("password");
  }
});

////////////////// end saaving infomation of user //////////////
let nav = document.getElementsByClassName("nav")[0];
let navicon = document.getElementById("itumes");

navicon.addEventListener("click", function () {
  nav.classList.toggle("active");
  logiNform.classList.remove("active");
  active.classList.remove("act");
});
let toUP = document.getElementById("toup");

window.onscroll = function () {
  if (window.scrollY >= 60) {
    toUP.style.display = "block";
  } else {
    toUP.style.display = "none";
  }
};
toUP.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    scrollbehavior: "smoothe",
  });
});
let show = document.getElementById("show");
let float = document.getElementById("float");
show.addEventListener("click", function () {
  float.classList.toggle("active");
});
////////////////////////////// start of right menue/////////////////

let tapone = document.getElementById("tapone");
let taptwo = document.getElementById("taptwo");
let tapthree = document.getElementById("tapthree");
let tapfour = document.getElementById("tapfour");
let tapfive = document.getElementById("tapfive");
let submenus = document.querySelectorAll(".sub-ul");

tapone.addEventListener("click", function () {
  //   submenus.forEach((element)=>{
  //   element.classList.remove("active")
  // })
  tapone.classList.toggle("active");
  taptwo.classList.remove("active");
  tapthree.classList.remove("active");
  tapfour.classList.remove("active");
  tapfive.classList.remove("active");
  tapone.nextElementSibling.classList.toggle("active");
  taptwo.nextElementSibling.classList.remove("active");
  tapthree.nextElementSibling.classList.remove("active");
  tapfour.nextElementSibling.classList.remove("active");
  tapfive.nextElementSibling.classList.remove("active");
});

taptwo.addEventListener("click", () => {
  taptwo.classList.toggle("active");
  tapone.classList.remove("active");
  tapthree.classList.remove("active");
  tapfour.classList.remove("active");
  tapfive.classList.remove("active");
  taptwo.nextElementSibling.classList.toggle("active");
  tapone.nextElementSibling.classList.remove("active");
  tapthree.nextElementSibling.classList.remove("active");
  tapfour.nextElementSibling.classList.remove("active");
  tapfive.nextElementSibling.classList.remove("active");
});
tapthree.addEventListener("click", function () {
  // submenus.forEach(function(ele){
  //   ele.classList.remove("active")
  // })
  tapthree.classList.toggle("active");
  tapone.classList.remove("active");
  taptwo.classList.remove("active");
  tapfour.classList.remove("active");
  tapfive.classList.remove("active");
  tapthree.nextElementSibling.classList.toggle("active");
  tapone.nextElementSibling.classList.remove("active");
  taptwo.nextElementSibling.classList.remove("active");
  tapfour.nextElementSibling.classList.remove("active");
  tapfive.nextElementSibling.classList.remove("active");
});
tapfour.addEventListener("click", function () {
  // submenus.forEach(function(ele){
  //   ele.classList.remove("active")
  // })
  tapfour.classList.toggle("active");
  tapone.classList.remove("active");
  taptwo.classList.remove("active");
  tapthree.classList.remove("active");
  tapfive.classList.remove("active");
  tapfour.nextElementSibling.classList.toggle("active");
  tapone.nextElementSibling.classList.remove("active");
  tapthree.nextElementSibling.classList.remove("active");
  taptwo.nextElementSibling.classList.remove("active");
  tapfive.nextElementSibling.classList.remove("active");
});
tapfive.addEventListener("click", function () {
  tapfive.classList.toggle("active");
  tapone.classList.remove("active");
  taptwo.classList.remove("active");
  tapthree.classList.remove("active");
  tapfour.classList.remove("active");
  tapfive.nextElementSibling.classList.toggle("active");
  tapone.nextElementSibling.classList.remove("active");
  tapthree.nextElementSibling.classList.remove("active");
  tapfour.nextElementSibling.classList.remove("active");
  taptwo.nextElementSibling.classList.remove("active");
});
// ////////////////////////statrt  of the right filters
let rtactivator = document.getElementById("rtactivator");
let rtactivator2 = document.getElementById("rtactivator2");
let heart1 = document.getElementById("heart1");
let heart2 = document.getElementById("heart2");
let rt = document.getElementById("rt");

rtactivator.addEventListener("click", function () {
  heart1.classList.toggle("active");
  rt.classList.toggle("active");
  rtactivator.classList.toggle("active");
});
rtactivator2.addEventListener("click", function () {
  rtactivator2.nextElementSibling.classList.toggle("active");
  rtactivator2.classList.toggle("active");
  heart2.classList.toggle("active");
});

// ////////////////////////statrt  of the span select filters

let spans = document.querySelectorAll(".select span");
spans.forEach(function (span) {
  span.addEventListener("click", function (ele) {
    ele.currentTarget.classList.toggle("active");
  });
});

let lishadows = document.querySelectorAll(".select ul li");

let subactivator = document.querySelectorAll("strong");
let subStrong = document.querySelectorAll(".sub-strong");
subactivator.forEach(function (act) {
  act.addEventListener("click", function () {
    act.nextElementSibling.classList.toggle("active");
    act.classList.toggle("active");
  });
});

// /////////////////////////////end of right menue///////////////////////

///////(((((((((new scripte)))))))))
let lis = document.querySelectorAll("#float li");
let chngedCholrElemnets = document.querySelectorAll("[data]");
if (window.localStorage.getItem("x")) {
  //[1] if there is color in local storage
  chngedCholrElemnets.forEach(function (ele) {
    ele.style.backgroundColor = window.localStorage.getItem("x");
    ele.style.background = window.localStorage.getItem("x");
    ele.style.color = window.localStorage.getItem("x");
  });
  // [02] remove activecholor form li ;
  lis.forEach((li) => {
    li.classList.remove("activecolor");
  });

  //[3] add active color to curent elemnt
  let corr = document.querySelector(
    `[data-color="${window.localStorage.getItem("x")}"]`
  );
  corr.classList.add("activecolor");
} else {
}

lis.forEach((li) => {
  li.addEventListener("click", (ele) => {
    //remove acy=tive color from the ele
    //console.log(ele.currentTarget.dataset.color);
    lis.forEach((li) => {
      li.classList.remove("activecolor");
    });

    // add active for current element
    ele.currentTarget.classList.add("activecolor");

    // add the local storage
    window.localStorage.setItem("x", ele.currentTarget.dataset.color);

    // change the colors of elements
    chngedCholrElemnets.forEach(function (ele) {
      ele.style.backgroundColor = window.localStorage.getItem("x");
      ele.style.background = window.localStorage.getItem("x");
      ele.style.color = window.localStorage.getItem("x");
    });
  });
});
///////////// clear settings/////////
let colone = document.getElementById("colone");

colone.addEventListener("click", () => {
  window.localStorage.clear();
  colone.classList.add("activecolor");
  lis.forEach((li) => {
    li.classList.remove("activecolor");
  });
  colone.classList.add("activecolor");
  chngedCholrElemnets.forEach(function (ele) {
    ele.style.backgroundColor = window.localStorage.getItem("color");
    ele.style.background = window.localStorage.getItem("color");
    ele.style.color = window.localStorage.getItem("color");
  });
});
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let animateiedbuules = document.getElementById("animatedbubles");

yes.addEventListener("click", () => {
  animateiedbuules.classList.remove("active");
});
no.addEventListener("click", () => {
  animateiedbuules.classList.add("active");
});

let rest = document.getElementById("rest");
rest.addEventListener("click", () => {
  window.localStorage.clear();
  chngedCholrElemnets.forEach(function (ele) {
    ele.style.backgroundColor = window.localStorage.getItem("color");
    ele.style.background = window.localStorage.getItem("color");
    ele.style.color = window.localStorage.getItem("color");
  });
  lis.forEach((li) => {
    li.classList.remove("activecolor");
  });
  colone.classList.add("activecolor");

  animateiedbuules.classList.remove("active");
});

let right = document.getElementById("left");
let rightmenu = document.getElementById("rightmenu");
right.addEventListener("click", function () {
  rightmenu.classList.toggle("active");
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1020: {
      slidesPerView: 5,
      // spaceBetween: 50,
    },
    1500: {
      slidesPerView: 7,
      // spaceBetween: 50,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    350: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },

    992: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    1020: {
      slidesPerView: 9,
      // spaceBetween: 50,
    },
    1500: {
      slidesPerView: 10,
      // spaceBetween: 50,
    },
  },
});
