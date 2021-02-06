'use strict';

var sirv = require('sirv');
var polka = require('polka');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var Chart = require('chart.js');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var polka__default = /*#__PURE__*/_interopDefaultLegacy(polka);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var Chart__default = /*#__PURE__*/_interopDefaultLegacy(Chart);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

var root_comp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get default () { return Layout; }
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/routes/index.svelte generated by Svelte v3.31.2 */

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="${"relative bg-gray-50"}"><main class="${"lg:relative"}"><div class="${"mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48\n      lg:text-left"}"><div class="${"px-4 lg:w-1/2 sm:px-8 xl:pr-16"}"><h1 class="${"text-4xl tracking-tight font-extrabold text-gray-900\n          sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"}"><span class="${"block xl:inline"}">Earn lots of</span>
          <span class="${"block text-blue-500 xl:inline"}">FREE BOBUX</span></h1>
        <p class="${"mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5\n          md:max-w-3xl"}">This is a bunch of really cool generic text that every reward site has
          on the front page. Thanks for wasting 10 seconds of your life reading
          this worthless piece of text.
        </p>
        <div class="${"mt-10 sm:flex sm:justify-center lg:justify-start"}"><div class="${"rounded-md shadow"}"><a href="${"#"}" class="${"w-full flex items-center justify-center px-8 py-3 border\n              border-transparent text-base font-medium rounded-md text-white\n              bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"}">Get started
            </a></div>
          <div class="${"mt-3 rounded-md shadow sm:mt-0 sm:ml-3"}"><a href="${"#"}" class="${"w-full flex items-center justify-center px-8 py-3 border\n              border-transparent text-base font-medium rounded-md text-blue-500\n              bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"}">How it works
            </a></div></div></div></div>
    <div class="${"relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0\n      lg:right-0 lg:w-1/2 lg:h-full"}"><img class="${"absolute inset-0 w-full h-full object-cover"}" src="${"https://cdn.discordapp.com/attachments/804411091102859284/806590637909475388/render_final.png"}" alt="${""}"></div></main></div>

<div class="${"py-12 bg-gray-50"}"><div class="${"flex flex-col w-full justify-center items-center pt-8 pb-16"}"><h1 class="${"text-5xl font-extrabold"}">How it works</h1></div>
  <div class="${"max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-10"}"><dl class="${"space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"}"><div class="${"flex flex-col items-center"}"><img src="${"https://cdn.discordapp.com/attachments/804411091102859284/806969877642477629/render_final.png"}" alt="${""}" class="${"h-64"}">
        <div class="${"mt-14"}"><dt class="${"text-2xl text-center leading-6 font-medium text-gray-900"}">Link your Boblox account
          </dt>
          <dd class="${"mt-2 text-center text-lg text-gray-500 mx-3"}">All you need to do to start earning is link your Boblox account. No
            passwords required!
          </dd></div>
      </div><div class="${"flex flex-col items-center"}"><img src="${"https://cdn.discordapp.com/attachments/804411091102859284/806970173705551882/render_final.png"}" alt="${""}" class="${"h-64"}">
        <div class="${"mt-14"}"><dt class="${"text-2xl text-center leading-6 font-medium text-gray-900"}">Start earning!
          </dt>
          <dd class="${"mt-2 text-center text-lg text-gray-500 mx-3"}">You can earn Bobux by completing quizzes, sharing the site on social
            media, completing tasks, downloading apps or entering our giveaways!
          </dd></div>
      </div><div class="${"flex flex-col items-center"}"><img src="${"https://cdn.discordapp.com/attachments/804411091102859284/806969816338399263/render_final.png"}" alt="${""}" class="${"h-64"}">
        <div class="${"mt-14"}"><dt class="${"text-2xl text-center leading-6 font-medium text-gray-900"}">Withdraw your earnings!
          </dt>
          <dd class="${"mt-2 text-center text-lg text-gray-500 mx-3"}">Withdraw your earnings by joining a group and receiving an automatic
            payout! We&#39;ll never ask for your password!
          </dd></div></div></dl></div></div>


<div class="${"bg-gray-50 pt-12 sm:pt-16"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"max-w-4xl mx-auto text-center"}"><h2 class="${"text-3xl font-extrabold text-gray-900 sm:text-4xl"}">Loved by all your fellow bobloxians!
      </h2>
      <p class="${"mt-3 text-xl text-gray-500 sm:mt-4"}">We are such a great service! All the bobloxians love us! Even your mom!
      </p></div></div>
  <div class="${"mt-10 pb-12 bg-white sm:pb-16"}"><div class="${"relative"}"><div class="${"absolute inset-0 h-1/2 bg-gray-50"}"></div>
      <div class="${"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"max-w-4xl mx-auto"}"><dl class="${"rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3"}"><div class="${"flex flex-col border-b border-gray-100 p-6 text-center\n              sm:border-0 sm:border-r"}"><dt class="${"order-2 mt-2 text-lg leading-6 font-medium text-gray-500"}">Users
              </dt>
              <dd class="${"order-1 text-5xl font-extrabold text-blue-500"}">100k+
              </dd>
            </div><div class="${"flex flex-col border-t border-b border-gray-100 p-6\n              text-center sm:border-0 sm:border-l sm:border-r"}"><dt class="${"order-2 mt-2 text-lg leading-6 font-medium text-gray-500"}">Total Paid
              </dt>
              <dd class="${"order-1 text-5xl font-extrabold text-blue-500"}">5M+</dd>
            </div><div class="${"flex flex-col border-t border-gray-100 p-6 text-center\n              sm:border-0 sm:border-l"}"><dt class="${"order-2 mt-2 text-lg leading-6 font-medium text-gray-500"}">Offers completed
              </dt>
              <dd class="${"order-1 text-5xl font-extrabold text-blue-500"}">250k+
              </dd></div></dl></div></div></div></div></div>


<div class="${"bg-white"}"><div class="${"max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"}"><h2 class="${"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"}"><span class="${"block"}">Ready to start making bobux?</span>
      <span class="${"block text-blue-500"}">Get started now!</span></h2>
    <div class="${"mt-8 flex justify-center"}"><div class="${"inline-flex rounded-md shadow"}"><a href="${"/link"}" class="${"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"}">Link account
        </a></div></div></div></div>

<footer class="${"bg-gray-50"}"><div class="${"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"}"><nav class="${"-mx-5 -my-2 flex flex-wrap justify-center"}" aria-label="${"Footer"}"><div class="${"px-5 py-2"}"><a href="${"#"}" class="${"text-base text-gray-500 hover:text-gray-900"}">FAQ</a></div>

      <div class="${"px-5 py-2"}"><a href="${"#"}" class="${"text-base text-gray-500 hover:text-gray-900"}">Privacy Policy
        </a></div>

      <div class="${"px-5 py-2"}"><a href="${"#"}" class="${"text-base text-gray-500 hover:text-gray-900"}">Terms of Service
        </a></div></nav>
    <div class="${"mt-8 flex justify-center space-x-6"}"><a href="${"#"}" class="${"text-gray-400 hover:text-gray-500"}"><span class="${"sr-only"}">Facebook</span>
        <svg class="${"h-6 w-6"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128\n            8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89\n            1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63\n            1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"}" clip-rule="${"evenodd"}"></path></svg></a>

      <a href="${"#"}" class="${"text-gray-400 hover:text-gray-500"}"><span class="${"sr-only"}">Instagram</span>
        <svg class="${"h-6 w-6"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218\n            2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153\n            1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0\n            2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902\n            4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772\n            1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643\n            0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902\n            0 01-1.772-1.153 4.902 4.902 0\n            01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902\n            4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247\n            1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081\n            1.802h-.468c-2.456\n            0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748\n            1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058\n            3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344\n            1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3\n            1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01\n            3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398\n            1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097\n            3.097 0 00-.748-1.15 3.098 3.098 0\n            00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12\n            6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333\n            3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110\n            2.4 1.2 1.2 0 010-2.4z"}" clip-rule="${"evenodd"}"></path></svg></a>

      <a href="${"#"}" class="${"text-gray-400 hover:text-gray-500"}"><span class="${"sr-only"}">Twitter</span>
        <svg class="${"h-6 w-6"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}" aria-hidden="${"true"}"><path d="${"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178\n            0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646\n            4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0\n            00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27\n            5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022\n            4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0\n            012 18.407a11.616 11.616 0 006.29 1.84"}"></path></svg></a>

      <a href="${"#"}" class="${"text-gray-400 hover:text-gray-500"}"><span class="${"sr-only"}">Discord</span>

        <svg class="${"h-6 w-6"}" aria-hidden="${"true"}" focusable="${"false"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}"><path fill="${"currentColor"}" d="${"M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336\n            0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0\n            26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112\n            12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8\n            26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448\n            52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568\n            47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552\n            23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96\n            242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584\n            4.096c43.52 13.312 63.744 32.512 63.744\n            32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104\n            7.424-15.104 7.424s21.248-20.224\n            67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864\n            66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52\n            17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976\n            6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328\n            18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728\n            16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912\n            78.336-38.912z"}"></path></svg></a>

      <a href="${"#"}" class="${"text-gray-400 hover:text-gray-500"}"><span class="${"sr-only"}">YouTube</span>

        <svg aria-hidden="${"true"}" focusable="${"false"}" class="${"h-6 w-6"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 576 512"}"><path fill="${"currentColor"}" d="${"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781\n            64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003\n            24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0\n            89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22\n            448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321\n            42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305\n            11.412-132.305s0-89.438-11.412-132.305zm-317.51\n            213.508V175.185l142.739 81.205-142.739 81.201z"}"></path></svg></a></div>
    <p class="${"mt-8 text-center text-base text-gray-400"}">© 2021 Bobux, Inc. All rights reserved.
    </p></div></footer>`;
});

var component_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Routes
});

var config = {
  domain: "bobux.gg",
  api: "api.bobux.gg",
  scheme: "https",
};

/* src/components/ErrorModal.svelte generated by Svelte v3.31.2 */

const ErrorModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { error } = $$props;
	let dispatch = createEventDispatcher();

	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	return `<div class="${"fixed z-10 inset-0 overflow-y-auto"}"><div class="${"flex items-end justify-center min-h-screen pt-4 px-4 pb-20\r\n    text-center sm:block sm:p-0"}">
    <div class="${"fixed inset-0 transition-opacity"}" aria-hidden="${"true"}"><div class="${"absolute inset-0 bg-gray-500 opacity-75"}"></div></div>

    
    <span class="${"hidden sm:inline-block sm:align-middle sm:h-screen"}" aria-hidden="${"true"}">​
    </span>
    
    <div class="${"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4\r\n      text-left overflow-hidden shadow-xl transform transition-all sm:my-8\r\n      sm:align-middle sm:max-w-sm sm:w-full sm:p-6"}" role="${"dialog"}" aria-modal="${"true"}" aria-labelledby="${"modal-headline"}"><div><div class="${"mx-auto flex items-center justify-center h-12 w-12 rounded-full\r\n          bg-red-100"}"><svg class="${"h-6 w-6 text-red-600"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
        <div class="${"mt-3 text-center sm:mt-5"}"><h3 class="${"text-lg leading-6 font-medium text-gray-900"}" id="${"modal-headline"}">Whoops!
          </h3>
          <div class="${"mt-2"}"><p class="${"text-sm text-gray-500"}">${escape(error)}</p></div></div></div>
      <div class="${"mt-5 sm:mt-6"}"><button type="${"button"}" class="${"inline-flex justify-center w-full rounded-md border\r\n          border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base\r\n          font-medium text-white hover:bg-blue-600 focus:outline-none\r\n          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"}">Close
        </button></div></div></div></div>`;
});

/* src/components/Loader.svelte generated by Svelte v3.31.2 */

const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="${"flex flex-col justify-center items-center min-h-screen"}"><h1 class="${"text-center text-2xl font-medium"}">Loading...</h1></div>`;
});

/* src/routes/withdraw.svelte generated by Svelte v3.31.2 */

const Withdraw = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	return `${ `<div class="${"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\r\n    sm:px-6 lg:px-8"}"><div class="${"max-w-md w-full space-y-8 pb-6 rounded-md shadow-lg"}"><div><img class="${"mx-auto h-auto w-full rounded-t-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805549033614999562/unknown.png"}" alt="${"Workflow"}">
        <h2 class="${"mt-6 text-center text-3xl font-bold text-gray-900"}">Withdraw your balance
        </h2></div>
      <form class="${"mt-8 mx-4 space-y-6"}"><input type="${"hidden"}" name="${"remember"}" value="${"true"}">
        <div class="${"rounded-md shadow-sm space-y-2"}"><div><label for="${"username"}" class="${"block text-sm font-medium text-gray-700"}">Username
            </label>
            <div class="${"mt-1"}"><input disabled type="${"text"}" name="${"username"}" id="${"username"}" class="${"shadow-sm focus:ring-blue-500 focus:border-blue-500\r\n                block w-full sm:text-sm bg-gray-200 border-gray-300 rounded-md cursor-not-allowed"}" placeholder="${"Builderman"}"></div></div>

          <div><label for="${"amount"}" class="${"block text-sm font-medium text-gray-700"}">Amount
            </label>
            <div class="${"mt-1"}"><input type="${"number"}" name="${"amount"}" id="${"amount"}" class="${"shadow-sm focus:ring-blue-500 focus:border-blue-500\r\n                block w-full sm:text-sm border-gray-300 rounded-md"}" placeholder="${"5"}"></div></div></div>

        <div><button type="${"submit"}" class="${"group relative w-full flex justify-center py-2 px-4 border\r\n            border-transparent text-sm font-medium rounded-md text-white\r\n            bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2\r\n            focus:ring-offset-2 focus:ring-blue-500"}">Withdraw
          </button></div></form></div></div>`}

${ ``}

${ ``}`;
});

var component_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Withdraw
});

/* src/routes/discord.svelte generated by Svelte v3.31.2 */

const Discord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="${"h-screen w-full"}"><div class="${"mt-8 flex flex-col justify-center items-center"}"><iframe src="${"https://canary.discordapp.com/widget?id=793355555368468510&theme=light"}" width="${"350"}" height="${"500"}" allowtransparency="${"true"}" frameborder="${"0"}" sandbox="${"allow-popups allow-popups-to-escape-sandbox allow-same-origin\r\n    allow-scripts"}"></iframe></div></div>`;
});

