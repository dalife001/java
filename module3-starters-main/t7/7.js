const p = document.querySelector('#trigger');
const imge = document.querySelector('#target');

p.onmouseover = () => {
  imge.src = "img/picB.jpg";
  console.log("Mouse over event triggered");
};

p.onmouseout = () => {
  imge.src = "img/picA.jpg";
};
