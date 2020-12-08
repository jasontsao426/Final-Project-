let brandgrid = document.getElementById('brandgrid');


let brand_info = [
  {

    "brand" : "",
    "img" : "9.png",
    "discription" : "4 months"
  },

  {

    "brand" : "",
    "img" : "10.png",
    "discription" : "4 months"
  },

  {

    "brand" : "",
    "img" : "12.png",
    "discription" : "2 months"
  },

  {

    "brand" : "",
    "img" : "11.png",
    "discription" : "6 months"
  },

  {

    "brand" : "",
    "img" : "13.png",
    "discription" : "8 months"
  },

  {

    "brand" : "",
    "img" : "14.png",
    "discription" : "3 months"
  }
];

for (let i = 0; i < brand_info.length; i++) {
  createElement(brand_info[i]);
}

function createElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');


  let newContentBrand = document.createElement("H3");
  newContentBrand.classList.add('contentBrand');
  newContentBrand.innerText = incomingJSON['brand'];
  newContentElement.appendChild(newContentBrand);


  let newContentImg = document.createElement("IMG");
  newContentImg.classList.add("pantoneIMG");
  newContentImg.src = incomingJSON['img'];
  newContentElement.appendChild(newContentImg);


  let newContentDiscription = document.createElement("P");
  newContentDiscription.classList.add('contentDiscription');
  newContentDiscription.innerText = incomingJSON['discription'];
  newContentElement.appendChild(newContentDiscription);


    brandgrid.appendChild(newContentElement);

}
