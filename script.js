// ================================
// line selection at startup
// ================================

function findRowCode(textContainers) {
  const text = document.querySelectorAll(textContainers);
  const reg = /[\_\/\-\\]|.jsp|.html|.css|.js|.txt|.png|.jpg|.svg/gm;

  text.forEach(item => {
    const arr = item.textContent.trim().split(' ');
    arr.find((i, index) => { 
      if(i.match(reg)) {
        arr[index] = `<div style="color: #CA0000; font-size: 13px;">${arr[index]}</div>`;
      }
    });
    item.innerHTML = arr.join(' ');
  });

}

findRowCode('.text');

// ================================
// return selected rows
// ================================

function returnFindRowCode(textContainers) {
  const text = document.querySelector(textContainers);
  const reg = /[\_\/\-\\]|.jsp|.html|.css|.js|.txt|.png|.jpg|.svg/gm;

  const arr = text.textContent.trim().split(' ');
  arr.find((i, index) => { 
    if(i.match(reg)) {
      arr[index] = `<div style="color: #CA0000; font-size: 13px;">${arr[index]}</div>`;
    }
  });
  return arr.join(' ');
}


document.querySelector('.text2').innerHTML = returnFindRowCode('.text2');
document.querySelector('.text3').innerHTML = returnFindRowCode('.text3');
