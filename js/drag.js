// Dragging effect variables
const wrapper = document.querySelectorAll(".wrapper");
let isDown = false;
let startX;
let scrollLeft;

// Dragging effect
export const startDragging = () => {
  wrapper.forEach((item) =>
    item.addEventListener("mousedown", function (e) {
      isDown = true;
      // add class
      item.classList.add("active");
      item.startX = e.pageX - item.offsetLeft;
      item.scrollLeft = item.scrollLeft;
    })
  );
};

export const exitDragWhenMouseUp = () => {
  wrapper.forEach((item) =>
    item.addEventListener("mouseup", (e) => {
      isDown = false;
      item.classList.remove("active");
    })
  );
};

export const exitDragWhenMouseLeave = () => {
  wrapper.forEach((item) =>
    item.addEventListener("mouseleave", (e) => {
      isDown = false;
      item.classList.remove("active");
    })
  );
};

export const drag = () => {
  wrapper.forEach((item) =>
    item.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      e.preventDefault();

      // when moving
      const x = e.pageX - item.offsetLeft;
      const walk = (x - item.startX) * 3; // the time to move
      item.scrollLeft = item.scrollLeft - walk;
    })
  );
};
