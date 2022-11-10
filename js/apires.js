window.addEventListener('load', function () {
    new Glider(document.getElementById('glider'), {
        slidesToShow: 1,
        dots: '#dots',
        draggable: true,
        arrows: {
            prev: '#glider-prev',
            next: '#glider-next'
        }
    });
    
});

async function getUsersPosts() {
    let respondeUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    let arrayUsers = await respondeUsers.json();

    let respondePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    let arrayPosts = await respondePosts.json();

    mostrarData(arrayUsers, arrayPosts);
};

function mostrarData(usersData, postsData) {

    console.log(usersData, postsData);

    let htmlUsuario1 = `<p><b>${usersData[0].name}</b></p>`;
    let htmlPosts1 = `<p>"${postsData[0].title}?"</p>`;
    
    
    let aux;
    for (userData of usersData) {
        let boy = `<div>
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

    document.getElementById("userNombre1").innerHTML = htmlUsuario1;
    document.getElementById("userPosts1").innerHTML = htmlPosts1;


    
}

getUsersPosts();

