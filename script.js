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