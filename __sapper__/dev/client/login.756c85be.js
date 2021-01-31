import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.c1f065e8.js';

/* src/routes/staff/login.svelte generated by Svelte v3.31.2 */

const file = "src/routes/staff/login.svelte";

function create_fragment(ctx) {
	let div6;
	let div5;
	let div0;
	let h2;
	let t0;
	let t1;
	let form;
	let input0;
	let t2;
	let div3;
	let div1;
	let label0;
	let t3;
	let t4;
	let input1;
	let t5;
	let div2;
	let label1;
	let t6;
	let t7;
	let input2;
	let t8;
	let div4;
	let button;
	let t9;

	const block = {
		c: function create() {
			div6 = element("div");
			div5 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Staff Login");
			t1 = space();
			form = element("form");
			input0 = element("input");
			t2 = space();
			div3 = element("div");
			div1 = element("div");
			label0 = element("label");
			t3 = text("Email address");
			t4 = space();
			input1 = element("input");
			t5 = space();
			div2 = element("div");
			label1 = element("label");
			t6 = text("Password");
			t7 = space();
			input2 = element("input");
			t8 = space();
			div4 = element("div");
			button = element("button");
			t9 = text("Sign in");
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", {});
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Staff Login");
			h2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			form = claim_element(div5_nodes, "FORM", { class: true, action: true, method: true });
			var form_nodes = children(form);
			input0 = claim_element(form_nodes, "INPUT", { type: true, name: true, value: true });
			t2 = claim_space(form_nodes);
			div3 = claim_element(form_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			label0 = claim_element(div1_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t3 = claim_text(label0_nodes, "Email address");
			label0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);

			input1 = claim_element(div1_nodes, "INPUT", {
				id: true,
				name: true,
				type: true,
				autocomplete: true,
				required: true,
				class: true,
				placeholder: true
			});

			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			label1 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t6 = claim_text(label1_nodes, "Password");
			label1_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);

			input2 = claim_element(div2_nodes, "INPUT", {
				id: true,
				name: true,
				type: true,
				autocomplete: true,
				required: true,
				class: true,
				placeholder: true
			});

			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t8 = claim_space(form_nodes);
			div4 = claim_element(form_nodes, "DIV", {});
			var div4_nodes = children(div4);
			button = claim_element(div4_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t9 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "mt-6 text-center text-3xl font-extrabold text-gray-900");
			add_location(h2, file, 5, 6, 165);
			add_location(div0, file, 4, 4, 152);
			attr_dev(input0, "type", "hidden");
			attr_dev(input0, "name", "remember");
			input0.value = "true";
			add_location(input0, file, 10, 6, 346);
			attr_dev(label0, "for", "email-address");
			attr_dev(label0, "class", "sr-only");
			add_location(label0, file, 13, 10, 479);
			attr_dev(input1, "id", "email-address");
			attr_dev(input1, "name", "email");
			attr_dev(input1, "type", "email");
			attr_dev(input1, "autocomplete", "email");
			input1.required = true;
			attr_dev(input1, "class", "appearance-none rounded-none relative block w-full px-3 py-2\r\n            border border-gray-300 placeholder-gray-500 text-gray-900\r\n            rounded-t-md focus:outline-none focus:ring-blue-500\r\n            focus:border-blue-500 focus:z-10 sm:text-sm");
			attr_dev(input1, "placeholder", "Email address");
			add_location(input1, file, 14, 10, 555);
			add_location(div1, file, 12, 8, 462);
			attr_dev(label1, "for", "password");
			attr_dev(label1, "class", "sr-only");
			add_location(label1, file, 27, 10, 1063);
			attr_dev(input2, "id", "password");
			attr_dev(input2, "name", "password");
			attr_dev(input2, "type", "password");
			attr_dev(input2, "autocomplete", "current-password");
			input2.required = true;
			attr_dev(input2, "class", "appearance-none rounded-none relative block w-full px-3 py-2\r\n            border border-gray-300 placeholder-gray-500 text-gray-900\r\n            rounded-b-md focus:outline-none focus:ring-blue-500\r\n            focus:border-blue-500 focus:z-10 sm:text-sm");
			attr_dev(input2, "placeholder", "Password");
			add_location(input2, file, 28, 10, 1129);
			add_location(div2, file, 26, 8, 1046);
			attr_dev(div3, "class", "rounded-md shadow-sm -space-y-px");
			add_location(div3, file, 11, 6, 406);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "group relative w-full flex justify-center py-2 px-4 border\r\n          border-transparent text-sm font-medium rounded-md text-white\r\n          bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2\r\n          focus:ring-offset-2 focus:ring-blue-500");
			add_location(button, file, 43, 8, 1656);
			add_location(div4, file, 42, 6, 1641);
			attr_dev(form, "class", "mt-8 space-y-6");
			attr_dev(form, "action", "#");
			attr_dev(form, "method", "POST");
			add_location(form, file, 9, 4, 284);
			attr_dev(div5, "class", "max-w-md w-full space-y-8");
			add_location(div5, file, 3, 2, 107);
			attr_dev(div6, "class", "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4\r\n  sm:px-6 lg:px-8");
			add_location(div6, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div5);
			append_dev(div5, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div5, t1);
			append_dev(div5, form);
			append_dev(form, input0);
			append_dev(form, t2);
			append_dev(form, div3);
			append_dev(div3, div1);
			append_dev(div1, label0);
			append_dev(label0, t3);
			append_dev(div1, t4);
			append_dev(div1, input1);
			append_dev(div3, t5);
			append_dev(div3, div2);
			append_dev(div2, label1);
			append_dev(label1, t6);
			append_dev(div2, t7);
			append_dev(div2, input2);
			append_dev(form, t8);
			append_dev(form, div4);
			append_dev(div4, button);
			append_dev(button, t9);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
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
	validate_slots("Login", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	return [];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uNzU2Yzg1YmUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
