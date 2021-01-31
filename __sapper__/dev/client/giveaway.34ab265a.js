import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as onMount, r as config, E as ErrorModal, N as globals, I as create_component, J as claim_component, K as mount_component, y as transition_in, w as transition_out, L as destroy_component, a as space, u as empty, j as claim_space, m as insert_dev, x as check_outros, h as detach_dev, A as validate_each_argument, e as element, t as text, c as claim_element, f as children, g as claim_text, k as attr_dev, l as add_location, n as append_dev, q as set_data_dev, B as group_outros, o as noop, G as destroy_each } from './client.c1f065e8.js';
import { S as Success, L as Loader } from './Loader.9b3e143c.js';

/* src/routes/earn/giveaway.svelte generated by Svelte v3.31.2 */

const { console: console_1 } = globals;
const file = "src/routes/earn/giveaway.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (63:0) {:else}
function create_else_block(ctx) {
	let div4;
	let div2;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let h20;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4_value = /*meta*/ ctx[1].ending + "";
	let t4;
	let t5;
	let p1;
	let t6;
	let span;
	let t7;
	let t8_value = /*meta*/ ctx[1].amount + "";
	let t8;
	let t9;
	let div1;
	let button;
	let t10;
	let t11;
	let h21;
	let b;
	let t12;
	let t13;
	let t14;
	let div3;
	let h1;
	let t15;
	let t16;
	let ul;
	let each_value = /*meta*/ ctx[1].top;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div4 = element("div");
			div2 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			h20 = element("h2");
			t1 = text("Enter the giveaway!");
			t2 = space();
			p0 = element("p");
			t3 = text("Ends in: ");
			t4 = text(t4_value);
			t5 = space();
			p1 = element("p");
			t6 = text("Reward:\r\n          ");
			span = element("span");
			t7 = text("R$");
			t8 = text(t8_value);
			t9 = space();
			div1 = element("div");
			button = element("button");
			t10 = text("Enter!");
			t11 = space();
			h21 = element("h2");
			b = element("b");
			t12 = text("Note:");
			t13 = text("\r\n          You can enter the giveaway multiple times for a higher chance of\r\n          winning.");
			t14 = space();
			div3 = element("div");
			h1 = element("h1");
			t15 = text("Top Entries");
			t16 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", {});
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
			t0 = claim_space(div0_nodes);
			h20 = claim_element(div0_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, "Enter the giveaway!");
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Ends in: ");
			t4 = claim_text(p0_nodes, t4_value);
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "Reward:\r\n          ");
			span = claim_element(p1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t7 = claim_text(span_nodes, "R$");
			t8 = claim_text(span_nodes, t8_value);
			span_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			button = claim_element(div1_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t10 = claim_text(button_nodes, "Enter!");
			button_nodes.forEach(detach_dev);
			t11 = claim_space(div1_nodes);
			h21 = claim_element(div1_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			b = claim_element(h21_nodes, "B", {});
			var b_nodes = children(b);
			t12 = claim_text(b_nodes, "Note:");
			b_nodes.forEach(detach_dev);
			t13 = claim_text(h21_nodes, "\r\n          You can enter the giveaway multiple times for a higher chance of\r\n          winning.");
			h21_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t14 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t15 = claim_text(h1_nodes, "Top Entries");
			h1_nodes.forEach(detach_dev);
			t16 = claim_space(div3_nodes);
			ul = claim_element(div3_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "mx-auto h-auto w-full");
			if (img.src !== (img_src_value = "http://placehold.it/450x250")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Workflow");
			add_location(img, file, 68, 8, 1845);
			attr_dev(h20, "class", "mt-6 text-center text-3xl font-extrabold text-gray-900");
			add_location(h20, file, 72, 8, 1974);
			attr_dev(p0, "class", "mt-2 text-center text-md text-gray-600");
			add_location(p0, file, 75, 8, 2097);
			attr_dev(span, "class", "font-bold text-green-500");
			add_location(span, file, 80, 10, 2281);
			attr_dev(p1, "class", "text-center text-md text-gray-600");
			add_location(p1, file, 78, 8, 2205);
			add_location(div0, file, 67, 6, 1830);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "group relative w-full flex justify-center py-2 px-4 border\r\n          border-transparent text-md font-medium rounded-md text-white\r\n          bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2\r\n          focus:ring-offset-2 focus:ring-blue-500");
			add_location(button, file, 84, 8, 2393);
			add_location(b, file, 94, 10, 2812);
			attr_dev(h21, "class", "mt-2 text-center text-md text-gray-600");
			add_location(h21, file, 93, 8, 2749);
			add_location(div1, file, 83, 6, 2378);
			attr_dev(div2, "class", "max-w-md w-full space-y-8 border-b-2 pb-4");
			add_location(div2, file, 66, 4, 1767);
			attr_dev(h1, "class", "text-center text-2xl font-medium py-6");
			add_location(h1, file, 102, 6, 2982);
			attr_dev(ul, "class", "divide-y divide-gray-200");
			add_location(ul, file, 103, 6, 3056);
			add_location(div3, file, 101, 4, 2969);
			attr_dev(div4, "class", "min-h-screen flex flex-col items-center justify-center bg-gray-50\r\n    py-12 px-4 sm:px-6 lg:px-8");
			add_location(div4, file, 63, 2, 1645);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div2);
			append_dev(div2, div0);
			append_dev(div0, img);
			append_dev(div0, t0);
			append_dev(div0, h20);
			append_dev(h20, t1);
			append_dev(div0, t2);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(p0, t4);
			append_dev(div0, t5);
			append_dev(div0, p1);
			append_dev(p1, t6);
			append_dev(p1, span);
			append_dev(span, t7);
			append_dev(span, t8);
			append_dev(div2, t9);
			append_dev(div2, div1);
			append_dev(div1, button);
			append_dev(button, t10);
			append_dev(div1, t11);
			append_dev(div1, h21);
			append_dev(h21, b);
			append_dev(b, t12);
			append_dev(h21, t13);
			append_dev(div4, t14);
			append_dev(div4, div3);
			append_dev(div3, h1);
			append_dev(h1, t15);
			append_dev(div3, t16);
			append_dev(div3, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*meta*/ 2 && t4_value !== (t4_value = /*meta*/ ctx[1].ending + "")) set_data_dev(t4, t4_value);
			if (dirty & /*meta*/ 2 && t8_value !== (t8_value = /*meta*/ ctx[1].amount + "")) set_data_dev(t8, t8_value);

			if (dirty & /*meta*/ 2) {
				each_value = /*meta*/ ctx[1].top;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(63:0) {:else}",
		ctx
	});

	return block;
}

