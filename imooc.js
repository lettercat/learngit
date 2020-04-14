document.addEventListener("DOMContentLoaded",function(){
    function createParagraph(){
        let para = document.createElement('p');
        para.textContent = '你点击了这个按钮！';
        document.body.appendChild(para);
    }
//button标签的onclick属性的js写法
    const buttons = document.querySelectorAll('button');

    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }
//建议使用这种写法
    });