var component_2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Discord
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    __extends(FirebaseError, _super);
    function FirebaseError(code, message, customData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.customData = customData;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop$1;
        }
        if (observer.error === undefined) {
            observer.error = noop$1;
        }
        if (observer.complete === undefined) {
            observer.complete = noop$1;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop$1() {
    // do nothing
}

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = __assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var services;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(__spread(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }), services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); })))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var ERRORS = (_a$1 = {},
    _a$1["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a$1["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a$1["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a$1["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a$1["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a$1["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a$1);
var ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.14";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1$1;
var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1$1 = {},
    _a$1$1[name$1] = 'fire-core',
    _a$1$1[name$2] = 'fire-analytics',
    _a$1$1[name$3] = 'fire-auth',
    _a$1$1[name$4] = 'fire-rtdb',
    _a$1$1[name$5] = 'fire-fn',
    _a$1$1[name$6] = 'fire-iid',
    _a$1$1[name$7] = 'fire-fcm',
    _a$1$1[name$8] = 'fire-perf',
    _a$1$1[name$9] = 'fire-rc',
    _a$1$1[name$a] = 'fire-gcs',
    _a$1$1[name$b] = 'fire-fst',
    _a$1$1['fire-js'] = 'fire-js',
    _a$1$1[name$c] = 'fire-js-all',
    _a$1$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = deepCopy(options);
        this.container = new ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = __values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                this._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME$1; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME$1; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    FirebaseAppImpl.prototype.toJSON = function () {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        };
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "8.2.5";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME$1;
        if (!contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME$1;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = __values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = __assign(__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: createSubscribe,
        ErrorFactory: ErrorFactory,
        deepExtend: deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

var name$d = "firebase";
var version$2 = "8.2.6";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase$1.registerVersion(name$d, version$2, 'app');

(function() {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);};function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}var ca=ba(this);
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e];}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b});}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}
da("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject);}catch(m){h.reject(m);}}function c(){this.a=null;}function d(g){return g instanceof b?g:new b(function(h){h(g);})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g();});}this.a.push(g);};var e=ca.setTimeout;c.prototype.c=function(g){e(g,0);};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
g[h];g[h]=null;try{m();}catch(p){this.f(p);}}}this.a=null;};c.prototype.f=function(g){this.c(function(){throw g;});};b.prototype.f=function(){function g(p){return function(v){m||(m=!0,p.call(h,v));}}var h=this,m=!1;return {resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.s(g);else {a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1;}h?this.v(g):this.h(g);}};
b.prototype.v=function(g){var h=void 0;try{h=g.then;}catch(m){this.g(m);return}"function"==typeof h?this.u(h,g):this.h(g);};b.prototype.g=function(g){this.i(2,g);};b.prototype.h=function(g){this.i(1,g);};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l();};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null;}};var f=new c;b.prototype.s=function(g){var h=this.f();
g.Qa(h.resolve,h.reject);};b.prototype.u=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject);}catch(p){m.reject(p);}};b.prototype.then=function(g,h){function m(A,Q){return "function"==typeof A?function(ya){try{p(A(ya));}catch(Ad){v(Ad);}}:Q}var p,v,B=new b(function(A,Q){p=A;v=Q;});this.Qa(m(g,p),m(h,v));return B};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Qa=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m);};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g);})};b.race=function(g){return new b(function(h,m){for(var p=fa(g),v=p.next();!v.done;v=p.next())d(v.value).Qa(h,m);})};b.all=function(g){var h=fa(g),m=h.next();return m.done?d([]):new b(function(p,v){function B(ya){return function(Ad){A[ya]=Ad;Q--;0==Q&&p(A);}}var A=[],Q=0;do A.push(void 0),Q++,d(m.value).Qa(B(A.length-1),v),m=h.next();while(!m.done)})};return b});
var ha=ha||{},l=this||self,ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(a){return (a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)?a:""}function la(){}function ma(a){var b=typeof a;return "object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function na(a){var b=ma(a);return "array"==b||"object"==b&&"number"==typeof a.length}function oa(a){return "function"==ma(a)}function n(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}
function pa(a){return Object.prototype.hasOwnProperty.call(a,qa)&&a[qa]||(a[qa]=++ra)}var qa="closure_uid_"+(1E9*Math.random()>>>0),ra=0;function sa(a,b,c){return a.call.apply(a.bind,arguments)}function ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=sa:q=ta;return q.apply(null,arguments)}function ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var va=Date.now;function r(a,b){function c(){}c.prototype=b.prototype;a.ab=b.prototype;a.prototype=new c;a.prototype.constructor=a;}function wa(a){return a}function t(a,b,c){this.code=xa+a;this.message=b||za[a]||"";this.a=c||null;}r(t,Error);t.prototype.w=function(){var a={code:this.code,message:this.message};this.a&&(a.serverResponse=this.a);return a};t.prototype.toJSON=function(){return this.w()};function Aa(a){var b=a&&a.code;return b?new t(b.substring(xa.length),a.message,a.serverResponse):null}
var xa="auth/",za={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.",
"unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
"multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
"missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
"rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.",
"unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
"web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};/*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Ba={ld:{Ta:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},sd:{Ta:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Za:"https://securetoken.googleapis.com/v1/token",Wa:"https://identitytoolkit.googleapis.com/v2/",id:"p"},ud:{Ta:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
Za:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},vd:{Ta:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Za:"https://test-securetoken.sandbox.googleapis.com/v1/token",Wa:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};
function Ca(a){for(var b in Ba)if(Ba[b].id===a)return a=Ba[b],{firebaseEndpoint:a.Ta,secureTokenEndpoint:a.Za,identityPlatformEndpoint:a.Wa};return null}var Da;Da=Ca("__EID__")?"__EID__":void 0;function Ea(a){if(!a)return !1;try{return !!a.$goog_Thenable}catch(b){return !1}}function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else {var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));}r(u,Error);u.prototype.name="CustomError";function Fa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d]);}r(Fa,u);Fa.prototype.name="AssertionError";function Ga(a,b){throw new Fa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}function Ha(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}Ha.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function Ia(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b);}function Ja(){this.b=this.a=null;}var La=new Ha(function(){return new Ka},function(a){a.reset();});Ja.prototype.add=function(a,b){var c=La.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function Ma(){var a=Na,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ka(){this.next=this.b=this.a=null;}Ka.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};Ka.prototype.reset=function(){this.next=this.b=this.a=null;};var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return "string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
function Pa(a,b){for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a);}
var Qa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h);}return d},Ra=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Sa=Array.prototype.some?function(a,
b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return !0;return !1};function Ta(a){a:{var b=Ua;for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Va(a,b){return 0<=Oa(a,b)}
function Wa(a,b){b=Oa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Xa(a,b){var c=0;Pa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++;});}function Ya(a){return Array.prototype.concat.apply([],arguments)}function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}var $a=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;function x(a,b){return -1!=a.indexOf(b)}function hb(a,b){return a<b?-1:a>b?1:0}var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib="";}function y(a){return x(ib,a)}function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a);}function mb(a){for(var b in a)return !1;return !0}function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function pb(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null;}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(n(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a);}catch(g){f="<object could not be stringified>";}else f=void 0===a?"undefined":null===a?"null":typeof a;Ga("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f);}}function qb(a,b){this.a=a===rb&&b||"";this.b=sb;}qb.prototype.sa=!0;qb.prototype.ra=function(){return this.a};qb.prototype.toString=function(){return "Const{"+this.a+"}"};function tb(a){if(a instanceof qb&&a.constructor===qb&&a.b===sb)return a.a;Ga("expected object of type Const, got '"+a+"'");return "type_error:Const"}var sb={},rb={};var ub;function vb(){if(void 0===ub){var a=null,b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:wa,createScript:wa,createScriptURL:wa});}catch(c){l.console&&l.console.error(c.message);}ub=a;}else ub=a;}return ub}function wb(a,b){this.a=b===xb?a:"";}wb.prototype.sa=!0;wb.prototype.ra=function(){return this.a.toString()};wb.prototype.toString=function(){return "TrustedResourceUrl{"+this.a+"}"};function yb(a){if(a instanceof wb&&a.constructor===wb)return a.a;Ga("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ma(a));return "type_error:TrustedResourceUrl"}
function zb(a,b){var c=tb(a);if(!Ab.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Bb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof qb?tb(d):encodeURIComponent(String(d))});return Cb(a)}var Bb=/%{(\w+)}/g,Ab=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,xb={};
function Cb(a){var b=vb();a=b?b.createScriptURL(a):a;return new wb(a,xb)}function C(a,b){this.a=b===Db?a:"";}C.prototype.sa=!0;C.prototype.ra=function(){return this.a.toString()};C.prototype.toString=function(){return "SafeUrl{"+this.a+"}"};function Eb(a){if(a instanceof C&&a.constructor===C)return a.a;Ga("expected object of type SafeUrl, got '"+a+"' of type "+ma(a));return "type_error:SafeUrl"}
var Fb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Gb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Ib(a){if(a instanceof C)return a;a="object"==typeof a&&a.sa?a.ra():String(a);if(Hb.test(a))a=new C(a,Db);else {a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Gb);a=b&&Fb.test(b[1])?new C(a,Db):null;}return a}function Jb(a){if(a instanceof C)return a;a="object"==typeof a&&a.sa?a.ra():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return new C(a,Db)}var Db={},Kb=new C("about:invalid#zClosurez",Db);function Lb(a,b,c){this.a=c===Mb?a:"";}Lb.prototype.sa=!0;Lb.prototype.ra=function(){return this.a.toString()};Lb.prototype.toString=function(){return "SafeHtml{"+this.a+"}"};function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.a;Ga("expected object of type SafeHtml, got '"+a+"' of type "+ma(a));return "type_error:SafeHtml"}var Mb={};function Ob(a,b){pb(a,"HTMLScriptElement");a.src=yb(b);(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=l?b=ka(b.document):(null===ja&&(ja=ka(l.document)),b=ja);b&&a.setAttribute("nonce",b);}function Pb(a,b,c,d){a=a instanceof C?a:Jb(a);b=b||l;c=c instanceof qb?tb(c):c||"";return b.open(Eb(a),c,d,void 0)}function Qb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Rb(a){gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(eb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(fb,"&#0;")));return a}function Sb(a){Sb[" "](a);return a}Sb[" "]=la;function Tb(a,b){var c=Ub;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Vb=y("Opera"),Wb=y("Trident")||y("MSIE"),Xb=y("Edge"),Yb=Xb||Wb,Zb=y("Gecko")&&!(x(ib.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),$b=x(ib.toLowerCase(),"webkit")&&!y("Edge");function ac(){var a=l.document;return a?a.documentMode:void 0}var bc;
a:{var cc="",dc=function(){var a=ib;if(Zb)return /rv:([^\);]+)(\)|;)/.exec(a);if(Xb)return /Edge\/([\d\.]+)/.exec(a);if(Wb)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($b)return /WebKit\/(\S+)/.exec(a);if(Vb)return /(?:Version)[ \/]?(\S+)/.exec(a)}();dc&&(cc=dc?dc[1]:"");if(Wb){var ec=ac();if(null!=ec&&ec>parseFloat(cc)){bc=String(ec);break a}}bc=cc;}var Ub={};
function fc(a){return Tb(a,function(){for(var b=0,c=$a(String(bc)).split("."),d=$a(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=hb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||hb(0==g[2].length,0==h[2].length)||hb(g[2],h[2]);g=g[3];h=h[3];}while(0==b)}return 0<=b})}var gc;
if(l.document&&Wb){var hc=ac();gc=hc?hc:parseInt(bc,10)||void 0;}else gc=void 0;var ic=gc;try{(new self.OffscreenCanvas(0,0)).getContext("2d");}catch(a){}var jc=!Wb||9<=Number(ic);function kc(a){var b=document;return "string"===typeof a?b.getElementById(a):a}function lc(a,b){lb(b,function(c,d){c&&"object"==typeof c&&c.sa&&(c=c.ra());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:mc.hasOwnProperty(d)?a.setAttribute(mc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c;});}
var mc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function nc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!jc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Rb(g.name),'"');if(g.type){f.push(' type="',Rb(g.type),'"');var h={};z(h,g);delete h.type;g=h;}f.push(">");f=f.join("");}f=oc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):lc(f,g));2<d.length&&pc(e,f,d);return f}
function pc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h);}for(var e=2;e<c.length;e++){var f=c[e];if(!na(f)||n(f)&&0<f.nodeType)d(f);else {a:{if(f&&"number"==typeof f.length){if(n(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(oa(f)){g="function"==typeof f.item;break a}}g=!1;}w(g?Za(f):f,d);}}}function oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function qc(a){l.setTimeout(function(){throw a;},0);}var rc;
function sc(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var e=oc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(m){if(("*"==h||m.origin==h)&&m.data==g)this.port1.onmessage();},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h);}};});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Gb;c.Gb=null;e();}};return function(e){d.next={Gb:e};d=d.next;b.port2.postMessage(0);}}return function(e){l.setTimeout(e,0);}}function tc(a,b){uc||vc();wc||(uc(),wc=!0);Na.add(a,b);}var uc;function vc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);uc=function(){a.then(xc);};}else uc=function(){var b=xc;!oa(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(rc||(rc=sc()),rc(b)):l.setImmediate(b);};}var wc=!1,Na=new Ja;function xc(){for(var a;a=Ma();){try{a.a.call(a.b);}catch(b){qc(b);}Ia(La,a);}wc=!1;}function D(a,b){this.a=yc;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=la)try{var c=this;a.call(b,function(d){zc(c,Ac,d);},function(d){if(!(d instanceof Bc))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}zc(c,Cc,d);});}catch(d){zc(this,Cc,d);}}var yc=0,Ac=2,Cc=3;function Dc(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1;}Dc.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1;};var Ec=new Ha(function(){return new Dc},function(a){a.reset();});
function Fc(a,b,c){var d=Ec.get();d.g=a;d.b=b;d.f=c;return d}function E(a){if(a instanceof D)return a;var b=new D(la);zc(b,Ac,a);return b}function F(a){return new D(function(b,c){c(a);})}function Gc(a,b,c){Hc(a,b,c,null)||tc(ua(b,a));}function Ic(a){return new D(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,v){d--;e[p]=v;0==d&&b(e);},g=function(p){c(p);},h=0,m;h<a.length;h++)m=a[h],Gc(m,ua(f,h),g);else b(e);})}
function Jc(a){return new D(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Pb:!0,value:p}:{Pb:!1,reason:p};0==c&&b(d);},f=0,g;f<a.length;f++)g=a[f],Gc(g,ua(e,f,!0),ua(e,f,!1));else b(d);})}D.prototype.then=function(a,b,c){return Kc(this,oa(a)?a:null,oa(b)?b:null,c)};D.prototype.$goog_Thenable=!0;k=D.prototype;k.oa=function(a,b){a=Fc(a,a,b);a.c=!0;Lc(this,a);return this};k.o=function(a,b){return Kc(this,null,a,b)};
k.cancel=function(a){if(this.a==yc){var b=new Bc(a);tc(function(){Mc(this,b);},this);}};function Mc(a,b){if(a.a==yc)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==yc&&1==d?Mc(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Nc(c),Oc(c,e,Cc,b)));}a.c=null;}else zc(a,Cc,b);}function Lc(a,b){a.b||a.a!=Ac&&a.a!=Cc||Pc(a);a.f?a.f.next=b:a.b=b;a.f=b;}
function Kc(a,b,c,d){var e=Fc(null,null,null);e.a=new D(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m);}catch(p){g(p);}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof Bc?g(h):f(m);}catch(p){g(p);}}:g;});e.a.c=a;Lc(a,e);return e.a}k.$c=function(a){this.a=yc;zc(this,Ac,a);};k.ad=function(a){this.a=yc;zc(this,Cc,a);};
function zc(a,b,c){a.a==yc&&(a===c&&(b=Cc,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Hc(c,a.$c,a.ad,a)||(a.i=c,a.a=b,a.c=null,Pc(a),b!=Cc||c instanceof Bc||Qc(a,c)));}function Hc(a,b,c,d){if(a instanceof D)return Lc(a,Fc(b||la,c||null,d)),!0;if(Ea(a))return a.then(b,c,d),!0;if(n(a))try{var e=a.then;if(oa(e))return Rc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return !1}
function Rc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m));}function g(m){h||(h=!0,c.call(e,m));}var h=!1;try{b.call(a,g,f);}catch(m){f(m);}}function Pc(a){a.h||(a.h=!0,tc(a.gc,a));}function Nc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.gc=function(){for(var a;a=Nc(this);)Oc(this,a,this.a,this.i);this.h=!1;};
function Oc(a,b,c,d){if(c==Cc&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Sc(b,c,d);else try{b.c?b.g.call(b.f):Sc(b,c,d);}catch(e){Tc.call(null,e);}Ia(Ec,b);}function Sc(a,b,c){b==Ac?a.g.call(a.f,c):a.b&&a.b.call(a.f,c);}function Qc(a,b){a.g=!0;tc(function(){a.g&&Tc.call(null,b);});}var Tc=qc;function Bc(a){u.call(this,a);}r(Bc,u);Bc.prototype.name="cancel";function Uc(){this.xa=this.xa;this.pa=this.pa;}var Vc=0;Uc.prototype.xa=!1;function Xc(a){if(!a.xa&&(a.xa=!0,a.Da(),0!=Vc)){var b=pa(a);}}Uc.prototype.Da=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()();};var Yc=Object.freeze||function(a){return a};var Zc=!Wb||9<=Number(ic),$c=Wb&&!fc("9"),ad=function(){if(!l.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{l.addEventListener("test",la,b),l.removeEventListener("test",la,b);}catch(c){}return a}();function G(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=!1;}G.prototype.preventDefault=function(){this.defaultPrevented=!0;};function bd(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Zb){a:{try{Sb(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cd[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault();}}r(bd,G);var cd=Yc({2:"touch",3:"pen",4:"mouse"});bd.prototype.preventDefault=function(){bd.ab.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$c)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};bd.prototype.g=function(){return this.a};var dd="closure_listenable_"+(1E6*Math.random()|0),ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Va=e;this.key=++ed;this.va=this.Pa=!1;}function gd(a){a.va=!0;a.listener=null;a.proxy=null;a.src=null;a.Va=null;}function hd(a){this.src=a;this.a={};this.b=0;}hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=id(a,b,d,e);-1<g?(b=a[g],c||(b.Pa=!1)):(b=new fd(b,this.src,f,!!d,e),b.Pa=c,a.push(b));return b};function jd(a,b){var c=b.type;c in a.a&&Wa(a.a[c],b)&&(gd(b),0==a.a[c].length&&(delete a.a[c],a.b--));}function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.va&&f.listener==b&&f.capture==!!c&&f.Va==d)return e}return -1}var kd="closure_lm_"+(1E6*Math.random()|0),ld={};function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?qd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!1,d,e);}
function rd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=n(e)?!!e.capture:!!e,h=sd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=td();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ad||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ud(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");}}
function td(){var a=vd,b=Zc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?wd(a,b,c,n(d)?!!d.capture:!!d,e):rd(a,b,c,!0,d,e);}
function xd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)xd(a,b[f],c,d,e);else (d=n(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?(a=a.v,b=String(b).toString(),b in a.a&&(f=a.a[b],c=id(f,c,d,e),-1<c&&(gd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=sd(a))&&(b=a.a[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=-1<a?b[a]:null)&&yd(c));}
function yd(a){if("number"!==typeof a&&a&&!a.va){var b=a.src;if(b&&b[dd])jd(b.v,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ud(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=sd(b))?(jd(c,a),0==c.b&&(c.src=null,b[kd]=null)):gd(a);}}}function ud(a){return a in ld?ld[a]:ld[a]="on"+a}
function zd(a,b,c,d){var e=!0;if(a=sd(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.va&&(f=Bd(f,d),e=e&&!1!==f);}return e}function Bd(a,b){var c=a.listener,d=a.Va||a.src;a.Pa&&yd(a);return c.call(d,b)}
function vd(a,b){if(a.va)return !0;if(!Zc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c;}d=b;b=new bd(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0;}if(e||void 0==d.returnValue)d.returnValue=!0;}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=zd(d[e],a,!0,b);c=c&&f;}for(e=0;e<d.length;e++)b.b=d[e],f=zd(d[e],a,!1,b),c=c&&f;}return c}return Bd(a,
new bd(b,this))}function sd(a){a=a[kd];return a instanceof hd?a:null}var Cd="__closure_events_fn_"+(1E9*Math.random()>>>0);function pd(a){if(oa(a))return a;a[Cd]||(a[Cd]=function(b){return a.handleEvent(b)});return a[Cd]}function H(){Uc.call(this);this.v=new hd(this);this.ac=this;this.gb=null;}r(H,Uc);H.prototype[dd]=!0;H.prototype.addEventListener=function(a,b,c,d){nd(this,a,b,c,d);};H.prototype.removeEventListener=function(a,b,c,d){xd(this,a,b,c,d);};
H.prototype.dispatchEvent=function(a){var b,c=this.gb;if(c)for(b=[];c;c=c.gb)b.push(c);c=this.ac;var d=a.type||a;if("string"===typeof a)a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else {var e=a;a=new G(d,c);z(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=Dd(g,d,!0,a)&&e;}g=a.b=c;e=Dd(g,d,!0,a)&&e;e=Dd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=Dd(g,d,!1,a)&&e;return e};
H.prototype.Da=function(){H.ab.Da.call(this);if(this.v){var a=this.v,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)gd(d[e]);delete a.a[c];a.b--;}}this.gb=null;};function qd(a,b,c,d,e){a.v.add(String(b),c,!1,d,e);}function wd(a,b,c,d,e){a.v.add(String(b),c,!0,d,e);}
function Dd(a,b,c,d){b=a.v.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.va&&g.capture==c){var h=g.listener,m=g.Va||g.src;g.Pa&&jd(a.v,g);e=!1!==h.call(m,d)&&e;}}return e&&!d.defaultPrevented}function Ed(a,b,c){if(oa(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Fd(a){var b=null;return (new D(function(c,d){b=Ed(function(){c(void 0);},a);-1==b&&d(Error("Failed to schedule timer."));})).o(function(c){l.clearTimeout(b);throw c;})}function Gd(a){if(a.W&&"function"==typeof a.W)return a.W();if("string"===typeof a)return a.split("");if(na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Hd(a){if(a.Y&&"function"==typeof a.Y)return a.Y();if(!a.W||"function"!=typeof a.W){if(na(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Id(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(na(a)||"string"===typeof a)w(a,b,void 0);else for(var c=Hd(a),d=Gd(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}function Jd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Jd)for(c=a.Y(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}k=Jd.prototype;k.W=function(){Kd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.Y=function(){Kd(this);return this.a.concat()};
k.clear=function(){this.b={};this.c=this.a.length=0;};function Kd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Ld(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Ld(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}k.get=function(a,b){return Ld(this.b,a)?this.b[a]:b};k.set=function(a,b){Ld(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
k.forEach=function(a,b){for(var c=this.Y(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function Ld(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var Md=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function Od(a,b){this.a=this.l=this.c="";this.g=null;this.h=this.f="";this.i=!1;var c;a instanceof Od?(this.i=void 0!==b?b:a.i,Pd(this,a.c),this.l=a.l,this.a=a.a,Qd(this,a.g),this.f=a.f,Rd(this,Sd(a.b)),this.h=a.h):a&&(c=String(a).match(Md))?(this.i=!!b,Pd(this,c[1]||"",!0),this.l=Td(c[2]||""),this.a=Td(c[3]||"",!0),Qd(this,c[4]),this.f=Td(c[5]||"",!0),Rd(this,c[6]||"",!0),this.h=Td(c[7]||"")):(this.i=!!b,this.b=new Ud(null,this.i));}
Od.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Vd(b,Wd,!0),":");var c=this.a;if(c||"file"==b)a.push("//"),(b=this.l)&&a.push(Vd(b,Wd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.g,null!=c&&a.push(":",String(c));if(c=this.f)this.a&&"/"!=c.charAt(0)&&a.push("/"),a.push(Vd(c,"/"==c.charAt(0)?Xd:Yd,!0));(c=this.b.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Vd(c,Zd));return a.join("")};
Od.prototype.resolve=function(a){var b=new Od(this),c=!!a.c;c?Pd(b,a.c):c=!!a.l;c?b.l=a.l:c=!!a.a;c?b.a=a.a:c=null!=a.g;var d=a.f;if(c)Qd(b,a.g);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.a&&!this.f)d="/"+d;else {var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(x(e,"./")||x(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
d&&g==e.length&&f.push("")):(f.push(h),d=!0);}d=f.join("/");}else d=e;}c?b.f=d:c=""!==a.b.toString();c?Rd(b,Sd(a.b)):c=!!a.h;c&&(b.h=a.h);return b};function Pd(a,b,c){a.c=c?Td(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""));}function Qd(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.g=b;}else a.g=null;}function Rd(a,b,c){b instanceof Ud?(a.b=b,$d(a.b,a.i)):(c||(b=Vd(b,ae)),a.b=new Ud(b,a.i));}function I(a,b,c){a.b.set(b,c);}function be(a,b){return a.b.get(b)}
function J(a){return a instanceof Od?new Od(a):new Od(a,void 0)}function ce(a,b,c,d){var e=new Od(null,void 0);a&&Pd(e,a);b&&(e.a=b);c&&Qd(e,c);d&&(e.f=d);return e}function Td(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vd(a,b,c){return "string"===typeof a?(a=encodeURI(a).replace(b,de),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function de(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Wd=/[#\/\?@]/g,Yd=/[#\?:]/g,Xd=/[#\?]/g,ae=/[#\?@]/g,Zd=/#/g;function Ud(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function ee(a){a.a||(a.a=new Jd,a.b=0,a.c&&Nd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}function fe(a){var b=Hd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ud(null,void 0);a=Gd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?ge(c,e,f):c.add(e,f);}return c}k=Ud.prototype;
k.add=function(a,b){ee(this);this.c=null;a=he(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function ie(a,b){ee(a);b=he(a,b);Ld(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Ld(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Kd(a)));}k.clear=function(){this.a=this.c=null;this.b=0;};function je(a,b){ee(a);b=he(a,b);return Ld(a.a.b,b)}k.forEach=function(a,b){ee(this);this.a.forEach(function(c,d){w(c,function(e){a.call(b,e,d,this);},this);},this);};
k.Y=function(){ee(this);for(var a=this.a.W(),b=this.a.Y(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.W=function(a){ee(this);var b=[];if("string"===typeof a)je(this,a)&&(b=Ya(b,this.a.get(he(this,a))));else {a=this.a.W();for(var c=0;c<a.length;c++)b=Ya(b,a[c]);}return b};k.set=function(a,b){ee(this);this.c=null;a=he(this,a);je(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
k.get=function(a,b){if(!a)return b;a=this.W(a);return 0<a.length?String(a[0]):b};function ge(a,b,c){ie(a,b);0<c.length&&(a.c=null,a.a.set(he(a,b),Za(c)),a.b+=c.length);}k.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.Y(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.W(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g);}}return this.c=a.join("&")};
function Sd(a){var b=new Ud;b.c=a.c;a.a&&(b.a=new Jd(a.a),b.b=a.b);return b}function he(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function $d(a,b){b&&!a.f&&(ee(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(ie(this,d),ge(this,e,c));},a));a.f=b;}function ke(a){var b=[];le(new me,a,b);return b.join("")}function me(){}
function le(a,b,c){if(null==b)c.push("null");else {if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),le(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else {c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ne(d,c),c.push(":"),le(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ne(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var oe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pe=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function ne(a,b){b.push('"',a.replace(pe,function(c){var d=oe[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),oe[c]=d);return d}),'"');}function qe(){var a=K();return Wb&&!!ic&&11==ic||/Edge\/\d+/.test(a)}function re(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function se(a,b){b=b||l.window;var c="about:blank";a&&(c=Eb(Ib(a)||Kb));b.location.href=c;}function te(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<te(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function ue(){var a=K();a=ve(a)!=we?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Wb||!ic||9<ic}function xe(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ye(a){a=a||l.window;try{a.close();}catch(b){}}
function ze(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,x(c,"crios/")&&(b.target="_blank"));ve(K())==Ae&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof C?c:Ib("undefined"!=typeof c.href?c.href:String(c))||Kb;c=a.target||c.target;e=
[];for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0));}var g=e.join(",");if((y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c)g=oc(document,"A"),pb(g,"HTMLAnchorElement"),b=b instanceof C?b:Jb(b),g.href=Eb(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),
a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={};else if(a.noreferrer){if(g=Pb("",d,c,g),a=Eb(b),g&&(Yb&&x(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Rb(a)+'">',a=(d=vb())?d.createHTML(a):a,a=new Lb(a,null,Mb),d=g.document))d.write(Nb(a)),d.close();}else (g=Pb(b,d,c,g))&&a.noopener&&(g.opener=null);if(g)try{g.focus();}catch(h){}return g}
function Be(a){return new D(function(b){function c(){Fd(2E3).then(function(){if(!a||a.closed)b();else return c()});}return c()})}var Ce=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,De=/^[^@]+@[^@]+$/;function Ee(){var a=null;return (new D(function(b){"complete"==l.document.readyState?b():(a=function(){b();},od(window,"load",a));})).o(function(b){xd(window,"load",a);throw b;})}
function Fe(){return Ge(void 0)?Ee().then(function(){return new D(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."));},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a();},!1);})}):F(Error("Cordova must run in an Android or iOS file scheme."))}function Ge(a){a=a||K();return !("file:"!==He()&&"ionic:"!==He()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ie(){var a=l.window;try{return !(!a||a==a.top)}catch(b){return !1}}
function Je(){return "undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function Ke(){return firebase$1.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase$1.INTERNAL.hasOwnProperty("node")?"Node":Je()?"Worker":"Browser"}function Le(){var a=Ke();return "ReactNative"===a||"Node"===a}function Me(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var Ae="Firefox",we="Chrome";
function ve(a){var b=a.toLowerCase();if(x(b,"opera/")||x(b,"opr/")||x(b,"opios/"))return "Opera";if(x(b,"iemobile"))return "IEMobile";if(x(b,"msie")||x(b,"trident/"))return "IE";if(x(b,"edge/"))return "Edge";if(x(b,"firefox/"))return Ae;if(x(b,"silk/"))return "Silk";if(x(b,"blackberry"))return "Blackberry";if(x(b,"webos"))return "Webos";if(!x(b,"safari/")||x(b,"chrome/")||x(b,"crios/")||x(b,"android"))if(!x(b,"chrome/")&&!x(b,"crios/")||x(b,"edge/")){if(x(b,"android"))return "Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return we;else return "Safari";return "Other"}var Ne={md:"FirebaseCore-web",od:"FirebaseUI-web"};function Oe(a,b){b=b||[];var c=[],d={},e;for(e in Ne)d[Ne[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=Ke();"Browser"===c?(d=K(),c=ve(d)):"Worker"===c&&(d=K(),c=ve(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function K(){return l.navigator&&l.navigator.userAgent||""}
function L(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Pe(){try{var a=l.localStorage,b=Qe();if(a)return a.setItem(b,"1"),a.removeItem(b),qe()?!!l.indexedDB:!0}catch(c){return Je()&&!!l.indexedDB}return !1}function Re(){return (Se()||"chrome-extension:"===He()||Ge())&&!Le()&&Pe()&&!Je()}function Se(){return "http:"===He()||"https:"===He()}function He(){return l.location&&l.location.protocol||null}
function Te(a){a=a||K();return xe(a)||ve(a)==Ae?!1:!0}function Ue(a){return "undefined"===typeof a?null:ke(a)}function Ve(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function We(a){if(null!==a)return JSON.parse(a)}function Qe(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Xe(a){a=a||K();return "Safari"==ve(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Ye(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null;}function Ze(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=K();b=Ke();this.b=xe(a)||"ReactNative"===b;}
Ze.prototype.get=function(){var a=l.navigator;return (a&&"boolean"===typeof a.onLine&&(Se()||"chrome-extension:"===He()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function $e(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function af(){var a=l.document,b=null;return $e()||!a?E():(new D(function(c){b=function(){$e()&&(a.removeEventListener("visibilitychange",b,!1),c());};a.addEventListener("visibilitychange",b,!1);})).o(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function bf(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function cf(){return !(!L("fireauth.oauthhelper",l)&&!L("fireauth.iframe",l))}
function df(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function ef(){var a=l.navigator;return a&&a.serviceWorker?E().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).o(function(){return null}):E(null)}var ff={};function gf(a){ff[a]||(ff[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a));}var hf;try{var jf={};Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(jf,"abcd",{configurable:!0,enumerable:!0,value:2});hf=2==jf.abcd;}catch(a){hf=!1;}function M(a,b,c){hf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c;}function N(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c]);}function kf(a){var b={};N(b,a);return b}function lf(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function mf(a,b){if(!b||!b.length)return !0;if(!a)return !1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return !1}return !0}function nf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)M(b,c,nf(a[c]));}return b}function of(a){var b=a&&(a[pf]?"phone":null);if(b&&a&&a[qf]){M(this,"uid",a[qf]);M(this,"displayName",a[rf]||null);var c=null;a[sf]&&(c=(new Date(a[sf])).toUTCString());M(this,"enrollmentTime",c);M(this,"factorId",b);}else throw new t("internal-error","Internal assert: invalid MultiFactorInfo object");}of.prototype.w=function(){return {uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};function tf(a){try{var b=new uf(a);}catch(c){b=null;}return b}
var rf="displayName",sf="enrolledAt",qf="mfaEnrollmentId",pf="phoneInfo";function uf(a){of.call(this,a);M(this,"phoneNumber",a[pf]);}r(uf,of);uf.prototype.w=function(){var a=uf.ab.w.call(this);a.phoneNumber=this.phoneNumber;return a};function vf(a){var b={},c=a[wf],d=a[xf],e=a[yf];a=tf(a[zf]);if(!e||e!=Af&&e!=Bf&&!c||e==Bf&&!d||e==Cf&&!a)throw Error("Invalid checkActionCode response!");e==Bf?(b[Df]=c||null,b[Ef]=c||null,b[Ff]=d):(b[Df]=d||null,b[Ef]=d||null,b[Ff]=c||null);b[Gf]=a||null;M(this,Hf,e);M(this,If,nf(b));}
var Cf="REVERT_SECOND_FACTOR_ADDITION",Af="EMAIL_SIGNIN",Bf="VERIFY_AND_CHANGE_EMAIL",wf="email",zf="mfaInfo",xf="newEmail",yf="requestType",Ff="email",Df="fromEmail",Gf="multiFactorInfo",Ef="previousEmail",If="data",Hf="operation";function Jf(a){a=J(a);var b=be(a,Kf)||null,c=be(a,Lf)||null,d=be(a,Mf)||null;d=d?Nf[d]||null:null;if(!b||!c||!d)throw new t("argument-error",Kf+", "+Lf+"and "+Mf+" are required in a valid action code URL.");N(this,{apiKey:b,operation:d,code:c,continueUrl:be(a,Of)||null,languageCode:be(a,Pf)||null,tenantId:be(a,Qf)||null});}
var Kf="apiKey",Lf="oobCode",Of="continueUrl",Pf="languageCode",Mf="mode",Qf="tenantId",Nf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:Cf,signIn:Af,verifyAndChangeEmail:Bf,verifyEmail:"VERIFY_EMAIL"};function Rf(a){try{return new Jf(a)}catch(b){return null}}function Sf(a){var b=a[Tf];if("undefined"===typeof b)throw new t("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new t("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Uf];if(c&&"object"===typeof c){b=c[Vf];var d=c[Wf];c=c[Xf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new t("argument-error",Wf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new t("argument-error",Xf+" property must be a non empty string when specified.");this.b=c||null;}else {if("undefined"!==typeof b)throw new t("argument-error",Vf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new t("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new t("argument-error",Uf+" property must be a non null object when specified.");this.f=null;if((b=a[Yf])&&"object"===
typeof b)if(b=b[Zf],"string"===typeof b&&b.length)this.f=b;else {if("undefined"!==typeof b)throw new t("argument-error",Zf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new t("argument-error",Yf+" property must be a non null object when specified.");b=a[$f];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new t("argument-error",$f+" property must be a boolean when specified.");this.c=!!b;a=a[ag];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new t("argument-error",ag+" property must be a non empty string when specified.");this.i=a||null;}var Uf="android",ag="dynamicLinkDomain",$f="handleCodeInApp",Yf="iOS",Tf="url",Wf="installApp",Xf="minimumVersion",Vf="packageName",Zf="bundleId";
function bg(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b}function cg(a){return Ra(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")}var dg=null;function eg(a){var b=[];fg(a,function(c){b.push(c);});return b}function fg(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),v=dg[p];if(null!=v)return v;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}gg();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h));}}
function gg(){if(!dg){dg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++)for(var d=a.concat(b[c].split("")),e=0;e<d.length;e++){var f=d[e];void 0===dg[f]&&(dg[f]=e);}}}function hg(a){var b=ig(a);if(!(b&&b.sub&&b.iss&&b.aud&&b.exp))throw Error("Invalid JWT");this.h=a;this.a=b.exp;this.i=b.sub;a=Date.now()/1E3;this.g=b.iat||(a>this.a?this.a:a);this.b=b.provider_id||b.firebase&&b.firebase.sign_in_provider||null;this.f=b.firebase&&b.firebase.tenant||null;this.c=!!b.is_anonymous||"anonymous"==this.b;}hg.prototype.T=function(){return this.f};hg.prototype.l=function(){return this.c};hg.prototype.toString=function(){return this.h};
function jg(a){try{return new hg(a)}catch(b){return null}}
function ig(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{var d=eg(a);a=[];for(c=b=0;b<d.length;){var e=d[b++];if(128>e)a[c++]=String.fromCharCode(e);else if(191<e&&224>e){var f=d[b++];a[c++]=String.fromCharCode((e&31)<<6|f&63);}else if(239<e&&365>e){f=d[b++];var g=d[b++],h=d[b++],m=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;a[c++]=String.fromCharCode(55296+(m>>10));a[c++]=String.fromCharCode(56320+(m&1023));}else f=d[b++],g=
d[b++],a[c++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63);}return JSON.parse(a.join(""))}catch(p){}return null}var kg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),lg=["client_id","response_type","scope","redirect_uri","state"],mg={nd:{Ja:"locale",ua:700,ta:600,fa:"facebook.com",Xa:lg},pd:{Ja:null,ua:500,ta:750,fa:"github.com",Xa:lg},qd:{Ja:"hl",ua:515,ta:680,fa:"google.com",Xa:lg},wd:{Ja:"lang",ua:485,ta:705,fa:"twitter.com",Xa:kg},kd:{Ja:"locale",ua:640,ta:600,fa:"apple.com",Xa:[]}};
function ng(a){for(var b in mg)if(mg[b].fa==a)return mg[b];return null}function og(a){var b={};b["facebook.com"]=pg;b["google.com"]=qg;b["github.com"]=rg;b["twitter.com"]=sg;var c=a&&a[tg];try{if(c)return b[c]?new b[c](a):new ug(a);if("undefined"!==typeof a[vg])return new wg(a)}catch(d){}return null}var vg="idToken",tg="providerId";
function wg(a){var b=a[tg];if(!b&&a[vg]){var c=jg(a[vg]);c&&c.b&&(b=c.b);}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);M(this,"providerId",b);M(this,"isNewUser",c);}function ug(a){wg.call(this,a);a=We(a.rawUserInfo||"{}");M(this,"profile",nf(a||{}));}r(ug,wg);
function pg(a){ug.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}r(pg,ug);function rg(a){ug.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",this.profile&&this.profile.login||null);}r(rg,ug);function qg(a){ug.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}r(qg,ug);
function sg(a){ug.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");M(this,"username",a.screenName||null);}r(sg,ug);function xg(a){var b=J(a),c=be(b,"link"),d=be(J(c),"link");b=be(b,"deep_link_id");return be(J(b),"link")||b||d||c||a}function yg(a,b){if(!a&&!b)throw new t("internal-error","Internal assert: no raw session string available");if(a&&b)throw new t("internal-error","Internal assert: unable to determine the session type");this.a=a||null;this.b=b||null;this.type=this.a?zg:Ag;}var zg="enroll",Ag="signin";yg.prototype.Ha=function(){return this.a?E(this.a):E(this.b)};yg.prototype.w=function(){return this.type==zg?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}};function Bg(){}Bg.prototype.ka=function(){};Bg.prototype.b=function(){};Bg.prototype.c=function(){};Bg.prototype.w=function(){};function Cg(a,b){return a.then(function(c){if(c[Dg]){var d=jg(c[Dg]);if(!d||b!=d.i)throw new t("user-mismatch");return c}throw new t("user-mismatch");}).o(function(c){throw c&&c.code&&c.code==xa+"user-not-found"?new t("user-mismatch"):c;})}
function Eg(a,b){if(b)this.a=b;else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",a);}Eg.prototype.ka=function(a){return Fg(a,Gg(this))};Eg.prototype.b=function(a,b){var c=Gg(this);c.idToken=b;return Hg(a,c)};Eg.prototype.c=function(a,b){return Cg(Ig(a,Gg(this)),b)};function Gg(a){return {pendingToken:a.a,requestUri:"http://localhost"}}Eg.prototype.w=function(){return {providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};
function Jg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new Eg(a.providerId,a.pendingToken)}catch(b){}return null}
function Kg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&M(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new t("internal-error","failed to construct a credential");M(this,"providerId",a);M(this,"signInMethod",c);}
Kg.prototype.ka=function(a){return Fg(a,Lg(this))};Kg.prototype.b=function(a,b){var c=Lg(this);c.idToken=b;return Hg(a,c)};Kg.prototype.c=function(a,b){var c=Lg(this);return Cg(Ig(a,c),b)};
function Lg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:fe(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
Kg.prototype.w=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function Mg(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new Kg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function Ng(a,b){this.Qc=b||[];N(this,{providerId:a,isOAuthProvider:!0});this.Ib={};this.pb=(ng(a)||{}).Ja||null;this.ob=null;}
Ng.prototype.Ka=function(a){this.Ib=nb(a);return this};function Og(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new t("argument-error",'SAML provider IDs must be prefixed with "saml."');Ng.call(this,a,[]);}r(Og,Ng);function Pg(a){Ng.call(this,a,lg);this.a=[];}r(Pg,Ng);Pg.prototype.Ca=function(a){Va(this.a,a)||this.a.push(a);return this};Pg.prototype.Qb=function(){return Za(this.a)};
Pg.prototype.credential=function(a,b){var c;n(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new t("argument-error","credential failed: must provide the ID token and/or the access token.");return new Kg(this.providerId,c,this.providerId)};function Qg(){Pg.call(this,"facebook.com");}r(Qg,Pg);M(Qg,"PROVIDER_ID","facebook.com");M(Qg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Rg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return (new Qg).credential({accessToken:b})}function Sg(){Pg.call(this,"github.com");}r(Sg,Pg);M(Sg,"PROVIDER_ID","github.com");M(Sg,"GITHUB_SIGN_IN_METHOD","github.com");
function Tg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return (new Sg).credential({accessToken:b})}function Ug(){Pg.call(this,"google.com");this.Ca("profile");}r(Ug,Pg);M(Ug,"PROVIDER_ID","google.com");M(Ug,"GOOGLE_SIGN_IN_METHOD","google.com");function Vg(a,b){var c=a;n(a)&&(c=a.idToken,b=a.accessToken);return (new Ug).credential({idToken:c,accessToken:b})}function Wg(){Ng.call(this,"twitter.com",kg);}
r(Wg,Ng);M(Wg,"PROVIDER_ID","twitter.com");M(Wg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Xg(a,b){var c=a;n(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new t("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Kg("twitter.com",c,"twitter.com")}
function Yg(a,b,c){this.a=a;this.f=b;M(this,"providerId","password");M(this,"signInMethod",c===Zg.EMAIL_LINK_SIGN_IN_METHOD?Zg.EMAIL_LINK_SIGN_IN_METHOD:Zg.EMAIL_PASSWORD_SIGN_IN_METHOD);}Yg.prototype.ka=function(a){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,$g,{email:this.a,oobCode:this.f}):O(a,ah,{email:this.a,password:this.f})};
Yg.prototype.b=function(a,b){return this.signInMethod==Zg.EMAIL_LINK_SIGN_IN_METHOD?O(a,bh,{idToken:b,email:this.a,oobCode:this.f}):O(a,ch,{idToken:b,email:this.a,password:this.f})};Yg.prototype.c=function(a,b){return Cg(this.ka(a),b)};Yg.prototype.w=function(){return {email:this.a,password:this.f,signInMethod:this.signInMethod}};function dh(a){return a&&a.email&&a.password?new Yg(a.email,a.password,a.signInMethod):null}function Zg(){N(this,{providerId:"password",isOAuthProvider:!1});}
function eh(a,b){b=fh(b);if(!b)throw new t("argument-error","Invalid email link!");return new Yg(a,b.code,Zg.EMAIL_LINK_SIGN_IN_METHOD)}function fh(a){a=xg(a);return (a=Rf(a))&&a.operation===Af?a:null}N(Zg,{PROVIDER_ID:"password"});N(Zg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});N(Zg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function gh(a){if(!(a.eb&&a.cb||a.La&&a.ea))throw new t("internal-error");this.a=a;M(this,"providerId","phone");this.fa="phone";M(this,"signInMethod","phone");}
gh.prototype.ka=function(a){return a.fb(hh(this))};gh.prototype.b=function(a,b){var c=hh(this);c.idToken=b;return O(a,ih,c)};gh.prototype.c=function(a,b){var c=hh(this);c.operation="REAUTH";a=O(a,jh,c);return Cg(a,b)};gh.prototype.w=function(){var a={providerId:"phone"};this.a.eb&&(a.verificationId=this.a.eb);this.a.cb&&(a.verificationCode=this.a.cb);this.a.La&&(a.temporaryProof=this.a.La);this.a.ea&&(a.phoneNumber=this.a.ea);return a};
function kh(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};w(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c]);});return new gh(b)}return null}function hh(a){return a.a.La&&a.a.ea?{temporaryProof:a.a.La,phoneNumber:a.a.ea}:{sessionInfo:a.a.eb,code:a.a.cb}}
function lh(a){try{this.a=a||firebase$1.auth();}catch(b){throw new t("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}N(this,{providerId:"phone",isOAuthProvider:!1});}
lh.prototype.fb=function(a,b){var c=this.a.a;return E(b.verify()).then(function(d){if("string"!==typeof d)throw new t("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":var e=n(a)?a.session:null,f=n(a)?a.phoneNumber:a,g;e&&e.type==zg?g=e.Ha().then(function(h){return mh(c,{idToken:h,phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:d}})}):e&&e.type==Ag?g=e.Ha().then(function(h){return nh(c,
{mfaPendingCredential:h,mfaEnrollmentId:a.multiFactorHint&&a.multiFactorHint.uid||a.multiFactorUid,phoneSignInInfo:{recaptchaToken:d}})}):g=oh(c,{phoneNumber:f,recaptchaToken:d});return g.then(function(h){"function"===typeof b.reset&&b.reset();return h},function(h){"function"===typeof b.reset&&b.reset();throw h;});default:throw new t("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
function ph(a,b){if(!a)throw new t("missing-verification-id");if(!b)throw new t("missing-verification-code");return new gh({eb:a,cb:b})}N(lh,{PROVIDER_ID:"phone"});N(lh,{PHONE_SIGN_IN_METHOD:"phone"});
function qh(a){if(a.temporaryProof&&a.phoneNumber)return new gh({La:a.temporaryProof,ea:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Vg(f,c);case "facebook.com":return Rg(c);case "github.com":return Tg(c);case "twitter.com":return Xg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new Eg(b,g):new Kg(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new Pg(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function rh(a){if(!a.isOAuthProvider)throw new t("invalid-oauth-provider");}function sh(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new t("invalid-auth-event");if(this.g&&!this.f)throw new t("invalid-auth-event");}else throw new t("invalid-auth-event");}sh.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};sh.prototype.T=function(){return this.h};
sh.prototype.w=function(){return {type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}};function th(a){a=a||{};return a.type?new sh(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Aa(a.error),a.postBody,a.tenantId):null}function uh(){this.b=null;this.a=[];}var vh=null;function wh(a){var b=vh;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c);},a=L("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b));}function xh(a){var b="unauthorized-domain",c=void 0,d=J(a);a=d.a;d=d.c;"chrome-extension"==d?c=Qb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Qb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
t.call(this,b,c);}r(xh,t);function yh(a,b,c){t.call(this,a,c);a=b||{};a.Jb&&M(this,"email",a.Jb);a.ea&&M(this,"phoneNumber",a.ea);a.credential&&M(this,"credential",a.credential);a.Zb&&M(this,"tenantId",a.Zb);}r(yh,t);yh.prototype.w=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.w();b&&z(a,b);return a};yh.prototype.toJSON=function(){return this.w()};
function zh(a){if(a.code){var b=a.code||"";0==b.indexOf(xa)&&(b=b.substring(xa.length));var c={credential:qh(a),Zb:a.tenantId};if(a.email)c.Jb=a.email;else if(a.phoneNumber)c.ea=a.phoneNumber;else if(!c.credential)return new t(b,a.message||void 0);return new yh(b,c,a.message)}return null}function Ah(){}Ah.prototype.c=null;function Bh(a){return a.c||(a.c=a.b())}var Ch;function Dh(){}r(Dh,Ah);Dh.prototype.a=function(){var a=Eh(this);return a?new ActiveXObject(a):new XMLHttpRequest};Dh.prototype.b=function(){var a={};Eh(this)&&(a[0]=!0,a[1]=!0);return a};
function Eh(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Ch=new Dh;function Fh(){}r(Fh,Ah);Fh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Gh;throw Error("Unsupported browser");};Fh.prototype.b=function(){return {}};
function Gh(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=q(this.qc,this);this.a.onerror=q(this.Sb,this);this.a.onprogress=q(this.rc,this);this.a.ontimeout=q(this.vc,this);}k=Gh.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b);};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send();};k.abort=function(){this.a.abort();};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return "content-type"==a.toLowerCase()?this.a.contentType:""};k.qc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Hh(this,4);};k.Sb=function(){this.status=500;this.response=this.responseText="";Hh(this,4);};k.vc=function(){this.Sb();};
k.rc=function(){this.status=200;Hh(this,1);};function Hh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange();}k.getAllResponseHeaders=function(){return "content-type: "+this.a.contentType};function Ih(a,b,c){this.reset(a,b,c,void 0,void 0);}Ih.prototype.a=null;Ih.prototype.reset=function(a,b,c,d,e){delete this.a;};function Kh(a){this.f=a;this.b=this.c=this.a=null;}function Lh(a,b){this.name=a;this.value=b;}Lh.prototype.toString=function(){return this.name};var Mh=new Lh("SEVERE",1E3),Nh=new Lh("WARNING",900),Oh=new Lh("CONFIG",700),Ph=new Lh("FINE",500);function Qh(a){if(a.c)return a.c;if(a.a)return Qh(a.a);Ga("Root logger has no level set.");return null}Kh.prototype.log=function(a,b,c){if(a.value>=Qh(this).value)for(oa(b)&&(b=b()),a=new Ih(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a;};var Rh={},Sh=null;
function Th(a){Sh||(Sh=new Kh(""),Rh[""]=Sh,Sh.c=Oh);var b;if(!(b=Rh[a])){b=new Kh(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Th(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Rh[a]=b;}return b}function Uh(a,b){a&&a.log(Ph,b,void 0);}function Vh(a){this.f=a;}r(Vh,Ah);Vh.prototype.a=function(){return new Wh(this.f)};Vh.prototype.b=function(a){return function(){return a}}({});function Wh(a){H.call(this);this.u=a;this.h=void 0;this.readyState=Xh;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.l=new Headers;this.b=null;this.s="GET";this.f="";this.a=!1;this.i=Th("goog.net.FetchXmlHttp");this.m=this.c=this.g=null;}r(Wh,H);var Xh=0;k=Wh.prototype;
k.open=function(a,b){if(this.readyState!=Xh)throw this.abort(),Error("Error reopening a connection");this.s=a;this.f=b;this.readyState=1;Yh(this);};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.l,method:this.s,credentials:this.h,cache:void 0};a&&(b.body=a);this.u.fetch(new Request(this.f,b)).then(this.uc.bind(this),this.Ua.bind(this));};
k.abort=function(){this.response=this.responseText="";this.l=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Zh(this));this.readyState=Xh;};
k.uc=function(a){this.a&&(this.g=a,this.b||(this.status=this.g.status,this.statusText=this.g.statusText,this.b=a.headers,this.readyState=2,Yh(this)),this.a&&(this.readyState=3,Yh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.sc.bind(this),this.Ua.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.m=new TextDecoder,$h(this)):a.text().then(this.tc.bind(this),this.Ua.bind(this)))));};
function $h(a){a.c.read().then(a.pc.bind(a)).catch(a.Ua.bind(a));}k.pc=function(a){if(this.a){var b=this.m.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Zh(this):Yh(this);3==this.readyState&&$h(this);}};k.tc=function(a){this.a&&(this.response=this.responseText=a,Zh(this));};k.sc=function(a){this.a&&(this.response=a,Zh(this));};k.Ua=function(a){var b=this.i;b&&b.log(Nh,"Failed to fetch url "+this.f,a instanceof Error?a:Error(a));this.a&&Zh(this);};
function Zh(a){a.readyState=4;a.g=null;a.c=null;a.m=null;Yh(a);}k.setRequestHeader=function(a,b){this.l.append(a,b);};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.i)&&a.log(Nh,"Attempting to get response header but no headers have been received for url: "+this.f,void 0),"")};
k.getAllResponseHeaders=function(){if(!this.b){var a=this.i;a&&a.log(Nh,"Attempting to get all response headers but no headers have been received for url: "+this.f,void 0);return ""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Yh(a){a.onreadystatechange&&a.onreadystatechange.call(a);}Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return "include"===this.h},set:function(a){this.h=a?"include":"same-origin";}});function ai(a){H.call(this);this.headers=new Jd;this.D=a||null;this.c=!1;this.C=this.a=null;this.h=this.R=this.l="";this.f=this.O=this.i=this.J=!1;this.g=0;this.s=null;this.m=bi;this.u=this.S=!1;}r(ai,H);var bi="";ai.prototype.b=Th("goog.net.XhrIo");var ci=/^https?$/i,di=["POST","PUT"];
function ei(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.R=c;a.J=!1;a.c=!0;a.a=a.D?a.D.a():Ch.a();a.C=a.D?Bh(a.D):Bh(Ch);a.a.onreadystatechange=q(a.Vb,a);try{Uh(a.b,fi(a,"Opening Xhr")),a.O=!0,a.a.open(c,String(b),!0),a.O=!1;}catch(g){Uh(a.b,fi(a,"Error opening Xhr: "+g.message));gi(a,g);return}b=d||"";var f=new Jd(a.headers);e&&Id(e,function(g,h){f.set(h,g);});e=Ta(f.Y());d=l.FormData&&b instanceof
l.FormData;!Va(di,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g);},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.S&&(a.a.withCredentials=a.S);try{hi(a),0<a.g&&(a.u=ii(a.a),Uh(a.b,fi(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.u)),a.u?(a.a.timeout=a.g,a.a.ontimeout=q(a.Ma,a)):a.s=Ed(a.Ma,a.g,a)),Uh(a.b,fi(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1;}catch(g){Uh(a.b,
fi(a,"Send error: "+g.message)),gi(a,g);}}function ii(a){return Wb&&fc(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Ua(a){return "content-type"==a.toLowerCase()}k=ai.prototype;k.Ma=function(){"undefined"!=typeof ha&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Uh(this.b,fi(this,this.h)),this.dispatchEvent("timeout"),this.abort(8));};function gi(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;ji(a);ki(a);}
function ji(a){a.J||(a.J=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}k.abort=function(){this.a&&this.c&&(Uh(this.b,fi(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ki(this));};k.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ki(this,!0));ai.ab.Da.call(this);};k.Vb=function(){this.xa||(this.O||this.i||this.f?li(this):this.Jc());};k.Jc=function(){li(this);};
function li(a){if(a.c&&"undefined"!=typeof ha)if(a.C[1]&&4==mi(a)&&2==ni(a))Uh(a.b,fi(a,"Local request error detected and ignored"));else if(a.i&&4==mi(a))Ed(a.Vb,0,a);else if(a.dispatchEvent("readystatechange"),4==mi(a)){Uh(a.b,fi(a,"Request complete"));a.c=!1;try{var b=ni(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Md)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1);}e=!ci.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else {try{var h=2<mi(a)?a.a.statusText:"";}catch(m){Uh(a.b,"Can not get status: "+m.message),h="";}a.h=h+" ["+ni(a)+"]";ji(a);}}finally{ki(a);}}}function ki(a,b){if(a.a){hi(a);var c=a.a,d=a.C[0]?la:null;a.a=null;a.C=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){(a=a.b)&&a.log(Mh,"Problem encountered resetting onreadystatechange: "+e.message,void 0);}}}
function hi(a){a.a&&a.u&&(a.a.ontimeout=null);a.s&&(l.clearTimeout(a.s),a.s=null);}function mi(a){return a.a?a.a.readyState:0}function ni(a){try{return 2<mi(a)?a.a.status:-1}catch(b){return -1}}function oi(a){try{return a.a?a.a.responseText:""}catch(b){return Uh(a.b,"Can not get responseText: "+b.message),""}}
k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case bi:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Mh,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Uh(this.b,"Can not get response: "+b.message),null}};function fi(a,b){return b+" ["+a.R+" "+a.l+" "+ni(a)+"]"}function pi(a){var b=qi;this.g=[];this.u=b;this.s=a||null;this.f=this.a=!1;this.c=void 0;this.v=this.C=this.i=!1;this.h=0;this.b=null;this.l=0;}pi.prototype.cancel=function(a){if(this.a)this.c instanceof pi&&this.c.cancel();else {if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel());}this.u?this.u.call(this.s,this):this.v=!0;this.a||(a=new ri(this),si(this),ti(this,!1,a));}};pi.prototype.m=function(a,b){this.i=!1;ti(this,a,b);};function ti(a,b,c){a.a=!0;a.c=c;a.f=!b;ui(a);}
function si(a){if(a.a){if(!a.v)throw new vi(a);a.v=!1;}}function wi(a,b){xi(a,null,b,void 0);}function xi(a,b,c,d){a.g.push([b,c,d]);a.a&&ui(a);}pi.prototype.then=function(a,b,c){var d,e,f=new D(function(g,h){d=g;e=h;});xi(this,d,function(g){g instanceof ri?f.cancel():e(g);});return f.then(a,b,c)};pi.prototype.$goog_Thenable=!0;function yi(a){return Sa(a.g,function(b){return oa(b[1])})}
function ui(a){if(a.h&&a.a&&yi(a)){var b=a.h,c=zi[b];c&&(l.clearTimeout(c.a),delete zi[b]);a.h=0;}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(Ea(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0;}catch(m){b=m,a.f=!0,yi(a)||(c=!0);}}a.c=b;d&&(h=q(a.m,a,!0),d=q(a.m,a,!1),b instanceof pi?(xi(b,h,d),b.C=!0):b.then(h,d));c&&(b=
new Ai(b),zi[b.a]=b,a.h=b.a);}function vi(){u.call(this);}r(vi,u);vi.prototype.message="Deferred has already fired";vi.prototype.name="AlreadyCalledError";function ri(){u.call(this);}r(ri,u);ri.prototype.message="Deferred was canceled";ri.prototype.name="CanceledError";function Ai(a){this.a=l.setTimeout(q(this.c,this),0);this.b=a;}Ai.prototype.c=function(){delete zi[this.a];throw this.b;};var zi={};function Bi(a){var c=document,d=yb(a).toString(),e=oc(document,"SCRIPT"),f={Wb:e,Ma:void 0},g=new pi(f),h=null,m=5E3;(h=window.setTimeout(function(){Ci(e,!0);var p=new Di(Ei,"Timeout reached for loading script "+d);si(g);ti(g,!1,p);},m),f.Ma=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ci(e,!1,h),si(g),ti(g,!0,null));};e.onerror=function(){Ci(e,!0,h);var p=new Di(Fi,"Error while loading script "+
d);si(g);ti(g,!1,p);};f={};z(f,{type:"text/javascript",charset:"UTF-8"});lc(e,f);Ob(e,a);Gi(c).appendChild(e);return g}function Gi(a){var b;return (b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function qi(){if(this&&this.Wb){var a=this.Wb;a&&"SCRIPT"==a.tagName&&Ci(a,!0,this.Ma);}}
function Ci(a,b,c){null!=c&&l.clearTimeout(c);a.onload=la;a.onerror=la;a.onreadystatechange=la;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a);},0);}var Fi=0,Ei=1;function Di(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a;}r(Di,u);function Hi(a){this.f=a;}r(Hi,Ah);Hi.prototype.a=function(){return new this.f};Hi.prototype.b=function(){return {}};
function Ii(a,b,c){this.c=a;a=b||{};this.l=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Ji;this.g=nb(a.secureTokenHeaders||Ki);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.i=a.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/";this.v=a.firebaseTimeout||Li;this.a=nb(a.firebaseHeaders||Mi);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==Ke();c=l.XMLHttpRequest||
c&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.XMLHttpRequest;if(!c&&!Je())throw new t("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;Je()?this.f=new Vh(self):Le()?this.f=new Hi(c):this.f=new Fh;this.b=null;}var Ni,Dg="idToken",Ji=new Ze(3E4,6E4),Ki={"Content-Type":"application/x-www-form-urlencoded"},Li=new Ze(3E4,6E4),Mi={"Content-Type":"application/json"};function Oi(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"];}
function Pi(a,b){b&&(a.l=Qi("https://securetoken.googleapis.com/v1/token",b),a.h=Qi("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",b),a.i=Qi("https://identitytoolkit.googleapis.com/v2/",b));}function Qi(a,b){a=J(a);b=J(b.url);a.f=a.a+a.f;Pd(a,b.c);a.a=b.a;Qd(a,b.g);return a.toString()}function Ri(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"]);}Ii.prototype.T=function(){return this.b};
function Si(a,b,c,d,e,f,g){ue()||Je()?a=q(a.u,a):(Ni||(Ni=new D(function(h,m){Ti(h,m);})),a=q(a.s,a));a(b,c,d,e,f,g);}
Ii.prototype.u=function(a,b,c,d,e,f){if(Je()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new t("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new ai(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout");},f);}qd(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
JSON.parse(oi(this))||null;}catch(p){m=null;}b&&b(m);});wd(g,"ready",function(){h&&clearTimeout(h);Xc(this);});wd(g,"timeout",function(){h&&clearTimeout(h);Xc(this);b&&b(null);});ei(g,a,c,d,e);};var Ui=new qb(rb,"https://apis.google.com/js/client.js?onload=%{onload}"),Vi="__fcb"+Math.floor(1E6*Math.random()).toString();
function Ti(a,b){if(((window.gapi||{}).client||{}).request)a();else {l[Vi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"));};var c=zb(Ui,{onload:Vi});wi(Bi(c),function(){b(Error("CORS_UNSUPPORTED"));});}}
Ii.prototype.s=function(a,b,c,d,e){var f=this;Ni.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h);}});}).o(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}});});};
function Wi(a,b){return new D(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Si(a,a.l+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Xi(e)):e.access_token&&e.refresh_token?c(e):d(new t("internal-error")):d(new t("network-request-failed"));},"POST",fe(b).toString(),a.g,a.m.get()):d(new t("internal-error"));})}
function Yi(a,b,c,d,e,f,g){var h=J(b+c);I(h,"key",a.c);g&&I(h,"cb",va().toString());var m="GET"==d;if(m)for(var p in e)e.hasOwnProperty(p)&&I(h,p,e[p]);return new D(function(v,B){Si(a,h.toString(),function(A){A?A.error?B(Xi(A,f||{})):v(A):B(new t("network-request-failed"));},d,m?void 0:ke(Ve(e)),a.a,a.v.get());})}function Zi(a){a=a.email;if("string"!==typeof a||!De.test(a))throw new t("invalid-email");}function $i(a){"email"in a&&Zi(a);}
function aj(a,b){return O(a,bj,{identifier:b,continueUri:Se()?re():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function cj(a){return O(a,dj,{}).then(function(b){return b.authorizedDomains||[]})}function P(a){if(!a[Dg]){if(a.mfaPendingCredential)throw new t("multi-factor-auth-required",null,nb(a));throw new t("internal-error");}}
function ej(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new t("internal-error");}else {if(!a.sessionInfo)throw new t("missing-verification-id");if(!a.code)throw new t("missing-verification-code");}}Ii.prototype.zb=function(){return O(this,fj,{})};Ii.prototype.Bb=function(a,b){return O(this,gj,{idToken:a,email:b})};Ii.prototype.Cb=function(a,b){return O(this,ch,{idToken:a,password:b})};var hj={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=Ii.prototype;
k.Db=function(a,b){var c={idToken:a},d=[];lb(hj,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g);});d.length&&(c.deleteAttribute=d);return O(this,gj,c)};k.vb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};z(a,b);return O(this,ij,a)};k.wb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};z(a,b);return O(this,jj,a)};k.ub=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};z(a,b);return O(this,kj,a)};
k.Eb=function(a,b,c){a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:b};z(a,c);return O(this,lj,a)};function oh(a,b){return O(a,mj,b)}k.fb=function(a){return O(this,nj,a)};function mh(a,b){return O(a,oj,b).then(function(c){return c.phoneSessionInfo.sessionInfo})}
function pj(a){if(!a.phoneVerificationInfo)throw new t("internal-error");if(!a.phoneVerificationInfo.sessionInfo)throw new t("missing-verification-id");if(!a.phoneVerificationInfo.code)throw new t("missing-verification-code");}function nh(a,b){return O(a,qj,b).then(function(c){return c.phoneResponseInfo.sessionInfo})}function rj(a,b,c){return O(a,sj,{idToken:b,deleteProvider:c})}function tj(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new t("internal-error");}
function uj(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Ud(a.postBody),je(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function vj(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=zh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=zh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=zh(a)):a.errorMessage&&(b=wj(a.errorMessage));if(b)throw b;P(a);}function Fg(a,b){b.returnIdpCredential=!0;return O(a,xj,b)}function Hg(a,b){b.returnIdpCredential=!0;return O(a,yj,b)}
function Ig(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return O(a,zj,b)}function Aj(a){if(!a.oobCode)throw new t("invalid-action-code");}k.nb=function(a,b){return O(this,Bj,{oobCode:a,newPassword:b})};k.Ra=function(a){return O(this,Cj,{oobCode:a})};k.jb=function(a){return O(this,Dj,{oobCode:a})};
var Dj={endpoint:"setAccountInfo",A:Aj,Z:"email",B:!0},Cj={endpoint:"resetPassword",A:Aj,G:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b&&"VERIFY_AND_CHANGE_EMAIL"!=b)throw new t("internal-error");},B:!0},Ej={endpoint:"signupNewUser",A:function(a){Zi(a);if(!a.password)throw new t("weak-password");},G:P,V:!0,B:!0},bj={endpoint:"createAuthUri",B:!0},Fj={endpoint:"deleteAccount",N:["idToken"]},sj={endpoint:"setAccountInfo",N:["idToken","deleteProvider"],A:function(a){if(!Array.isArray(a.deleteProvider))throw new t("internal-error");
}},$g={endpoint:"emailLinkSignin",N:["email","oobCode"],A:Zi,G:P,V:!0,B:!0},bh={endpoint:"emailLinkSignin",N:["idToken","email","oobCode"],A:Zi,G:P,V:!0},Gj={endpoint:"accounts/mfaEnrollment:finalize",N:["idToken","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Hj={endpoint:"accounts/mfaSignIn:finalize",N:["mfaPendingCredential","phoneVerificationInfo"],A:pj,G:P,B:!0,Na:!0},Ij={endpoint:"getAccountInfo"},jj={endpoint:"getOobConfirmationCode",N:["requestType"],A:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new t("internal-error");
Zi(a);},Z:"email",B:!0},kj={endpoint:"getOobConfirmationCode",N:["idToken","requestType"],A:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},lj={endpoint:"getOobConfirmationCode",N:["idToken","newEmail","requestType"],A:function(a){if("VERIFY_AND_CHANGE_EMAIL"!=a.requestType)throw new t("internal-error");},Z:"email",B:!0},ij={endpoint:"getOobConfirmationCode",N:["requestType"],A:function(a){if("PASSWORD_RESET"!=a.requestType)throw new t("internal-error");
Zi(a);},Z:"email",B:!0},dj={lb:!0,endpoint:"getProjectConfig",Ub:"GET"},Jj={lb:!0,endpoint:"getRecaptchaParam",Ub:"GET",G:function(a){if(!a.recaptchaSiteKey)throw new t("internal-error");}},Bj={endpoint:"resetPassword",A:Aj,Z:"email",B:!0},mj={endpoint:"sendVerificationCode",N:["phoneNumber","recaptchaToken"],Z:"sessionInfo",B:!0},gj={endpoint:"setAccountInfo",N:["idToken"],A:$i,V:!0},ch={endpoint:"setAccountInfo",N:["idToken"],A:function(a){$i(a);if(!a.password)throw new t("weak-password");},G:P,
V:!0},fj={endpoint:"signupNewUser",G:P,V:!0,B:!0},oj={endpoint:"accounts/mfaEnrollment:start",N:["idToken","phoneEnrollmentInfo"],A:function(a){if(!a.phoneEnrollmentInfo)throw new t("internal-error");if(!a.phoneEnrollmentInfo.phoneNumber)throw new t("missing-phone-number");if(!a.phoneEnrollmentInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneSessionInfo||!a.phoneSessionInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},qj={endpoint:"accounts/mfaSignIn:start",
N:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(a){if(!a.phoneSignInInfo||!a.phoneSignInInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneResponseInfo||!a.phoneResponseInfo.sessionInfo)throw new t("internal-error");},B:!0,Na:!0},xj={endpoint:"verifyAssertion",A:tj,Ya:uj,G:vj,V:!0,B:!0},zj={endpoint:"verifyAssertion",A:tj,Ya:uj,G:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new t("user-not-found");if(a.errorMessage)throw wj(a.errorMessage);
P(a);},V:!0,B:!0},yj={endpoint:"verifyAssertion",A:function(a){tj(a);if(!a.idToken)throw new t("internal-error");},Ya:uj,G:vj,V:!0},Kj={endpoint:"verifyCustomToken",A:function(a){if(!a.token)throw new t("invalid-custom-token");},G:P,V:!0,B:!0},ah={endpoint:"verifyPassword",A:function(a){Zi(a);if(!a.password)throw new t("wrong-password");},G:P,V:!0,B:!0},nj={endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},ih={endpoint:"verifyPhoneNumber",A:function(a){if(!a.idToken)throw new t("internal-error");ej(a);},
G:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",zh(a);P(a);}},jh={Hb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:ej,G:P,B:!0},Lj={endpoint:"accounts/mfaEnrollment:withdraw",N:["idToken","mfaEnrollmentId"],G:function(a){if(!!a[Dg]^!!a.refreshToken)throw new t("internal-error");},B:!0,Na:!0};
function O(a,b,c){if(!mf(c,b.N))return F(new t("internal-error"));var d=!!b.Na,e=b.Ub||"POST",f;return E(c).then(b.A).then(function(){b.V&&(c.returnSecureToken=!0);b.B&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return d?Yi(a,a.i,b.endpoint,e,c,b.Hb,b.lb||!1):Yi(a,a.h,b.endpoint,e,c,b.Hb,b.lb||!1)}).then(function(g){f=g;return b.Ya?b.Ya(c,f):f}).then(b.G).then(function(){if(!b.Z)return f;if(!(b.Z in f))throw new t("internal-error");return f[b.Z]})}
function wj(a){return Xi({error:{errors:[{message:a}],code:400,message:a}})}
function Xi(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new t(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",
UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"};z(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new t(d[e],b);!b&&a&&(b=Ue(a));return new t("internal-error",b)}function Mj(a){this.b=a;this.a=null;this.rb=Nj(this);}
function Nj(a){return Oj().then(function(){return new D(function(b,c){L("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b();}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"));},Pj.get());d.ping(e).then(e,function(){c(Error("Network Error"));});});})})}
function Qj(a,b){return a.rb.then(function(){return new D(function(c){a.a.send(b.type,b,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));})})}function Rj(a,b){a.rb.then(function(){a.a.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));});}var Sj=new qb(rb,"https://apis.google.com/js/api.js?onload=%{onload}"),Tj=new Ze(3E4,6E4),Pj=new Ze(5E3,15E3),Uj=null;
function Oj(){return Uj?Uj:Uj=(new D(function(a,b){function c(){Ye();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ye();b(Error("Network Error"));},timeout:Tj.get()});}if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else {var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){L("gapi.load")?c():b(Error("Network Error"));};d=zb(Sj,{onload:d});E(Bi(d)).o(function(){b(Error("Network Error"));});}})).o(function(a){Uj=null;throw a;})}function Vj(a,b,c,d){this.l=a;this.h=b;this.i=c;this.g=d;this.f=null;this.g?(a=J(this.g.url),a=ce(a.c,a.a,a.g,"/emulator/auth/iframe")):a=ce("https",this.l,null,"/__/auth/iframe");this.a=a;I(this.a,"apiKey",this.h);I(this.a,"appName",this.i);this.b=null;this.c=[];}Vj.prototype.toString=function(){this.f?I(this.a,"v",this.f):ie(this.a.b,"v");this.b?I(this.a,"eid",this.b):ie(this.a.b,"eid");this.c.length?I(this.a,"fw",this.c.join(",")):ie(this.a.b,"fw");return this.a.toString()};
function Wj(a,b,c,d,e,f){this.u=a;this.s=b;this.c=c;this.m=d;this.v=f;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null;}Wj.prototype.yb=function(a){this.h=a;return this};
Wj.prototype.toString=function(){if(this.v){var a=J(this.v.url);a=ce(a.c,a.a,a.g,"/emulator/auth/handler");}else a=ce("https",this.u,null,"/__/auth/handler");I(a,"apiKey",this.s);I(a,"appName",this.c);I(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase$1.app(this.c).auth().la();}catch(h){c=null;}b.ob=c;I(a,"providerId",this.a.providerId);c=this.a;b=Ve(c.Ib);for(var d in b)b[d]=b[d].toString();d=c.Qc;b=nb(b);for(var e=0;e<d.length;e++){var f=d[e];f in b&&delete b[f];}c.pb&&
c.ob&&!b[c.pb]&&(b[c.pb]=c.ob);mb(b)||I(a,"customParameters",Ue(b));}"function"===typeof this.a.Qb&&(c=this.a.Qb(),c.length&&I(a,"scopes",c.join(",")));this.l?I(a,"redirectUrl",this.l):ie(a.b,"redirectUrl");this.g?I(a,"eventId",this.g):ie(a.b,"eventId");this.i?I(a,"v",this.i):ie(a.b,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!be(a,g)&&I(a,g,this.b[g]);this.h?I(a,"tid",this.h):ie(a.b,"tid");this.f?I(a,"eid",this.f):ie(a.b,"eid");g=Xj(this.c);g.length&&I(a,"fw",g.join(","));return a.toString()};
function Xj(a){try{return firebase$1.app(a).auth().Ga()}catch(b){return []}}function Yj(a,b,c,d,e,f){this.s=a;this.g=b;this.b=c;this.f=f;this.c=d||null;this.i=e||null;this.l=this.u=this.C=null;this.h=[];this.m=this.a=null;}
function Zj(a){var b=re();return cj(a).then(function(c){a:{var d=J(b),e=d.c;d=d.a;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=J(g).a==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:Ce.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1;}if(!c)throw new xh(re());})}
function ak(a){if(a.m)return a.m;a.m=Ee().then(function(){if(!a.u){var b=a.c,c=a.i,d=Xj(a.b),e=new Vj(a.s,a.g,a.b,a.f);e.f=b;e.b=c;e.c=Za(d||[]);a.u=e.toString();}a.v=new Mj(a.u);bk(a);});return a.m}k=Yj.prototype;k.Ob=function(a,b,c){var d=new t("popup-closed-by-user"),e=new t("web-storage-unsupported"),f=this,g=!1;return this.ma().then(function(){ck(f).then(function(h){h||(a&&ye(a),b(e),g=!0);});}).o(function(){}).then(function(){if(!g)return Be(a)}).then(function(){if(!g)return Fd(c).then(function(){b(d);})})};
k.Xb=function(){var a=K();return !Te(a)&&!Xe(a)};k.Tb=function(){return !1};
k.Mb=function(a,b,c,d,e,f,g,h){if(!a)return F(new t("popup-blocked"));if(g&&!Te())return this.ma().o(function(p){ye(a);e(p);}),d(),E();this.a||(this.a=Zj(dk(this)));var m=this;return this.a.then(function(){var p=m.ma().o(function(v){ye(a);e(v);throw v;});d();return p}).then(function(){rh(c);if(!g){var p=ek(m.s,m.g,m.b,b,c,null,f,m.c,void 0,m.i,h,m.f);se(p,a);}}).o(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
function dk(a){a.l||(a.C=a.c?Oe(a.c,Xj(a.b)):null,a.l=new Ii(a.g,Ca(a.i),a.C),a.f&&Pi(a.l,a.f));return a.l}k.Nb=function(a,b,c,d){this.a||(this.a=Zj(dk(this)));var e=this;return this.a.then(function(){rh(b);var f=ek(e.s,e.g,e.b,a,b,re(),c,e.c,void 0,e.i,d,e.f);se(f);}).o(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ma=function(){var a=this;return ak(this).then(function(){return a.v.rb}).o(function(){a.a=null;throw new t("network-request-failed");})};k.$b=function(){return !0};
function ek(a,b,c,d,e,f,g,h,m,p,v,B){a=new Wj(a,b,c,d,e,B);a.l=f;a.g=g;a.i=h;a.b=nb(m||null);a.f=p;return a.yb(v).toString()}function bk(a){if(!a.v)throw Error("IfcHandler must be initialized!");Rj(a.v,function(b){var c={};if(b&&b.authEvent){var d=!1;b=th(b.authEvent);for(c=0;c<a.h.length;c++)d=a.h[c](b)||d;c={};c.status=d?"ACK":"ERROR";return E(c)}c.status="ERROR";return E(c)});}
function ck(a){var b={type:"webStorageSupport"};return ak(a).then(function(){return Qj(a.v,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.Ea=function(a){this.h.push(a);};k.Sa=function(a){Xa(this.h,function(b){return b==a});};function fk(a){this.a=a||firebase$1.INTERNAL.reactNative&&firebase$1.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new t("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage";}k=fk.prototype;k.get=function(a){return E(this.a.getItem(a)).then(function(b){return b&&We(b)})};k.set=function(a,b){return E(this.a.setItem(a,Ue(b)))};k.U=function(a){return E(this.a.removeItem(a))};k.ca=function(){};k.ia=function(){};function gk(a){this.b=a;this.a={};this.f=q(this.c,this);}var hk=[];function ik(){var a=Je()?self:null;w(hk,function(c){c.b==a&&(b=c);});if(!b){var b=new gk(a);hk.push(b);}return b}
gk.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];w(d,function(f){e.push(E().then(function(){return f(a.origin,a.data.data)}));});Jc(e).then(function(f){var g=[];w(f,function(h){g.push({fulfilled:h.Pb,value:h.value,reason:h.reason?h.reason.message:void 0});});w(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m];});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g});});}};function jk(a,b,c){mb(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c);}function kk(a){this.a=a;}kk.prototype.postMessage=function(a,b){this.a.postMessage(a,b);};function lk(a){this.c=a;this.b=!1;this.a=[];}
function mk(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return F(Error("connection_unavailable"));var v=d?800:50,B="undefined"!==typeof MessageChannel?new MessageChannel:null;return (new D(function(A,Q){B?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),B.port1.start(),h=setTimeout(function(){Q(Error("unsupported_event"));},v),g=function(ya){ya.data.eventId===e&&("ack"===ya.data.status?(clearTimeout(h),m=setTimeout(function(){Q(Error("timeout"));},3E3)):"done"===ya.data.status?(clearTimeout(m),
"undefined"!==typeof ya.data.response?A(ya.data.response):Q(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),Q(Error("invalid_response"))));},p={messageChannel:B,onMessage:g},a.a.push(p),B.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[B.port2])):Q(Error("connection_unavailable"));})).then(function(A){nk(a,p);return A}).o(function(A){nk(a,p);throw A;})}
function nk(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Xa(a.a,function(e){return e==b});}}lk.prototype.close=function(){for(;0<this.a.length;)nk(this,this.a[0]);this.b=!0;};function ok(){if(!pk())throw new t("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.m=l.indexedDB;this.type="indexedDB";this.g=this.v=this.f=this.l=null;this.s=!1;this.h=null;var a=this;Je()&&self?(this.v=ik(),jk(this.v,"keyChanged",function(b,c){return qk(a).then(function(d){0<d.length&&w(a.a,function(e){e(d);});return {keyProcessed:Va(d,c.key)}})}),jk(this.v,"ping",function(){return E(["keyChanged"])})):ef().then(function(b){if(a.h=b)a.g=new lk(new kk(b)),mk(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
Va(c[0].value,"keyChanged")&&(a.s=!0);}).o(function(){});});}var rk;function sk(a){return new D(function(b,c){var d=a.m.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b();};d.onerror=function(e){c(Error(e.target.error));};})}
function tk(a){return new D(function(b,c){var d=a.m.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault();}catch(f){}c(Error(e.target.error));};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"});}catch(f){c(f);}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):sk(a).then(function(){return tk(a)}).then(function(f){b(f);}).o(function(f){c(f);});};})}
function uk(a){a.i||(a.i=tk(a));return a.i}function vk(a,b){function c(e,f){uk(a).then(b).then(e).o(function(g){if(3<++d)f(g);else return uk(a).then(function(h){h.close();a.i=void 0;return c(e,f)}).o(function(h){f(h);})});}var d=0;return new D(c)}function pk(){try{return !!l.indexedDB}catch(a){return !1}}function wk(a){return a.objectStore("firebaseLocalStorage")}function xk(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}
function yk(a){return new D(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b();};a.onerror=function(d){c(d.target.error);};})}k=ok.prototype;k.set=function(a,b){var c=this,d=!1;return vk(this,function(e){e=wk(xk(e,!0));return yk(e.get(a))}).then(function(e){return vk(c,function(f){f=wk(xk(f,!0));if(e)return e.value=b,yk(f.put(e));c.b++;d=!0;var g={};g.fbase_key=a;g.value=b;return yk(f.add(g))})}).then(function(){c.c[a]=b;return zk(c,a)}).oa(function(){d&&c.b--;})};
function zk(a,b){return a.g&&a.h&&df()===a.h?mk(a.g,"keyChanged",{key:b},a.s).then(function(){}).o(function(){}):E()}k.get=function(a){return vk(this,function(b){return yk(wk(xk(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.U=function(a){var b=this,c=!1;return vk(this,function(d){c=!0;b.b++;return yk(wk(xk(d,!0))["delete"](a))}).then(function(){delete b.c[a];return zk(b,a)}).oa(function(){c&&b.b--;})};
function qk(a){return uk(a).then(function(b){var c=wk(xk(b,!1));return c.getAll?yk(c.getAll()):new D(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f);};g.onerror=function(h){e(h.target.error);};})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=te(a.c,c);a.c=c;}return d})}k.ca=function(a){0==this.a.length&&Ak(this);this.a.push(a);};
k.ia=function(a){Xa(this.a,function(b){return b==a});0==this.a.length&&Bk(this);};function Ak(a){function b(){a.f=setTimeout(function(){a.l=qk(a).then(function(c){0<c.length&&w(a.a,function(d){d(c);});}).then(function(){b();}).o(function(c){"STOP_EVENT"!=c.message&&b();});},800);}Bk(a);b();}function Bk(a){a.l&&a.l.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null);}function Ck(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=E().then(function(){if(pk()){var d=Qe(),e="__sak"+d;rk||(rk=new ok);c=rk;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.U(e)}).then(function(){return c}).o(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.ca(function(e){w(b.a,function(f){f(e);});});return d});}k=Ck.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.U=function(a){return this.b.then(function(b){return b.U(a)})};k.ca=function(a){this.a.push(a);};k.ia=function(a){Xa(this.a,function(b){return b==a});};function Dk(){this.a={};this.type="inMemory";}k=Dk.prototype;k.get=function(a){return E(this.a[a])};k.set=function(a,b){this.a[a]=b;return E()};k.U=function(a){delete this.a[a];return E()};k.ca=function(){};k.ia=function(){};function Ek(){if(!Fk()){if("Node"==Ke())throw new t("internal-error","The LocalStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Gk()||firebase$1.INTERNAL.node.localStorage;this.type="localStorage";}function Gk(){try{var a=l.localStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Fk(){var a="Node"==Ke();a=Gk()||a&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.localStorage;if(!a)return !1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return !1}}k=Ek.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d);})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a);})};
k.ca=function(a){l.window&&nd(l.window,"storage",a);};k.ia=function(a){l.window&&xd(l.window,"storage",a);};function Hk(){this.type="nullStorage";}k=Hk.prototype;k.get=function(){return E(null)};k.set=function(){return E()};k.U=function(){return E()};k.ca=function(){};k.ia=function(){};function Ik(){if(!Jk()){if("Node"==Ke())throw new t("internal-error","The SessionStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Kk()||firebase$1.INTERNAL.node.sessionStorage;this.type="sessionStorage";}function Kk(){try{var a=l.sessionStorage,b=Qe();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Jk(){var a="Node"==Ke();a=Kk()||a&&firebase$1.INTERNAL.node&&firebase$1.INTERNAL.node.sessionStorage;if(!a)return !1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return !1}}k=Ik.prototype;k.get=function(a){var b=this;return E().then(function(){var c=b.a.getItem(a);return We(c)})};k.set=function(a,b){var c=this;return E().then(function(){var d=Ue(b);null===d?c.U(a):c.a.setItem(a,d);})};k.U=function(a){var b=this;return E().then(function(){b.a.removeItem(a);})};k.ca=function(){};
k.ia=function(){};function Lk(){var a={};a.Browser=Mk;a.Node=Nk;a.ReactNative=Ok;a.Worker=Pk;this.a=a[Ke()];}var Qk,Mk={F:Ek,bb:Ik},Nk={F:Ek,bb:Ik},Ok={F:fk,bb:Hk},Pk={F:Ek,bb:Hk};var Rk={rd:"local",NONE:"none",td:"session"};function Sk(a){var b=new t("invalid-persistence-type"),c=new t("unsupported-persistence-type");a:{for(d in Rk)if(Rk[d]==a){var d=!0;break a}d=!1;}if(!d||"string"!==typeof a)throw b;switch(Ke()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;case "Worker":if("session"===a||!pk()&&"none"!==a)throw c;break;default:if(!Pe()&&"none"!==a)throw c;}}
function Tk(){var a=!Xe(K())&&Ie()?!0:!1,b=Te(),c=Pe();this.m=a;this.h=b;this.l=c;this.a={};Qk||(Qk=new Lk);a=Qk;try{this.g=!qe()&&cf()||!l.indexedDB?new a.a.F:new Ck(Je()?new Dk:new a.a.F);}catch(d){this.g=new Dk,this.h=!0;}try{this.i=new a.a.bb;}catch(d){this.i=new Dk;}this.v=new Dk;this.f=q(this.Yb,this);this.b={};}var Uk;function Vk(){Uk||(Uk=new Tk);return Uk}function Wk(a,b){switch(b){case "session":return a.i;case "none":return a.v;default:return a.g}}
function Xk(a,b){return "firebase:"+a.name+(b?":"+b:"")}function Yk(a,b,c){var d=Xk(b,c),e=Wk(a,b.F);return a.get(b,c).then(function(f){var g=null;try{g=We(l.localStorage.getItem(d));}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d);})}k=Tk.prototype;k.get=function(a,b){return Wk(this,a.F).get(Xk(a,b))};function Zk(a,b,c){c=Xk(b,c);"local"==b.F&&(a.b[c]=null);return Wk(a,b.F).U(c)}
k.set=function(a,b,c){var d=Xk(a,c),e=this,f=Wk(this,a.F);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.F&&(e.b[d]=g);})};k.addListener=function(a,b,c){a=Xk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));mb(this.a)&&(Wk(this,"local").ca(this.f),this.h||(qe()||!cf())&&l.indexedDB||!this.l||$k(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c);};
k.removeListener=function(a,b,c){a=Xk(a,b);this.a[a]&&(Xa(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);mb(this.a)&&(Wk(this,"local").ia(this.f),al(this));};function $k(a){al(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new bd({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Yb(c));}},1E3);}function al(a){a.c&&(clearInterval(a.c),a.c=null);}
k.Yb=function(a){if(a&&a.g){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.mb(c));}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Wk(this,"local").ia(this.f):al(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.mb(b);};Wb&&ic&&10==ic&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c();}}else w(a,q(this.mb,this));};k.mb=function(a){this.a[a]&&w(this.a[a],function(b){b();});};function bl(a){this.a=a;this.b=Vk();}var cl={name:"authEvent",F:"local"};function dl(a){return a.b.get(cl,a.a).then(function(b){return th(b)})}function el(){this.a=Vk();}function fl(){this.b=-1;}function gl(a,b){this.b=hl;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0===il&&(l.Int32Array?il=new Int32Array(jl):il=jl);this.reset();}var il;r(gl,fl);for(var hl=64,kl=hl-1,ll=[],ml=0;ml<kl;ml++)ll[ml]=0;var nl=Ya(128,ll);gl.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Za(this.h);};
function ol(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0;}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,v=a.a[5]|0,B=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var A=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&v^~p&B;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
7))|0;g=g+(il[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=B;B=v;v=p;p=m+g|0;m=h;h=e;e=d;d=g+A|0;}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+v|0;a.a[6]=a.a[6]+B|0;a.a[7]=a.a[7]+f|0;}
function pl(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if("string"===typeof b)for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(ol(a),e=0);else if(na(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(ol(a),e=0);}else throw Error("message must be string or array");a.c=e;a.g+=c;}
var jl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ql(){gl.call(this,8,rl);}r(ql,gl);var rl=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function sl(a,b,c,d,e,f){this.v=a;this.i=b;this.l=c;this.m=d||null;this.u=e||null;this.s=f;this.h=b+":"+c;this.C=new el;this.g=new bl(this.h);this.f=null;this.b=[];this.a=this.c=null;}function tl(a){return new t("invalid-cordova-configuration",a)}k=sl.prototype;
k.ma=function(){return this.Ia?this.Ia:this.Ia=Fe().then(function(){if("function"!==typeof L("universalLinks.subscribe",l))throw tl("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof L("BuildInfo.packageName",l))throw tl("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",l))throw tl("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",l))throw tl("cordova-plugin-inappbrowser is not installed");
},function(){throw new t("cordova-not-ready");})};function ul(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function vl(a){var b=new ql;pl(b,a);a=[];var c=8*b.g;56>b.c?pl(b,nl,56-b.c):pl(b,nl,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;ol(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return cg(a)}
k.Ob=function(a,b){b(new t("operation-not-supported-in-this-environment"));return E()};k.Mb=function(){return F(new t("operation-not-supported-in-this-environment"))};k.$b=function(){return !1};k.Xb=function(){return !0};k.Tb=function(){return !0};
k.Nb=function(a,b,c,d){if(this.c)return F(new t("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=E().then(function(){rh(b);return wl(e)}).then(function(){return xl(e,a,b,c,d)}).then(function(){return (new D(function(v,B){h=function(){var A=L("cordova.plugins.browsertab.close",l);v();"function"===typeof A&&A();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return !1};e.Ea(h);m=function(){g||(g=Fd(2E3).then(function(){B(new t("redirect-cancelled-by-user"));}));};
p=function(){$e()&&m();};f.addEventListener("resume",m,!1);K().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1);})).o(function(v){return yl(e).then(function(){throw v;})})}).oa(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.Sa(h);e.c=null;})};
function xl(a,b,c,d,e){var f=ul(),g=new sh(b,d,null,f,new t("no-auth-event"),null,e),h=L("BuildInfo.packageName",l);if("string"!==typeof h)throw new t("invalid-cordova-configuration");var m=L("BuildInfo.displayName",l),p={};if(K().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(K().toLowerCase().match(/android/))p.apn=h;else return F(new t("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=vl(f);p.sessionId=f;var v=ek(a.v,a.i,a.l,b,c,null,d,a.m,p,a.u,e,a.s);return a.ma().then(function(){var B=
a.h;return a.C.a.set(cl,g.w(),B)}).then(function(){var B=L("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof B)throw new t("invalid-cordova-configuration");var A=null;B(function(Q){if(Q){A=L("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");A(v);}else {A=L("cordova.InAppBrowser.open",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");Q=K();a.a=A(v,Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes");}});})}function zl(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b);}catch(d){}}function wl(a){a.f||(a.f=a.ma().then(function(){return new D(function(b){function c(d){b(d);a.Sa(c);return !1}a.Ea(c);Al(a);})}));return a.f}function yl(a){var b=null;return dl(a.g).then(function(c){b=c;c=a.g;return Zk(c.b,cl,c.a)}).then(function(){return b})}
function Al(a){function b(g){d=!0;e&&e.cancel();yl(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=xg(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=J(m),p=We(be(p,"firebaseError")||null),p=(p="object"===typeof p?Aa(p):null)?new sh(h.c,h.b,null,null,p,null,h.T()):new sh(h.c,h.b,m,h.f,null,null,h.T()));m=p||c;}zl(a,m);});}var c=new sh("unknown",null,null,null,new t("no-auth-event")),d=!1,e=Fd(500).then(function(){return yl(a).then(function(){d||zl(a,c);})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
g.toLowerCase().indexOf(L("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g);}catch(h){console.error(h);}};vh||(vh=new uh);wh(b);}k.Ea=function(a){this.b.push(a);wl(this).o(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new sh("unknown",null,null,null,new t("no-auth-event")),a(b));});};k.Sa=function(a){Xa(this.b,function(b){return b==a});};function Bl(a){this.a=a;this.b=Vk();}var Cl={name:"pendingRedirect",F:"session"};function Dl(a){return a.b.set(Cl,"pending",a.a)}function El(a){return Zk(a.b,Cl,a.a)}function Fl(a){return a.b.get(Cl,a.a).then(function(b){return "pending"==b})}function Gl(a,b,c,d){this.i={};this.u=0;this.D=a;this.v=b;this.m=c;this.J=d;this.h=[];this.f=!1;this.l=q(this.s,this);this.b=new Hl;this.C=new Il;this.g=new Bl(Jl(this.v,this.m));this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.C;this.c.linkViaPopup=this.C;this.c.reauthViaPopup=this.C;this.a=Kl(this.D,this.v,this.m,Da,this.J);}
function Kl(a,b,c,d,e){var f=firebase$1.SDK_VERSION||null;return Ge()?new sl(a,b,c,f,d,e):new Yj(a,b,c,f,d,e)}Gl.prototype.reset=function(){this.f=!1;this.a.Sa(this.l);this.a=Kl(this.D,this.v,this.m,null,this.J);this.i={};};function Ll(a){a.f||(a.f=!0,a.a.Ea(a.l));var b=a.a;return a.a.ma().o(function(c){a.a==b&&a.reset();throw c;})}
function Ml(a){a.a.Xb()&&Ll(a).o(function(b){var c=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(b)&&a.s(c);});a.a.Tb()||Ol(a.b);}function Pl(a,b){Va(a.h,b)||a.h.push(b);a.f||Fl(a.g).then(function(c){c?El(a.g).then(function(){Ll(a).o(function(d){var e=new sh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Nl(d)&&a.s(e);});}):Ml(a);}).o(function(){Ml(a);});}function Ql(a,b){Xa(a.h,function(c){return c==b});}
Gl.prototype.s=function(a){if(!a)throw new t("invalid-auth-event");6E5<=va()-this.u&&(this.i={},this.u=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return !1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.Fb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.u=va());b=!0;break}}Ol(this.b);return b};var Rl=new Ze(2E3,1E4),Sl=new Ze(3E4,6E4);Gl.prototype.qa=function(){return this.b.qa()};
function Tl(a,b,c,d,e,f,g){return a.a.Mb(b,c,d,function(){a.f||(a.f=!0,a.a.Ea(a.l));},function(){a.reset();},e,f,g)}function Nl(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
function Ul(a,b,c,d,e){var f;return Dl(a.g).then(function(){return a.a.Nb(b,c,d,e).o(function(g){if(Nl(g))throw new t("operation-not-supported-in-this-environment");f=g;return El(a.g).then(function(){throw f;})}).then(function(){return a.a.$b()?new D(function(){}):El(a.g).then(function(){return a.qa()}).then(function(){}).o(function(){})})})}function Vl(a,b,c,d,e){return a.a.Ob(d,function(f){b.na(c,null,f,e);},Rl.get())}var Wl={};function Jl(a,b,c){a=a+":"+b;c&&(a=a+":"+c.url);return a}
function Xl(a,b,c,d){var e=Jl(b,c,d);Wl[e]||(Wl[e]=new Gl(a,b,c,d));return Wl[e]}function Hl(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1;}Hl.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null);};
Hl.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Yl(this,!0,null,a.a),E()):b.Fa(c,d)?Zl(this,a,b):F(new t("invalid-auth-event")):(Yl(this,!1,null,null),E());}else F(new t("invalid-auth-event"));};function Ol(a){a.g||(a.g=!0,Yl(a,!1,null,null));}function $l(a){a.g&&!a.i&&Yl(a,!1,null,null);}
function Zl(a,b,c){c=c.Fa(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.T(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){Yl(a,h,m,null);}).o(function(m){Yl(a,h,null,m);});}function am(a,b){a.b=function(){return F(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b);}function bm(a,b){a.b=function(){return E(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b);}function Yl(a,b,c,d){b?d?am(a,d):bm(a,c):bm(a,{user:null});a.f=[];a.c=[];}
Hl.prototype.qa=function(){var a=this;return new D(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),cm(a));})};function cm(a){var b=new t("timeout");a.a&&a.a.cancel();a.a=Fd(Sl.get()).then(function(){a.b||(a.g=!0,Yl(a,!0,null,b));});}function Il(){}Il.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.na(a.c,null,a.a,a.b),E()):b.Fa(c,d)?dm(a,b):F(new t("invalid-auth-event"));}else F(new t("invalid-auth-event"));};
function dm(a,b){var c=a.b,d=a.c;b.Fa(d,c)(a.g,a.f,a.T(),a.i).then(function(e){b.na(d,e,null,c);}).o(function(e){b.na(d,null,e,c);});}function em(){this.ib=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.ib},set:function(a){this.ib=a;},enumerable:!1});}function fm(a,b){this.a=b;M(this,"verificationId",a);}fm.prototype.confirm=function(a){a=ph(this.verificationId,a);return this.a(a)};function gm(a,b,c,d){return (new lh(a)).fb(b,c).then(function(e){return new fm(e,d)})}function hm(a){var b=ig(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new t("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");N(this,{token:a,expirationTime:bf(1E3*b.exp),authTime:bf(1E3*b.auth_time),issuedAtTime:bf(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,signInSecondFactor:b.firebase&&b.firebase.sign_in_second_factor?b.firebase.sign_in_second_factor:null,claims:b});}
function im(a,b,c){var d=b&&b[jm];if(!d)throw new t("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=a;this.f=nb(b);this.g=c;this.c=new yg(null,d);this.b=[];var e=this;w(b[km]||[],function(f){(f=tf(f))&&e.b.push(f);});M(this,"auth",this.a);M(this,"session",this.c);M(this,"hints",this.b);}var km="mfaInfo",jm="mfaPendingCredential";im.prototype.Rc=function(a){var b=this;return a.sb(this.a.a,this.c).then(function(c){var d=nb(b.f);delete d[km];delete d[jm];z(d,c);return b.g(d)})};function lm(a,b,c,d){t.call(this,"multi-factor-auth-required",d,b);this.b=new im(a,b,c);M(this,"resolver",this.b);}r(lm,t);function mm(a,b,c){if(a&&n(a.serverResponse)&&"auth/multi-factor-auth-required"===a.code)try{return new lm(b,a.serverResponse,c,a.message)}catch(d){}return null}function nm(){}nm.prototype.sb=function(a,b,c){return b.type==zg?om(this,a,b,c):pm(this,a,b)};function om(a,b,c,d){return c.Ha().then(function(e){e={idToken:e};"undefined"!==typeof d&&(e.displayName=d);z(e,{phoneVerificationInfo:hh(a.a)});return O(b,Gj,e)})}function pm(a,b,c){return c.Ha().then(function(d){d={mfaPendingCredential:d};z(d,{phoneVerificationInfo:hh(a.a)});return O(b,Hj,d)})}function qm(a){M(this,"factorId",a.fa);this.a=a;}r(qm,nm);
function rm(a){qm.call(this,a);if(this.a.fa!=lh.PROVIDER_ID)throw new t("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");}r(rm,qm);function sm(a,b){G.call(this,a);for(var c in b)this[c]=b[c];}r(sm,G);function tm(a,b){this.a=a;this.b=[];this.c=q(this.yc,this);nd(this.a,"userReloaded",this.c);var c=[];b&&b.multiFactor&&b.multiFactor.enrolledFactors&&w(b.multiFactor.enrolledFactors,function(d){var e=null,f={};if(d){d.uid&&(f[qf]=d.uid);d.displayName&&(f[rf]=d.displayName);d.enrollmentTime&&(f[sf]=(new Date(d.enrollmentTime)).toISOString());d.phoneNumber&&(f[pf]=d.phoneNumber);try{e=new uf(f);}catch(g){}d=e;}else d=null;d&&c.push(d);});um(this,c);}
function vm(a){var b=[];w(a.mfaInfo||[],function(c){(c=tf(c))&&b.push(c);});return b}k=tm.prototype;k.yc=function(a){um(this,vm(a.hd));};function um(a,b){a.b=b;M(a,"enrolledFactors",b);}k.Rb=function(){return this.a.I().then(function(a){return new yg(a,null)})};k.fc=function(a,b){var c=this,d=this.a.a;return this.Rb().then(function(e){return a.sb(d,e,b)}).then(function(e){wm(c.a,e);return c.a.reload()})};
k.bd=function(a){var b=this,c="string"===typeof a?a:a.uid,d=this.a.a;return this.a.I().then(function(e){return O(d,Lj,{idToken:e,mfaEnrollmentId:c})}).then(function(e){var f=Qa(b.b,function(g){return g.uid!=c});um(b,f);wm(b.a,e);return b.a.reload().o(function(g){if("auth/user-token-expired"!=g.code)throw g;})})};k.w=function(){return {multiFactor:{enrolledFactors:Ra(this.b,function(a){return a.w()})}}};function xm(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}xm.prototype.start=function(){this.a=this.c;ym(this,!0);};function zm(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function ym(a,b){a.stop();a.b=Fd(zm(a,b)).then(function(){return af()}).then(function(){return a.h()}).then(function(){ym(a,!0);}).o(function(c){a.i(c)&&ym(a,!1);});}
xm.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null);};function Am(a){this.f=a;this.b=this.a=null;this.c=Date.now();}Am.prototype.w=function(){return {apiKey:this.f.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:this.c}};function Bm(a,b){"undefined"===typeof b&&(a.b?(b=a.b,b=b.a-b.g):b=0);a.c=Date.now()+1E3*b;}function Cm(a,b){a.b=jg(b[Dg]||"");a.a=b.refreshToken;b=b.expiresIn;Bm(a,"undefined"!==typeof b?Number(b):void 0);}function Dm(a,b){a.b=b.b;a.a=b.a;a.c=b.c;}
function Em(a,b){return Wi(a.f,b).then(function(c){a.b=jg(c.access_token);a.a=c.refresh_token;Bm(a,c.expires_in);return {accessToken:a.b.toString(),refreshToken:a.a}}).o(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}Am.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?F(new t("user-token-expired")):a||!this.b||Date.now()>this.c-3E4?this.a?Em(this,{grant_type:"refresh_token",refresh_token:this.a}):E(null):E({accessToken:this.b.toString(),refreshToken:this.a})};function Fm(a,b){this.a=a||null;this.b=b||null;N(this,{lastSignInTime:bf(b||null),creationTime:bf(a||null)});}function Gm(a){return new Fm(a.a,a.b)}Fm.prototype.w=function(){return {lastLoginAt:this.b,createdAt:this.a}};function Hm(a,b,c,d,e,f){N(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b});}
function Im(a,b,c){this.J=[];this.l=a.apiKey;this.m=a.appName;this.s=a.authDomain||null;var d=firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION):null;this.a=new Ii(this.l,Ca(Da),d);a.emulatorConfig&&Pi(this.a,a.emulatorConfig);this.b=new Am(this.a);Jm(this,b[Dg]);Cm(this.b,b);M(this,"refreshToken",this.b.a);Km(this,c||{});H.call(this);this.R=!1;this.s&&Re()&&(this.i=Xl(this.s,this.l,this.m));this.S=[];this.h=null;this.u=Lm(this);this.aa=q(this.hb,this);var e=this;this.ya=null;this.Oa=function(f){e.wa(f.h);};
this.ja=null;this.Aa=function(f){Pi(e.a,f.c);};this.X=null;this.$=[];this.Ba=function(f){Mm(e,f.f);};this.ba=null;this.O=new tm(this,c);M(this,"multiFactor",this.O);}r(Im,H);Im.prototype.wa=function(a){this.ya=a;Oi(this.a,a);};Im.prototype.la=function(){return this.ya};function Nm(a,b){a.ja&&xd(a.ja,"languageCodeChanged",a.Oa);(a.ja=b)&&nd(b,"languageCodeChanged",a.Oa);}function Om(a,b){a.X&&xd(a.X,"emulatorConfigChanged",a.Aa);(a.X=b)&&nd(b,"emulatorConfigChanged",a.Aa);}
function Mm(a,b){a.$=b;Ri(a.a,firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION,a.$):null);}Im.prototype.Ga=function(){return Za(this.$)};function Pm(a,b){a.ba&&xd(a.ba,"frameworkChanged",a.Ba);(a.ba=b)&&nd(b,"frameworkChanged",a.Ba);}Im.prototype.hb=function(){this.u.b&&(this.u.stop(),this.u.start());};function Qm(a){try{return firebase$1.app(a.m).auth()}catch(b){throw new t("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}
function Lm(a){return new xm(function(){return a.I(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.b.c-Date.now()-3E5;return 0<b?b:0})}function Rm(a){a.D||a.u.b||(a.u.start(),xd(a,"tokenChanged",a.aa),nd(a,"tokenChanged",a.aa));}function Sm(a){xd(a,"tokenChanged",a.aa);a.u.stop();}function Jm(a,b){a.za=b;M(a,"_lat",b);}function Tm(a,b){Xa(a.S,function(c){return c==b});}
function Um(a){for(var b=[],c=0;c<a.S.length;c++)b.push(a.S[c](a));return Jc(b).then(function(){return a})}function Vm(a){a.i&&!a.R&&(a.R=!0,Pl(a.i,a));}function Km(a,b){N(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new Fm(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId;}M(Im.prototype,"providerId","firebase");
function Wm(){}function Xm(a){return E().then(function(){if(a.D)throw new t("app-deleted");})}function Ym(a){return Ra(a.providerData,function(b){return b.providerId})}function Zm(a,b){b&&($m(a,b.providerId),a.providerData.push(b));}function $m(a,b){Xa(a.providerData,function(c){return c.providerId==b});}function an(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c);}
function bn(a,b){a!=b&&(N(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?M(a,"metadata",Gm(b.metadata)):M(a,"metadata",new Fm),w(b.providerData,function(c){Zm(a,c);}),Dm(a.b,b.b),M(a,"refreshToken",a.b.a),um(a.O,b.O.b));}k=Im.prototype;k.reload=function(){var a=this;return R(this,Xm(this).then(function(){return cn(a).then(function(){return Um(a)}).then(Wm)}))};
function cn(a){return a.I().then(function(b){var c=a.isAnonymous;return dn(a,b).then(function(){c||an(a,"isAnonymous",!1);return b})})}k.oc=function(a){return this.I(a).then(function(b){return new hm(b)})};k.I=function(a){var b=this;return R(this,Xm(this).then(function(){return b.b.getToken(a)}).then(function(c){if(!c)throw new t("internal-error");c.accessToken!=b.za&&(Jm(b,c.accessToken),b.dispatchEvent(new sm("tokenChanged")));an(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function wm(a,b){b[Dg]&&a.za!=b[Dg]&&(Cm(a.b,b),a.dispatchEvent(new sm("tokenChanged")),Jm(a,b[Dg]),an(a,"refreshToken",a.b.a));}function dn(a,b){return O(a.a,Ij,{idToken:b}).then(q(a.Kc,a))}
k.Kc=function(a){a=a.users;if(!a||!a.length)throw new t("internal-error");a=a[0];Km(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=en(a),c=0;c<b.length;c++)Zm(this,b[c]);an(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));this.dispatchEvent(new sm("userReloaded",{hd:a}));};
function en(a){return (a=a.providerUserInfo)&&a.length?Ra(a,function(b){return new Hm(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Lc=function(a){gf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.tb(a)};
k.tb=function(a){var b=this,c=null;return R(this,a.c(this.a,this.uid).then(function(d){wm(b,d);c=fn(b,d,"reauthenticate");b.h=null;return b.reload()}).then(function(){return c}),!0)};function gn(a,b){return cn(a).then(function(){if(Va(Ym(a),b))return Um(a).then(function(){throw new t("provider-already-linked");})})}k.Cc=function(a){gf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.qb(a)};
k.qb=function(a){var b=this,c=null;return R(this,gn(this,a.providerId).then(function(){return b.I()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=fn(b,d,"link");return hn(b,d)}).then(function(){return c}))};k.Dc=function(a,b){var c=this;return R(this,gn(this,"phone").then(function(){return gm(Qm(c),a,b,q(c.qb,c))}))};k.Mc=function(a,b){var c=this;return R(this,E().then(function(){return gm(Qm(c),a,b,q(c.tb,c))}),!0)};
function fn(a,b,c){var d=qh(b);b=og(b);return kf({user:a,credential:d,additionalUserInfo:b,operationType:c})}function hn(a,b){wm(a,b);return a.reload().then(function(){return a})}k.Bb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Bb(c,a)}).then(function(c){wm(b,c);return b.reload()}))};k.ed=function(a){var b=this;return R(this,this.I().then(function(c){return a.b(b.a,c)}).then(function(c){wm(b,c);return b.reload()}))};
k.Cb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.Cb(c,a)}).then(function(c){wm(b,c);return b.reload()}))};
k.Db=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Xm(this);var b=this;return R(this,this.I().then(function(c){return b.a.Db(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){wm(b,c);an(b,"displayName",c.displayName||null);an(b,"photoURL",c.photoUrl||null);w(b.providerData,function(d){"password"===d.providerId&&(M(d,"displayName",b.displayName),M(d,"photoURL",b.photoURL));});return Um(b)}).then(Wm))};
k.cd=function(a){var b=this;return R(this,cn(this).then(function(c){return Va(Ym(b),a)?rj(b.a,c,[a]).then(function(d){var e={};w(d.providerUserInfo||[],function(f){e[f.providerId]=!0;});w(Ym(b),function(f){e[f]||$m(b,f);});e[lh.PROVIDER_ID]||M(b,"phoneNumber",null);return Um(b)}):Um(b).then(function(){throw new t("no-such-provider");})}))};
k.delete=function(){var a=this;return R(this,this.I().then(function(b){return O(a.a,Fj,{idToken:b})}).then(function(){a.dispatchEvent(new sm("userDeleted"));})).then(function(){for(var b=0;b<a.J.length;b++)a.J[b].cancel("app-deleted");Nm(a,null);Om(a,null);Pm(a,null);a.J=[];a.D=!0;Sm(a);M(a,"refreshToken",null);a.i&&Ql(a.i,a);})};
k.Fb=function(a,b){return "linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.ga||null)==b||"reauthViaRedirect"==a&&(this.ga||null)==b?!0:!1};k.na=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C);};
k.Fa=function(a,b){return "linkViaPopup"==a&&b==(this.g||null)?q(this.Kb,this):"reauthViaPopup"==a&&b==(this.g||null)?q(this.Lb,this):"linkViaRedirect"==a&&(this.ga||null)==b?q(this.Kb,this):"reauthViaRedirect"==a&&(this.ga||null)==b?q(this.Lb,this):null};k.Ec=function(a){var b=this;return jn(this,"linkViaPopup",a,function(){return gn(b,a.providerId).then(function(){return Um(b)})},!1)};k.Nc=function(a){return jn(this,"reauthViaPopup",a,function(){return E()},!0)};
function jn(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.h&&!e)return F(a.h);var f=ng(c.providerId),g=Qe(a.uid+":::"),h=null;(!Te()||Ie())&&a.s&&c.isOAuthProvider&&(h=ek(a.s,a.l,a.m,b,c,null,g,firebase$1.SDK_VERSION||null,null,null,a.tenantId));var m=ze(h,f&&f.ua,f&&f.ta);d=d().then(function(){kn(a);if(!e)return a.I().then(function(){})}).then(function(){return Tl(a.i,m,b,c,g,!!h,a.tenantId)}).then(function(){return new D(function(p,v){a.na(b,null,new t("cancelled-popup-request"),
a.g||null);a.f=p;a.C=v;a.g=g;a.c=Vl(a.i,a,b,m,g);})}).then(function(p){m&&ye(m);return p?kf(p):null}).o(function(p){m&&ye(m);throw p;});return R(a,d,e)}k.Fc=function(a){var b=this;return ln(this,"linkViaRedirect",a,function(){return gn(b,a.providerId)},!1)};k.Oc=function(a){return ln(this,"reauthViaRedirect",a,function(){return E()},!0)};
function ln(a,b,c,d,e){if(!Re())return F(new t("operation-not-supported-in-this-environment"));if(a.h&&!e)return F(a.h);var f=null,g=Qe(a.uid+":::");d=d().then(function(){kn(a);if(!e)return a.I().then(function(){})}).then(function(){a.ga=g;return Um(a)}).then(function(h){a.ha&&(h=a.ha,h=h.b.set(mn,a.w(),h.a));return h}).then(function(){return Ul(a.i,b,c,g,a.tenantId)}).o(function(h){f=h;if(a.ha)return nn(a.ha);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function kn(a){if(!a.i||!a.R){if(a.i&&!a.R)throw new t("internal-error");throw new t("auth-domain-config-required");}}k.Kb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.I().then(function(g){return Hg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=fn(e,g,"link");return hn(e,g)}).then(function(){return f});return R(this,c)};
k.Lb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=E().then(function(){return Cg(Ig(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=fn(e,h,"reauthenticate");wm(e,h);e.h=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
k.ub=function(a){var b=this,c=null;return R(this,this.I().then(function(d){c=d;return "undefined"===typeof a||mb(a)?{}:bg(new Sf(a))}).then(function(d){return b.a.ub(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};k.Eb=function(a,b){var c=this,d=null;return R(this,this.I().then(function(e){d=e;return "undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(e){return c.a.Eb(d,a,e)}).then(function(e){if(c.email!=e)return c.reload()}).then(function(){}))};
function R(a,b,c){var d=on(a,b,c);a.J.push(d);d.oa(function(){Wa(a.J,d);});return d.o(function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),Qm(a),q(a.jc,a)));throw f||e;})}k.jc=function(a){var b=null,c=this;a=Cg(E(a),c.uid).then(function(d){b=fn(c,d,"reauthenticate");wm(c,d);c.h=null;return c.reload()}).then(function(){return b});return R(this,a,!0)};
function on(a,b,c){return a.h&&!c?(b.cancel(),F(a.h)):b.o(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.h||a.dispatchEvent(new sm("userInvalidated")),a.h=d);throw d;})}k.toJSON=function(){return this.w()};
k.w=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.b.w(),redirectEventId:this.ga||null};this.metadata&&z(a,this.metadata.w());w(this.providerData,function(b){a.providerData.push(lf(b));});z(a,this.O.w());return a};
function pn(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName,emulatorConfig:a.emulatorConfig},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken){c[Dg]=a.stsTokenManager.accessToken;c.refreshToken=a.stsTokenManager.refreshToken||null;var d=a.stsTokenManager.expirationTime;d&&(c.expiresIn=(d-Date.now())/1E3);}else return null;var e=new Im(b,c,a);a.providerData&&w(a.providerData,function(f){f&&Zm(e,kf(f));});a.redirectEventId&&(e.ga=a.redirectEventId);
return e}function qn(a,b,c,d){var e=new Im(a,b);c&&(e.ha=c);d&&Mm(e,d);return e.reload().then(function(){return e})}function rn(a,b,c,d){var e=a.b,f={};f[Dg]=e.b&&e.b.toString();f.refreshToken=e.a;b=new Im(b||{apiKey:a.l,authDomain:a.s,appName:a.m},f);c&&(b.ha=c);d&&Mm(b,d);bn(b,a);return b}function sn(a){this.a=a;this.b=Vk();}var mn={name:"redirectUser",F:"session"};function nn(a){return Zk(a.b,mn,a.a)}function tn(a,b){return a.b.get(mn,a.a).then(function(c){c&&b&&(c.authDomain=b);return pn(c||{})})}function un(a){this.a=a;this.b=Vk();this.c=null;this.f=vn(this);this.b.addListener(wn("local"),this.a,q(this.g,this));}un.prototype.g=function(){var a=this,b=wn("local");xn(this,function(){return E().then(function(){return a.c&&"local"!=a.c.F?a.b.get(b,a.a):null}).then(function(c){if(c)return yn(a,"local").then(function(){a.c=b;})})});};function yn(a,b){var c=[],d;for(d in Rk)Rk[d]!==b&&c.push(Zk(a.b,wn(Rk[d]),a.a));c.push(Zk(a.b,zn,a.a));return Ic(c)}
function vn(a){var b=wn("local"),c=wn("session"),d=wn("none");return Yk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(zn,a.a).then(function(h){return h?wn(h):b})})})}).then(function(e){a.c=e;return yn(a,e.F)}).o(function(){a.c||(a.c=b);})}var zn={name:"persistence",F:"session"};function wn(a){return {name:"authUser",F:a}}
un.prototype.xb=function(a){var b=null,c=this;Sk(a);return xn(this,function(){return a!=c.c.F?c.b.get(c.c,c.a).then(function(d){b=d;return yn(c,a)}).then(function(){c.c=wn(a);if(b)return c.b.set(c.c,b,c.a)}):E()})};function An(a){return xn(a,function(){return a.b.set(zn,a.c.F,a.a)})}function Bn(a,b){return xn(a,function(){return a.b.set(a.c,b.w(),a.a)})}function Cn(a){return xn(a,function(){return Zk(a.b,a.c,a.a)})}
function Dn(a,b,c){return xn(a,function(){return a.b.get(a.c,a.a).then(function(d){d&&b&&(d.authDomain=b);d&&c&&(d.emulatorConfig=c);return pn(d||{})})})}function xn(a,b){a.f=a.f.then(b,b);return a.f}function En(a){this.l=!1;M(this,"settings",new em);M(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION):null,this.a=new Ii(S(this).options&&S(this).options.apiKey,Ca(Da),a);else throw new t("invalid-api-key");this.R=[];this.s=[];this.O=[];this.hb=firebase$1.INTERNAL.createSubscribe(q(this.zc,this));this.X=void 0;this.bc=firebase$1.INTERNAL.createSubscribe(q(this.Ac,this));Fn(this,null);this.i=new un(S(this).options.apiKey+":"+S(this).name);this.D=
new sn(S(this).options.apiKey+":"+S(this).name);this.$=T(this,Gn(this));this.h=T(this,Hn(this));this.ba=!1;this.ja=q(this.Zc,this);this.Ba=q(this.da,this);this.ya=q(this.mc,this);this.za=q(this.wc,this);this.Aa=q(this.xc,this);this.b=null;In(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this.delete,this);this.INTERNAL.logFramework=q(this.Gc,this);this.u=0;H.call(this);Jn(this);this.J=[];this.P=null;}r(En,H);function Kn(a){G.call(this,"languageCodeChanged");this.h=a;}r(Kn,G);
function Ln(a){G.call(this,"emulatorConfigChanged");this.c=a;}r(Ln,G);function Mn(a){G.call(this,"frameworkChanged");this.f=a;}r(Mn,G);k=En.prototype;k.xb=function(a){a=this.i.xb(a);return T(this,a)};k.wa=function(a){this.aa===a||this.l||(this.aa=a,Oi(this.a,this.aa),this.dispatchEvent(new Kn(this.la())));};k.la=function(){return this.aa};k.fd=function(){var a=l.navigator;this.wa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null);};
k.gd=function(a,b){if(!this.P){if(!/^https?:\/\//.test(a))throw new t("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");b=b?!!b.disableWarnings:!1;Nn(b);this.P={url:a,ec:b};this.settings.ib=!0;Pi(this.a,this.P);this.dispatchEvent(new Ln(this.P));}};
function Nn(a){"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");l.document&&!a&&Ee().then(function(){var b=l.document.createElement("div");b.innerText="Running in emulator mode. Do not use with production credentials.";b.style.position="fixed";b.style.width="100%";b.style.backgroundColor="#ffffff";b.style.border=".1em solid #000000";b.style.color=
"#ff0000";b.style.bottom="0px";b.style.left="0px";b.style.margin="0px";b.style.zIndex=1E4;b.style.textAlign="center";b.classList.add("firebase-emulator-warning");l.document.body.appendChild(b);});}k.Gc=function(a){this.J.push(a);Ri(this.a,firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION,this.J):null);this.dispatchEvent(new Mn(this.J));};k.Ga=function(){return Za(this.J)};k.yb=function(a){this.S===a||this.l||(this.S=a,this.a.b=this.S);};k.T=function(){return this.S};
function Jn(a){Object.defineProperty(a,"lc",{get:function(){return this.la()},set:function(b){this.wa(b);},enumerable:!1});a.aa=null;Object.defineProperty(a,"ti",{get:function(){return this.T()},set:function(b){this.yb(b);},enumerable:!1});a.S=null;Object.defineProperty(a,"emulatorConfig",{get:function(){if(this.P){var b=J(this.P.url);b=kf({protocol:b.c,host:b.a,port:b.g,options:kf({disableWarnings:this.P.ec})});}else b=null;return b},enumerable:!1});}
k.toJSON=function(){return {apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).w()}};function On(a){return a.Oa||F(new t("auth-domain-config-required"))}
function In(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&Re()&&(a.Oa=a.$.then(function(){if(!a.l){a.b=Xl(b,c,S(a).name,a.P);Pl(a.b,a);U(a)&&Vm(U(a));if(a.m){Vm(a.m);var d=a.m;d.wa(a.la());Nm(d,a);d=a.m;Mm(d,a.J);Pm(d,a);d=a.m;Pi(d.a,a.P);Om(d,a);a.m=null;}return a.b}}));}k.Fb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return !0;case "signInViaPopup":return this.g==b&&!!this.f;default:return !1}};
k.na=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.C?this.C(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.C);};k.Fa=function(a,b){return "signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?q(this.ic,this):null};k.ic=function(a,b,c,d){var e=this,f={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);return e.$.then(function(){return Pn(e,Fg(e.a,f))})};
k.Xc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=ng(a.providerId),d=Qe(),e=null;(!Te()||Ie())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=ek(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase$1.SDK_VERSION||null,null,null,this.T(),this.P));var f=ze(e,c&&c.ua,c&&c.ta);c=On(this).then(function(g){return Tl(g,f,"signInViaPopup",a,d,!!e,b.T())}).then(function(){return new D(function(g,h){b.na("signInViaPopup",
null,new t("cancelled-popup-request"),b.g);b.f=g;b.C=h;b.g=d;b.c=Vl(b.b,b,"signInViaPopup",f,d);})}).then(function(g){f&&ye(f);return g?kf(g):null}).o(function(g){f&&ye(f);throw g;});return T(this,c)};k.Yc=function(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=this,c=On(this).then(function(){return An(b.i)}).then(function(){return Ul(b.b,"signInViaRedirect",a,void 0,b.T())});return T(this,c)};
function Qn(a){if(!Re())return F(new t("operation-not-supported-in-this-environment"));var b=On(a).then(function(){return a.b.qa()}).then(function(c){return c?kf(c):null});return T(a,b)}k.qa=function(){var a=this;return Qn(this).then(function(b){a.b&&$l(a.b.b);return b}).o(function(b){a.b&&$l(a.b.b);throw b;})};
k.dd=function(a){if(!a)return F(new t("null-user"));if(this.S!=a.tenantId)return F(new t("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=rn(a,c,b.D,b.Ga());return T(this,this.h.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return bn(U(b),a),b.da(a);Fn(b,d);Vm(d);return b.da(d)}).then(function(){Rn(b);}))};
function Sn(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;a.P&&(c.emulatorConfig=a.P);return a.$.then(function(){return qn(c,b,a.D,a.Ga())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return bn(U(a),d),a.da(d);Fn(a,d);Vm(d);return a.da(d)}).then(function(){Rn(a);})}
function Fn(a,b){U(a)&&(Tm(U(a),a.Ba),xd(U(a),"tokenChanged",a.ya),xd(U(a),"userDeleted",a.za),xd(U(a),"userInvalidated",a.Aa),Sm(U(a)));b&&(b.S.push(a.Ba),nd(b,"tokenChanged",a.ya),nd(b,"userDeleted",a.za),nd(b,"userInvalidated",a.Aa),0<a.u&&Rm(b));M(a,"currentUser",b);b&&(b.wa(a.la()),Nm(b,a),Mm(b,a.J),Pm(b,a),Pi(b.a,a.P),Om(b,a));}k.Ab=function(){var a=this,b=this.h.then(function(){a.b&&$l(a.b.b);if(!U(a))return E();Fn(a,null);return Cn(a.i).then(function(){Rn(a);})});return T(this,b)};
function Tn(a){var b=tn(a.D,S(a).options.authDomain).then(function(c){if(a.m=c)c.ha=a.D;return nn(a.D)});return T(a,b)}function Gn(a){var b=S(a).options.authDomain,c=Tn(a).then(function(){return Dn(a.i,b,a.P)}).then(function(d){return d?(d.ha=a.D,a.m&&(a.m.ga||null)==(d.ga||null)?d:d.reload().then(function(){return Bn(a.i,d).then(function(){return d})}).o(function(e){return "auth/network-request-failed"==e.code?d:Cn(a.i)})):null}).then(function(d){Fn(a,d||null);});return T(a,c)}
function Hn(a){return a.$.then(function(){return Qn(a)}).o(function(){}).then(function(){if(!a.l)return a.ja()}).o(function(){}).then(function(){if(!a.l){a.ba=!0;var b=a.i;b.b.addListener(wn("local"),b.a,a.ja);}})}
k.Zc=function(){var a=this;return Dn(this.i,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d;}if(c)return bn(U(a),b),U(a).I();if(U(a)||b)Fn(a,b),b&&(Vm(b),b.ha=a.D),a.b&&Pl(a.b,a),Rn(a);}})};k.da=function(a){return Bn(this.i,a)};k.mc=function(){Rn(this);this.da(U(this));};k.wc=function(){this.Ab();};k.xc=function(){this.Ab();};
function Pn(a,b){var c=null,d=null;return T(a,b.then(function(e){c=qh(e);d=og(e);return Sn(a,e)},function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=mm(e.w(),a,q(a.kc,a)));throw f||e;}).then(function(){return kf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.kc=function(a){var b=this;return this.h.then(function(){return Pn(b,E(a))})};k.zc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b));});};
k.Ac=function(a){var b=this;Un(this,function(){a.next(U(b));});};k.Ic=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d));});return this.hb(a,b,c)};k.Hc=function(a,b,c){var d=this;this.ba&&Promise.resolve().then(function(){d.X=d.getUid();"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d));});return this.bc(a,b,c)};
k.nc=function(a){var b=this,c=this.h.then(function(){return U(b)?U(b).I(a).then(function(d){return {accessToken:d}}):null});return T(this,c)};k.Tc=function(a){var b=this;return this.h.then(function(){return Pn(b,O(b.a,Kj,{token:a}))}).then(function(c){var d=c.user;an(d,"isAnonymous",!1);b.da(d);return c})};k.Uc=function(a,b){var c=this;return this.h.then(function(){return Pn(c,O(c.a,ah,{email:a,password:b}))})};
k.dc=function(a,b){var c=this;return this.h.then(function(){return Pn(c,O(c.a,Ej,{email:a,password:b}))})};k.$a=function(a){var b=this;return this.h.then(function(){return Pn(b,a.ka(b.a))})};k.Sc=function(a){gf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.$a(a)};
k.zb=function(){var a=this;return this.h.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=kf({providerId:null,isNewUser:!1});return kf({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Pn(a,a.a.zb()).then(function(d){var e=d.user;an(e,"isAnonymous",!0);a.da(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Vn(a){return U(a)&&U(a)._lat||null}
function Rn(a){if(a.ba){for(var b=0;b<a.s.length;b++)if(a.s[b])a.s[b](Vn(a));if(a.X!==a.getUid()&&a.O.length)for(a.X=a.getUid(),b=0;b<a.O.length;b++)if(a.O[b])a.O[b](Vn(a));}}k.cc=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&Rm(U(this));};k.Pc=function(a){var b=this;w(this.s,function(c){c==a&&b.u--;});0>this.u&&(this.u=0);0==this.u&&U(this)&&Sm(U(this));this.removeAuthTokenListener(a);};
k.addAuthTokenListener=function(a){var b=this;this.s.push(a);T(this,this.h.then(function(){b.l||Va(b.s,a)&&a(Vn(b));}));};k.removeAuthTokenListener=function(a){Xa(this.s,function(b){return b==a});};function Un(a,b){a.O.push(b);T(a,a.h.then(function(){!a.l&&Va(a.O,b)&&a.X!==a.getUid()&&(a.X=a.getUid(),b(Vn(a)));}));}
k.delete=function(){this.l=!0;for(var a=0;a<this.R.length;a++)this.R[a].cancel("app-deleted");this.R=[];this.i&&(a=this.i,a.b.removeListener(wn("local"),a.a,this.ja));this.b&&(Ql(this.b,this),$l(this.b.b));return Promise.resolve()};function T(a,b){a.R.push(b);b.oa(function(){Wa(a.R,b);});return b}k.hc=function(a){return T(this,aj(this.a,a))};k.Bc=function(a){return !!fh(a)};
k.wb=function(a,b){var c=this;return T(this,E().then(function(){var d=new Sf(b);if(!d.c)throw new t("argument-error",$f+" must be true when sending sign in link to email");return bg(d)}).then(function(d){return c.a.wb(a,d)}).then(function(){}))};k.jd=function(a){return this.Ra(a).then(function(b){return b.data.email})};k.nb=function(a,b){return T(this,this.a.nb(a,b).then(function(){}))};k.Ra=function(a){return T(this,this.a.Ra(a).then(function(b){return new vf(b)}))};
k.jb=function(a){return T(this,this.a.jb(a).then(function(){}))};k.vb=function(a,b){var c=this;return T(this,E().then(function(){return "undefined"===typeof b||mb(b)?{}:bg(new Sf(b))}).then(function(d){return c.a.vb(a,d)}).then(function(){}))};k.Wc=function(a,b){return T(this,gm(this,a,b,q(this.$a,this)))};
k.Vc=function(a,b){var c=this;return T(this,E().then(function(){var d=b||re(),e=eh(a,d);d=fh(d);if(!d)throw new t("argument-error","Invalid email link!");if(d.tenantId!==c.T())throw new t("tenant-id-mismatch");return c.$a(e)}))};function Wn(){}Wn.prototype.render=function(){};Wn.prototype.reset=function(){};Wn.prototype.getResponse=function(){};Wn.prototype.execute=function(){};function Xn(){this.a={};this.b=1E12;}var Yn=null;Xn.prototype.render=function(a,b){this.a[this.b.toString()]=new Zn(a,b);return this.b++};Xn.prototype.reset=function(a){var b=$n(this,a);a=ao(a);b&&a&&(b.delete(),delete this.a[a]);};Xn.prototype.getResponse=function(a){return (a=$n(this,a))?a.getResponse():null};Xn.prototype.execute=function(a){(a=$n(this,a))&&a.execute();};function $n(a,b){return (b=ao(b))?a.a[b]||null:null}function ao(a){return (a="undefined"===typeof a?1E12:a)?a.toString():null}
function Zn(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=kc(a);var c=this;this.i=function(){c.execute();};this.h?this.execute():nd(this.f,"click",this.i);}Zn.prototype.getResponse=function(){bo(this);return this.b};
Zn.prototype.execute=function(){bo(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Me();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b);}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c();}catch(d){}a.h&&a.execute();},6E4);},500));};Zn.prototype.delete=function(){bo(this);this.g=!0;clearTimeout(this.a);this.a=null;xd(this.f,"click",this.i);};function bo(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");}function co(){}M(co,"FACTOR_ID","phone");function eo(){}eo.prototype.g=function(){Yn||(Yn=new Xn);return E(Yn)};eo.prototype.c=function(){};var fo=null;function go(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString();}var ho=new qb(rb,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),io=new Ze(3E4,6E4);
go.prototype.g=function(a){var b=this;return new D(function(c,d){var e=setTimeout(function(){d(new t("network-request-failed"));},io.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha);}else clearTimeout(e),d(new t("internal-error"));delete l[b.a];};var f=zb(ho,{onload:b.a,hl:a||""});E(Bi(f)).o(function(){clearTimeout(e);d(new t("internal-error","Unable to load external reCAPTCHA dependencies!"));});}else clearTimeout(e),
c(l.grecaptcha);})};go.prototype.c=function(){this.b--;};var jo=null;function ko(a,b,c,d,e,f,g){M(this,"type","recaptcha");this.c=this.f=null;this.D=!1;this.v=b;this.g=null;g?(fo||(fo=new eo),g=fo):(jo||(jo=new go),g=jo);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[lo])throw new t("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[mo];if(!l.document)throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!kc(b)||!this.i&&kc(b).hasChildNodes())throw new t("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new Ii(a,f||null,e||null);this.u=d||function(){return null};var h=this;this.l=[];var m=this.a[no];this.a[no]=function(v){oo(h,v);if("function"===typeof m)m(v);else if("string"===typeof m){var B=L(m,l);"function"===typeof B&&B(v);}};var p=this.a[po];this.a[po]=function(){oo(h,null);if("function"===typeof p)p();else if("string"===typeof p){var v=
L(p,l);"function"===typeof v&&v();}};}var no="callback",po="expired-callback",lo="sitekey",mo="size";function oo(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b);}catch(d){}}function qo(a,b){Xa(a.l,function(c){return c==b});}function ro(a,b){a.h.push(b);b.oa(function(){Wa(a.h,b);});return b}k=ko.prototype;
k.Ia=function(){var a=this;return this.f?this.f:this.f=ro(this,E().then(function(){if(Se()&&!Je())return Ee();throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.u())}).then(function(b){a.g=b;return O(a.s,Jj,{})}).then(function(b){a.a[lo]=b.recaptchaSiteKey;}).o(function(b){a.f=null;throw b;}))};
k.render=function(){so(this);var a=this;return ro(this,this.Ia().then(function(){if(null===a.c){var b=a.v;if(!a.i){var c=kc(b);b=nc("DIV");c.appendChild(b);}a.c=a.g.render(b,a.a);}return a.c}))};k.verify=function(){so(this);var a=this;return ro(this,this.render().then(function(b){return new D(function(c){var d=a.g.getResponse(b);if(d)c(d);else {var e=function(f){f&&(qo(a,e),c(f));};a.l.push(e);a.i&&a.g.execute(a.c);}})}))};k.reset=function(){so(this);null!==this.c&&this.g.reset(this.c);};
function so(a){if(a.D)throw new t("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){so(this);this.D=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=kc(this.v);for(var b;b=a.firstChild;)a.removeChild(b);}};
function to(a,b,c){var d=!1;try{this.b=c||firebase$1.app();}catch(g){throw new t("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new t("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Ga();}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting;}catch(g){}f=firebase$1.SDK_VERSION?Oe(firebase$1.SDK_VERSION,f):null;ko.call(this,c,a,b,function(){try{var g=e.b.auth().la();}catch(h){g=
null;}return g},f,Ca(Da),d);}r(to,ko);function uo(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else {if(f)throw new t("internal-error","Argument validator encountered a required argument after an optional argument.");e++;}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else {for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=vo.length)throw new t("internal-error",
"Argument validator received an unsupported number of arguments.");c=vo[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null;}}if(d)throw new t("argument-error",a+" failed: "+d);}var vo="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return {name:a||"",K:"a valid string",optional:!!b,M:function(c){return "string"===typeof c}}}
function wo(a,b){return {name:a||"",K:"a boolean",optional:!!b,M:function(c){return "boolean"===typeof c}}}function W(a,b){return {name:a||"",K:"a valid object",optional:!!b,M:n}}function xo(a,b){return {name:a||"",K:"a function",optional:!!b,M:function(c){return "function"===typeof c}}}function yo(a,b){return {name:a||"",K:"null",optional:!!b,M:function(c){return null===c}}}function zo(){return {name:"",K:"an HTML element",optional:!1,M:function(a){return !!(a&&a instanceof Element)}}}
function Ao(){return {name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return !!(a&&a instanceof En)}}}function Bo(){return {name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return !!(a&&a instanceof firebase$1.app.App)}}}function Co(a){return {name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return !1;var c=!a||b.providerId===a;return !(!b.ka||!c)}}}
function Do(){return {name:"multiFactorAssertion",K:"a valid multiFactorAssertion",optional:!1,M:function(a){return a?!!a.sb:!1}}}function Eo(){return {name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return !!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Fo(a,b){return n(a)&&"string"===typeof a.type&&a.type===b&&"function"===typeof a.Ha}function Go(a){return n(a)&&"string"===typeof a.uid}
function Ho(){return {name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return !(!a||"string"!==typeof a.type||"function"!==typeof a.verify)}}}function X(a,b,c,d){return {name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(e){return a.M(e)||b.M(e)}}}function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Io(d,a[c],b[c].j);}}function Jo(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ua(function(e){return this[e]},c),set:ua(function(e,f,g,h){uo(e,[g],[h],!0);this[f]=h;},d,c,b[c].kb),enumerable:!0});}}function Z(a,b,c,d){a[b]=Io(b,c,d);}
function Io(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);uo(e,c,g);return b.apply(this,g)}if(!c)return b;var e=Ko(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Ko(a){a=a.split(".");return a[a.length-1]}Y(En.prototype,{jb:{name:"applyActionCode",j:[V("code")]},Ra:{name:"checkActionCode",j:[V("code")]},nb:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},hc:{name:"fetchSignInMethodsForEmail",j:[V("email")]},qa:{name:"getRedirectResult",j:[]},Bc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},Hc:{name:"onAuthStateChanged",j:[X(W(),xo(),"nextOrObserver"),xo("opt_error",!0),xo("opt_completed",!0)]},Ic:{name:"onIdTokenChanged",
j:[X(W(),xo(),"nextOrObserver"),xo("opt_error",!0),xo("opt_completed",!0)]},vb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),yo(null,!0),"opt_actionCodeSettings",!0)]},wb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},xb:{name:"setPersistence",j:[V("persistence")]},Sc:{name:"signInAndRetrieveDataWithCredential",j:[Co()]},zb:{name:"signInAnonymously",j:[]},$a:{name:"signInWithCredential",j:[Co()]},Tc:{name:"signInWithCustomToken",j:[V("token")]},
Uc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Vc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Wc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),Ho()]},Xc:{name:"signInWithPopup",j:[Eo()]},Yc:{name:"signInWithRedirect",j:[Eo()]},dd:{name:"updateCurrentUser",j:[X(function(a){return {name:"user",K:"an instance of Firebase User",optional:!!a,M:function(b){return !!(b&&b instanceof Im)}}}(),yo(),"user")]},Ab:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,
!0)]},fd:{name:"useDeviceLanguage",j:[]},gd:{name:"useEmulator",j:[V("url"),W("options",!0)]},jd:{name:"verifyPasswordResetCode",j:[V("code")]}});Jo(En.prototype,{lc:{name:"languageCode",kb:X(V(),yo(),"languageCode")},ti:{name:"tenantId",kb:X(V(),yo(),"tenantId")}});En.Persistence=Rk;En.Persistence.LOCAL="local";En.Persistence.SESSION="session";En.Persistence.NONE="none";
Y(Im.prototype,{"delete":{name:"delete",j:[]},oc:{name:"getIdTokenResult",j:[wo("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[wo("opt_forceRefresh",!0)]},Cc:{name:"linkAndRetrieveDataWithCredential",j:[Co()]},qb:{name:"linkWithCredential",j:[Co()]},Dc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Ho()]},Ec:{name:"linkWithPopup",j:[Eo()]},Fc:{name:"linkWithRedirect",j:[Eo()]},Lc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Co()]},tb:{name:"reauthenticateWithCredential",j:[Co()]},Mc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Ho()]},Nc:{name:"reauthenticateWithPopup",j:[Eo()]},Oc:{name:"reauthenticateWithRedirect",j:[Eo()]},reload:{name:"reload",j:[]},ub:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),yo(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},cd:{name:"unlink",j:[V("provider")]},Bb:{name:"updateEmail",j:[V("email")]},Cb:{name:"updatePassword",j:[V("password")]},ed:{name:"updatePhoneNumber",j:[Co("phone")]},Db:{name:"updateProfile",j:[W("profile")]},
Eb:{name:"verifyBeforeUpdateEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),yo(null,!0),"opt_actionCodeSettings",!0)]}});Y(Xn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(Wn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(D.prototype,{oa:{name:"finally"},o:{name:"catch"},then:{name:"then"}});
Jo(em.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",kb:wo("appVerificationDisabledForTesting")}});Y(fm.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(Bg,"fromJSON",function(a){a="string"===typeof a?JSON.parse(a):a;for(var b,c=[Mg,dh,kh,Jg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Zg,"credential",function(a,b){return new Yg(a,b)},[V("email"),V("password")]);Y(Yg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
Y(Qg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Qg,"credential",Rg,[X(V(),W(),"token")]);Z(Zg,"credentialWithLink",eh,[V("email"),V("emailLink")]);Y(Sg.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sg,"credential",Tg,[X(V(),W(),"token")]);Y(Ug.prototype,{Ca:{name:"addScope",j:[V("scope")]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});
Z(Ug,"credential",Vg,[X(V(),X(W(),yo()),"idToken"),X(V(),yo(),"accessToken",!0)]);Y(Wg.prototype,{Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Wg,"credential",Xg,[X(V(),W(),"token"),V("secret",!0)]);Y(Pg.prototype,{Ca:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),yo()),"optionsOrIdToken"),X(V(),yo(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(Kg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});
Y(Eg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Z(lh,"credential",ph,[V("verificationId"),V("verificationCode")]);
Y(lh.prototype,{fb:{name:"verifyPhoneNumber",j:[X(V(),function(a,b){return {name:a||"phoneInfoOptions",K:"valid phone info options",optional:!!b,M:function(c){return c?c.session&&c.phoneNumber?Fo(c.session,zg)&&"string"===typeof c.phoneNumber:c.session&&c.multiFactorHint?Fo(c.session,Ag)&&Go(c.multiFactorHint):c.session&&c.multiFactorUid?Fo(c.session,Ag)&&"string"===typeof c.multiFactorUid:c.phoneNumber?"string"===typeof c.phoneNumber:!1:!1}}}(),"phoneInfoOptions"),Ho()]}});
Y(gh.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(t.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(yh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(xh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(lm.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(im.prototype,{Rc:{name:"resolveSignIn",j:[Do()]}});
Y(tm.prototype,{Rb:{name:"getSession",j:[]},fc:{name:"enroll",j:[Do(),V("displayName",!0)]},bd:{name:"unenroll",j:[X({name:"multiFactorInfo",K:"a valid multiFactorInfo",optional:!1,M:Go},V(),"multiFactorInfoIdentifier")]}});Y(to.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(Jf,"parseLink",Rf,[V("link")]);Z(co,"assertion",function(a){return new rm(a)},[Co("phone")]);
(function(){if("undefined"!==typeof firebase$1&&firebase$1.INTERNAL&&firebase$1.INTERNAL.registerComponent){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Af,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:Cf,VERIFY_AND_CHANGE_EMAIL:Bf,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:En,AuthCredential:Bg,Error:t};Z(a,"EmailAuthProvider",Zg,[]);Z(a,"FacebookAuthProvider",Qg,[]);Z(a,"GithubAuthProvider",Sg,[]);Z(a,"GoogleAuthProvider",Ug,[]);Z(a,"TwitterAuthProvider",Wg,[]);
Z(a,"OAuthProvider",Pg,[V("providerId")]);Z(a,"SAMLAuthProvider",Og,[V("providerId")]);Z(a,"PhoneAuthProvider",lh,[Ao()]);Z(a,"RecaptchaVerifier",to,[X(V(),zo(),"recaptchaContainer"),W("recaptchaParameters",!0),Bo()]);Z(a,"ActionCodeURL",Jf,[]);Z(a,"PhoneMultiFactorGenerator",co,[]);firebase$1.INTERNAL.registerComponent({name:"auth",instanceFactory:function(b){b=b.getProvider("app").getImmediate();return new En(b)},multipleInstances:!1,serviceProps:a,instantiationMode:"LAZY",type:"PUBLIC"});firebase$1.INTERNAL.registerComponent({name:"auth-internal",
instanceFactory:function(b){b=b.getProvider("auth").getImmediate();return {getUid:q(b.getUid,b),getToken:q(b.nc,b),addAuthTokenListener:q(b.cc,b),removeAuthTokenListener:q(b.Pc,b)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"});firebase$1.registerVersion("@firebase/auth","0.16.3");firebase$1.INTERNAL.extendNamespace({User:Im});}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

/* src/routes/staff/index.svelte generated by Svelte v3.31.2 */

const Staff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let loaded = false;
	let user;
	let stats;
	let groups;

	const loadInfo = async () => {
		try {
			let token = await user.getIdToken();

			let result = await fetch(`${config.scheme}://${config.api}/api/v1/staff/stats`, {
				method: "GET",
				headers: { authorization: token }
			});

			let json = await result.json();
			if (json.error) return error = json.error;
			stats = json.result.stats;
			groups = json.result.groups;
			loaded = true;
			renderGraph();
		} catch(error) {
			error = "Failed to load stats! Make sure you have an internet connection and try again!";
		}
	};

	const renderGraph = () => {
		let ctx = document.getElementById("salesChart");

		let config = {
			type: "bar",
			data: {
				labels: Object.keys(stats.saleHistory),
				datasets: [
					{
						label: "Robux sales",
						backgroundColor: "#30b7ff",
						borderColor: "#5ec2f7",
						data: [1223, 2311, 233, 554, 904, 1300, 1900],
						fill: false
					}
				]
			},
			options: {
				title: { display: true, text: "Stats" },
				tooltips: { mode: "index", intersect: false },
				hover: { mode: "nearest", intersect: true },
				scales: {
					xAxes: [
						{
							display: true,
							scaleLabel: { display: true, labelString: "Date" }
						}
					],
					yAxes: [
						{
							display: true,
							scaleLabel: { display: true, labelString: "Robux" }
						}
					]
				}
			}
		};

		let chart = new Chart__default['default'](ctx, config);
	};

	onMount(() => {
		firebase$1.auth().onAuthStateChanged(async u => {
			if (u) {
				user = u;
				let tokenData = await u.getIdTokenResult();
				user.permissions = tokenData.permissions;
				loadInfo();
			} else {
				await goto("/staff/login");
			}
		});
	});

	return `${!loaded
	? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`
	: `<div class="${"min-h-screen bg-gray-100"}"><header class="${"pb-24 bg-blue-500"}"><div class="${"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"}"><div class="${"relative flex flex-wrap items-center justify-center\r\n          lg:justify-between"}"><div class="${"w-full py-5 lg:border-t lg:border-white lg:border-opacity-20"}"><div class="${"lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"}">
              <div class="${"hidden lg:block lg:col-span-2"}"><nav class="${"flex space-x-4"}"><a href="${"/"}" class="${"text-white text-sm font-medium rounded-md bg-white\r\n                    bg-opacity-0 px-3 py-2 hover:bg-opacity-10"}" aria-current="${"page"}">Back to main site
                  </a></nav></div></div></div></div></div></header>
    <main class="${"-mt-24 pb-8"}"><div class="${"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"}"><h1 class="${"sr-only"}">Profile</h1>
        
        <div class="${"grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8"}">
          <div class="${"grid grid-cols-1 gap-4 lg:col-span-2"}">
            <section aria-labelledby="${"profile-overview-title"}"><div class="${"rounded-lg bg-white overflow-hidden shadow"}"><h2 class="${"sr-only"}" id="${"profile-overview-title"}">Profile Overview
                </h2>
                <div class="${"bg-white p-6"}"><div class="${"sm:flex sm:items-center sm:justify-between"}"><div class="${"sm:flex sm:space-x-5"}"><div class="${"flex-shrink-0"}"><img class="${"mx-auto h-20 w-20 rounded-full"}" src="${"https://tr.rbxcdn.com/c3ee609e91804ee2f15c6375355a381a/150/150/AvatarHeadshot/Png"}" alt="${""}"></div>
                      <div class="${"mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left"}"><p class="${"text-sm font-medium text-gray-600"}">Welcome back,
                        </p>
                        <p class="${"text-xl font-bold text-gray-900 sm:text-2xl"}">Grangus
                          </p>
                        <p class="${"text-sm font-medium text-gray-600"}">Administrator, Reseller
                          </p></div></div>
                    <div class="${"mt-5 flex justify-center sm:mt-0"}"><a href="${"/staff/logout"}" class="${"flex justify-center items-center px-4 py-2 border\r\n                        border-gray-300 shadow-sm text-sm font-medium rounded-md\r\n                        text-gray-700 bg-white hover:bg-gray-50 w-full sm:w-auto"}">Logout
                      </a></div></div></div>
                <div class="${"border-t border-gray-200 bg-gray-50 grid grid-cols-1\r\n                  divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0\r\n                  sm:divide-x"}"><div class="${"px-6 py-5 text-sm font-medium text-center"}"><span class="${"text-gray-900"}">129,643
                      </span>
                    <span class="${"text-gray-600"}">Robux paid out</span></div>

                  <div class="${"px-6 py-5 text-sm font-medium text-center"}"><span class="${"text-gray-900"}">1,291,281
                      </span>
                    <span class="${"text-gray-600"}">Users registered</span></div>

                  <div class="${"px-6 py-5 text-sm font-medium text-center"}"><span class="${"text-gray-900"}">4
                      </span>
                    <span class="${"text-gray-600"}">Groups on site</span></div></div></div></section>

            
            <section><div class="${"rounded-lg bg-white overflow-hidden shadow divide-y\r\n                divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px"}"><canvas id="${"salesChart"}" class="${"w-full sm:h-auto px-2 py-2"}"></canvas></div></section>

            
            <section><div class="${"rounded-lg bg-white overflow-hidden shadow divide-y\r\n                divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px"}">
                <div class="${"m-4"}"><h2 class="${"text-gray-500 text-xs font-medium uppercase\r\n                    tracking-wide"}">Groups stocked
                  </h2>
                  <ul class="${"mt-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2"}">${each(groups, group => `<li class="${"col-span-1 flex shadow-sm rounded-md"}"><div class="${"flex-shrink-0 flex items-center justify-center\r\n                          bg-white text-white text-sm font-medium rounded-l-md\r\n                          border"}"><img${add_attribute("src", group.image, 0)} alt="${""}" class="${"h-32 w-32"}"></div>
                        <div class="${"flex-1 flex items-center justify-between\r\n                          border-t border-r border-b border-gray-200 bg-white\r\n                          rounded-r-md truncate"}"><div class="${"flex-1 px-4 py-2 text-sm truncate"}"><a href="${"https://roblox.com/groups/" + escape(group.gid)}" class="${"text-gray-900 font-medium\r\n                              hover:text-gray-600"}">${escape(group.name)}</a>
                            <p class="${"text-gray-500"}">${escape(group.balance.toLocaleString())} Robux
                            </p>
                            <p class="${"text-gray-700"}">Stocker: ${escape(group.sid == user.uid ? "You" : group.stockerName)}
                            </p></div>
                          <div class="${"flex-shrink-0 pr-2"}"><button class="${"w-8 h-8 bg-white inline-flex items-center\r\n                              justify-center text-gray-400 rounded-full\r\n                              bg-transparent hover:text-gray-500\r\n                              focus:outline-none focus:ring-2\r\n                              focus:ring-offset-2 focus:ring-blue-500"}"><svg class="${"h-8 h-8 hover:text-red-500"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button>
                          </div></div>
                      </li>`)}</ul></div></div></section>

            
            <section><div class="${"rounded-lg bg-white overflow-hidden shadow divide-y\r\n                divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px"}"><h2 class="${"text-gray-500 text-xs font-medium uppercase\r\n                  tracking-wide m-4"}">Admin actions
                </h2>
                <div class="${"grid grid-cols-1 gap-4 sm:grid-cols-2 mx-4 mb-4"}"><div class="${"relative rounded-lg border border-gray-300 bg-white\r\n                    px-6 py-5 shadow-sm flex items-center space-x-3"}"><div class="${"flex-1 min-w-0"}"><h1 class="${"font-medium text-md"}">Blacklist user</h1>
                      <div class="${"mt-3"}"><label for="${"blacklist_user"}" class="${"block text-sm font-medium text-gray-700"}">Username
                        </label>
                        <div class="${"mt-1"}"><input type="${"text"}" name="${"blacklist_user"}" id="${"blacklist_user"}" class="${"shadow-sm focus:ring-blue-500\r\n                            focus:border-blue-500 block w-full sm:text-sm\r\n                            border-gray-300 rounded-md"}" placeholder="${"Builderman"}"></div></div>

                      <div class="${"mt-3"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4\r\n                          py-2 border border-gray-300 shadow-sm text-sm\r\n                          font-medium rounded-md text-gray-700 bg-white\r\n                          hover:bg-gray-50"}">Blacklist user
                        </a></div></div></div>

                  <div class="${"relative rounded-lg border border-gray-300 bg-white\r\n                    px-6 py-5 shadow-sm flex items-center space-x-3"}"><div class="${"flex-1 min-w-0"}"><h1 class="${"font-medium text-md"}">Update user balance</h1>
                      <div class="${"mt-3"}"><label for="${"balance_update_user"}" class="${"block text-sm font-medium text-gray-700"}">Username
                        </label>
                        <div class="${"mt-1"}"><input type="${"text"}" name="${"balance_update_user"}" id="${"balance_update_user"}" class="${"shadow-sm focus:ring-blue-500\r\n                            focus:border-blue-500 block w-full sm:text-sm\r\n                            border-gray-300 rounded-md"}" placeholder="${"Builderman"}"></div></div>

                      <div class="${"mt-3"}"><label for="${"balance_update_new"}" class="${"block text-sm font-medium text-gray-700"}">Balance
                        </label>
                        <div class="${"mt-1"}"><input type="${"number"}" name="${"balance_update_new"}" id="${"balance_update_new"}" class="${"shadow-sm focus:ring-blue-500\r\n                            focus:border-blue-500 block w-full sm:text-sm\r\n                            border-gray-300 rounded-md"}" placeholder="${"100"}"></div></div>

                      <div class="${"mt-3"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4\r\n                          py-2 border border-gray-300 shadow-sm text-sm\r\n                          font-medium rounded-md text-gray-700 bg-white\r\n                          hover:bg-gray-50"}">Update user
                        </a></div></div></div>

                  <div class="${"relative rounded-lg border border-gray-300 bg-white\r\n                    px-6 py-5 shadow-sm flex items-center space-x-3"}"><div class="${"flex-1 min-w-0"}"><h1 class="${"font-medium text-md"}">Generate registration token
                      </h1>

                      <div class="${"mt-3"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4\r\n                          py-2 border border-gray-300 shadow-sm text-sm\r\n                          font-medium rounded-md text-gray-700 bg-white\r\n                          hover:bg-gray-50"}">Generate
                        </a></div></div></div>

                  <div class="${"relative rounded-lg border border-gray-300 bg-white\r\n                    px-6 py-5 shadow-sm flex items-center space-x-3"}"><div class="${"flex-1 min-w-0"}"><h1 class="${"font-medium text-md"}">Retrieve staff info</h1>
                      <div class="${"mt-3"}"><label for="${"staff_username"}" class="${"block text-sm font-medium text-gray-700"}">Username
                        </label>
                        <div class="${"mt-1"}"><input type="${"text"}" name="${"staff_username"}" id="${"staff_username"}" class="${"shadow-sm focus:ring-blue-500\r\n                            focus:border-blue-500 block w-full sm:text-sm\r\n                            border-gray-300 rounded-md"}" placeholder="${"grangus"}"></div></div>

                      <div class="${"mt-3"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4\r\n                          py-2 border border-gray-300 shadow-sm text-sm\r\n                          font-medium rounded-md text-gray-700 bg-white\r\n                          hover:bg-gray-50"}">Retrieve info
                        </a></div></div></div></div></div></section></div>

          
          <div class="${"grid grid-cols-1 gap-4"}">
            <section aria-labelledby="${"announcements-title"}"><div class="${"rounded-lg bg-white overflow-hidden shadow"}"><div class="${"p-6"}"><h2 class="${"text-base font-medium text-gray-900"}" id="${"announcements-title"}">Manage groups
                  </h2>
                  <div class="${"flow-root mt-6"}"><div class="${"pb-6 border-b"}"><h1 class="${"font-medium text-gray-800 pb-4"}">Add group</h1>
                      <div><label for="${"cookie"}" class="${"block text-sm font-medium text-gray-700"}">Cookie
                        </label>
                        <div class="${"mt-1"}"><input type="${"text"}" name="${"cookie"}" id="${"cookie"}" class="${"shadow-sm focus:ring-blue-500\r\n                            focus:border-blue-500 block w-full sm:text-sm\r\n                            border-gray-300 rounded-md"}" placeholder="${".ROBLOSECURITY"}"></div></div>

                      <div class="${"mt-3"}"><label for="${"group_id"}" class="${"block text-sm font-medium text-gray-700"}">Group ID
                        </label>
                        <div class="${"mt-1"}"><input type="${"text"}" name="${"group_id"}" id="${"group_id"}" class="${"shadow-sm focus:ring-blue-500\r\n                            focus:border-blue-500 block w-full sm:text-sm\r\n                            border-gray-300 rounded-md"}" placeholder="${"3634363"}"></div></div>

                      <div class="${"mt-3"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4\r\n                          py-2 border border-gray-300 shadow-sm text-sm\r\n                          font-medium rounded-md text-gray-700 bg-white\r\n                          hover:bg-gray-50"}">Add group
                        </a></div></div>

                    <h1 class="${"font-medium text-gray-800 mt-6"}">Remove group</h1>
                    <div class="${"mt-3"}"><label for="${"group_id"}" class="${"block text-sm font-medium text-gray-700"}">Group ID
                      </label>
                      <div class="${"mt-1"}"><input type="${"text"}" name="${"group_id"}" id="${"group_id"}" class="${"shadow-sm focus:ring-blue-500\r\n                          focus:border-blue-500 block w-full sm:text-sm\r\n                          border-gray-300 rounded-md"}" placeholder="${"3634363"}"></div></div>

                    <div class="${"mt-3"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4 py-2\r\n                        border border-gray-300 shadow-sm text-sm font-medium\r\n                        rounded-md text-gray-700 bg-white hover:bg-gray-50"}">Add group
                      </a></div></div></div></div></section>

            <section aria-labelledby="${"recent-hires-title"}"><div class="${"rounded-lg bg-white overflow-hidden shadow"}"><div class="${"p-6"}"><h2 class="${"text-base font-medium text-gray-900"}" id="${"recent-hires-title"}">Request payout
                  </h2>
                  <div class="${"flow-root mt-4"}"><div class="${"mb-4"}"><label for="${"method"}" class="${"block text-sm font-medium text-gray-700"}">Payout method
                      </label>
                      <select id="${"method"}" name="${"method"}" class="${"mt-1 block w-full pl-3 pr-10 py-2 text-base\r\n                        border-gray-300 focus:outline-none focus:ring-blue-500\r\n                        focus:border-blue-500 sm:text-sm rounded-md"}"><option selected value="${"Bitcoin"}">Bitcoin</option><option value="${"PayPal"}">PayPal</option></select></div>

                    <label for="${"address"}" class="${"block text-sm font-medium text-gray-700"}">BTC Address/PayPal Email
                    </label>
                    <div class="${"mt-1"}"><input type="${"text"}" name="${"address"}" id="${"address"}" class="${"shadow-sm focus:ring-blue-500\r\n                        focus:border-blue-500 block w-full sm:text-sm\r\n                        border-gray-300 rounded-md"}" placeholder="${"BTC Address/PayPal Email"}"></div></div>
                  <div class="${"mt-6"}"><a href="${"#"}" class="${"w-full flex justify-center items-center px-4 py-2\r\n                      border border-gray-300 shadow-sm text-sm font-medium\r\n                      rounded-md text-gray-700 bg-white hover:bg-gray-50"}">Submit request
                    </a></div></div></div></section></div></div></div></main></div>`}`;
});

var component_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Staff
});

/* src/routes/staff/register.svelte generated by Svelte v3.31.2 */

const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let username;
	let email;
	let token;
	let password;

	onMount(() => {
		firebase$1.auth().onAuthStateChanged(async user => {
			if (user) {
				await goto("/staff");
			}
		});
	});

	return `<div class="${"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\r\n  sm:px-6 lg:px-8"}"><div class="${"max-w-md w-full space-y-8"}"><div><h2 class="${"mt-6 text-center text-3xl font-extrabold text-gray-900"}">Staff Registration
      </h2></div>
    <form class="${"mt-8 space-y-6"}"><input type="${"hidden"}" name="${"remember"}" value="${"true"}">
      <div class="${"rounded-md shadow-sm -space-y-px"}"><div><label for="${"username"}" class="${"sr-only"}">Username</label>
          <input id="${"username"}" name="${"username"}" type="${"text"}" required class="${"appearance-none rounded-none relative block w-full px-3 py-2\r\n            border border-gray-300 placeholder-gray-500 text-gray-900\r\n            rounded-t-md focus:outline-none focus:ring-blue-500\r\n            focus:border-blue-500 focus:z-10 sm:text-sm"}" placeholder="${"Username"}"${add_attribute("value", username, 1)}></div>

        <div><label for="${"email-address"}" class="${"sr-only"}">Email address</label>
          <input id="${"email-address"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" required class="${"appearance-none rounded-none relative block w-full px-3 py-2\r\n            border border-gray-300 placeholder-gray-500 text-gray-900\r\n            rounded-t-md focus:outline-none focus:ring-blue-500\r\n            focus:border-blue-500 focus:z-10 sm:text-sm"}" placeholder="${"Email address"}"${add_attribute("value", email, 1)}></div>

        <div><label for="${"token"}" class="${"sr-only"}">Registration token</label>
          <input id="${"token"}" name="${"token"}" type="${"text"}" required class="${"appearance-none rounded-none relative block w-full px-3 py-2\r\n            border border-gray-300 placeholder-gray-500 text-gray-900\r\n            focus:outline-none focus:ring-blue-500 focus:border-blue-500\r\n            focus:z-10 sm:text-sm"}" placeholder="${"Registration token"}"${add_attribute("value", token, 1)}></div>
        <div><label for="${"password"}" class="${"sr-only"}">Password</label>
          <input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required class="${"appearance-none rounded-none relative block w-full px-3 py-2\r\n            border border-gray-300 placeholder-gray-500 text-gray-900\r\n            rounded-b-md focus:outline-none focus:ring-blue-500\r\n            focus:border-blue-500 focus:z-10 sm:text-sm"}" placeholder="${"Password"}"${add_attribute("value", password, 1)}></div></div>

      <div><button type="${"submit"}" class="${"group relative w-full flex justify-center py-2 px-4 border\r\n          border-transparent text-sm font-medium rounded-md text-white\r\n          bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2\r\n          focus:ring-offset-2 focus:ring-blue-500"}">Register
        </button></div></form></div></div>

${ ``}`;
});

var component_4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Register
});

/* src/routes/staff/logout.svelte generated by Svelte v3.31.2 */

const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return ``;
});

var component_5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Logout
});

/* src/routes/staff/login.svelte generated by Svelte v3.31.2 */

const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let loaded = false;
	let email;
	let password;

	onMount(() => {
		firebase$1.auth().onAuthStateChanged(async user => {
			if (user) {
				await goto("/staff");
			} else {
				loaded = true;
			}
		});
	});

	return `${!loaded
	? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`
	: `<div class="${"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\r\n    sm:px-6 lg:px-8"}"><div class="${"max-w-md w-full space-y-8"}"><div><h2 class="${"mt-6 text-center text-3xl font-extrabold text-gray-900"}">Staff Login
        </h2></div>
      <form class="${"mt-8 space-y-6"}"><input type="${"hidden"}" name="${"remember"}" value="${"true"}">
        <div class="${"rounded-md shadow-sm -space-y-px"}"><div><label for="${"email-address"}" class="${"sr-only"}">Email address</label>
            <input id="${"email-address"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" required class="${"appearance-none rounded-none relative block w-full px-3\r\n              py-2 border border-gray-300 placeholder-gray-500 text-gray-900\r\n              rounded-t-md focus:outline-none focus:ring-blue-500\r\n              focus:border-blue-500 focus:z-10 sm:text-sm"}" placeholder="${"Email address"}"${add_attribute("value", email, 1)}></div>
          <div><label for="${"password"}" class="${"sr-only"}">Password</label>
            <input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required class="${"appearance-none rounded-none relative block w-full px-3\r\n              py-2 border border-gray-300 placeholder-gray-500 text-gray-900\r\n              rounded-b-md focus:outline-none focus:ring-blue-500\r\n              focus:border-blue-500 focus:z-10 sm:text-sm"}" placeholder="${"Password"}"${add_attribute("value", password, 1)}></div></div>

        <div><button type="${"submit"}" class="${"group relative w-full flex justify-center py-2 px-4 border\r\n            border-transparent text-sm font-medium rounded-md text-white\r\n            bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2\r\n            focus:ring-offset-2 focus:ring-blue-500"}">Sign in
          </button></div></form></div></div>`}

${ ``}`;
});

var component_6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Login
});

/* src/routes/earn/index.svelte generated by Svelte v3.31.2 */

const Earn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let username;

	onMount(() => {
		username = localStorage.getItem("roblox-user");
	});

	return `<div class="${"bg-white"}"><div class="${"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"}"><div class="${"space-y-8"}"><div class="${"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"}"><h2 class="${"text-3xl font-extrabold tracking-tight sm:text-4xl"}">Hello, ${escape(username)}</h2>
        <p class="${"text-xl text-gray-500"}">Do some slave work so you can start earning Bobux!
        </p></div>
      <div><h1 class="${"text-3xl font-medium"}">Offerwalls</h1>
        <h1 class="${"text-xl text-gray-700"}">Complete offers for bobux!</h1></div>
      <ul class="${"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12\r\n        sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"}"><li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x600"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">AdGate Media</h3>
                <p class="${"text-blue-500 text-md"}">Top Earning Offerwall</p></div>

              <a href="${"/earn/offerwalls"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Start earning
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x600"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Offertoro</h3>
                <p class="${"text-blue-500 text-md"}">Easy offers</p></div>
              <a href="${"/earn/offerwalls"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Start earning
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x600"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">AyeTStudios</h3>
                <p class="${"text-blue-500 text-md"}">Big bobux</p></div>
              <a href="${"/earn/offerwalls"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Start earning
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li></ul>

      <div><h1 class="${"text-3xl font-medium"}">Social</h1>
        <h1 class="${"text-xl text-gray-700"}">Join our chats or follow our social medias to get paid!
        </h1></div>
      <ul class="${"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12\r\n        sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"}"><li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x600"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">YouTube</h3>
                <p class="${"text-blue-500 text-md"}">Subscribe to our channel for 1R$
                </p></div>
              <a href="${"YOUTUBE_URL_HERE"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Subscribe
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x600"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Twitter</h3>
                <p class="${"text-blue-500 text-md"}">Share us on Twitter</p></div>
              <a href="${"TWITTER_URL_HERE"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Follow
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x600"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Discord</h3>
                <p class="${"text-blue-500 text-md"}">Join our Discord server</p></div>
              <a href="${"DISCORD_URL_HERE"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Join
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li></ul>

      <div><h1 class="${"text-3xl font-medium"}">Freebies</h1>
        <h1 class="${"text-xl text-gray-700"}">Easiest ways to get free bobux!</h1></div>
      <ul class="${"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12\r\n        sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"}"><li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/806456257182695424/unknown.png"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Quests</h3>
                <p class="${"text-blue-500 text-md"}">Complete daily quests</p></div>
              <a href="${"/earn/quests"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">View quests
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805707404750487574/unknown.png"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Invite friends</h3>
                <p class="${"text-blue-500 text-md"}">Invite your friends to earn bobux
                </p></div>
              <a href="${"/earn/invite"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Start inviting
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805549033614999562/unknown.png"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Promocodes</h3>
                <p class="${"text-blue-500 text-md"}">Redeem a promocode</p></div>
              <a href="${"/earn/promocodes"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Redeem
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805189392841965638/unknown.png"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Giveaway</h3>
                <p class="${"text-blue-500 text-md"}">Enter our giveaways</p></div>
              <a href="${"/earn/giveaway"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Enter
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li>

        <li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805192282323812412/unknown.png"}" alt="${""}"></div>

            <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">YouTube competition
                </h3>
                <p class="${"text-blue-500 text-md"}">Create a YouTube video for a chance to win bobux
                </p></div>
              <a href="${"/earn/competition"}" class="${"inline-flex items-center px-3 py-2 border\r\n                border-transparent shadow-sm text-sm leading-4 font-medium\r\n                rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                focus:ring-blue-500"}">Enter
                <svg class="${"ml-2 -mr-0.5 h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M17 8l4 4m0 0l-4 4m4-4H3"}"></path></svg></a></div></div></li></ul></div></div></div>`;
});

var component_7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Earn
});

/* src/routes/earn/offerwalls.svelte generated by Svelte v3.31.2 */

const Offerwalls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let loaded = false;
	let selected = "offertoro";
	let cache = []; //{offerwall: "offertoro", offers: []}
	let loadOffers;

	onMount(() => {
		//have to define it in here so the compiler doesnt throw stupid errors
		loadOffers = async () => {
			let cached = cache.find(c => c.offerwall == selected);
			if (cached) return;

			let result = await fetch(`${config.scheme}://${config.api}/api/v1/offerwall/${selected}`, {
				headers: {
					username: localStorage.getItem("roblox-user")
				}
			});

			let json = await result.json();
			if (json.status == "error") return json.error;
			cache.push({ offerwall: selected, offers: json.result });
			loaded = true;
		};

		loadOffers();
	});

	loadOffers();

	return `${!loaded
	? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`
	: `<div class="${"pt-16 mx-4"}"><div class="${"sm:hidden"}"><label for="${"tabs"}" class="${"sr-only"}">Select an offerwall</label>
      <select id="${"tabs"}" name="${"tabs"}" class="${"block w-full focus:ring-indigo-500 focus:border-indigo-500\r\n        border-gray-300 rounded-md"}"${add_attribute("value", selected, 1)}><option selected value="${"Offertoro"}">Offertoro</option><option value="${"AdGate"}">AdGate</option><option value="${"AyeTStudios"}">AyeTStudios</option><option value="${"KiwiWall"}">KiwiWall</option></select></div>
    <div class="${"hidden sm:block"}"><div class="${"border-b border-gray-200"}"><nav class="${"-mb-px flex"}" aria-label="${"Tabs"}"><div class="${escape(selected.toLowerCase() == "offertoro"
		? "border-indigo-500 text-indigo-600"
		: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300") + "\r\n            cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium\r\n            text-sm"}">Offertoro
          </div>
          <div class="${escape(selected.toLowerCase() == "adgate"
		? "border-indigo-500 text-indigo-600"
		: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300") + "\r\n            cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium\r\n            text-sm"}">AdGate
          </div>
          <div class="${escape(selected.toLowerCase() == "ayetstudios"
		? "border-indigo-500 text-indigo-600"
		: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300") + "\r\n            cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium\r\n            text-sm"}">AyeTStudios
          </div>
          <div class="${escape(selected.toLowerCase() == "kiwiwall"
		? "border-indigo-500 text-indigo-600"
		: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300") + "\r\n            cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium\r\n            text-sm"}">KiwiWall
          </div></nav></div></div>

    <div class="${"rounded-lg bg-gray-200 overflow-hidden shadow divide-y\r\n      divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px mt-8 mb-14"}">
      ${each(cache.find(c => c.offerwall == "selected").offers, offer => `<div class="${"relative group bg-white p-6 focus-within:ring-2\r\n          focus-within:ring-inset focus-within:ring-indigo-500"}"><div><img${add_attribute("src", offer.icon, 0)} alt="${""}"></div>
          <div class="${"mt-8"}"><h3 class="${"text-lg font-medium"}"><a${add_attribute("href", offer.url, 0)} class="${"focus:outline-none"}">
                <span class="${"absolute inset-0"}" aria-hidden="${"true"}"></span>
                ${escape(offer.name)}
              </a></h3>
            <p class="${"mt-2 text-sm text-gray-500"}">${escape(offer.description)}</p>
            <p class="${"mt-2 text-md text-gray-700 font-medium"}">Reward:
              <b class="${"text-green-500"}">R$${escape(offer.reward)}</b>
            </p></div>
          <span class="${"pointer-events-none absolute top-6 right-6 text-gray-300\r\n            group-hover:text-gray-400"}" aria-hidden="${"true"}"><svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" viewBox="${"0 0 24 24"}"><path d="${"M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000\r\n                2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19\r\n                4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414\r\n                16-16-1.414-1.414z"}"></path></svg></span>
        </div>`)}</div></div>`}`;
});

var component_8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Offerwalls
});

/* src/routes/earn/promocodes.svelte generated by Svelte v3.31.2 */

const Promocodes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let code;

	return `${ `<div class="${"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\r\n    sm:px-6 lg:px-8"}"><div class="${"max-w-md w-full space-y-8 pb-4 rounded-md shadow-lg"}"><div><img class="${"mx-auto h-auto w-full rounded-t-lg"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805549033614999562/unknown.png"}" alt="${"Workflow"}">
        <h2 class="${"mt-6 text-center text-3xl font-bold text-gray-900"}">Redeem a promocode
        </h2></div>
      <form class="${"mt-8 mx-4 space-y-6"}"><input type="${"hidden"}" name="${"remember"}" value="${"true"}">
        <div class="${"rounded-md shadow-sm -space-y-px"}"><div><label for="${"promocode"}" class="${"sr-only"}">Code</label>
            <input id="${"promocode"}" name="${"promocode"}" type="${"text"}" required class="${"appearance-none rounded-none relative block w-full px-3\r\n              py-2 border border-gray-300 placeholder-gray-500 text-gray-900\r\n              rounded-md focus:outline-none focus:ring-blue-500\r\n              focus:border-blue-500 focus:z-10 sm:text-sm"}" placeholder="${"Code"}"${add_attribute("value", code, 1)}></div></div>

        <div><button type="${"submit"}" class="${"group relative w-full flex justify-center py-2 px-4 border\r\n            border-transparent text-sm font-medium rounded-md text-white\r\n            bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2\r\n            focus:ring-offset-2 focus:ring-blue-500"}">Redeem
          </button></div></form></div></div>`}

${ ``}`;
});

var component_9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Promocodes
});

/* src/routes/earn/giveaway.svelte generated by Svelte v3.31.2 */

const Giveaway = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let error;
	let meta;

	//TODO: implement captcha here
	onMount(async () => {

		try {
			let result = await fetch(`${config.scheme}://${config.api}/api/v1/giveaway/meta`);
			let json = await result.json();
			if (json.status == "error") return error = json.error;
			meta = json.result;
		} catch(error) {
			error = "Failed to load giveaway info! Make sure you have an internet connection and try again!";
		}
	});

	return `${!meta
	? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`
	: `<div class="${"min-h-screen flex flex-col items-center justify-center bg-gray-50\r\n    py-12 px-4 sm:px-6 lg:px-8"}"><div class="${"max-w-md w-full space-y-8 pb-4 rounded-md shadow-lg"}"><div><img class="${"mx-auto h-auto w-full rounded-t-md"}" src="${"https://cdn.discordapp.com/attachments/804782116126195732/805189392841965638/unknown.png"}" alt="${""}">
        <h2 class="${"mt-6 text-center text-3xl font-bold text-gray-900"}">Enter the giveaway!
        </h2>
        <p class="${"mt-2 text-center text-md text-gray-600"}">Ends in: ${escape(meta.ending)}</p>
        <p class="${"text-center text-md text-gray-600"}">Reward:
          <span class="${"font-bold text-green-500"}">R$${escape(meta.amount)}</span></p></div>
      <div class="${"mx-4"}"><button type="${"submit"}" class="${"group relative w-full flex justify-center py-2 px-4 border\r\n          border-transparent text-md font-medium rounded-md text-white\r\n          bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2\r\n          focus:ring-offset-2 focus:ring-blue-500"}">Enter!
        </button>

        <h2 class="${"mt-2 text-center text-md text-gray-600"}"><b>Note:</b>
          You can enter the giveaway multiple times for a higher chance of
          winning.
        </h2></div></div>

    <div class="${"max-w-md w-full space-y-8 mt-6 rounded-md shadow-lg"}"><h1 class="${"text-center text-2xl font-medium py-6"}">Top Entries</h1>
      <ul class="${"divide-y divide-gray-200"}">${each(meta.top, user => `<li class="${"py-4"}"><div class="${"flex space-x-16"}"><img class="${"h-14 w-14 rounded-full"}"${add_attribute("src", user.image, 0)} alt="${""}">
              <div class="${"flex-1 space-y-1"}"><div class="${"flex items-center justify-between"}"><h3 class="${"text-md font-medium"}">${escape(user.username)}</h3></div>
                <p class="${"text-md text-gray-500"}">Chances of winning the giveaway: ${escape(user.chance)}</p>
              </div></div>
          </li>`)}</ul></div></div>`}

${error
	? `${validate_component(ErrorModal, "ErrorModal").$$render($$result, { error }, {}, {})}`
	: ``}

${ ``}`;
});

var component_10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Giveaway
});

/* src/routes/earn/invite.svelte generated by Svelte v3.31.2 */

const Invite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let error;
	let info;

	onMount(async () => {
		try {
			let result = await fetch(`${config.scheme}://${config.api}/api/v1/user/info`, {
				headers: {
					username: localStorage.getItem("roblox-user")
				}
			});

			let json = await result.json();
			if (json.status == "error") return error = json.error;
			info = json.result;
		} catch(error) {
			console.error(error);
			error = "Failed to load invitation info. Make sure you have an internet connection and try again!";
		}
	});

	return `${!info
	? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`
	: `<div class="${"bg-white"}"><div class="${"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"}"><div class="${"space-y-12"}"><div class="${"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"}"><h2 class="${"text-3xl font-extrabold tracking-tight sm:text-4xl"}">Invite Friends
          </h2>
          <p class="${"text-xl text-gray-500"}">Invite your friends and receive a percentage of their earnings for
            life.
          </p></div>

        <div><h3 class="${"text-2xl leading-6 font-medium text-gray-900"}">Stats</h3>
          <dl class="${"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2"}"><div class="${"bg-white overflow-hidden shadow rounded-lg"}"><div class="${"px-4 py-5 sm:p-6"}"><dt class="${"text-sm font-medium text-gray-500 truncate"}">Referred Users
                </dt>
                <dd class="${"mt-1 text-3xl font-semibold text-gray-900"}">${escape(info.referrals)}</dd></div>
            </div><div class="${"bg-white overflow-hidden shadow rounded-lg"}"><div class="${"px-4 py-5 sm:p-6"}"><dt class="${"text-sm font-medium text-gray-500 truncate"}">Earnings
                </dt>
                <dd class="${"mt-1 text-3xl font-semibold text-gray-900"}">R$${escape(info.referralEarned.toLocaleString())}</dd></div></div></dl></div>

        <div class="${"bg-white shadow sm:rounded-lg flex lg:justify-end space-x-16\r\n          lg:space-x-32"}"><div class="${"px-4 py-5 sm:p-6"}"><h3 class="${"text-lg leading-6 font-medium text-gray-900"}">Get your referral link.
            </h3>
            <div class="${"mt-2 max-w-xl text-sm text-gray-500"}"><p>Make sure your friends sign up using this link.</p></div>
            <form class="${"mt-5 sm:flex sm:items-center"}"><div class="${"max-w-xs w-full"}"><label for="${"link"}" class="${"sr-only"}">Link</label>
                <input value="${escape(config.scheme) + "://" + escape(config.domain) + "/r/" + escape(info.username)}" type="${"text"}" name="${"link"}" id="${"link"}" class="${"shadow-sm focus:ring-blue-500 focus:border-blue-500\r\n                  block w-full sm:text-sm border-gray-300 rounded-md"}" placeholder="${escape(config.scheme) + "://" + escape(config.domain) + "/r/" + escape(info.username)}"></div>
              <button type="${"submit"}" class="${"mt-3 w-full inline-flex items-center justify-center px-4\r\n                py-2 border border-transparent shadow-sm font-medium rounded-md\r\n                text-white bg-blue-500 hover:bg-blue-600 focus:outline-none\r\n                focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0\r\n                sm:ml-3 sm:w-auto sm:text-sm"}">Copy
              </button></form></div>

          <img src="${"http://placehold.it/600x150"}" alt="${""}" class="${"hidden lg:block"}"></div></div></div></div>`}

${error
	? `${validate_component(ErrorModal, "ErrorModal").$$render($$result, { error }, {}, {})}`
	: ``}

${ ``}`;
});

var component_11 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Invite
});

/* src/routes/earn/quests.svelte generated by Svelte v3.31.2 */

const Quests = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let error;
	let completed = 0;
	let milestones = [];
	let loaded = false;

	onMount(async () => {

		try {
			let result = await fetch(`${config.scheme}://${config.api}/api/v1/reward/meta`);
			let json = await result.json();
			if (json.status = "error") return error = json.error;
			completed = json.result.completed;
			milestones = json.result.milestones;
			loaded = true;
		} catch(error) {
			console.error(error);
			error = "Error when retrieving quest data! Make sure you have an internet connection and try again!";
		}
	});

	return `${!loaded
	? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}`
	: `<div class="${"bg-white"}"><div class="${"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"}"><div class="${"space-y-12"}"><div class="${"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"}"><h2 class="${"text-3xl font-extrabold tracking-tight sm:text-4xl"}">Quests
          </h2>
          <p class="${"text-xl text-gray-500"}">Complete offers to unlock rewards. Reset daily.
          </p>
          <p class="${"text-md text-gray-700"}">You&#39;ve completed
            <b>${escape(completed)}</b>
            offers today!
          </p></div>
        <ul class="${"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12\r\n          sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"}">${each(milestones, milestone => `<li><div class="${"space-y-4"}"><div class="${"aspect-w-3 aspect-h-2"}"><img class="${"object-cover shadow-lg rounded-lg"}" src="${"http://placehold.it/900x900"}" alt="${""}"></div>

                <div class="${"space-y-2"}"><div><h3 class="${"text-lg leading-6 font-medium"}">Complete ${escape(milestone.offersRequired)} offer
                    </h3>
                    <p class="${"text-md"}">Reward:
                      <span class="${"text-green-500 font-bold"}">R$${escape(milestone.payout)}</span>
                    </p></div>

                  ${milestone.claimed
		? `<button type="${"button"}" class="${"inline-flex items-center px-3 py-2 border\r\n                      border-transparent shadow-sm text-sm leading-4 font-medium\r\n                      rounded-md text-white bg-gray-400 focus:outline-none"}">Already redeemed!
                      <svg class="${"ml-2 -mr-0.5 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9\r\n                          9 0 015.636 5.636m12.728 12.728L5.636 5.636"}"></path></svg>
                    </button>`
		: ``}

                  ${milestone.claimable
		? `<button type="${"button"}" class="${"inline-flex items-center px-3 py-2 border\r\n                      border-transparent shadow-sm text-sm leading-4 font-medium\r\n                      rounded-md text-white bg-blue-500 hover:bg-blue-600\r\n                      focus:outline-none focus:ring-2 focus:ring-offset-2\r\n                      focus:ring-blue-500"}">Redeem
                      <svg class="${"ml-2 -mr-0.5 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0\r\n                          109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5\r\n                          12v7a2 2 0 002 2h10a2 2 0 002-2v-7"}"></path></svg>
                    </button>`
		: ``}

                  ${!milestone.claimed && !milestone.claimable
		? `<button type="${"button"}" class="${"inline-flex items-center px-3 py-2 border\r\n                      border-transparent shadow-sm text-sm leading-4 font-medium\r\n                      rounded-md text-white bg-gray-400 focus:outline-none"}">${escape(milestone.offersRequired - completed)} more tasks required
                      <svg class="${"ml-2 -mr-0.5 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9\r\n                          9 0 015.636 5.636m12.728 12.728L5.636 5.636"}"></path></svg>
                    </button>`
		: ``}
                </div></div>
            </li>`)}</ul></div></div></div>`}

