document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: 'img/1.webp' },
        { img: 'img/2.webp' },
        { img: 'img/3.webp' },
        { img: 'img/4.webp' },
        { img: 'img/5.webp' },
        { img: 'img/6.webp' },
        { img: 'img/7.webp' },
        { img: 'img/8.webp' },
        { img: 'img/9.webp' },
        { img: 'img/10.webp' },
        { img: 'img/11.webp' },
        { img: 'img/12.webp' },
        { img: 'img/13.webp' },
        { img: 'img/14.webp' },
        { img: 'img/15.webp' },
        { img: 'img/16.webp' },
        { img: 'img/17.webp' },
        { img: 'img/18.webp' },
        { img: 'img/19.webp' },
        { img: 'img/20.webp' },
        { img: 'img/21.webp' },
        { img: 'img/22.webp' },
        { img: 'img/23.webp' },
        { img: 'img/24.webp' },
        { img: 'img/25.webp' },
    ]
    let contador = 0;
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar)
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function () {
        overlay.style.visibility = "hidden";
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const filtroAutor = document.getElementById('filtro-autor');
    const imagenes = document.querySelectorAll('.galeria img');

    filtroAutor.addEventListener('change', function() {
        const autorSeleccionado = filtroAutor.value;

        imagenes.forEach(img => {
            if (autorSeleccionado === 'todos' || img.dataset.autor === autorSeleccionado) {
                img.style.display = 'block';
                img.classList.add('fade-in');
                img.classList.remove('fade-out');
            } else {
                img.classList.add('fade-out');
                img.classList.remove('fade-in');
                setTimeout(() => {
                    img.style.display = 'none';
                }, 300); // Duración de la animación
            }
        });
    });
});

// funciones backend
document.addEventListener('DOMContentLoaded', function() {
    //loadImages();

    document.getElementById('addImageForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addImage();
    });
});

function loadImages() {
    fetch('leer.php')
        .then(response => response.json())
        .then(data => {
            const galeria = document.getElementById('galeria');
            galeria.innerHTML = 'galeria';
            data.forEach(image => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">
                    <p>${image.alt}</p>
                    <p>Autor: ${image.author}</p>
                    <button onclick="deleteImage(${image.id})">Eliminar</button>
                `;
                galeriaa.appendChild(div);
            });
        });
}
function addImage() {
    const formData = new FormData(document.getElementById('addImageForm'));
    console.log (formData);
    fetch('crear.php', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            loadImages();
            document.getElementById('addImageForm').reset();
        }
    });
}

function deleteImage(id) {
    const formData = new FormData();
    formData.append('id', id);
    fetch('eliminar.php', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            loadImages();
        }
    });
}
