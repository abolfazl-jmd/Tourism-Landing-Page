import "../sass/main.scss";
import { changeImageHandler } from "./changeBackground.js";
import {
  drag,
  exitDragWhenMouseLeave,
  exitDragWhenMouseUp,
  startDragging,
} from "./drag.js";

// function run for initialization
const init = () => {
  // Image change handler
  changeImageHandler();
  // Dragging Effect functions
  startDragging();
  exitDragWhenMouseLeave();
  exitDragWhenMouseUp();
  drag();
};

init();
