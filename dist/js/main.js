const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');


const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
//set intial
let showMenu = false;
menuBtn.addEventListener('click', ToggleMenu);

function ToggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set Value
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}


const words = ["shailesh Jadav", "Webdevloper", "writes code"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");

    var loopTyping = function () {
        if (word.length > 0) {
            if (document.getElementById('demo') != null) {
                document.getElementById('demo').innerHTML += word.shift();
            }
        } else {
            deletingEffect();
            return false;
        };

        timer = setTimeout(loopTyping, 500);
    };
    loopTyping();
};



function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (i % 2 === 1) {
            document.getElementById('am').style.display = 'none';
        }
        else {

            document.getElementById('am').style.display = 'inline-block';

        }

        if (word.length > 0) {
            word.pop();
            document.getElementById('demo').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };

        timer = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
};

typingEffect();


if ((document.querySelector('.html') != null) && (document.querySelector('.css') != null) && (document.querySelector('.js') != null)) {
    document.querySelector('.html').style.width = '65%';
    document.querySelector('.css').style.width = '90%';
    document.querySelector('.js').style.width = '70%';
    // document.querySelector('.ps').style.width = '85%';
}

// document.querySelector('.projects img').onmouseover(function () {
//     alert("fsdf");
// })
    // $('.html').css('width', '90%');
    // $('.css').css('width', '90%');
    // $('.jquery').css('width', '70%');
    // $('.javascript').css('width', '60%');
    // $('.adobe').css('width', '80%');
    // $('.wordpress').css('width', '10%');
    // $('.ui').css('width', '70%');
    // $('.rwd').css('width', '80%');

