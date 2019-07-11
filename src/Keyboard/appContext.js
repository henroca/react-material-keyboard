export let appConfig = {};

export function init(config) {
    appConfig = config;
    Object.freeze(appConfig);
}
