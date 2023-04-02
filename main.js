// POUR LE MENU RESPONSIVE

// on selectionne le boutton et le menu
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu-items");

// on ajoute l'evenement du click
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// POUR FIXER LE MENU

// on selectionne la classe de la nav
// const navbar = document.querySelector(".nav");

// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   const navbarHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight >= navbarHeight) {
//     navbar.classList.add("fixed");
//     // navbar.style.position = "fixed";
//   } else {
//     navbar.classList.remove("fixed");
//     // navbar.style.position = "absolute";
//   }
// });

const navbar = document.querySelector(".nav");
// const PARTIE = document.querySelectorAll(".partie");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight >= 40) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// CREER UN MENU SELECTIF

// on met tous les elements et leurs caracteristiques dans un array

const menuRepas = [
  {
    id: "1",
    titre: "Begnets",
    prix: 1000,
    cathegorie: "entre",
    description: `Begnets pannées `,

    image: "./images/begnet.jpg",
  },

  {
    id: "2",
    titre: " Brochettes",
    prix: 1200,
    cathegorie: "entre",
    description: `Brochettes, Mais, Thon`,

    image: "./images/brochettemais.jpg",
  },

  {
    id: "3",
    titre: "Burger",
    prix: 1000,
    cathegorie: "dessert",
    description: `Burger, Steak de Veau`,

    image: "./images/burger.jpg",
  },

  {
    id: "4",
    titre: "Menu Burger",
    prix: 2000,
    cathegorie: "dessert",
    description: `Burger Frittes Salade`,

    image: "./images/burgerfritte.jpg",
  },

  {
    id: "5",
    titre: "Menu Burger Max",
    prix: 2300,
    cathegorie: "dessert",
    description: `Double Burger Frittes`,

    image: "./images/burgerfruitfritte.jpg",
  },

  {
    id: "6",
    titre: "Pattes",
    prix: 2000,
    cathegorie: "repas",
    description: `Pattes, Poissons`,

    image: "./images/pattepoisson.jpg",
  },

  {
    id: "7",
    titre: "Menu Burger",
    prix: 3000,
    cathegorie: "dessert ",
    description: `Burger, Pattates, Frittes`,

    image: "./images/burgerpattate.jpg",
  },

  {
    id: "8",
    titre: "Poisson",
    prix: 1500,
    cathegorie: "repas",
    description: `Poisson, Fruits de Mer`,

    image: "./images/poissonfruit.jpg",
  },

  {
    id: "9",
    titre: "Croissant",
    prix: 400,
    cathegorie: "entre",
    description: `Croissant, Sesame `,

    image: "./images/croissant.jpg",
  },

  {
    id: "10",
    titre: "Croissant",
    prix: "500",
    cathegorie: "entre",
    description: `Croissant, Poudre de Coco `,

    image: "./images/croissantcoco.jpg",
  },

  {
    id: "11",
    titre: "Croissant Saucissons",
    prix: 1000,
    cathegorie: "dessert",
    description: `Croissant, Saucissons de veau`,

    image: "./images/croissantsaucisse.jpg",
  },

  {
    id: "12",
    titre: "Grillades de boeuf",
    prix: 3000,
    cathegorie: "repas",
    description: `viande Roulé`,

    image: "./images/grilladeveau.jpg",
  },

  {
    id: "13",
    titre: "Poulet aux Fruits",
    prix: 3000,
    cathegorie: "repas",
    description: `Poulet, Fruits de Mer`,

    image: "./images/pouletfruit.jpg",
  },

  {
    id: "14",
    titre: "Steak de Boeuf",
    prix: 2300,
    cathegorie: "repas",
    description: `Viande Fumées`,

    image: "./images/steak.jpg",
  },
];

// on selectionne le menu et les bouttons des cathegories

const LeMenu = document.querySelector(".lemenu");
const Bouttons = document.querySelectorAll(".button");

// on cree la fonction pour afficher les elements du menu
window.addEventListener("DOMContentLoaded", function () {
  AfficherElement(menuRepas);
});

function AfficherElement(MenuItems) {
  let AfficherMenu = MenuItems.map(function (item) {
    return `<div class="menu-plat">
                <div class="menu-image">
                    <img src="${item.image}" alt="" srcset="">
            
                </div>
            
                <div class="menu-contenu">
            
                    <h2>${item.titre}</h2>
                    <h3>${item.description}</h3>
                    <p>${item.prix} FCFA</p>
            
                </div>
            
            </div>`;
  });

  AfficherMenu = AfficherMenu.join("");
  LeMenu.innerHTML = AfficherMenu;
}

// pour afficher en fonctions de la cathegorie

Bouttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const data = e.currentTarget.dataset.id;
    const cathegorie = menuRepas.filter(function (MenuCathegorie) {
      if (MenuCathegorie.cathegorie === data) {
        return MenuCathegorie;
      }
    });

    if (data === "tout") {
      AfficherElement(menuRepas);
    } else {
      AfficherElement(cathegorie);
    }
  });
});

// OPTION DE COMMANDE

// on selectionne le formulaire de remplissage

var form = document.getElementById("ajoutForm");

// on selectionne le tr qui contient les produits commandés
var itemlist = document.getElementById("tbody");

// la div contenu
var CONTENU = document.getElementById("tvalidation");
// CREATION DES EVENEMENTS

// evenement de commande

form.addEventListener("submit", addItem);

// ajouter un item
function addItem(e) {
  e.preventDefault();
  // obteniir la valeure de l'input
  var newItem = document.getElementById("nom").value;
  var newItem2 = document.getElementById("numero").value;
  var newItem3 = document.getElementById("plat").value;
  var newItem4 = document.getElementById("quantite").value;

  // creer un tr
  var tr = document.createElement("tr");
  //creer des td pour le tableau
  var td = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  // ajouter l'element de l'input aux td
  td.appendChild(document.createTextNode(newItem));
  td2.appendChild(document.createTextNode(newItem2));
  td3.appendChild(document.createTextNode(newItem3));
  td4.appendChild(document.createTextNode(newItem4));

  // creer un i de suppression
  var deleteBtn = document.createElement("i");
  // ajouter une classe au i
  deleteBtn.className = "fa-solid fa-trash fa-2x ";

  // mettre les td dans le tr
  tr.appendChild(td);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  // mettre le tr dans le tbody
  itemlist.appendChild(tr);

  // mettre le boutton i dans le contenu
  CONTENU.appendChild(deleteBtn);

  // afficher le bouttons apres la validation
  var validationbtn = document.querySelector(".validation-button");
  validationbtn.classList.add("block");

  //SUPPRIMER LE ELEMENT
  deleteBtn.addEventListener("click", () => {
    if (confirm("Êtes vous sûrs?")) {
      itemlist.removeChild(tr);
      deleteBtn.classList.add("none");
    }

    validationbtn.classList.remove("block");
  });
}

// POUR LE MODAL DE LA COMMANDE

// on prend le modal
var modal = document.getElementById("simplemodal");

// le boutton du modal
var validationbtn = document.querySelector(".validation-button");

// boutton de fermeture du modal
var closeBtn = document.querySelector(".close-btn");

// evenement d'ouverture
validationbtn.addEventListener("click", openModal);

//evenement de fermeture
closeBtn.addEventListener("click", closeModal);

// Click exterieur
window.addEventListener("click", outsideClick);

// fonction ouverture
function openModal() {
  modal.style.display = "block";
}

// fonction fermeture

function closeModal() {
  modal.style.display = "none";
}

// fonction click exterieur

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
