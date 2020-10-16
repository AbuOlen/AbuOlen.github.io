//---------------- task 1 ------------------

// btn1.addEventListener('click',()=> {
//   btn2.classList.toggle('hidden');
//   hello.classList.add('hidden');
// });
// btn2.addEventListener('click',() => {
//   hello.classList.toggle('hidden');
// });

//------------------task 2  ----------------

const btn2State = {
  Black: 0,
  Gray: 1,
};

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const hello = document.querySelector(".hello");

let button2State = btn2State.Black;

const handleBtn2GrayState = () => {
  btn2.classList.remove("black");
  btn2.classList.add("gray");
};

const handleBtn2BlackState = () => {
  hello.classList.add("hidden");
};

const handleBtn2Click = () => {
  hello.classList.remove("hidden");
  // btn2.disabled = true;
  btn2.removeEventListener("click", handleClick);
};

const handleClick = (e) => {
  if (e.target === btn1) {
    if (button2State === btn2State.Black) {
      handleBtn2GrayState();
      button2State = btn2State.Gray;
    } else {
      handleBtn2BlackState();
      button2State = btn2State.Black;
    }
  } else {
    handleBtn2Click();
  }
};

btn1.addEventListener("click", handleClick);

btn2.addEventListener("click", handleClick);
