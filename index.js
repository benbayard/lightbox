import * as Mount from "./src/js/mount";
import * as ServiceSelector from "./src/js/service_selector";
import * as GridFactory from "./src/js/factories/grid_factory";

/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */

const root = Mount.getRoot();

ServiceSelector.init();

GridFactory.fromServiceSelector();