${error
	? `${validate_component(ErrorModal, "ErrorModal").$$render($$result, { error }, {}, {})}`
	: ``}

${ ``}`;
});

var component_12 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Quests
});

/* src/components/LinkModal.svelte generated by Svelte v3.31.2 */

const LinkModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let dispatch = createEventDispatcher();

	//TODO: implement referrals
	let username;

	return `<div class="${"fixed z-10 inset-0 overflow-y-auto"}"><div class="${"flex items-end justify-center min-h-screen pt-4 px-4 pb-20\r\n    text-center sm:block sm:p-0"}">
    <div class="${"fixed inset-0 transition-opacity"}" aria-hidden="${"true"}"><div class="${"absolute inset-0 bg-gray-500 opacity-75"}"></div></div>

    
    <span class="${"hidden sm:inline-block sm:align-middle sm:h-screen"}" aria-hidden="${"true"}">​
    </span>
    
    <div class="${"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4\r\n      text-left overflow-hidden shadow-xl transform transition-all sm:my-8\r\n      sm:align-middle sm:max-w-sm sm:w-full sm:p-6"}" role="${"dialog"}" aria-modal="${"true"}" aria-labelledby="${"modal-headline"}"><div><div class="${"mx-auto flex items-center justify-center h-12 w-12 rounded-full\r\n          bg-green-100 px-2 py-2"}"><svg class="${"h-24 w-24 text-green-600"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656\r\n              5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0\r\n              00-5.656-5.656l-1.1 1.1"}"></path></svg></div>
        <div class="${"mt-3 text-center sm:mt-5"}"><h3 class="${"text-lg leading-6 font-medium text-gray-900"}" id="${"modal-headline"}">Link your account!
          </h3>
          <div class="${"mt-2"}"><p class="${"text-sm text-gray-500"}">Type in your username below to get started!
            </p></div></div></div>
      <form><div class="${"mt-6"}"><label for="${"username"}" class="${"sr-only"}">Username</label>
          <input type="${"text"}" name="${"username"}" id="${"linkuser"}" class="${"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block\r\n            w-full sm:text-sm border-gray-300 rounded-md"}" placeholder="${"Builderman"}"${add_attribute("value", username, 1)}></div>
        <div class="${"mt-2 sm:mt-6"}"><button type="${"button"}" class="${"inline-flex justify-center w-full rounded-md border\r\n            border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base\r\n            font-medium text-white hover:bg-indigo-700 focus:outline-none\r\n            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"}">Link!
          </button></div></form></div></div></div>`;
});

/* src/routes/link.svelte generated by Svelte v3.31.2 */

const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(LinkModal, "LinkModal").$$render($$result, {}, {}, {})}`;
});

