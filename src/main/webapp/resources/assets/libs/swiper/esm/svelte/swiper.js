/* swiper.svelte generated by Svelte v3.37.0 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	binding_callbacks,
	compute_rest_props,
	create_slot,
	detach,
	element,
	exclude_internal_props,
	get_spread_update,
	init,
	insert,
	noop,
	safe_not_equal,
	set_attributes,
	space,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import {
	onMount,
	onDestroy,
	afterUpdate,
	createEventDispatcher,
	tick,
	beforeUpdate
} from "svelte";

import { getParams } from "./get-params";
import { initSwiper, mountSwiper } from "./init-swiper";

import {
	needsScrollbar,
	needsNavigation,
	needsPagination,
	uniqueClasses,
	extend
} from "./utils";

import { getChangedParams } from "./get-changed-params";
import { updateSwiper } from "./update-swiper";
const get_container_end_slot_changes = dirty => ({ virtualData: dirty & /*virtualData*/ 512 });
const get_container_end_slot_context = ctx => ({ virtualData: /*virtualData*/ ctx[9] });
const get_wrapper_end_slot_changes = dirty => ({ virtualData: dirty & /*virtualData*/ 512 });
const get_wrapper_end_slot_context = ctx => ({ virtualData: /*virtualData*/ ctx[9] });
const get_default_slot_changes = dirty => ({ virtualData: dirty & /*virtualData*/ 512 });
const get_default_slot_context = ctx => ({ virtualData: /*virtualData*/ ctx[9] });
const get_wrapper_start_slot_changes = dirty => ({ virtualData: dirty & /*virtualData*/ 512 });
const get_wrapper_start_slot_context = ctx => ({ virtualData: /*virtualData*/ ctx[9] });
const get_container_start_slot_changes = dirty => ({ virtualData: dirty & /*virtualData*/ 512 });
const get_container_start_slot_context = ctx => ({ virtualData: /*virtualData*/ ctx[9] });

// (147:2) {#if needsNavigation(swiperParams)}
function create_if_block_2(ctx) {
	let div0;
	let t;
	let div1;

	return {
		c() {
			div0 = element("div");
			t = space();
			div1 = element("div");
			attr(div0, "class", "swiper-button-prev");
			attr(div1, "class", "swiper-button-next");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			/*div0_binding*/ ctx[13](div0);
			insert(target, t, anchor);
			insert(target, div1, anchor);
			/*div1_binding*/ ctx[14](div1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div0);
			/*div0_binding*/ ctx[13](null);
			if (detaching) detach(t);
			if (detaching) detach(div1);
			/*div1_binding*/ ctx[14](null);
		}
	};
}

// (151:2) {#if needsScrollbar(swiperParams)}
function create_if_block_1(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			attr(div, "class", "swiper-scrollbar");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			/*div_binding*/ ctx[15](div);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
			/*div_binding*/ ctx[15](null);
		}
	};
}

