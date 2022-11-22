// Parte de carrusel
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '.carrusel__indicadores',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
              }
            },
            {
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.1
              }
            }
          ]
      });
  })
//   const axios = require('axios/dist/browser/axios.cjs'); // browser commonJS bundle (ES2017)
// // const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)

  async function getUsersPosts() {
    let respondeUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    let arrayUsers = await respondeUsers.json();

    let respondePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    let arrayPosts = await respondePosts.json();

    mostrarData(arrayUsers, arrayPosts);
};

function mostrarData(usersData, postsData) {

  console.log(usersData, postsData);
  console.log('company name:',usersData[0].company.name)

  console.log("HTML post 1",postsData[0].title);

  let usuario1 = usersData[0].name;
  let htmlPosts1 = postsData[0].title;
  let company = usersData[0].company.name;
  
  
  let aux;
  for (userData of usersData) {
      let boy = 
  `<div>
      <div>
          <img src="/access/img/person_1.jpg" class=" rounded-circle" alt="Persona numero1">
      </div>
      <div>
          <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita illo amet ipsum,
              explicabo corrupti asperiores itaque soluta aperiam atque animi Lorem ipsum dolor sit
              amet consectetur adipisicing elit".</p>
      </div>
      <div>
          <p><b class="namecaro">John Smith</b></p>
      </div>
  </div>`;
  aux = boy + aux;
  }

  //document.getElementById("carousel").innerHTML = prr;

  document.getElementById("userNombre1").innerHTML = usuario1;
  document.getElementById("userPosts1").innerHTML = htmlPosts1; //testimonial
  document.getElementById("companyName").innerHTML = company;
 
}

// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

getUsersPosts();