var component_13 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Link
});

/* src/routes/faq.svelte generated by Svelte v3.31.2 */

const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `
<div class="${"bg-white"}"><div class="${"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8"}"><div class="${"lg:grid lg:grid-cols-3 lg:gap-8"}"><div><h2 class="${"text-3xl font-extrabold text-gray-900"}">Frequently asked questions
        </h2>
        <p class="${"mt-4 text-lg text-gray-500"}">Can&#39;t find the answer to your question? Well, sucks to be you I guess!
        </p></div>
      <div class="${"mt-12 lg:mt-0 lg:col-span-2"}"><dl class="${"space-y-12"}"><div><dt class="${"text-lg leading-6 font-medium text-gray-900"}">How I earn bobux?
            </dt>
            <dd class="${"mt-2 text-base text-gray-500"}">Link your account and head over to the earn page
            </dd>
          </div><div><dt class="${"text-lg leading-6 font-medium text-gray-900"}">Why do my balls itch?
            </dt>
            <dd class="${"mt-2 text-base text-gray-500"}">You have cancer
            </dd>
          </div><div><dt class="${"text-lg leading-6 font-medium text-gray-900"}">Why didnt i get my payout
            </dt>
            <dd class="${"mt-2 text-base text-gray-500"}">Either our site is having issues or you did something wrong.
            </dd>
          </div><div><dt class="${"text-lg leading-6 font-medium text-gray-900"}">When is dad coming back with the milk?
            </dt>
            <dd class="${"mt-2 text-base text-gray-500"}">Never. We out here chillin at disneyland
            </dd></div></dl></div></div></div></div>`;
});