// (154:2) {#if needsPagination(swiperParams)}
function create_if_block(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			attr(div, "class", "swiper-pagination");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			/*div_binding_1*/ ctx[16](div);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
			/*div_binding_1*/ ctx[16](null);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let t0;
	let show_if_2 = needsNavigation(/*swiperParams*/ ctx[2]);
	let t1;
	let show_if_1 = needsScrollbar(/*swiperParams*/ ctx[2]);
	let t2;
	let show_if = needsPagination(/*swiperParams*/ ctx[2]);
	let t3;
	let div0;
	let t4;
	let t5;
	let t6;
	let div1_class_value;
	let current;
	const container_start_slot_template = /*#slots*/ ctx[12]["container-start"];
	const container_start_slot = create_slot(container_start_slot_template, ctx, /*$$scope*/ ctx[11], get_container_start_slot_context);
	let if_block0 = show_if_2 && create_if_block_2(ctx);
	let if_block1 = show_if_1 && create_if_block_1(ctx);
	let if_block2 = show_if && create_if_block(ctx);
	const wrapper_start_slot_template = /*#slots*/ ctx[12]["wrapper-start"];
	const wrapper_start_slot = create_slot(wrapper_start_slot_template, ctx, /*$$scope*/ ctx[11], get_wrapper_start_slot_context);
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], get_default_slot_context);
	const wrapper_end_slot_template = /*#slots*/ ctx[12]["wrapper-end"];
	const wrapper_end_slot = create_slot(wrapper_end_slot_template, ctx, /*$$scope*/ ctx[11], get_wrapper_end_slot_context);
	const container_end_slot_template = /*#slots*/ ctx[12]["container-end"];
	const container_end_slot = create_slot(container_end_slot_template, ctx, /*$$scope*/ ctx[11], get_container_end_slot_context);

	let div1_levels = [
		{
			class: div1_class_value = uniqueClasses(`${/*containerClasses*/ ctx[1]}${/*className*/ ctx[0] ? ` ${/*className*/ ctx[0]}` : ""}`)
		},
		/*restProps*/ ctx[3]
	];

	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	return {
		c() {
			div1 = element("div");
			if (container_start_slot) container_start_slot.c();
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			if (if_block2) if_block2.c();
			t3 = space();
			div0 = element("div");
			if (wrapper_start_slot) wrapper_start_slot.c();
			t4 = space();
			if (default_slot) default_slot.c();
			t5 = space();
			if (wrapper_end_slot) wrapper_end_slot.c();
			t6 = space();
			if (container_end_slot) container_end_slot.c();
			attr(div0, "class", "swiper-wrapper");
			set_attributes(div1, div1_data);
		},
		m(target, anchor) {
			insert(target, div1, anchor);

			if (container_start_slot) {
				container_start_slot.m(div1, null);
			}

			append(div1, t0);
			if (if_block0) if_block0.m(div1, null);
			append(div1, t1);
			if (if_block1) if_block1.m(div1, null);
			append(div1, t2);
			if (if_block2) if_block2.m(div1, null);
			append(div1, t3);
			append(div1, div0);

			if (wrapper_start_slot) {
				wrapper_start_slot.m(div0, null);
			}

			append(div0, t4);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append(div0, t5);

			if (wrapper_end_slot) {
				wrapper_end_slot.m(div0, null);
			}

			append(div1, t6);

			if (container_end_slot) {
				container_end_slot.m(div1, null);
			}

			/*div1_binding_1*/ ctx[17](div1);
			current = true;
		},
		p(ctx, [dirty]) {
			if (container_start_slot) {
				if (container_start_slot.p && dirty & /*$$scope, virtualData*/ 2560) {
					update_slot(container_start_slot, container_start_slot_template, ctx, /*$$scope*/ ctx[11], dirty, get_container_start_slot_changes, get_container_start_slot_context);
				}
			}

			if (dirty & /*swiperParams*/ 4) show_if_2 = needsNavigation(/*swiperParams*/ ctx[2]);

			if (show_if_2) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, t1);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*swiperParams*/ 4) show_if_1 = needsScrollbar(/*swiperParams*/ ctx[2]);

			if (show_if_1) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div1, t2);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*swiperParams*/ 4) show_if = needsPagination(/*swiperParams*/ ctx[2]);

			if (show_if) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(div1, t3);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (wrapper_start_slot) {
				if (wrapper_start_slot.p && dirty & /*$$scope, virtualData*/ 2560) {
					update_slot(wrapper_start_slot, wrapper_start_slot_template, ctx, /*$$scope*/ ctx[11], dirty, get_wrapper_start_slot_changes, get_wrapper_start_slot_context);
				}
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, virtualData*/ 2560) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}

			if (wrapper_end_slot) {
				if (wrapper_end_slot.p && dirty & /*$$scope, virtualData*/ 2560) {
					update_slot(wrapper_end_slot, wrapper_end_slot_template, ctx, /*$$scope*/ ctx[11], dirty, get_wrapper_end_slot_changes, get_wrapper_end_slot_context);
				}
			}

			if (container_end_slot) {
				if (container_end_slot.p && dirty & /*$$scope, virtualData*/ 2560) {
					update_slot(container_end_slot, container_end_slot_template, ctx, /*$$scope*/ ctx[11], dirty, get_container_end_slot_changes, get_container_end_slot_context);
				}
			}

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty & /*containerClasses, className*/ 3 && div1_class_value !== (div1_class_value = uniqueClasses(`${/*containerClasses*/ ctx[1]}${/*className*/ ctx[0] ? ` ${/*className*/ ctx[0]}` : ""}`))) && { class: div1_class_value },
				dirty & /*restProps*/ 8 && /*restProps*/ ctx[3]
			]));
		},
		i(local) {
			if (current) return;
			transition_in(container_start_slot, local);
			transition_in(wrapper_start_slot, local);
			transition_in(default_slot, local);
			transition_in(wrapper_end_slot, local);
			transition_in(container_end_slot, local);
			current = true;
		},
		o(local) {
			transition_out(container_start_slot, local);
			transition_out(wrapper_start_slot, local);
			transition_out(default_slot, local);
			transition_out(wrapper_end_slot, local);
			transition_out(container_end_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (container_start_slot) container_start_slot.d(detaching);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (wrapper_start_slot) wrapper_start_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			if (wrapper_end_slot) wrapper_end_slot.d(detaching);
			if (container_end_slot) container_end_slot.d(detaching);
			/*div1_binding_1*/ ctx[17](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["class","swiper"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	const dispatch = createEventDispatcher();
	let { class: className = undefined } = $$props;
	let containerClasses = "swiper-container";
	let breakpointChanged = false;
	let swiperInstance = null;
	let oldPassedParams = null;
	let paramsData;
	let swiperParams;
	let passedParams;
	let restProps;
	let swiperEl = null;
	let prevEl = null;
	let nextEl = null;
	let scrollbarEl = null;
	let paginationEl = null;
	let virtualData = { slides: [] };

	function swiper() {
		return swiperInstance;
	}

	const setVirtualData = data => {
		$$invalidate(9, virtualData = data);

		tick().then(() => {
			swiperInstance.$wrapperEl.children(".swiper-slide").each(el => {
				if (el.onSwiper) el.onSwiper(swiperInstance);
			});

			swiperInstance.updateSlides();
			swiperInstance.updateProgress();
			swiperInstance.updateSlidesClasses();

			if (swiperInstance.lazy && swiperInstance.params.lazy.enabled) {
				swiperInstance.lazy.load();
			}
		});
	};

	const calcParams = () => {
		paramsData = getParams($$restProps);
		$$invalidate(2, swiperParams = paramsData.params);
		passedParams = paramsData.passedParams;
		$$invalidate(3, restProps = paramsData.rest);
	};

	calcParams();
	oldPassedParams = passedParams;

	const onBeforeBreakpoint = () => {
		breakpointChanged = true;
	};

	swiperParams.onAny = (event, ...args) => {
		dispatch(event, [args]);
	};

	Object.assign(swiperParams.on, {
		_beforeBreakpoint: onBeforeBreakpoint,
		_containerClasses(_swiper, classes) {
			$$invalidate(1, containerClasses = classes);
		}
	});

	swiperInstance = initSwiper(swiperParams);

	if (swiperInstance.virtual && swiperInstance.params.virtual.enabled) {
		const extendWith = {
			cache: false,
			renderExternal: data => {
				setVirtualData(data);

				if (swiperParams.virtual && swiperParams.virtual.renderExternal) {
					swiperParams.virtual.renderExternal(data);
				}
			},
			renderExternalUpdate: false
		};

		extend(swiperInstance.params.virtual, extendWith);
		extend(swiperInstance.originalParams.virtual, extendWith);
	}

	onMount(() => {
		if (!swiperEl) return;

		mountSwiper(
			{
				el: swiperEl,
				nextEl,
				prevEl,
				paginationEl,
				scrollbarEl,
				swiper: swiperInstance
			},
			swiperParams
		);

		dispatch("swiper", [swiperInstance]);
		if (swiperParams.virtual) return;

		swiperInstance.slides.each(el => {
			if (el.onSwiper) el.onSwiper(swiperInstance);
		});
	});

	afterUpdate(() => {
		if (!swiperInstance) return;
		calcParams();
		const changedParams = getChangedParams(passedParams, oldPassedParams);

		if ((changedParams.length || breakpointChanged) && swiperInstance && !swiperInstance.destroyed) {
			updateSwiper(swiperInstance, passedParams, changedParams);
		}

		breakpointChanged = false;
		oldPassedParams = passedParams;
	});

	onDestroy(() => {
		if (typeof window !== "undefined" && swiperInstance && !swiperInstance.destroyed) {
			swiperInstance.destroy(true, false);
		}
	});

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			prevEl = $$value;
			$$invalidate(5, prevEl);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			nextEl = $$value;
			$$invalidate(6, nextEl);
		});
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			scrollbarEl = $$value;
			$$invalidate(7, scrollbarEl);
		});
	}

	function div_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			paginationEl = $$value;
			$$invalidate(8, paginationEl);
		});
	}

	function div1_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			swiperEl = $$value;
			$$invalidate(4, swiperEl);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(27, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("class" in $$new_props) $$invalidate(0, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	return [
		className,
		containerClasses,
		swiperParams,
		restProps,
		swiperEl,
		prevEl,
		nextEl,
		scrollbarEl,
		paginationEl,
		virtualData,
		swiper,
		$$scope,
		slots,
		div0_binding,
		div1_binding,
		div_binding,
		div_binding_1,
		div1_binding_1
	];
}

class Swiper extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { class: 0, swiper: 10 });
	}

	get swiper() {
		return this.$$.ctx[10];
	}
}

export default Swiper;