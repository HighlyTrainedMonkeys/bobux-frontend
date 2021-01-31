import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as claim_element, f as children, h as detach_dev, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.c1f065e8.js';

/* src/routes/discord.svelte generated by Svelte v3.31.2 */

const file = "src/routes/discord.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let iframe;
	let iframe_src_value;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			iframe = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			iframe = claim_element(div0_nodes, "IFRAME", {
				src: true,
				width: true,
				height: true,
				allowtransparency: true,
				frameborder: true,
				sandbox: true
			});

			children(iframe).forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (iframe.src !== (iframe_src_value = "https://canary.discordapp.com/widget?id=793355555368468510&theme=light")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "width", "350");
			attr_dev(iframe, "height", "500");
			attr_dev(iframe, "allowtransparency", "true");
			attr_dev(iframe, "frameborder", "0");
			attr_dev(iframe, "sandbox", "allow-popups allow-popups-to-escape-sandbox allow-same-origin\r\n    allow-scripts");
			add_location(iframe, file, 2, 4, 99);
			attr_dev(div0, "class", "mt-8 flex flex-col justify-center items-center");
			add_location(div0, file, 1, 2, 33);
			attr_dev(div1, "class", "h-screen w-full");
			add_location(div1, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, iframe);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Discord", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Discord> was created with unknown prop '${key}'`);
	});

	return [];
}

class Discord extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Discord",
			options,
			id: create_fragment.name
		});
	}
}

export default Discord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29yZC44NmE2ZTQ4Mi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