var component_14 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Faq
});

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/routes/_error.svelte generated by Svelte v3.31.2 */

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)} - ${escape(error.message)}</title>`, "")}`, "")}

<div class="${"w-screen flex flex-col justify-center items-center mt-32"}"><div class="${"flex flex-col items-center sm:flex-row mx-14"}"><div class="${"mb-4 flex-shrink-0 sm:mb-0 sm:mr-4"}"><img class="${"h-60 w-auto"}" src="${"https://images.rbxcdn.com/9281912c23312bc0d08ab750afa588cc.png"}" alt="${""}"></div>
    <div class="${"text-center sm:text-left"}"><h4 class="${"text-2xl font-bold"}">${escape(status)}</h4>
      <p class="${"mt-1 text-lg"}">${escape(error.message)}</p>

      ${ ``}</div></div></div>`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.31.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

// This file is generated by Sapper — do not edit it!

const ignore = [];

const routes = [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// withdraw.svelte
		pattern: /^\/withdraw\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// discord.svelte
		pattern: /^\/discord\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// staff/index.svelte
		pattern: /^\/staff\/?$/,
		parts: [
			{ i: 3 }
		]
	},

	{
		// staff/register.svelte
		pattern: /^\/staff\/register\/?$/,
		parts: [
			null,
			{ i: 4 }
		]
	},

	{
		// staff/logout.svelte
		pattern: /^\/staff\/logout\/?$/,
		parts: [
			null,
			{ i: 5 }
		]
	},

	{
		// staff/login.svelte
		pattern: /^\/staff\/login\/?$/,
		parts: [
			null,
			{ i: 6 }
		]
	},

	{
		// earn/index.svelte
		pattern: /^\/earn\/?$/,
		parts: [
			{ i: 7 }
		]
	},

	{
		// earn/offerwalls.svelte
		pattern: /^\/earn\/offerwalls\/?$/,
		parts: [
			null,
			{ i: 8 }
		]
	},

	{
		// earn/promocodes.svelte
		pattern: /^\/earn\/promocodes\/?$/,
		parts: [
			null,
			{ i: 9 }
		]
	},

	{
		// earn/giveaway.svelte
		pattern: /^\/earn\/giveaway\/?$/,
		parts: [
			null,
			{ i: 10 }
		]
	},

	{
		// earn/invite.svelte
		pattern: /^\/earn\/invite\/?$/,
		parts: [
			null,
			{ i: 11 }
		]
	},

	{
		// earn/quests.svelte
		pattern: /^\/earn\/quests\/?$/,
		parts: [
			null,
			{ i: 12 }
		]
	},

	{
		// link.svelte
		pattern: /^\/link\/?$/,
		parts: [
			{ i: 13 }
		]
	},

	{
		// faq.svelte
		pattern: /^\/faq\/?$/,
		parts: [
			{ i: 14 }
		]
	}
];

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

let uid = 1;
let cid;
const _history = typeof history !== 'undefined' ? history : {
    pushState: () => { },
    replaceState: () => { },
    scrollRestoration: 'auto'
};
const scroll_history = {};
let base_url;
let handle_target;
function extract_query(search) {
    const query = Object.create(null);
    if (search.length > 0) {
        search.slice(1).split('&').forEach(searchParam => {
            const [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
            if (typeof query[key] === 'string')
                query[key] = [query[key]];
            if (typeof query[key] === 'object')
                query[key].push(value);
            else
                query[key] = value;
        });
    }
    return query;
}
function select_target(url) {
    if (url.origin !== location.origin)
        return null;
    if (!url.pathname.startsWith(base_url))
        return null;
    let path = url.pathname.slice(base_url.length);
    if (path === '') {
        path = '/';
    }
    // avoid accidental clashes between server routes and page routes
    if (ignore.some(pattern => pattern.test(path)))
        return;
    for (let i = 0; i < routes.length; i += 1) {
        const route = routes[i];
        const match = route.pattern.exec(path);
        if (match) {
            const query = extract_query(url.search);
            const part = route.parts[route.parts.length - 1];
            const params = part.params ? part.params(match) : {};
            const page = { host: location.host, path, query, params };
            return { href: url.href, route, match, page };
        }
    }
}
function scroll_state() {
    return {
        x: pageXOffset,
        y: pageYOffset
    };
}
function navigate(dest, id, noscroll, hash) {
    return __awaiter$1(this, void 0, void 0, function* () {
        const popstate = !!id;
        if (popstate) {
            cid = id;
        }
        else {
            const current_scroll = scroll_state();
            // clicked on a link. preserve scroll state
            scroll_history[cid] = current_scroll;
            cid = id = ++uid;
            scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
        }
        yield handle_target();
        if (document.activeElement && (document.activeElement instanceof HTMLElement))
            document.activeElement.blur();
        if (!noscroll) {
            let scroll = scroll_history[id];
            let deep_linked;
            if (hash) {
                // scroll is an element id (from a hash), we need to compute y.
                deep_linked = document.getElementById(hash.slice(1));
                if (deep_linked) {
                    scroll = {
                        x: 0,
                        y: deep_linked.getBoundingClientRect().top + scrollY
                    };
                }
            }
            scroll_history[cid] = scroll;
            if (popstate || deep_linked) {
                scrollTo(scroll.x, scroll.y);
            }
            else {
                scrollTo(0, 0);
            }
        }
    });
}

function get_base_uri(window_document) {
    let baseURI = window_document.baseURI;
    if (!baseURI) {
        const baseTags = window_document.getElementsByTagName('base');
        baseURI = baseTags.length ? baseTags[0].href : window_document.URL;
    }
    return baseURI;
}

function goto$1(href, opts = { noscroll: false, replaceState: false }) {
    const target = select_target(new URL(href, get_base_uri(document)));
    if (target) {
        _history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
        return navigate(target, null, opts.noscroll);
    }
    location.href = href;
    return new Promise(() => {
        /* never resolves */
    });
}

function page_store(value) {
    const store = writable(value);
    let ready = true;
    function notify() {
        ready = true;
        store.update(val => val);
    }
    function set(new_value) {
        ready = false;
        store.set(new_value);
    }
    function subscribe(run) {
        let old_value;
        return store.subscribe((new_value) => {
            if (old_value === undefined || (ready && new_value !== old_value)) {
                run(old_value = new_value);
            }
        });
    }
    return { notify, set, subscribe };
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
const stores = {
    page: page_store({}),
    preloading: writable(null),
    session: writable(initial_data && initial_data.session)
};
stores.session.subscribe((value) => __awaiter$1(void 0, void 0, void 0, function* () {
    return;
}));

/* src/components/Nav.svelte generated by Svelte v3.31.2 */

const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	let user;

	onMount(async () => {
		try {
			let username = localStorage.getItem("roblox-user");
			if (!username) return;
			let result = await fetch(`${config.scheme}://${config.api}/api/v1/user/info`, { headers: { username } });
			let json = await result.json();

			if (json.result) {
				user = json.result;
			} else {
				if (segment == "earn" || segment == "withdraw") {
					goto$1("/");
				}
			}
		} catch(error) {
			console.error(error);
		} //TODO: enable this outside of development environment
	});

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	return `<nav class="${"bg-white shadow-lg"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}"><div class="${"flex justify-between h-16"}"><div class="${"flex"}"><div class="${"flex-shrink-0 flex items-center mr-4"}"><img class="${"block h-10 w-auto"}" src="${"https://cdn.discordapp.com/attachments/707054667523162134/807165183684247552/main_png_logo.png"}" alt="${"Bobux.gg"}"></div>
        <div class="${"hidden sm:ml-2 sm:flex sm:space-x-8"}">
          <a href="${"/earn"}" class="${"border-blue-500 text-gray-900 inline-flex items-center px-1\n            pt-1 border-b-2 text-sm font-medium"}">Earn
          </a>
          <a href="${"/withdraw"}" class="${"border-transparent text-gray-500 hover:border-gray-300\n            hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2\n            text-sm font-medium"}">Withdraw
          </a>
          <a href="${"/faq"}" class="${"border-transparent text-gray-500 hover:border-gray-300\n            hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2\n            text-sm font-medium"}">FAQ
          </a>
          <a href="${"/discord"}" class="${"border-transparent text-gray-500 hover:border-gray-300\n            hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2\n            text-sm font-medium"}">Discord
          </a></div></div>
      <div class="${"hidden sm:ml-6 sm:flex sm:items-center"}"><button type="${"button"}" class="${"relative inline-flex items-center px-4 py-2 border\n          border-transparent text-sm font-medium rounded-md text-white\n          bg-blue-500 shadow-sm hover:bg-blue-600 focus:outline-none\n          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}"><svg class="${"-ml-1 mr-2 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1\n              0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}"></path></svg>
          <span>${escape(user ? "Logout" : "Link account")}</span></button></div>
      <div class="${"-mr-2 flex items-center sm:hidden"}">
        <button class="${"inline-flex items-center justify-center p-2 rounded-md\n          text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none\n          focus:ring-2 focus:ring-inset focus:ring-blue-500"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
          
          
          <svg class="${escape( "block") + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>
          
          
          <svg class="${escape( "hidden") + " h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div></div></div>

  
  <div class="${escape( "hidden") + " sm:hidden"}"><div class="${"pt-2 pb-3 space-y-1"}">
      <a href="${"/earn"}" class="${"bg-blue-50 border-blue-500 text-blue-600 block pl-3 pr-4 py-2\n        border-l-4 text-base font-medium"}">Earn
      </a>
      <a href="${"/withdraw"}" class="${"border-transparent text-gray-500 hover:bg-gray-50\n        hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2\n        border-l-4 text-base font-medium"}">Withdraw
      </a>
      <a href="${"/faq"}" class="${"border-transparent text-gray-500 hover:bg-gray-50\n        hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2\n        border-l-4 text-base font-medium"}">FAQ
      </a>
      <a href="${"/discord"}" class="${"border-transparent text-gray-500 hover:bg-gray-50\n        hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2\n        border-l-4 text-base font-medium"}">Discord
      </a>
      <div class="${"mx-3"}"><button type="${"button"}" class="${"relative inline-flex items-center px-4 py-2 border\n          border-transparent text-md font-medium rounded-md text-white\n          bg-blue-500 shadow-sm hover:bg-blue-600 focus:outline-none\n          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"}"><span class="${"-ml-1"}">${escape(user ? "Logout" : "Link account")}</span>
          <svg class="${"ml-2 h-5 w-5"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1\n              0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}"></path></svg></button></div></div></div></nav>

${ ``}

${ ``}`;
});

