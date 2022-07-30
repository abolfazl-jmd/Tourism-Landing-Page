// Grabbing all elements
const backgroundImage = document.querySelector(".backgrounds__img");
const scrollBar = document.querySelector(".scrollbar");
const starterImageNum = document.querySelector(".starter");
const endingImageNum = document.querySelector(".ending");

// VARIABLES
const TIME_OUT_SEC = 5;
let index = 0;

const allImages = [
  "background-image-1.jpg",
  "background-image-2.jpg",
  "background-image-3.jpg",
  "background-image-4.jpg",
  "background-image-5.jpg",
  "background-image-6.jpg",
  "background-image-7.jpg",
];

const setImageBackground = (index) => {
  backgroundImage.src = `./assets/${allImages[index]}`;
};

// check the last index to reset it again
const checkIfTheLastImage = (index) => {
  if (index === 7) return 0;
  else return index;
};

// change the scrollbar position
const changeScrollBar = (element, index) => {
  element.style.top = `${index * 15}%`;
};

const init = () => {
  // set the ending num
  endingImageNum.innerText = `0${allImages.length}`;

  setInterval(() => {
    setImageBackground(index);
    // change starter num
    starterImageNum.innerText = `0${index + 1}`;
    // change the scrollbar
    changeScrollBar(scrollBar, index);
    index++;
    index = checkIfTheLastImage(index);
  }, TIME_OUT_SEC * 1000);
};

init();
