/// <reference path="./src/mount.ts" />
/// <reference path="./src/api.ts" />
/// <reference path="./src/service_selector.ts" />
/// <reference path="./src/render.ts" />

/**
 * First we will start by locating our mounting node
 * and adding some content to it.
 */

const root = Mount.getRoot();

ServiceSelector.init();

Render.fromServiceSelector();