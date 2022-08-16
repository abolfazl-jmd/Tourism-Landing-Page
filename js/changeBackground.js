import { changeScrollBar } from "./scrollbar.js";

// Grabbing all elements
const backgroundImage = document.querySelector(".backgrounds__img");
const starterImageNum = document.querySelector(".starter");
const endingImageNum = document.querySelector(".ending");
const scrollBar = document.querySelector(".scrollbar");

// VARIABLES
const TIME_OUT_SEC = 8;
let index = 0;

const allImages = [
  "https://s6.uupload.ir/files/background-image-1_k7mq.jpg",
  "https://s6.uupload.ir/files/background-image-2_f5af.jpg",
  "https://s6.uupload.ir/files/background-image-3_sxlf.jpg",
  "https://s6.uupload.ir/files/background-image-4_xkvg.jpg",
  "https://s6.uupload.ir/files/background-image-5_perw.jpg",
  "https://s6.uupload.ir/files/background-image-6_ztya.jpg",
  "https://s6.uupload.ir/files/background-image-7_1fv6.jpg",
];

const setImageBackground = (index) => {
  backgroundImage.src = `${allImages[index]}`;
};

// check the last index to reset it again
const checkIfTheLastImage = (index) => {
  if (index === 7) return 0;
  else return index;
};

export const changeImageHandler = () => {
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
