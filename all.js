

let wrap = document.querySelector('.wrap');

for(let i = 2 ;i < 10;i++){
    let box = document.createElement('div');
    box.setAttribute('class','outside');
    wrap.appendChild(box);
    let rightarea = document.createElement('div');
    rightarea.setAttribute('class','rightarea');
    box.appendChild(rightarea);
    let plus = document.createElement('h2');
    plus.textContent = i;
    rightarea.appendChild(plus);
    console.log(i);
    for(let j = 1; j<4;j++){
        let str = `${i} x ${j} = ${i*j}`;
        let right = document.createElement('p');
        right.textContent = str;
        rightarea.appendChild(right);
    }
    let leftarea = document.createElement('div');
    leftarea.setAttribute('class','leftarea');
    box.appendChild(leftarea);
    for(let m = 4; m<10;m++){
        let str = `${i} x ${m} = ${i*m}`;
        let left = document.createElement('p');
        left.textContent = str;
        leftarea.appendChild(left);
    }
    
}

{
    let top = document.querySelector('.top');
    let title = document.createElement('h1');
    title.textContent = `九九乘法表 `;
    top.appendChild(title);
    let eng = document.createElement('h2');
    eng.textContent = `MULTIPLICATION CHART`;
    top.appendChild(eng);
}
{
    let icon1 = document.createElement('div');
    icon1.textContent = `x`;
    icon1.setAttribute('class','icon1');
    wrap.appendChild(icon1);
    let icon2 = document.createElement('div');
    icon2.textContent = `x`;
    icon2.setAttribute('class','icon2');
    wrap.appendChild(icon2);
    let icon3 = document.createElement('div');
    icon3.textContent = `x`;
    icon3.setAttribute('class','icon3');
    wrap.appendChild(icon3);
    let icon4 = document.createElement('div');
    icon4.textContent = `x`;
    icon4.setAttribute('class','icon4');
    wrap.appendChild(icon4);
}