/* src/routes/_layout.svelte generated by Svelte v3.31.2 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	return `${!segment || !segment.includes("staff")
	? `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}`
	: ``}

<main>${slots.default ? slots.default({}) : ``}</main>`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// withdraw.svelte
			pattern: /^\/withdraw\/?$/,
			parts: [
				{ name: "withdraw", file: "withdraw.svelte", component: component_1 }
			]
		},

		{
			// discord.svelte
			pattern: /^\/discord\/?$/,
			parts: [
				{ name: "discord", file: "discord.svelte", component: component_2 }
			]
		},

		{
			// staff/index.svelte
			pattern: /^\/staff\/?$/,
			parts: [
				{ name: "staff", file: "staff/index.svelte", component: component_3 }
			]
		},

		{
			// staff/register.svelte
			pattern: /^\/staff\/register\/?$/,
			parts: [
				null,
				{ name: "staff_register", file: "staff/register.svelte", component: component_4 }
			]
		},

		{
			// staff/logout.svelte
			pattern: /^\/staff\/logout\/?$/,
			parts: [
				null,
				{ name: "staff_logout", file: "staff/logout.svelte", component: component_5 }
			]
		},

		{
			// staff/login.svelte
			pattern: /^\/staff\/login\/?$/,
			parts: [
				null,
				{ name: "staff_login", file: "staff/login.svelte", component: component_6 }
			]
		},

		{
			// earn/index.svelte
			pattern: /^\/earn\/?$/,
			parts: [
				{ name: "earn", file: "earn/index.svelte", component: component_7 }
			]
		},

		{
			// earn/offerwalls.svelte
			pattern: /^\/earn\/offerwalls\/?$/,
			parts: [
				null,
				{ name: "earn_offerwalls", file: "earn/offerwalls.svelte", component: component_8 }
			]
		},

		{
			// earn/promocodes.svelte
			pattern: /^\/earn\/promocodes\/?$/,
			parts: [
				null,
				{ name: "earn_promocodes", file: "earn/promocodes.svelte", component: component_9 }
			]
		},

		{
			// earn/giveaway.svelte
			pattern: /^\/earn\/giveaway\/?$/,
			parts: [
				null,
				{ name: "earn_giveaway", file: "earn/giveaway.svelte", component: component_10 }
			]
		},

		{
			// earn/invite.svelte
			pattern: /^\/earn\/invite\/?$/,
			parts: [
				null,
				{ name: "earn_invite", file: "earn/invite.svelte", component: component_11 }
			]
		},

		{
			// earn/quests.svelte
			pattern: /^\/earn\/quests\/?$/,
			parts: [
				null,
				{ name: "earn_quests", file: "earn/quests.svelte", component: component_12 }
			]
		},

		{
			// link.svelte
			pattern: /^\/link\/?$/,
			parts: [
				{ name: "link", file: "link.svelte", component: component_13 }
			]
		},

		{
			// faq.svelte
			pattern: /^\/faq\/?$/,
			parts: [
				{ name: "faq", file: "faq.svelte", component: component_14 }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter$2(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter$2(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers$1 {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers$1) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers$1.prototype.entries = Headers$1.prototype[Symbol.iterator];

Object.defineProperty(Headers$1.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers$1.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers$1();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers$1(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request$1 {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers$1(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request$1(this);
	}
}

Body.mixIn(Request$1.prototype);

Object.defineProperty(Request$1.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request$1.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers$1(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch$1(url, opts) {

	// allow custom promise
	if (!fetch$1.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch$1.Promise;

	// wrap http.request into fetch
	return new fetch$1.Promise(function (resolve, reject) {
		// build request object
		const request = new Request$1(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch$1.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers$1(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch$1(new Request$1(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch$1.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch$1.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info =  (assets => () => assets)(JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8')));
    const template =  (str => () => str)(read_template(build_dir));
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message =  'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter$2(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch$1(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control:  'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop$2)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs__default['default'].readFileSync(path__default['default'].join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop$2() { }

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka__default['default']() // You can also use Express
	.use(
		compression__default['default']({ threshold: 0 }),
		sirv__default['default']('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
