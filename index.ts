/// <reference path="./src/ts/mount.ts" />
/// <reference path="./src/ts/api.ts" />
/// <reference path="./src/ts/service_selector.ts" />
/// <reference path="./src/ts/factories/grid_factory.ts" />

/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */

const root = Mount.getRoot();

ServiceSelector.init();

GridFactory.fromServiceSelector();
