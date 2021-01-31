import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.9085a597.js';

/* src/routes/faq.svelte generated by Svelte v3.31.2 */

const file = "src/routes/faq.svelte";

function create_fragment(ctx) {
	let div8;
	let div7;
	let div6;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div5;
	let dl;
	let div1;
	let dt0;
	let t4;
	let t5;
	let dd0;
	let t6;
	let t7;
	let div2;
	let dt1;
	let t8;
	let t9;
	let dd1;
	let t10;
	let t11;
	let div3;
	let dt2;
	let t12;
	let t13;
	let dd2;
	let t14;
	let t15;
	let div4;
	let dt3;
	let t16;
	let t17;
	let dd3;
	let t18;

	const block = {
		c: function create() {
			div8 = element("div");
			div7 = element("div");
			div6 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Frequently asked questions");
			t1 = space();
			p = element("p");
			t2 = text("Can't find the answer to your question? Well, sucks to be you I guess!");
			t3 = space();
			div5 = element("div");
			dl = element("dl");
			div1 = element("div");
			dt0 = element("dt");
			t4 = text("How I earn bobux?");
			t5 = space();
			dd0 = element("dd");
			t6 = text("Link your account and head over to the earn page");
			t7 = space();
			div2 = element("div");
			dt1 = element("dt");
			t8 = text("Why do my balls itch?");
			t9 = space();
			dd1 = element("dd");
			t10 = text("You have cancer");
			t11 = space();
			div3 = element("div");
			dt2 = element("dt");
			t12 = text("Why didnt i get my payout");
			t13 = space();
			dd2 = element("dd");
			t14 = text("Either our site is having issues or you did something wrong.");
			t15 = space();
			div4 = element("div");
			dt3 = element("dt");
			t16 = text("When is dad coming back with the milk?");
			t17 = space();
			dd3 = element("dd");
			t18 = text("Never. We out here chillin at disneyland");
			this.h();
		},
		l: function claim(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", {});
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Frequently asked questions");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Can't find the answer to your question? Well, sucks to be you I guess!");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			dl = claim_element(div5_nodes, "DL", { class: true });
			var dl_nodes = children(dl);
			div1 = claim_element(dl_nodes, "DIV", {});
			var div1_nodes = children(div1);
			dt0 = claim_element(div1_nodes, "DT", { class: true });
			var dt0_nodes = children(dt0);
			t4 = claim_text(dt0_nodes, "How I earn bobux?");
			dt0_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			dd0 = claim_element(div1_nodes, "DD", { class: true });
			var dd0_nodes = children(dd0);
			t6 = claim_text(dd0_nodes, "Link your account and head over to the earn page");
			dd0_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2 = claim_element(dl_nodes, "DIV", {});
			var div2_nodes = children(div2);
			dt1 = claim_element(div2_nodes, "DT", { class: true });
			var dt1_nodes = children(dt1);
			t8 = claim_text(dt1_nodes, "Why do my balls itch?");
			dt1_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			dd1 = claim_element(div2_nodes, "DD", { class: true });
			var dd1_nodes = children(dd1);
			t10 = claim_text(dd1_nodes, "You have cancer");
			dd1_nodes.forEach(detach_dev);
			t11 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3 = claim_element(dl_nodes, "DIV", {});
			var div3_nodes = children(div3);
			dt2 = claim_element(div3_nodes, "DT", { class: true });
			var dt2_nodes = children(dt2);
			t12 = claim_text(dt2_nodes, "Why didnt i get my payout");
			dt2_nodes.forEach(detach_dev);
			t13 = claim_space(div3_nodes);
			dd2 = claim_element(div3_nodes, "DD", { class: true });
			var dd2_nodes = children(dd2);
			t14 = claim_text(dd2_nodes, "Either our site is having issues or you did something wrong.");
			dd2_nodes.forEach(detach_dev);
			t15 = claim_space(div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4 = claim_element(dl_nodes, "DIV", {});
			var div4_nodes = children(div4);
			dt3 = claim_element(div4_nodes, "DT", { class: true });
			var dt3_nodes = children(dt3);
			t16 = claim_text(dt3_nodes, "When is dad coming back with the milk?");
			dt3_nodes.forEach(detach_dev);
			t17 = claim_space(div4_nodes);
			dd3 = claim_element(div4_nodes, "DD", { class: true });
			var dd3_nodes = children(dd3);
			t18 = claim_text(dd3_nodes, "Never. We out here chillin at disneyland");
			dd3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			dl_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "text-3xl font-extrabold text-gray-900");
			add_location(h2, file, 5, 8, 213);
			attr_dev(p, "class", "mt-4 text-lg text-gray-500");
			add_location(p, file, 8, 8, 323);
			add_location(div0, file, 4, 6, 199);
			attr_dev(dt0, "class", "text-lg leading-6 font-medium text-gray-900");
			add_location(dt0, file, 15, 12, 577);
			attr_dev(dd0, "class", "mt-2 text-base text-gray-500");
			add_location(dd0, file, 18, 12, 696);
			add_location(div1, file, 14, 10, 559);
			attr_dev(dt1, "class", "text-lg leading-6 font-medium text-gray-900");
			add_location(dt1, file, 24, 12, 865);
			attr_dev(dd1, "class", "mt-2 text-base text-gray-500");
			add_location(dd1, file, 27, 12, 988);
			add_location(div2, file, 23, 10, 847);
			attr_dev(dt2, "class", "text-lg leading-6 font-medium text-gray-900");
			add_location(dt2, file, 33, 12, 1124);
			attr_dev(dd2, "class", "mt-2 text-base text-gray-500");
			add_location(dd2, file, 36, 12, 1251);
			add_location(div3, file, 32, 10, 1106);
			attr_dev(dt3, "class", "text-lg leading-6 font-medium text-gray-900");
			add_location(dt3, file, 42, 12, 1432);
			attr_dev(dd3, "class", "mt-2 text-base text-gray-500");
			add_location(dd3, file, 45, 12, 1572);
			add_location(div4, file, 41, 10, 1414);
			attr_dev(dl, "class", "space-y-12");
			add_location(dl, file, 13, 8, 525);
			attr_dev(div5, "class", "mt-12 lg:mt-0 lg:col-span-2");
			add_location(div5, file, 12, 6, 475);
			attr_dev(div6, "class", "lg:grid lg:grid-cols-3 lg:gap-8");
			add_location(div6, file, 3, 4, 147);
			attr_dev(div7, "class", "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8");
			add_location(div7, file, 2, 2, 75);
			attr_dev(div8, "class", "bg-white");
			add_location(div8, file, 1, 0, 50);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div8, anchor);
			append_dev(div8, div7);
			append_dev(div7, div6);
			append_dev(div6, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
			append_dev(div6, t3);
			append_dev(div6, div5);
			append_dev(div5, dl);
			append_dev(dl, div1);
			append_dev(div1, dt0);
			append_dev(dt0, t4);
			append_dev(div1, t5);
			append_dev(div1, dd0);
			append_dev(dd0, t6);
			append_dev(div1, t7);
			append_dev(dl, div2);
			append_dev(div2, dt1);
			append_dev(dt1, t8);
			append_dev(div2, t9);
			append_dev(div2, dd1);
			append_dev(dd1, t10);
			append_dev(div2, t11);
			append_dev(dl, div3);
			append_dev(div3, dt2);
			append_dev(dt2, t12);
			append_dev(div3, t13);
			append_dev(div3, dd2);
			append_dev(dd2, t14);
			append_dev(div3, t15);
			append_dev(dl, div4);
			append_dev(div4, dt3);
			append_dev(dt3, t16);
			append_dev(div4, t17);
			append_dev(div4, dd3);
			append_dev(dd3, t18);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div8);
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
	validate_slots("Faq", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Faq> was created with unknown prop '${key}'`);
	});

	return [];
}

class Faq extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Faq",
			options,
			id: create_fragment.name
		});
	}
}

export default Faq;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmU2MGZjODI5LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
