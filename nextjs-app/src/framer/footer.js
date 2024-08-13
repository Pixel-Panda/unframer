// @ts-nocheck
/* eslint-disable */
'use client';
import './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/8jFow9biiJtXxZV7jt8c/Bm4cyZ36BVifUDAfqCs4/zOCvedWwi.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  getFontsFromSharedStyle,
  Link,
  RichText,
  SVG,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/eNnQ1ZdHUmzsHk1aAI7N/mHTG6Ne7cOnjVjw9xku4/dSHL72ao3.js
import { fontStore, } from 'unframer';
fontStore.loadFonts(['GF;Inter-600', 'GF;Inter-900',],);
var fonts = [{
  family: 'Inter',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2',
  weight: '600',
}, {
  family: 'Inter',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZ1rib2Bg-4.woff2',
  weight: '900',
},];
var css = [
  '.framer-oQNML .framer-styles-preset-yzljla:not(.rich-text-wrapper), .framer-oQNML .framer-styles-preset-yzljla.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-letter-spacing: -0.4px; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-33722da1-56ef-4815-82ed-442105eb06b1, #000000); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = 'framer-oQNML';

// https :https://framerusercontent.com/modules/bGOTCzIGxoWJr3Wuz4mh/tHLMvDlvPZRc4dqzFgO2/i59KN99_1.js
import { fontStore as fontStore2, } from 'unframer';
fontStore2.loadFonts(['GF;Inter-500', 'GF;Inter-700',],);
var fonts2 = [{
  family: 'Inter',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2',
  weight: '500',
}, {
  family: 'Inter',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2',
  weight: '700',
},];
var css2 = [
  '.framer-21bsw .framer-styles-preset-qemwmo:not(.rich-text-wrapper), .framer-21bsw .framer-styles-preset-qemwmo.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.01em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-text-decoration: none; --framer-text-transform: none; }',
  '@media (max-width: 1199px) and (min-width: 810px) { .framer-21bsw .framer-styles-preset-qemwmo:not(.rich-text-wrapper), .framer-21bsw .framer-styles-preset-qemwmo.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.01em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-text-decoration: none; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-21bsw .framer-styles-preset-qemwmo:not(.rich-text-wrapper), .framer-21bsw .framer-styles-preset-qemwmo.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.01em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-text-decoration: none; --framer-text-transform: none; } }',
];
var className2 = 'framer-21bsw';

// https :https://framerusercontent.com/modules/irLlCycN2tZvFl2yRxLv/ot6jspJ2FWpXQbiTXl7S/LlxBF921R.js
import { fontStore as fontStore3, } from 'unframer';
fontStore3.loadFonts(['GF;Inter-500', 'GF;Inter-700',],);
var fonts3 = [{
  family: 'Inter',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2',
  weight: '500',
}, {
  family: 'Inter',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2',
  weight: '700',
},];
var css3 = [
  '.framer-HT94Y .framer-styles-preset-d36q30:not(.rich-text-wrapper), .framer-HT94Y .framer-styles-preset-d36q30.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.1px; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-text-decoration: none; --framer-text-transform: none; }',
  '@media (max-width: 1199px) and (min-width: 810px) { .framer-HT94Y .framer-styles-preset-d36q30:not(.rich-text-wrapper), .framer-HT94Y .framer-styles-preset-d36q30.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.1px; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-text-decoration: none; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-HT94Y .framer-styles-preset-d36q30:not(.rich-text-wrapper), .framer-HT94Y .framer-styles-preset-d36q30.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.1px; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-text-decoration: none; --framer-text-transform: none; } }',
];
var className3 = 'framer-HT94Y';

// https :https://framerusercontent.com/modules/qHuLL7qth8TBDlkenpIl/NYA6mK3mY403YCz2vOvv/stylesPresetLink.js
import { fontStore as fontStore4, } from 'unframer';
fontStore4.loadFonts([],);
var fonts4 = [];
var css4 = [
  '.framer-LF6i5 .framer-styles-preset-aexbeb:not(.rich-text-wrapper), .framer-LF6i5 .framer-styles-preset-aexbeb.rich-text-wrapper a { --framer-link-current-text-color: var(--token-33722da1-56ef-4815-82ed-442105eb06b1, #000000) /* {"name":"Black"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-33722da1-56ef-4815-82ed-442105eb06b1, #000000) /* {"name":"Black"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, #737373); --framer-link-text-decoration: none; transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s; }',
];
var className4 = 'framer-LF6i5';

// https :https://framerusercontent.com/modules/8jFow9biiJtXxZV7jt8c/Bm4cyZ36BVifUDAfqCs4/zOCvedWwi.js
var cycleOrder = ['DlUIdAQW0', 'SNdDeBgez', 'RLYNC0Q6p',];
var serializationHash = 'framer-PjUNT';
var variantClassNames = { DlUIdAQW0: 'framer-v-1girwby', RLYNC0Q6p: 'framer-v-uc83hz', SNdDeBgez: 'framer-v-1f2bstw', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { Desktop: 'DlUIdAQW0', Mobile: 'SNdDeBgez', Tablet: 'RLYNC0Q6p', };
var getProps = ({ footerText, height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref, _ref1;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'DlUIdAQW0',
    yMnbOw6_s: (_ref1 = footerText !== null && footerText !== void 0 ? footerText : props.yMnbOw6_s) !== null && _ref1 !== void 0
      ? _ref1
      : '\xA9 2024 \u2013 Slice ',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className5, layoutId, variant, yMnbOw6_s, ...restProps } = getProps(props,);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({ cycleOrder, defaultVariant: 'DlUIdAQW0', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className3, className4, className2,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1girwby', className5, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'DlUIdAQW0',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          ...addPropertyOverrides(
            { RLYNC0Q6p: { 'data-framer-name': 'Tablet', }, SNdDeBgez: { 'data-framer-name': 'Mobile', }, },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsxs(motion.div, {
            className: 'framer-1uqpx0a',
            'data-framer-name': 'Container',
            layoutDependency,
            layoutId: 'PNBe8ycJK',
            children: [
              /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-otg3o0',
                'data-framer-name': 'Content',
                layoutDependency,
                layoutId: 'I371:28089;371:27598',
                children: /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-t7p1mo',
                  'data-framer-name': 'Row',
                  layoutDependency,
                  layoutId: 'I371:28089;371:27725',
                  children: [
                    /* @__PURE__ */ _jsx(motion.div, {
                      className: 'framer-8reuhj',
                      'data-framer-name': 'Logo [placeholder]',
                      layoutDependency,
                      layoutId: 'W61zW4n3L',
                      children: /* @__PURE__ */ _jsx(Link, {
                        href: { webPageId: 'augiA20Il', },
                        children: /* @__PURE__ */ _jsx(motion.a, {
                          className: 'framer-to68z framer-zoj6l2',
                          'data-framer-name': 'Logo',
                          layoutDependency,
                          layoutId: 'poAVVYia9',
                          style: {
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                          },
                          children: /* @__PURE__ */ _jsx(SVG, {
                            className: 'framer-1rzhlqf',
                            'data-framer-name': 'slice_logo_positive',
                            fill: 'black',
                            intrinsicHeight: 48,
                            intrinsicWidth: 130,
                            layoutDependency,
                            layoutId: 'QtqOiXCjK',
                            svg:
                              '<svg width="130" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><rect width="64" height="48" rx="24" fill="#EBEBEB"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.643v11.25l22.5 11.25L0 40.393v11.25l22.5-11.25v11.25L45 40.393v-22.5L22.5 6.643v11.25L0 6.643Zm22.5 11.25v22.5L45 29.143l-22.5-11.25Z" fill="#000"/></g><path d="M80.749 34.39c-1.36 0-2.591-.238-3.692-.715-1.1-.477-2.006-1.161-2.717-2.054-.702-.893-1.148-1.946-1.339-3.159l3.25-.494c.182.728.498 1.356.949 1.885.45.52.997.919 1.638 1.196.65.269 1.352.403 2.106.403a5.7 5.7 0 0 0 1.911-.312c.59-.217 1.062-.529 1.417-.936.364-.407.546-.888.546-1.443 0-.52-.169-.953-.507-1.3-.338-.355-.862-.641-1.573-.858l-4.836-1.43a9.545 9.545 0 0 1-1.989-.806c-.598-.33-1.114-.819-1.547-1.469-.425-.659-.637-1.495-.637-2.509 0-1.17.299-2.167.897-2.99.598-.832 1.413-1.456 2.444-1.872 1.04-.416 2.206-.62 3.497-.611 1.933.017 3.54.503 4.823 1.456 1.291.945 2.145 2.284 2.561 4.017l-3.367.585a3.673 3.673 0 0 0-.819-1.677 3.773 3.773 0 0 0-1.482-1.079 4.63 4.63 0 0 0-1.859-.377c-.615 0-1.183.104-1.703.312-.52.2-.936.481-1.248.845a1.845 1.845 0 0 0-.455 1.235c0 .624.243 1.1.728 1.43.494.32 1.153.59 1.976.806l3.354.936c.884.243 1.673.529 2.366.858.693.32 1.309.832 1.846 1.534.537.702.806 1.62.806 2.756 0 1.248-.338 2.314-1.014 3.198-.667.875-1.56 1.534-2.678 1.976-1.118.442-2.336.663-3.653.663Zm9.379-19.5h3.133V34h-3.133V14.89Zm6.247.065h3.133v2.873h-3.133v-2.873Zm0 5.005h3.133V34h-3.133V19.96Zm12.084 14.43c-1.413 0-2.639-.316-3.679-.949a6.291 6.291 0 0 1-2.366-2.639c-.546-1.127-.823-2.4-.832-3.822 0-1.43.282-2.704.845-3.822.563-1.127 1.365-2.006 2.405-2.639 1.049-.633 2.271-.949 3.666-.949 1.057 0 2.015.182 2.873.546a5.654 5.654 0 0 1 2.145 1.56c.581.667.979 1.46 1.196 2.379l-3.12.845c-.234-.745-.637-1.33-1.209-1.755a3.112 3.112 0 0 0-1.924-.637c-1.179 0-2.067.407-2.665 1.222-.589.815-.888 1.898-.897 3.25.009 1.378.316 2.47.923 3.276.607.797 1.486 1.196 2.639 1.196.815 0 1.465-.182 1.95-.546.485-.373.854-.932 1.105-1.677l3.198.715c-.433 1.43-1.192 2.53-2.275 3.302-1.083.763-2.409 1.144-3.978 1.144Zm10.011-6.539c.122 1.161.49 2.054 1.105 2.678.624.615 1.465.923 2.522.923.763 0 1.426-.169 1.989-.507.564-.347.997-.845 1.3-1.495l3.094.936a6.47 6.47 0 0 1-1.482 2.158 6.557 6.557 0 0 1-2.158 1.378 7.03 7.03 0 0 1-2.561.468c-1.404 0-2.647-.308-3.731-.923a6.528 6.528 0 0 1-2.535-2.574c-.598-1.1-.897-2.353-.897-3.757 0-1.517.291-2.843.871-3.978.59-1.144 1.413-2.028 2.47-2.652 1.058-.624 2.271-.936 3.64-.936 1.352 0 2.522.299 3.51.897.988.598 1.747 1.452 2.275 2.561.529 1.1.793 2.396.793 3.887 0 .295-.013.607-.039.936H118.47Zm3.757-5.538c-2.08 0-3.306 1.057-3.679 3.172h6.916c-.138-1.092-.472-1.894-1.001-2.405-.52-.511-1.265-.767-2.236-.767Z" fill="#000"/><defs><clipPath id="a"><rect width="64" height="48" rx="24" fill="#fff"/></clipPath></defs></svg>',
                            withExternalLayout: true,
                          },),
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-136jd6c',
                      'data-framer-name': 'Footer Menu',
                      layoutDependency,
                      layoutId: 'I371:28089;371:27953',
                      children: [
                        /* @__PURE__ */ _jsxs(motion.div, {
                          className: 'framer-1tat74i',
                          'data-framer-name': 'Col',
                          layoutDependency,
                          layoutId: 'I371:28089;371:27954',
                          children: [
                            /* @__PURE__ */ _jsx(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx(React.Fragment, {
                                children: /* @__PURE__ */ _jsx(motion.p, {
                                  className: 'framer-styles-preset-yzljla',
                                  'data-styles-preset': 'dSHL72ao3',
                                  style: {
                                    '--framer-text-color':
                                      'var(--extracted-r6o4lv, var(--token-33722da1-56ef-4815-82ed-442105eb06b1, rgb(0, 0, 0)))',
                                  },
                                  children: 'Essential Links',
                                },),
                              },),
                              className: 'framer-125vmdi',
                              'data-framer-name': 'Heading',
                              fonts: ['Inter',],
                              layoutDependency,
                              layoutId: 'I371:28089;371:27955',
                              style: {
                                '--extracted-r6o4lv': 'var(--token-33722da1-56ef-4815-82ed-442105eb06b1, rgb(0, 0, 0))',
                                '--framer-paragraph-spacing': '20px',
                              },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsxs(motion.div, {
                              className: 'framer-rs0m3p',
                              'data-framer-name': 'Col',
                              layoutDependency,
                              layoutId: 'I371:28089;371:27956',
                              children: [
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-1z93t',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27957',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: { webPageId: 'augiA20Il', },
                                          openInNewTab: false,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'How We Operate',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-19kp0pr',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27959',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-jpp1ie',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27960',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: { webPageId: 'augiA20Il', },
                                          openInNewTab: false,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Our Advantage',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-rpbw6z',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27962',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-1h328qt',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27963',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: { webPageId: 'augiA20Il', },
                                          openInNewTab: false,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Investment Insights',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-627kut',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27965',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-1rb64w3',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'lz3dsrGg_',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://www.framer.com/pricing/?via=andreamontini',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Our Pricing',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-gh6j94',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'EAuBdWZfg',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-33txoi',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27966',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://www.framer.com/legal/security/',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Security Details',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-1ba7m3l',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27968',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-zblzxv',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27969',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://www.framer.com/careers/',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Careers',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-q3e1wa',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27971',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                              ],
                            },),
                          ],
                        },),
                        /* @__PURE__ */ _jsxs(motion.div, {
                          className: 'framer-h8lh25',
                          'data-framer-name': 'Col',
                          layoutDependency,
                          layoutId: 'I371:28089;371:27977',
                          children: [
                            /* @__PURE__ */ _jsx(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx(React.Fragment, {
                                children: /* @__PURE__ */ _jsx(motion.p, {
                                  className: 'framer-styles-preset-yzljla',
                                  'data-styles-preset': 'dSHL72ao3',
                                  style: {
                                    '--framer-text-color':
                                      'var(--extracted-r6o4lv, var(--token-33722da1-56ef-4815-82ed-442105eb06b1, rgb(0, 0, 0)))',
                                  },
                                  children: 'Explore More',
                                },),
                              },),
                              className: 'framer-1gqjays',
                              'data-framer-name': 'Heading',
                              fonts: ['Inter',],
                              layoutDependency,
                              layoutId: 'I371:28089;371:27978',
                              style: {
                                '--extracted-r6o4lv': 'var(--token-33722da1-56ef-4815-82ed-442105eb06b1, rgb(0, 0, 0))',
                                '--framer-paragraph-spacing': '20px',
                              },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsxs(motion.div, {
                              className: 'framer-12qztv8',
                              'data-framer-name': 'Footer Links',
                              layoutDependency,
                              layoutId: 'I371:28089;371:27979',
                              children: [
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-g4m6ag',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27980',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: { webPageId: 'augiA20Il', },
                                          openInNewTab: false,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Need Help? Contact Us!',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-1uq0t7',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27982',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-11itj1y',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27983',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://www.framer.com/academy/',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Knowledge Center',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-4wwb0p',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27985',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-1aimxr0',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27986',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://andrea-montini.lemonsqueezy.com/',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Additional Services',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-y2q1cp',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27988',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-c38km8',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27989',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://www.framer.com/help/',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'Help Center',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-24lsm8',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27991',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx(motion.div, {
                                  className: 'framer-r0c4up',
                                  'data-framer-name': '_Footer link',
                                  layoutDependency,
                                  layoutId: 'I371:28089;371:27992',
                                  children: /* @__PURE__ */ _jsx(RichText, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                                      children: /* @__PURE__ */ _jsx(motion.p, {
                                        className: 'framer-styles-preset-d36q30',
                                        'data-styles-preset': 'LlxBF921R',
                                        style: {
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115)))',
                                        },
                                        children: /* @__PURE__ */ _jsx(Link, {
                                          href: 'https://www.framer.com/updates',
                                          openInNewTab: true,
                                          smoothScroll: false,
                                          children: /* @__PURE__ */ _jsx(motion.a, {
                                            className: 'framer-styles-preset-aexbeb',
                                            'data-styles-preset': 'stylesPresetLink',
                                            children: 'News & Updates',
                                          },),
                                        },),
                                      },),
                                    },),
                                    className: 'framer-k6jdao',
                                    'data-framer-name': 'Text',
                                    fonts: ['Inter',],
                                    layoutDependency,
                                    layoutId: 'I371:28089;371:27994',
                                    style: {
                                      '--extracted-r6o4lv': 'var(--token-3a259a41-0d00-4102-a2f3-6fc26ea1e8f1, rgb(115, 115, 115))',
                                      '--framer-paragraph-spacing': '18px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                              ],
                            },),
                          ],
                        },),
                      ],
                    },),
                  ],
                },),
              },),
              /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-1htse0v',
                'data-framer-name': 'Content',
                layoutDependency,
                layoutId: 'I371:28089;371:13471',
                children: [
                  /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-190zck7',
                    'data-border': true,
                    'data-framer-name': 'divider',
                    layoutDependency,
                    layoutId: 'WPE8KAfpG',
                    style: {
                      '--border-bottom-width': '1px',
                      '--border-color': 'var(--token-479b6b4d-3d07-497b-97b0-0d6ab5f0ea7d, rgb(212, 212, 212))',
                      '--border-left-width': '1px',
                      '--border-right-width': '1px',
                      '--border-style': 'dashed',
                      '--border-top-width': '1px',
                      backgroundColor: 'rgb(255, 255, 255)',
                    },
                  },),
                  /* @__PURE__ */ _jsxs(motion.div, {
                    className: 'framer-1lby4pi',
                    'data-framer-name': 'Text Content',
                    layoutDependency,
                    layoutId: 'I371:28089;371:13472',
                    children: [
                      /* @__PURE__ */ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            className: 'framer-styles-preset-qemwmo',
                            'data-styles-preset': 'i59KN99_1',
                            style: {
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163)))',
                            },
                            children: '\xA9 2024 \u2013 Slice ',
                          },),
                        },),
                        className: 'framer-1mxdp2i',
                        'data-framer-name': 'Copyright @2024',
                        fonts: ['Inter',],
                        layoutDependency,
                        layoutId: 'I371:28089;371:13473',
                        style: {
                          '--extracted-r6o4lv': 'var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163))',
                          '--framer-paragraph-spacing': '14px',
                        },
                        text: yMnbOw6_s,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsxs(motion.div, {
                        className: 'framer-ogh04u',
                        'data-framer-name': 'More Links',
                        layoutDependency,
                        layoutId: 'I371:28089;371:13474',
                        children: [
                          /* @__PURE__ */ _jsx(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                className: 'framer-styles-preset-qemwmo',
                                'data-styles-preset': 'i59KN99_1',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163)))',
                                },
                                children: /* @__PURE__ */ _jsx(Link, {
                                  href: 'https://www.framer.com/legal/privacy-statement/',
                                  openInNewTab: true,
                                  smoothScroll: false,
                                  children: /* @__PURE__ */ _jsx(motion.a, {
                                    className: 'framer-styles-preset-aexbeb',
                                    'data-styles-preset': 'stylesPresetLink',
                                    children: 'Privacy Policy',
                                  },),
                                },),
                              },),
                            },),
                            className: 'framer-a16gcw',
                            'data-framer-name': 'Footer link',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'I371:28089;371:13475',
                            style: {
                              '--extracted-r6o4lv': 'var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163))',
                              '--framer-paragraph-spacing': '14px',
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                className: 'framer-styles-preset-qemwmo',
                                'data-styles-preset': 'i59KN99_1',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163)))',
                                },
                                children: /* @__PURE__ */ _jsx(Link, {
                                  href: 'https://www.framer.com/legal/cookie-policy/',
                                  openInNewTab: true,
                                  smoothScroll: false,
                                  children: /* @__PURE__ */ _jsx(motion.a, {
                                    className: 'framer-styles-preset-aexbeb',
                                    'data-styles-preset': 'stylesPresetLink',
                                    children: 'Cookies Policy',
                                  },),
                                },),
                              },),
                            },),
                            className: 'framer-tamn1l',
                            'data-framer-name': 'Footer link',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'Inlcpb9vw',
                            style: {
                              '--extracted-r6o4lv': 'var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163))',
                              '--framer-paragraph-spacing': '14px',
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx(RichText, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx(React.Fragment, {
                              children: /* @__PURE__ */ _jsx(motion.p, {
                                className: 'framer-styles-preset-qemwmo',
                                'data-styles-preset': 'i59KN99_1',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-r6o4lv, var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163)))',
                                },
                                children: /* @__PURE__ */ _jsx(Link, {
                                  href: 'https://www.framer.com/legal/terms-of-service/',
                                  openInNewTab: true,
                                  smoothScroll: false,
                                  children: /* @__PURE__ */ _jsx(motion.a, {
                                    className: 'framer-styles-preset-aexbeb',
                                    'data-styles-preset': 'stylesPresetLink',
                                    children: 'Terms & Conditions',
                                  },),
                                },),
                              },),
                            },),
                            className: 'framer-1xiyy0w',
                            'data-framer-name': 'Footer link',
                            fonts: ['Inter',],
                            layoutDependency,
                            layoutId: 'I371:28089;371:13476',
                            style: {
                              '--extracted-r6o4lv': 'var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163))',
                              '--framer-paragraph-spacing': '14px',
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    ],
                  },),
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        className: 'framer-styles-preset-qemwmo',
                        'data-styles-preset': 'i59KN99_1',
                        style: {
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163)))',
                        },
                        children:
                          'Note: The information provided on this site is for informational purposes only and not financial advice. The Slice App Srl platform is for sharing information, not offering financial advice or products. AQA Capital Ltd, an EU-authorized AIFM, will handle financial products. Showing interest, signing up, or asking questions does not constitute a commitment. Please read the prospectus carefully before investing.',
                      },),
                    },),
                    className: 'framer-1e9j9an',
                    'data-framer-name': 'Disclaimer Text',
                    fonts: ['Inter',],
                    layoutDependency,
                    layoutId: 'I371:28089;371:27573',
                    style: {
                      '--extracted-r6o4lv': 'var(--token-6145797c-db14-4e39-8951-2131725399fb, rgb(163, 163, 163))',
                      '--framer-paragraph-spacing': '14px',
                    },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                ],
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css5 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-PjUNT.framer-zoj6l2, .framer-PjUNT .framer-zoj6l2 { display: block; }',
  '.framer-PjUNT.framer-1girwby { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }',
  '.framer-PjUNT .framer-1uqpx0a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 40px 32px 40px 32px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-otg3o0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-t7p1mo { display: grid; flex: none; gap: 32px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-8reuhj { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-to68z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
  '.framer-PjUNT .framer-1rzhlqf { aspect-ratio: 2.7083333333333335 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); position: relative; width: 130px; }',
  '.framer-PjUNT .framer-136jd6c { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 100%; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-1tat74i, .framer-PjUNT .framer-h8lh25 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-PjUNT .framer-125vmdi, .framer-PjUNT .framer-1gqjays, .framer-PjUNT .framer-1e9j9an { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-PjUNT .framer-rs0m3p, .framer-PjUNT .framer-12qztv8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-PjUNT .framer-1z93t, .framer-PjUNT .framer-jpp1ie, .framer-PjUNT .framer-1h328qt, .framer-PjUNT .framer-1rb64w3, .framer-PjUNT .framer-33txoi, .framer-PjUNT .framer-zblzxv, .framer-PjUNT .framer-g4m6ag, .framer-PjUNT .framer-11itj1y, .framer-PjUNT .framer-1aimxr0, .framer-PjUNT .framer-c38km8, .framer-PjUNT .framer-r0c4up { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-PjUNT .framer-19kp0pr, .framer-PjUNT .framer-rpbw6z, .framer-PjUNT .framer-627kut, .framer-PjUNT .framer-gh6j94, .framer-PjUNT .framer-1ba7m3l, .framer-PjUNT .framer-q3e1wa, .framer-PjUNT .framer-1uq0t7, .framer-PjUNT .framer-4wwb0p, .framer-PjUNT .framer-y2q1cp, .framer-PjUNT .framer-24lsm8, .framer-PjUNT .framer-k6jdao, .framer-PjUNT .framer-1mxdp2i, .framer-PjUNT .framer-a16gcw, .framer-PjUNT .framer-tamn1l, .framer-PjUNT .framer-1xiyy0w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-PjUNT .framer-1htse0v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-190zck7 { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-1lby4pi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-PjUNT .framer-ogh04u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PjUNT.framer-1girwby, .framer-PjUNT .framer-1uqpx0a, .framer-PjUNT .framer-otg3o0, .framer-PjUNT .framer-8reuhj, .framer-PjUNT .framer-to68z, .framer-PjUNT .framer-136jd6c, .framer-PjUNT .framer-1tat74i, .framer-PjUNT .framer-rs0m3p, .framer-PjUNT .framer-1z93t, .framer-PjUNT .framer-jpp1ie, .framer-PjUNT .framer-1h328qt, .framer-PjUNT .framer-1rb64w3, .framer-PjUNT .framer-33txoi, .framer-PjUNT .framer-zblzxv, .framer-PjUNT .framer-h8lh25, .framer-PjUNT .framer-12qztv8, .framer-PjUNT .framer-g4m6ag, .framer-PjUNT .framer-11itj1y, .framer-PjUNT .framer-1aimxr0, .framer-PjUNT .framer-c38km8, .framer-PjUNT .framer-r0c4up, .framer-PjUNT .framer-1htse0v, .framer-PjUNT .framer-ogh04u { gap: 0px; } .framer-PjUNT.framer-1girwby > * { margin: 0px; margin-bottom: calc(56px / 2); margin-top: calc(56px / 2); } .framer-PjUNT.framer-1girwby > :first-child, .framer-PjUNT .framer-1uqpx0a > :first-child, .framer-PjUNT .framer-otg3o0 > :first-child, .framer-PjUNT .framer-1tat74i > :first-child, .framer-PjUNT .framer-rs0m3p > :first-child, .framer-PjUNT .framer-h8lh25 > :first-child, .framer-PjUNT .framer-12qztv8 > :first-child, .framer-PjUNT .framer-1htse0v > :first-child { margin-top: 0px; } .framer-PjUNT.framer-1girwby > :last-child, .framer-PjUNT .framer-1uqpx0a > :last-child, .framer-PjUNT .framer-otg3o0 > :last-child, .framer-PjUNT .framer-1tat74i > :last-child, .framer-PjUNT .framer-rs0m3p > :last-child, .framer-PjUNT .framer-h8lh25 > :last-child, .framer-PjUNT .framer-12qztv8 > :last-child, .framer-PjUNT .framer-1htse0v > :last-child { margin-bottom: 0px; } .framer-PjUNT .framer-1uqpx0a > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-PjUNT .framer-otg3o0 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-PjUNT .framer-8reuhj > *, .framer-PjUNT .framer-to68z > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PjUNT .framer-8reuhj > :first-child, .framer-PjUNT .framer-to68z > :first-child, .framer-PjUNT .framer-136jd6c > :first-child, .framer-PjUNT .framer-1z93t > :first-child, .framer-PjUNT .framer-jpp1ie > :first-child, .framer-PjUNT .framer-1h328qt > :first-child, .framer-PjUNT .framer-1rb64w3 > :first-child, .framer-PjUNT .framer-33txoi > :first-child, .framer-PjUNT .framer-zblzxv > :first-child, .framer-PjUNT .framer-g4m6ag > :first-child, .framer-PjUNT .framer-11itj1y > :first-child, .framer-PjUNT .framer-1aimxr0 > :first-child, .framer-PjUNT .framer-c38km8 > :first-child, .framer-PjUNT .framer-r0c4up > :first-child, .framer-PjUNT .framer-ogh04u > :first-child { margin-left: 0px; } .framer-PjUNT .framer-8reuhj > :last-child, .framer-PjUNT .framer-to68z > :last-child, .framer-PjUNT .framer-136jd6c > :last-child, .framer-PjUNT .framer-1z93t > :last-child, .framer-PjUNT .framer-jpp1ie > :last-child, .framer-PjUNT .framer-1h328qt > :last-child, .framer-PjUNT .framer-1rb64w3 > :last-child, .framer-PjUNT .framer-33txoi > :last-child, .framer-PjUNT .framer-zblzxv > :last-child, .framer-PjUNT .framer-g4m6ag > :last-child, .framer-PjUNT .framer-11itj1y > :last-child, .framer-PjUNT .framer-1aimxr0 > :last-child, .framer-PjUNT .framer-c38km8 > :last-child, .framer-PjUNT .framer-r0c4up > :last-child, .framer-PjUNT .framer-ogh04u > :last-child { margin-right: 0px; } .framer-PjUNT .framer-136jd6c > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-PjUNT .framer-1tat74i > *, .framer-PjUNT .framer-h8lh25 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-PjUNT .framer-rs0m3p > *, .framer-PjUNT .framer-12qztv8 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-PjUNT .framer-1z93t > *, .framer-PjUNT .framer-jpp1ie > *, .framer-PjUNT .framer-1h328qt > *, .framer-PjUNT .framer-1rb64w3 > *, .framer-PjUNT .framer-33txoi > *, .framer-PjUNT .framer-zblzxv > *, .framer-PjUNT .framer-g4m6ag > *, .framer-PjUNT .framer-11itj1y > *, .framer-PjUNT .framer-1aimxr0 > *, .framer-PjUNT .framer-c38km8 > *, .framer-PjUNT .framer-r0c4up > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-PjUNT .framer-1htse0v > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-PjUNT .framer-ogh04u > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }',
  '.framer-PjUNT.framer-v-1f2bstw.framer-1girwby { width: 390px; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-1uqpx0a { gap: 32px; padding: 20px; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-otg3o0, .framer-PjUNT.framer-v-1f2bstw .framer-1htse0v, .framer-PjUNT.framer-v-uc83hz .framer-otg3o0 { max-width: unset; padding: 0px; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-t7p1mo, .framer-PjUNT.framer-v-uc83hz .framer-t7p1mo { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-8reuhj, .framer-PjUNT.framer-v-uc83hz .framer-8reuhj, .framer-PjUNT.framer-v-uc83hz .framer-136jd6c { align-self: unset; height: min-content; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-136jd6c { align-self: unset; flex-direction: column; gap: 60px; height: min-content; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-1tat74i, .framer-PjUNT.framer-v-1f2bstw .framer-h8lh25 { flex: none; width: 100%; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-rs0m3p { gap: 8px; }',
  '.framer-PjUNT.framer-v-1f2bstw .framer-1lby4pi { align-content: center; align-items: center; flex-direction: column; gap: 24px; justify-content: flex-start; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PjUNT.framer-v-1f2bstw .framer-1uqpx0a, .framer-PjUNT.framer-v-1f2bstw .framer-t7p1mo, .framer-PjUNT.framer-v-1f2bstw .framer-136jd6c, .framer-PjUNT.framer-v-1f2bstw .framer-rs0m3p, .framer-PjUNT.framer-v-1f2bstw .framer-1lby4pi { gap: 0px; } .framer-PjUNT.framer-v-1f2bstw .framer-1uqpx0a > *, .framer-PjUNT.framer-v-1f2bstw .framer-t7p1mo > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-PjUNT.framer-v-1f2bstw .framer-1uqpx0a > :first-child, .framer-PjUNT.framer-v-1f2bstw .framer-t7p1mo > :first-child, .framer-PjUNT.framer-v-1f2bstw .framer-136jd6c > :first-child, .framer-PjUNT.framer-v-1f2bstw .framer-rs0m3p > :first-child, .framer-PjUNT.framer-v-1f2bstw .framer-1lby4pi > :first-child { margin-top: 0px; } .framer-PjUNT.framer-v-1f2bstw .framer-1uqpx0a > :last-child, .framer-PjUNT.framer-v-1f2bstw .framer-t7p1mo > :last-child, .framer-PjUNT.framer-v-1f2bstw .framer-136jd6c > :last-child, .framer-PjUNT.framer-v-1f2bstw .framer-rs0m3p > :last-child, .framer-PjUNT.framer-v-1f2bstw .framer-1lby4pi > :last-child { margin-bottom: 0px; } .framer-PjUNT.framer-v-1f2bstw .framer-136jd6c > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-PjUNT.framer-v-1f2bstw .framer-rs0m3p > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-PjUNT.framer-v-1f2bstw .framer-1lby4pi > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }',
  '.framer-PjUNT.framer-v-uc83hz.framer-1girwby { width: 730px; }',
  '.framer-PjUNT.framer-v-uc83hz .framer-1uqpx0a { padding: 32px; }',
  '.framer-PjUNT.framer-v-uc83hz .framer-1htse0v { padding: 0px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PjUNT.framer-v-uc83hz .framer-t7p1mo { gap: 0px; } .framer-PjUNT.framer-v-uc83hz .framer-t7p1mo > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-PjUNT.framer-v-uc83hz .framer-t7p1mo > :first-child { margin-top: 0px; } .framer-PjUNT.framer-v-uc83hz .framer-t7p1mo > :last-child { margin-bottom: 0px; } }',
  ...css,
  ...css3,
  ...css4,
  ...css2,
  '.framer-PjUNT[data-border="true"]::after, .framer-PjUNT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerzOCvedWwi = withCSS(Component, css5, 'framer-PjUNT',);
var stdin_default = FramerzOCvedWwi;
FramerzOCvedWwi.displayName = 'Footer';
FramerzOCvedWwi.defaultProps = { height: 443, width: 1200, };
addPropertyControls(FramerzOCvedWwi, {
  variant: {
    options: ['DlUIdAQW0', 'SNdDeBgez', 'RLYNC0Q6p',],
    optionTitles: ['Desktop', 'Mobile', 'Tablet',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  yMnbOw6_s: { defaultValue: '\xA9 2024 \u2013 Slice ', displayTextArea: false, title: 'footerText', type: ControlType.String, },
},);
addFonts(FramerzOCvedWwi, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+1F00-1FFF',
      url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0370-03FF',
      url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
      weight: '400',
    },],
  },
  ...getFontsFromSharedStyle(fonts,),
  ...getFontsFromSharedStyle(fonts3,),
  ...getFontsFromSharedStyle(fonts4,),
  ...getFontsFromSharedStyle(fonts2,),
], { supportsExplicitInterCodegen: true, },);

// virtual:footer
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var footer_default = stdin_default;
export { footer_default as default, };
