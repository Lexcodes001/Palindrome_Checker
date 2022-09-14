let text = document.querySelector('#user-input'),
checkBtn = document.querySelector('#button'),
result = document.querySelector('.result'),
inputBox = document.querySelector('.input'),
body = document.querySelector('body'),
filterText;

checkBtn.addEventListener('click', () => {
    checkBtn.style.borderRadius = '.7rem .7rem .7rem 0';
    result.style.display = 'block';
    if (filterText == "" || filterText == null) {
        return result.innerHTML = 'You have entered nothing!';
    }
    let reverseText = filterText.split("").reverse().join("");
    if (filterText == reverseText) {
        return result.innerHTML = `Yes, <span class='txt'>'${text.value}'</span> is a PALINDROME!`;
    } else {
         return result.innerHTML = `No, <span class='txt'>'${text.value}'</span> is <span class='not'>NOT</span> a PALINDROME!`;
    }
});

text.addEventListener('keyup', () => {
    filterText = text.value.trim().toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (text.value != '' || text.value != null) {
        checkBtn.classList.add('active');
    } else{
        checkBtn.classList.remove('active');
    }
});

text.addEventListener('focus', () => {
    checkBtn.style.borderRadius = '.7rem';
    result.style.display = 'none';
    inputBox.style.border = '2px solid var(--txt)';
    inputBox.style.boxShadow = 'inset 2px 2px 10px rgba(0, 0, 0, .30)';
});

text.addEventListener('blur', () => {
    inputBox.style.border = 'none';
    inputBox.style.boxShadow = 'inset 3px 3px 5px rgba(0, 0, 0, .30)';
});

var imgArray = ['url(images/bg2.jpeg)','url(images/bg3.png)','url(images/bg4.jpeg)','url(images/bg5.jpeg)','url(images/bg6.jpeg)','url(images/bg7.png)','url(images/bg8.jpeg)','url(images/bg9.jpeg)'],
imgIndex = 0;

function changeImage() {
    //body.setAttribute('src', imgArray[imgIndex]);
    body.style.backgroundImage = imgArray[imgIndex];
    imgIndex++;
    if (imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
}

setInterval(changeImage,5000);

var i = 0, speed = 250, header = document.querySelector('.about h1'), txt1 = document.querySelector('.about .p1'), txt2 = document.querySelector('.about .p2'), headerTxt = 'Palindrome Checker', paraTxt1 = `A palindrome is a word, phrase or number that reads the same backwards as forwards, e.g. level, refer, 1881 etc.`, paraTxt2 = `Enter a word, phrase, or number below and click the button underneath to check if it's a palindrome.`;
    function typingEffect() {
        if (i <= headerTxt.length) {
            header.innerHTML += headerTxt.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        } else {
            i = 0;
            typeEffect();
        }
    }
    function typeEffect() {
        speed = 200;
        if (i <= paraTxt1.length) {
            txt1.innerHTML += paraTxt1.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        } else {
            i = 0;
            typEffect();
        }
    }
    function typEffect() {
        speed = 200;
        if (i <= paraTxt2.length) {
            txt2.innerHTML += paraTxt2.charAt(i);
            i++;
            setTimeout(typEffect, speed);
        }
    }
    typingEffect();