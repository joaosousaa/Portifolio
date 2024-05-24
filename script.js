//dark mode
const darkModeToggle = document.getElementById('sw-checkbox');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// voltar aotop
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topButton").classList.add('active');
    } else {
        document.getElementById("topButton").classList.remove('active');
    }
}

// Curso
const text = "Desenvolvedor Front-end";
const speed = 100;
const typingText = document.getElementById('typing-text');
const cursor = document.getElementById('cursor');

let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typingText.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    }
}
type();

//navegação de links
$(document).ready(function () {
    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 0);
    });
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        $('.ir').each(function (i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.nav-link.active').removeClass('active');
                $('.nav-link').eq(i).addClass('active');
            }
        });
    }).scroll();
});

// Redirecionar o botao Fale Comigo pra contatos
$(document).ready(function () {
    $('#redirecionarBtn').on('click', function () {
        window.location.href = '#contato';
    });
});

// Fecha o menu de navegação
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

//Mostrar fundo da nav
window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});


