// Parte de carrusel
window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.carrusel__indicadores',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }, responsive: [
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

// axios
async function getApiRest() {
  try {
    const responseUser = await axios.get('https://jsonplaceholder.typicode.com/users');
    const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts');

    console.log("Respuesta Usuarios ", responseUser.data);
    console.log("Respuesta complete de posts usuario ", responsePosts.data);

    for(let objUser of responseUser.data){
      
      if(objUser.id  <= 4){

        for(let objPosts of responsePosts.data){          
          if(objUser.id == objPosts.userId){
            
            if(objPosts.userId == 3){
              document.getElementById("namePersona3").innerText = objUser.name;
              document.getElementById("postsPersona3").innerText = objPosts.body;
              document.getElementById("emailPersona").innerText = objUser.email;
            }else if(objPosts.userId == 1){
              document.getElementById("namePersona1").innerText = objUser.name;
              document.getElementById("postsPersona1").innerText = objPosts.body;
            }else if (objPosts.userId == 2){
            document.getElementById("namePersona2").innerText = objUser.name;
            document.getElementById("postsPersona2").innerText = objPosts.body;
            }else if(objPosts.userId == 4){
            document.getElementById("namePersona4").innerText = objUser.name;
            document.getElementById("postsPersona4").innerText = objPosts.body;
            }
          } 
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getApiRest();