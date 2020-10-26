
//-------------------model-----------
const main = document.querySelector('.main');
let btn = null;
const grayBlock = null;

//-------------------view------------
const drawOneGroup = () => {
    let str ='';
        str = `<div class="group">
        <div class="btn">btn</div>
        <div class="gray_block opacity"></div>
    </div>`;
        return str;
};

// animation of growing button
const growBtn = () => {
    let height = 0;
    let t = document.querySelectorAll(".btn");
    elem = t[t.length - 1];
    let id = setInterval(frame, 50);
    function frame() {
      if (height == 20) {
        clearInterval(id);
        elem.classList.add('text');
      } else {
        height++;
        elem.style.height = height + 'px';
      }
    }
    return elem;
};

//------------controller----------

//creating buttons with animation consistently (main)
const createBtns = (el, time, callback) => {
    setTimeout(() => {
        main.innerHTML += drawOneGroup();
        el = growBtn();
        if(typeof(el) !== 'undefined') {
        el.addEventListener('click', (e) => {
            handleBtnClick(e);
        });
    }
      if (callback) callback();
    }, time);
  };
  createBtns(btn,3000, () => {
    createBtns(btn, 3000, () => {
        createBtns(btn, 3000, () => {
            createBtns(btn, 3000, () => {
                createBtns(btn, 3000, false);
            });
        });
    });
});


// change opacity of big gray div
const handleBtnClick = (e) => {
    let grayBlock = document.querySelector(".gray_block");
    grayBlock.classList.toggle("opacity");
};