// (61:0) {#if !meta}
function create_if_block_2(ctx) {
	let loader;
	let current;
	loader = new Loader({ $$inline: true });

	const block = {
		c: function create() {
			create_component(loader.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(loader.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(loader, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(loader.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(loader.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(loader, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(61:0) {#if !meta}",
		ctx
	});

	return block;
}

// (105:8) {#each meta.top as user}
function create_each_block(ctx) {
	let li;
	let div2;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let div0;
	let h3;
	let t1_value = /*user*/ ctx[7].username + "";
	let t1;
	let t2;
	let p;
	let t3;
	let t4_value = /*user*/ ctx[7].chance + "";
	let t4;
	let t5;

	const block = {
		c: function create() {
			li = element("li");
			div2 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h3 = element("h3");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text("Chances of winning the giveaway: ");
			t4 = text(t4_value);
			t5 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			div2 = claim_element(li_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img = claim_element(div2_nodes, "IMG", { class: true, src: true, alt: true });
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, t1_value);
			h3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Chances of winning the giveaway: ");
			t4 = claim_text(p_nodes, t4_value);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "h-14 w-14 rounded-full");
			if (img.src !== (img_src_value = /*user*/ ctx[7].image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			add_location(img, file, 107, 14, 3215);
			attr_dev(h3, "class", "text-md font-medium");
			add_location(h3, file, 110, 18, 3408);
			attr_dev(div0, "class", "flex items-center justify-between");
			add_location(div0, file, 109, 16, 3341);
			attr_dev(p, "class", "text-md text-gray-500");
			add_location(p, file, 112, 16, 3502);
			attr_dev(div1, "class", "flex-1 space-y-1");
			add_location(div1, file, 108, 14, 3293);
			attr_dev(div2, "class", "flex space-x-16");
			add_location(div2, file, 106, 12, 3170);
			attr_dev(li, "class", "py-4");
			add_location(li, file, 105, 10, 3139);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, div2);
			append_dev(div2, img);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h3);
			append_dev(h3, t1);
			append_dev(div1, t2);
			append_dev(div1, p);
			append_dev(p, t3);
			append_dev(p, t4);
			append_dev(li, t5);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*meta*/ 2 && img.src !== (img_src_value = /*user*/ ctx[7].image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*meta*/ 2 && t1_value !== (t1_value = /*user*/ ctx[7].username + "")) set_data_dev(t1, t1_value);
			if (dirty & /*meta*/ 2 && t4_value !== (t4_value = /*user*/ ctx[7].chance + "")) set_data_dev(t4, t4_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(105:8) {#each meta.top as user}",
		ctx
	});

	return block;
}

// (126:0) {#if error}
function create_if_block_1(ctx) {
	let errormodal;
	let current;

	errormodal = new ErrorModal({
			props: { error: /*error*/ ctx[0] },
			$$inline: true
		});

	errormodal.$on("close", /*close_handler*/ ctx[3]);

	const block = {
		c: function create() {
			create_component(errormodal.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(errormodal.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(errormodal, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const errormodal_changes = {};
			if (dirty & /*error*/ 1) errormodal_changes.error = /*error*/ ctx[0];
			errormodal.$set(errormodal_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(errormodal.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(errormodal.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(errormodal, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(126:0) {#if error}",
		ctx
	});

	return block;
}

// (134:0) {#if successMessage}
function create_if_block(ctx) {
	let success;
	let current;

	success = new Success({
			props: { message: /*successMessage*/ ctx[2] },
			$$inline: true
		});

	success.$on("close", /*close_handler_1*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(success.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(success.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(success, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const success_changes = {};
			if (dirty & /*successMessage*/ 4) success_changes.message = /*successMessage*/ ctx[2];
			success.$set(success_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(success.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(success.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(success, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(134:0) {#if successMessage}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block0;
	let t0;
	let t1;
	let if_block2_anchor;
	let current;
	const if_block_creators = [create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*meta*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block1 = /*error*/ ctx[0] && create_if_block_1(ctx);
	let if_block2 = /*successMessage*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			if_block2_anchor = empty();
		},
		l: function claim(nodes) {
			if_block0.l(nodes);
			t0 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			t1 = claim_space(nodes);
			if (if_block2) if_block2.l(nodes);
			if_block2_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, t0, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, t1, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert_dev(target, if_block2_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				} else {
					if_block0.p(ctx, dirty);
				}

				transition_in(if_block0, 1);
				if_block0.m(t0.parentNode, t0);
			}

			if (/*error*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*error*/ 1) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(t1.parentNode, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*successMessage*/ ctx[2]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*successMessage*/ 4) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(t0);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(t1);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach_dev(if_block2_anchor);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Giveaway", slots, []);
	let error;
	let meta;
	let enterGiveaway;
	let token;
	let successMessage;

	//TODO: implement captcha here
	onMount(async () => {
		enterGiveaway = async () => {
			try {
				let result = await fetch(`${config.scheme}://${config.api}/api/v1/giveaway/enter`, {
					method: "POST",
					headers: {
						"content-type": "application/json",
						username: localStorage.getItem("roblox-user")
					},
					body: { token }
				});

				let json = await result.json();
				if (json.status == "error") return $$invalidate(0, error = json.error);
				$$invalidate(2, successMessage = json.result.message);
			} catch(error) {
				console.error(error);
				error = "Error entering giveaway! Make sure you have an internet connection and try again!";
			}
		};

		try {
			let result = await fetch(`${config.scheme}://${config.api}/api/v1/giveaway/meta`);
			let json = await result.json();
			if (json.status == "error") return $$invalidate(0, error = json.error);
			$$invalidate(1, meta = json.result);
		} catch(error) {
			error = "Failed to load giveaway info! Make sure you have an internet connection and try again!";
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Giveaway> was created with unknown prop '${key}'`);
	});

	const close_handler = () => {
		$$invalidate(0, error = null);
	};

	const close_handler_1 = () => {
		$$invalidate(2, successMessage = null);
	};

	$$self.$capture_state = () => ({
		onMount,
		config,
		ErrorModal,
		Success,
		Loader,
		error,
		meta,
		enterGiveaway,
		token,
		successMessage
	});

	$$self.$inject_state = $$props => {
		if ("error" in $$props) $$invalidate(0, error = $$props.error);
		if ("meta" in $$props) $$invalidate(1, meta = $$props.meta);
		if ("enterGiveaway" in $$props) enterGiveaway = $$props.enterGiveaway;
		if ("token" in $$props) token = $$props.token;
		if ("successMessage" in $$props) $$invalidate(2, successMessage = $$props.successMessage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [error, meta, successMessage, close_handler, close_handler_1];
}

class Giveaway extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Giveaway",
			options,
			id: create_fragment.name
		});
	}
}

export default Giveaway;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZWF3YXkuMzRhYjI2NWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZWFybi9naXZlYXdheS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG4gIGltcG9ydCBFcnJvck1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Vycm9yTW9kYWwuc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IFN1Y2Nlc3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3VjY2Vzcy5zdmVsdGVcIjtcclxuICBpbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRlci5zdmVsdGVcIjtcclxuXHJcbiAgbGV0IGVycm9yO1xyXG4gIGxldCBtZXRhO1xyXG4gIGxldCBlbnRlckdpdmVhd2F5O1xyXG4gIGxldCB0b2tlbjtcclxuICBsZXQgc3VjY2Vzc01lc3NhZ2U7XHJcblxyXG4gIC8vVE9ETzogaW1wbGVtZW50IGNhcHRjaGEgaGVyZVxyXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgZW50ZXJHaXZlYXdheSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgJHtjb25maWcuc2NoZW1lfTovLyR7Y29uZmlnLmFwaX0vYXBpL3YxL2dpdmVhd2F5L2VudGVyYCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJvYmxveC11c2VyXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAoanNvbi5zdGF0dXMgPT0gXCJlcnJvclwiKSByZXR1cm4gKGVycm9yID0ganNvbi5lcnJvcik7XHJcblxyXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlID0ganNvbi5yZXN1bHQubWVzc2FnZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBlcnJvciA9XHJcbiAgICAgICAgICBcIkVycm9yIGVudGVyaW5nIGdpdmVhd2F5ISBNYWtlIHN1cmUgeW91IGhhdmUgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluIVwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgJHtjb25maWcuc2NoZW1lfTovLyR7Y29uZmlnLmFwaX0vYXBpL3YxL2dpdmVhd2F5L21ldGFgXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoanNvbi5zdGF0dXMgPT0gXCJlcnJvclwiKSByZXR1cm4gKGVycm9yID0ganNvbi5lcnJvcik7XHJcblxyXG4gICAgICBtZXRhID0ganNvbi5yZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBlcnJvciA9XHJcbiAgICAgICAgXCJGYWlsZWQgdG8gbG9hZCBnaXZlYXdheSBpbmZvISBNYWtlIHN1cmUgeW91IGhhdmUgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluIVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbnsjaWYgIW1ldGF9XHJcbiAgPExvYWRlciAvPlxyXG57OmVsc2V9XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS01MFxyXG4gICAgcHktMTIgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXgtdy1tZCB3LWZ1bGwgc3BhY2UteS04IGJvcmRlci1iLTIgcGItNFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzPVwibXgtYXV0byBoLWF1dG8gdy1mdWxsXCJcclxuICAgICAgICAgIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvNDUweDI1MFwiXHJcbiAgICAgICAgICBhbHQ9XCJXb3JrZmxvd1wiIC8+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICBFbnRlciB0aGUgZ2l2ZWF3YXkhXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICBFbmRzIGluOiB7bWV0YS5lbmRpbmd9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICBSZXdhcmQ6XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LWdyZWVuLTUwMFwiPlIke21ldGEuYW1vdW50fTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyXHJcbiAgICAgICAgICBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1tZCBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGVcclxuICAgICAgICAgIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTJcclxuICAgICAgICAgIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiPlxyXG4gICAgICAgICAgRW50ZXIhXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxoMiBjbGFzcz1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICA8Yj5Ob3RlOjwvYj5cclxuICAgICAgICAgIFlvdSBjYW4gZW50ZXIgdGhlIGdpdmVhd2F5IG11bHRpcGxlIHRpbWVzIGZvciBhIGhpZ2hlciBjaGFuY2Ugb2ZcclxuICAgICAgICAgIHdpbm5pbmcuXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LW1lZGl1bSBweS02XCI+VG9wIEVudHJpZXM8L2gxPlxyXG4gICAgICA8dWwgY2xhc3M9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICB7I2VhY2ggbWV0YS50b3AgYXMgdXNlcn1cclxuICAgICAgICAgIDxsaSBjbGFzcz1cInB5LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggc3BhY2UteC0xNlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJoLTE0IHctMTQgcm91bmRlZC1mdWxsXCIgc3JjPXt1c2VyLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTEgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtbWQgZm9udC1tZWRpdW1cIj57dXNlci51c2VybmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBDaGFuY2VzIG9mIHdpbm5pbmcgdGhlIGdpdmVhd2F5OiB7dXNlci5jaGFuY2V9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICB7L2VhY2h9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbnsvaWZ9XHJcblxyXG57I2lmIGVycm9yfVxyXG4gIDxFcnJvck1vZGFsXHJcbiAgICB7ZXJyb3J9XHJcbiAgICBvbjpjbG9zZT17KCkgPT4ge1xyXG4gICAgICBlcnJvciA9IG51bGw7XHJcbiAgICB9fSAvPlxyXG57L2lmfVxyXG5cclxueyNpZiBzdWNjZXNzTWVzc2FnZX1cclxuICA8U3VjY2Vzc1xyXG4gICAgbWVzc2FnZT17c3VjY2Vzc01lc3NhZ2V9XHJcbiAgICBvbjpjbG9zZT17KCkgPT4ge1xyXG4gICAgICBzdWNjZXNzTWVzc2FnZSA9IG51bGw7XHJcbiAgICB9fSAvPlxyXG57L2lmfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
