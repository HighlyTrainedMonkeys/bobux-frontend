import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as onMount, r as config, E as ErrorModal, N as globals, I as create_component, J as claim_component, K as mount_component, y as transition_in, w as transition_out, L as destroy_component, a as space, u as empty, j as claim_space, m as insert_dev, x as check_outros, h as detach_dev, B as group_outros, e as element, t as text, c as claim_element, f as children, g as claim_text, k as attr_dev, l as add_location, n as append_dev, O as set_input_value, F as listen_dev, P as prevent_default, o as noop, H as run_all } from './client.c1f065e8.js';
import { S as Success, L as Loader } from './Loader.9b3e143c.js';

/* src/routes/earn/promocodes.svelte generated by Svelte v3.31.2 */

const { console: console_1 } = globals;
const file = "src/routes/earn/promocodes.svelte";

// (46:0) {:else}
function create_else_block(ctx) {
	let div5;
	let div4;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let h2;
	let t1;
	let t2;
	let form;
	let input0;
	let t3;
	let div2;
	let div1;
	let label;
	let t4;
	let t5;
	let input1;
	let t6;
	let div3;
	let button;
	let t7;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			h2 = element("h2");
			t1 = text("Redeem a promocode");
			t2 = space();
			form = element("form");
			input0 = element("input");
			t3 = space();
			div2 = element("div");
			div1 = element("div");
			label = element("label");
			t4 = text("Code");
			t5 = space();
			input1 = element("input");
			t6 = space();
			div3 = element("div");
			button = element("button");
			t7 = text("Redeem");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
			t0 = claim_space(div0_nodes);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Redeem a promocode");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div4_nodes);
			form = claim_element(div4_nodes, "FORM", { class: true });
			var form_nodes = children(form);
			input0 = claim_element(form_nodes, "INPUT", { type: true, name: true, value: true });
			t3 = claim_space(form_nodes);
			div2 = claim_element(form_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			label = claim_element(div1_nodes, "LABEL", { for: true, class: true });
			var label_nodes = children(label);
			t4 = claim_text(label_nodes, "Code");
			label_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);

			input1 = claim_element(div1_nodes, "INPUT", {
				id: true,
				name: true,
				type: true,
				required: true,
				class: true,
				placeholder: true
			});

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t6 = claim_space(form_nodes);
			div3 = claim_element(form_nodes, "DIV", {});
			var div3_nodes = children(div3);
			button = claim_element(div3_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "Redeem");
			button_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "mx-auto h-auto w-full");
			if (img.src !== (img_src_value = "http://placehold.it/450x250")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Workflow");
			add_location(img, file, 51, 8, 1300);
			attr_dev(h2, "class", "mt-6 text-center text-3xl font-extrabold text-gray-900");
			add_location(h2, file, 55, 8, 1429);
			add_location(div0, file, 50, 6, 1285);
			attr_dev(input0, "type", "hidden");
			attr_dev(input0, "name", "remember");
			input0.value = "true";
			add_location(input0, file, 60, 8, 1636);
			attr_dev(label, "for", "promocode");
			attr_dev(label, "class", "sr-only");
			add_location(label, file, 63, 12, 1775);
			attr_dev(input1, "id", "promocode");
			attr_dev(input1, "name", "promocode");
			attr_dev(input1, "type", "text");
			input1.required = true;
			attr_dev(input1, "class", "appearance-none rounded-none relative block w-full px-3\r\n              py-2 border border-gray-300 placeholder-gray-500 text-gray-900\r\n              rounded-md focus:outline-none focus:ring-indigo-500\r\n              focus:border-indigo-500 focus:z-10 sm:text-sm");
			attr_dev(input1, "placeholder", "Code");
			add_location(input1, file, 64, 12, 1840);
			add_location(div1, file, 62, 10, 1756);
			attr_dev(div2, "class", "rounded-md shadow-sm -space-y-px");
			add_location(div2, file, 61, 8, 1698);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "group relative w-full flex justify-center py-2 px-4 border\r\n            border-transparent text-sm font-medium rounded-md text-white\r\n            bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2\r\n            focus:ring-offset-2 focus:ring-indigo-500");
			add_location(button, file, 79, 10, 2377);
			add_location(div3, file, 78, 8, 2360);
			attr_dev(form, "class", "mt-8 space-y-6");
			add_location(form, file, 59, 6, 1563);
			attr_dev(div4, "class", "max-w-md w-full space-y-8");
			add_location(div4, file, 49, 4, 1238);
			attr_dev(div5, "class", "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\r\n    sm:px-6 lg:px-8");
			add_location(div5, file, 46, 2, 1125);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, div0);
			append_dev(div0, img);
			append_dev(div0, t0);
			append_dev(div0, h2);
			append_dev(h2, t1);
			append_dev(div4, t2);
			append_dev(div4, form);
			append_dev(form, input0);
			append_dev(form, t3);
			append_dev(form, div2);
			append_dev(div2, div1);
			append_dev(div1, label);
			append_dev(label, t4);
			append_dev(div1, t5);
			append_dev(div1, input1);
			set_input_value(input1, /*code*/ ctx[1]);
			append_dev(form, t6);
			append_dev(form, div3);
			append_dev(div3, button);
			append_dev(button, t7);

			if (!mounted) {
				dispose = [
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen_dev(form, "submit", prevent_default(/*redeem*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*code*/ 2 && input1.value !== /*code*/ ctx[1]) {
				set_input_value(input1, /*code*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(46:0) {:else}",
		ctx
	});

	return block;
}

// (44:0) {#if !loaded}
function create_if_block_1(ctx) {
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
		id: create_if_block_1.name,
		type: "if",
		source: "(44:0) {#if !loaded}",
		ctx
	});

	return block;
}

// (94:0) {#if error}
function create_if_block(ctx) {
	let errormodal;
	let current;

	errormodal = new ErrorModal({
			props: { error: /*error*/ ctx[0] },
			$$inline: true
		});

	errormodal.$on("close", /*close_handler*/ ctx[5]);

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
		id: create_if_block.name,
		type: "if",
		source: "(94:0) {#if error}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block0;
	let t;
	let if_block1_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*loaded*/ ctx[2]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block1 = /*error*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			if_block0.l(nodes);
			t = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if_block0.p(ctx, dirty);

			if (/*error*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*error*/ 1) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
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
	validate_slots("Promocodes", slots, []);
	let loaded = false;
	let error;
	let code;
	let token;
	let successMessage;

	const redeem = async () => {
		try {
			let result = await fetch(`${config.scheme}://${config.api}/api/v1/promocode/redeem`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: { code, token }
			});

			let json = await result.json();
			if (json.status == "error") return $$invalidate(0, error = json.error);
			successMessage = json.result.message;
		} catch(error) {
			console.error(error);
			error = "Failed to redeem promocode! Make sure you have an internet connection and try again!";
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Promocodes> was created with unknown prop '${key}'`);
	});

	function input1_input_handler() {
		code = this.value;
		$$invalidate(1, code);
	}

	const close_handler = () => {
		$$invalidate(0, error = null);
	};

	$$self.$capture_state = () => ({
		onMount,
		config,
		ErrorModal,
		Success,
		Loader,
		loaded,
		error,
		code,
		token,
		successMessage,
		redeem
	});

	$$self.$inject_state = $$props => {
		if ("loaded" in $$props) $$invalidate(2, loaded = $$props.loaded);
		if ("error" in $$props) $$invalidate(0, error = $$props.error);
		if ("code" in $$props) $$invalidate(1, code = $$props.code);
		if ("token" in $$props) token = $$props.token;
		if ("successMessage" in $$props) successMessage = $$props.successMessage;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [error, code, loaded, redeem, input1_input_handler, close_handler];
}

class Promocodes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Promocodes",
			options,
			id: create_fragment.name
		});
	}
}

export default Promocodes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW9jb2Rlcy4yNjFlYzY3Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9lYXJuL3Byb21vY29kZXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuICBpbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuICBpbXBvcnQgRXJyb3JNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9FcnJvck1vZGFsLnN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBTdWNjZXNzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1N1Y2Nlc3Muc3ZlbHRlXCI7XHJcbiAgaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkZXIuc3ZlbHRlXCI7XHJcblxyXG4gIC8vVE9ETzogaW1wbGVtZW50IGNhcHRjaGFcclxuICBsZXQgbG9hZGVkID0gZmFsc2U7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGxldCBjb2RlO1xyXG4gIGxldCB0b2tlbjtcclxuICBsZXQgc3VjY2Vzc01lc3NhZ2U7XHJcblxyXG4gIGNvbnN0IHJlZGVlbSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgJHtjb25maWcuc2NoZW1lfTovLyR7Y29uZmlnLmFwaX0vYXBpL3YxL3Byb21vY29kZS9yZWRlZW1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChqc29uLnN0YXR1cyA9PSBcImVycm9yXCIpIHJldHVybiAoZXJyb3IgPSBqc29uLmVycm9yKTtcclxuXHJcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlID0ganNvbi5yZXN1bHQubWVzc2FnZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBlcnJvciA9XHJcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVkZWVtIHByb21vY29kZSEgTWFrZSBzdXJlIHlvdSBoYXZlIGFuIGludGVybmV0IGNvbm5lY3Rpb24gYW5kIHRyeSBhZ2FpbiFcIjtcclxuICAgIH1cclxuICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbnsjaWYgIWxvYWRlZH1cclxuICA8TG9hZGVyIC8+XHJcbns6ZWxzZX1cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTUwIHB5LTEyIHB4LTRcclxuICAgIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1heC13LW1kIHctZnVsbCBzcGFjZS15LThcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzcz1cIm14LWF1dG8gaC1hdXRvIHctZnVsbFwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzQ1MHgyNTBcIlxyXG4gICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIiAvPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cIm10LTYgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgUmVkZWVtIGEgcHJvbW9jb2RlXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtIGNsYXNzPVwibXQtOCBzcGFjZS15LTZcIiBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e3JlZGVlbX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiB2YWx1ZT1cInRydWVcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLW1kIHNoYWRvdy1zbSAtc3BhY2UteS1weFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb21vY29kZVwiIGNsYXNzPVwic3Itb25seVwiPkNvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBiaW5kOnZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgICAgIGlkPVwicHJvbW9jb2RlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicHJvbW9jb2RlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTNcclxuICAgICAgICAgICAgICBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcGxhY2Vob2xkZXItZ3JheS01MDAgdGV4dC1ncmF5LTkwMFxyXG4gICAgICAgICAgICAgIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMFxyXG4gICAgICAgICAgICAgIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb2RlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJncm91cCByZWxhdGl2ZSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyXHJcbiAgICAgICAgICAgIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZVxyXG4gICAgICAgICAgICBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMlxyXG4gICAgICAgICAgICBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgICBSZWRlZW1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuey9pZn1cclxuXHJcbnsjaWYgZXJyb3J9XHJcbiAgPEVycm9yTW9kYWxcclxuICAgIHtlcnJvcn1cclxuICAgIG9uOmNsb3NlPXsoKSA9PiB7XHJcbiAgICAgIGVycm9yID0gbnVsbDtcclxuICAgIH19IC8+XHJcbnsvaWZ9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FpRTBCLEdBQUk7Ozs7Ozs7OzsyREFOK0IsR0FBTTs7Ozs7Ozt1REFNekMsR0FBSTtxQ0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBdEJ4QixHQUFNOzs7Ozs7MkJBa0RQLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FyRkosTUFBTSxHQUFHLEtBQUs7S0FDZCxLQUFLO0tBQ0wsSUFBSTtLQUNKLEtBQUs7S0FDTCxjQUFjOztPQUVaLE1BQU07O09BRUosTUFBTSxTQUFTLEtBQUssSUFDbkIsTUFBTSxDQUFDLE1BQU0sTUFBTSxNQUFNLENBQUMsR0FBRztJQUU5QixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sSUFDTCxjQUFjLEVBQUUsa0JBQWtCO0lBRXBDLElBQUksSUFDRixJQUFJLEVBQ0osS0FBSzs7O09BS1AsSUFBSSxTQUFTLE1BQU0sQ0FBQyxJQUFJO09BRXhCLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyx5QkFBVSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7R0FFdEQsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztVQUM3QixLQUFLO0dBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLO0dBQ25CLEtBQUssR0FDSCxzRkFBc0Y7Ozs7Ozs7Ozs7O0VBMkJwRSxJQUFJOzs7OztrQkFnQ3hCLEtBQUssR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
