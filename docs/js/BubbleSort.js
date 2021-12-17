// @flow
import { h } from "../web_modules/preact.js";
import {
  useContext,
  useEffect,
  useState,
} from "../web_modules/preact/hooks.js";
import { html } from "../web_modules/htm/preact.js";
import { AppContext } from "./AppContext.js";
import { bubbleSortFactory } from "./bubble-sort/index.js";
import { gridDisplay } from "./grid-display/index.js";
// CSS
// import {
//   rawStyles,
//   createStyles,
//   setSeed,
// } from "../web_modules/simplestyle-js.js";

// NOTE: the actual type of ALGORITHMS and COUNT don't have any effect
/*::
type Props = {
  containerId: string,
  finishCounter: {
    ALGORITHMS: Array<Object>,
    COUNT: number
  }
}
*/
const BubbleSort /*: function */ = (props /*: Props */) => {
  //   const [state /*: AppState */, dispatch] = useContext(AppContext);
  //   const [count /*: number */, setCount] = useState(props.count);

  useEffect(() => {
    // Config
    const bubbleConf = {
      FPS: 10,
      MAX_SECONDS_TRANSITION_INTERVAL: 1,
      COLS: 4,
      ROWS: 4,
      SHOW_WORKING: true,
      LOOP: true,
      RELOAD_INTERVAL: 2000,
      CONSTANT_TRANSITION_SPEED: true,
      FINISH_COUNTER: props.finishCounter,
      CONTAINER_ID: props.containerId,
    };
    // --------------------------------- //
    // BUBBLE SORT
    // --------------------------------- //
    const bubbleSort = bubbleSortFactory(bubbleConf, gridDisplay);
    // I shouldn't, but I am. Adding this algorithm  to the FINISH_COUNTER.ALGORITHMS prop
    bubbleConf.FINISH_COUNTER.ALGORITHMS.push(bubbleSort);
    bubbleSort.run();
  }, []);
  return html`
    <div id=${props.containerId} className="viz bubble-sort"></div>
  `;
};

export default BubbleSort;
