(()=>{"use strict";document.addEventListener("mousemove",(function(e){document.querySelectorAll(".translate").forEach((function(t){var o=.02*(window.innerWidth/2-e.x),n=.02*(window.innerHeight/2-e.y);t.style.transform="translate("+o+"px, "+n+"px)"}))})),document.querySelectorAll(".scroll-button").forEach((function(e){console.log(e),e.addEventListener("mousedown",(function(){var t=e.getAttribute("data-scroll-to");document.querySelector(t).scrollIntoView({alignToTop:!0,behavior:"smooth"})}))}));var e=new IntersectionObserver((function(e){e.forEach((function(e){console.log(e),e.isIntersecting&&e.intersectionRatio>.3?e.target.classList.add("fade-in__visible"):e.target.classList.remove("fade-in__visible")}))}),{threshold:[0,.3,1]});document.querySelectorAll(".fade-in").forEach((function(t){return e.observe(t)}))})();