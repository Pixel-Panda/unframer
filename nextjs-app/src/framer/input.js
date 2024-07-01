/* eslint-disable */
'use client';
import './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/2As9QaXWbefma9cgsUwa/KKxLw6MT9WlqJHt4qSZb/QyfcXvqQb.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  FormPlainTextInput,
  RichText,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['HADfUKD9c', 'yGwCuCsVV', 'sqZIXSHj4',];
var serializationHash = 'framer-lNfaH';
var variantClassNames = { HADfUKD9c: 'framer-v-1r2g3dq', sqZIXSHj4: 'framer-v-1d6b55l', yGwCuCsVV: 'framer-v-hf084k', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { Blur: 'sqZIXSHj4', Default: 'HADfUKD9c', Focus: 'yGwCuCsVV', };
var getProps = ({ height, id, inputName, width, ...props },) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return {
    ...props,
    OyNURvO2c: (_ref = inputName !== null && inputName !== void 0 ? inputName : props.OyNURvO2c) !== null && _ref !== void 0
      ? _ref
      : 'Email',
    variant:
      (_ref1 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : 'HADfUKD9c',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, OyNURvO2c, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'HADfUKD9c',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onFocus1exwwit = activeVariantCallback(async (...args) => {
    setVariant('yGwCuCsVV',);
  },);
  const onBlur1g587fv = activeVariantCallback(async (...args) => {
    var _args__target_value, _args__target, _args_;
    const inputValue = (_args_ = args[0]) === null || _args_ === void 0
      ? void 0
      : (_args__target = _args_.target) === null || _args__target === void 0
      ? void 0
      : (_args__target_value = _args__target.value) === null || _args__target_value === void 0
      ? void 0
      : _args__target_value.trim();
    if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) > 0) {
      setVariant('sqZIXSHj4',);
    }
    if (!inputValue) {
      setVariant('HADfUKD9c',);
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.label, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1r2g3dq', className, classNames,),
          'data-framer-name': 'Default',
          layoutDependency,
          layoutId: 'HADfUKD9c',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides(
            { sqZIXSHj4: { 'data-framer-name': 'Blur', }, yGwCuCsVV: { 'data-framer-name': 'Focus', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: {
                    '--font-selector': 'R0Y7SW50ZXItcmVndWxhcg==',
                    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-size': '14px',
                    '--framer-line-height': '1em',
                    '--framer-text-alignment': 'left',
                    '--framer-text-color': 'var(--extracted-r6o4lv, rgb(153, 153, 153))',
                  },
                  children: 'Email',
                },),
              },),
              className: 'framer-13hfl7',
              fonts: ['GF;Inter-regular',],
              layoutDependency,
              layoutId: 'lQDbXdAMx',
              style: { '--extracted-r6o4lv': 'rgb(153, 153, 153)', },
              verticalAlignment: 'top',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  sqZIXSHj4: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--font-selector': 'R0Y7SW50ZXItcmVndWxhcg==',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-line-height': '1em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(153, 153, 153))',
                        },
                        children: 'Email',
                      },),
                    },),
                  },
                  yGwCuCsVV: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--font-selector': 'R0Y7SW50ZXItcmVndWxhcg==',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-line-height': '1em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(153, 153, 153))',
                        },
                        children: 'Email',
                      },),
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-n4hue9',
              'data-framer-name': 'Wrapper',
              layoutDependency,
              layoutId: 'YKLeMYEHh',
              children: [
                /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-1g3qbps',
                  'data-framer-name': 'Backdrop',
                  layoutDependency,
                  layoutId: 'ucSUgKHyd',
                  style: {
                    backgroundColor: 'rgba(0, 153, 255, 0.2)',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                  variants: {
                    yGwCuCsVV: {
                      borderBottomLeftRadius: 13,
                      borderBottomRightRadius: 13,
                      borderTopLeftRadius: 13,
                      borderTopRightRadius: 13,
                    },
                  },
                },),
                /* @__PURE__ */ _jsx(FormPlainTextInput, {
                  autofillEnabled: false,
                  className: 'framer-liwqks',
                  inputName: OyNURvO2c,
                  layoutDependency,
                  layoutId: 'TrkPnDEkb',
                  onBlur: onBlur1g587fv,
                  onFocus: onFocus1exwwit,
                  placeholder: '',
                  required: true,
                  style: {
                    '--framer-input-background': 'rgb(255, 255, 255)',
                    '--framer-input-border-radius-bottom-left': '10px',
                    '--framer-input-border-radius-bottom-right': '10px',
                    '--framer-input-border-radius-top-left': '10px',
                    '--framer-input-border-radius-top-right': '10px',
                    '--framer-input-box-shadow':
                      '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 0px 0px rgb(0, 153, 255)',
                    '--framer-input-font-color': 'rgb(0, 0, 0)',
                    '--framer-input-icon-mask-image': 'none',
                    '--framer-input-placeholder-color': 'rgb(153, 153, 153)',
                  },
                  type: 'email',
                  variants: {
                    yGwCuCsVV: {
                      '--framer-input-box-shadow':
                        '0px 0px 0px 1px rgba(0, 0, 0, 0), 0px 1px 0px 0px rgba(0, 0, 0, 0), 0px 2px 4px 0px rgba(0, 0, 0, 0), 0px 0px 0px 1px rgb(0, 153, 255)',
                    },
                  },
                },),
                /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-51cx4y',
                  'data-framer-name': 'Icon',
                  layoutDependency,
                  layoutId: 'WCuWgDhU6',
                  style: { filter: 'grayscale(1)', opacity: 0.5, WebkitFilter: 'grayscale(1)', },
                  variants: { yGwCuCsVV: { filter: 'grayscale(0)', opacity: 1, WebkitFilter: 'grayscale(0)', }, },
                  children: /* @__PURE__ */ _jsx(SVG, {
                    className: 'framer-1784djj',
                    'data-framer-name': 'Icon',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'A0V6IkeCI',
                    opacity: 1,
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 1.25 4.75 C 1.25 3.645 2.145 2.75 3.25 2.75 L 12.75 2.75 C 13.855 2.75 14.75 3.645 14.75 4.75 L 14.75 11.25 C 14.75 12.355 13.855 13.25 12.75 13.25 L 3.25 13.25 C 2.145 13.25 1.25 12.355 1.25 11.25 Z" fill="transparent" stroke-width="1.5" stroke="rgb(0, 153, 255)"></path><path d="M 1.25 5.5 L 8 9.5 L 14.75 5.5" fill="transparent" stroke-width="1.5" stroke="rgb(0, 153, 255)" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                    svgContentId: 12485813751,
                    withExternalLayout: true,
                  },),
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-lNfaH.framer-10iv1r4, .framer-lNfaH .framer-10iv1r4 { display: block; }',
  '.framer-lNfaH.framer-1r2g3dq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 65px; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }',
  '.framer-lNfaH .framer-13hfl7 { bottom: 13px; flex: none; height: auto; left: 38px; pointer-events: none; position: absolute; white-space: pre; width: auto; z-index: 1; }',
  '.framer-lNfaH .framer-n4hue9 { flex: none; height: 40px; overflow: visible; position: relative; width: 240px; }',
  '.framer-lNfaH .framer-1g3qbps { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-lNfaH .framer-liwqks { --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1em; --framer-input-font-size: 14px; --framer-input-font-weight: 400px; --framer-input-padding: 12px 12px 12px 38px; flex: none; height: 40px; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-lNfaH .framer-51cx4y { flex: none; height: 16px; left: 12px; overflow: visible; position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 16px; z-index: 1; }',
  '.framer-lNfaH .framer-1784djj { flex: none; height: 16px; left: calc(50.00000000000002% - 16px / 2); position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 16px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lNfaH.framer-1r2g3dq { gap: 0px; } .framer-lNfaH.framer-1r2g3dq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-lNfaH.framer-1r2g3dq > :first-child { margin-top: 0px; } .framer-lNfaH.framer-1r2g3dq > :last-child { margin-bottom: 0px; } }',
  '.framer-lNfaH.framer-v-hf084k.framer-1r2g3dq, .framer-lNfaH.framer-v-1d6b55l.framer-1r2g3dq { height: 65px; }',
  '.framer-lNfaH.framer-v-hf084k .framer-13hfl7, .framer-lNfaH.framer-v-1d6b55l .framer-13hfl7 { bottom: unset; left: unset; position: relative; }',
  '.framer-lNfaH.framer-v-hf084k .framer-1g3qbps { bottom: -3px; left: -3px; right: -3px; top: -3px; }',
];
var FramerQyfcXvqQb = withCSS(Component, css, 'framer-lNfaH',);
var stdin_default = FramerQyfcXvqQb;
FramerQyfcXvqQb.displayName = 'Input';
FramerQyfcXvqQb.defaultProps = { height: 65, width: 240, };
addPropertyControls(FramerQyfcXvqQb, {
  variant: {
    options: ['HADfUKD9c', 'yGwCuCsVV', 'sqZIXSHj4',],
    optionTitles: ['Default', 'Focus', 'Blur',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  OyNURvO2c: { defaultValue: 'Email', title: 'inputName', type: ControlType.String, },
},);
addFonts(FramerQyfcXvqQb, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2',
    weight: '400',
  },],
},], { supportsExplicitInterCodegen: true, },);

// virtual:input
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var input_default = stdin_default;
export { input_default as default, };
