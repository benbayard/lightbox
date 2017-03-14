import {getRoot} from "./src/js/mount";
import {init} from "./src/js/service_selector";
import {fromServiceSelector} from "./src/js/factories/grid_factory";

/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */

const root = getRoot();

init();

fromServiceSelector();
