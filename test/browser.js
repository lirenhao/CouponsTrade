/**
 * Author：pengfei
 * Create Date：2017/1/20
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
import { jsdom } from 'jsdom';

//** Create a fake DOM to add the tests to
const document = jsdom('<!doctype html><html><body></body></html>');
const window = document.defaultView;

//** Push the window object properties to the Mocha global object- no idea why it doesn't work for all of the properties
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

//** These ones need to be done manually
global['Element'] = window.Element;
global['HTMLElement'] = window.HTMLElement;
global['WebComponents'] = function() {};
global['Node'] = window.Node;
global['Window'] = window;
global['Viewport'] = function() { return { setup: function() {} } }

//** Polyfill for values missing from JSDOM
window.getComputedStyle = function(el1, el2) {
    return [
        "transitionDuration"
    ]
}

global.document = document;
global.window = window;