// @ts-nocheck
/* eslint-disable */
'use client';
import './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/YivtqU53m4zcm4ZOaTY9/SunOJy9Ew9wajOWbP6Rh/sbQWEtsSc.js
import { Fragment as _Fragment, jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  ComponentViewportProvider,
  cx as cx2,
  FormContainer,
  FormPlainTextInput,
  FormSelect,
  getFonts,
  RichText as RichText2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/QI6PpxG0dTiaDxkWq7Al/YsOwzCba5epdncMnAbzH/UOW9Q_5Hg.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
  withFX,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var MotionDivWithFX = withFX(motion.div,);
var enabledGestures = { CQpxbmFkF: { hover: true, pressed: true, }, };
var cycleOrder = ['CQpxbmFkF', 'viyomrbPy', 'Hgu50pcEN', 'Y1_woLLVu', 'LvBn8IXy5',];
var serializationHash = 'framer-pQzx3';
var variantClassNames = {
  CQpxbmFkF: 'framer-v-vl8ecu',
  Hgu50pcEN: 'framer-v-1utnif5',
  LvBn8IXy5: 'framer-v-1h6qm0j',
  viyomrbPy: 'framer-v-1fd2zml',
  Y1_woLLVu: 'framer-v-1xq93g7',
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition2 = { delay: 0, duration: 1, ease: [0, 0, 1, 1,], type: 'tween', };
var animation = { opacity: 1, rotate: 360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0, };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = {
  Default: 'CQpxbmFkF',
  Disabled: 'Hgu50pcEN',
  Error: 'LvBn8IXy5',
  Loading: 'viyomrbPy',
  Success: 'Y1_woLLVu',
};
var getProps = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'CQpxbmFkF',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'CQpxbmFkF',
    enabledGestures,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'viyomrbPy') return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'viyomrbPy') return true;
    return false;
  };
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
        children: /* @__PURE__ */ _jsxs(motion.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-vl8ecu', className, classNames,),
          'data-framer-name': 'Default',
          'data-reset': 'button',
          layoutDependency,
          layoutId: 'CQpxbmFkF',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor: 'rgb(51, 51, 51)',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            opacity: 1,
            ...style,
          },
          variants: {
            'CQpxbmFkF-hover': { backgroundColor: 'rgba(51, 51, 51, 0.85)', },
            Hgu50pcEN: { opacity: 0.5, },
            LvBn8IXy5: { backgroundColor: 'rgba(255, 34, 68, 0.15)', },
          },
          ...addPropertyOverrides(
            {
              'CQpxbmFkF-hover': { 'data-framer-name': void 0, },
              'CQpxbmFkF-pressed': { 'data-framer-name': void 0, },
              Hgu50pcEN: { 'data-framer-name': 'Disabled', },
              LvBn8IXy5: { 'data-framer-name': 'Error', },
              viyomrbPy: { 'data-framer-name': 'Loading', },
              Y1_woLLVu: { 'data-framer-name': 'Success', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: {
                    '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-size': '14px',
                    '--framer-font-weight': '600',
                    '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                  },
                  children: 'Submit',
                },),
              },),
              className: 'framer-xd5zjf',
              fonts: ['Inter-SemiBold',],
              layoutDependency,
              layoutId: 'gk4jMoTm9',
              style: {
                '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              variants: { LvBn8IXy5: { '--extracted-r6o4lv': 'rgb(255, 34, 68)', }, },
              verticalAlignment: 'top',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  LvBn8IXy5: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '600',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 34, 68))',
                        },
                        children: 'Something went wrong',
                      },),
                    },),
                  },
                  Y1_woLLVu: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '600',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                        },
                        children: 'Thank you',
                      },),
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-1stkvsg',
              'data-framer-name': 'Spinner',
              layoutDependency,
              layoutId: 'BGHI0jbk6',
              style: {
                mask: 'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
                WebkitMask:
                  'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
              },
              children: /* @__PURE__ */ _jsx(MotionDivWithFX, {
                __framer__loop: animation,
                __framer__loopEffectEnabled: true,
                __framer__loopRepeatDelay: 0,
                __framer__loopRepeatType: 'loop',
                __framer__loopTransition: transition2,
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                className: 'framer-i7du61',
                'data-framer-name': 'Conic',
                layoutDependency,
                layoutId: 'Ca8BPbAU9',
                style: { background: 'conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)', },
                variants: {
                  viyomrbPy: {
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)',
                    mask:
                      'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
                    WebkitMask:
                      'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
                  },
                },
                children: /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-1bhjcae',
                  'data-framer-name': 'Rounding',
                  layoutDependency,
                  layoutId: 'wqinN1gQ8',
                  style: {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 1,
                    borderBottomRightRadius: 1,
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1,
                  },
                  transformTemplate: transformTemplate1,
                },),
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-pQzx3.framer-1l19feq, .framer-pQzx3 .framer-1l19feq { display: block; }',
  '.framer-pQzx3.framer-vl8ecu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }',
  '.framer-pQzx3 .framer-xd5zjf { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '.framer-pQzx3 .framer-1stkvsg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }',
  '.framer-pQzx3 .framer-i7du61 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-pQzx3 .framer-1bhjcae { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pQzx3.framer-vl8ecu { gap: 0px; } .framer-pQzx3.framer-vl8ecu > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-pQzx3.framer-vl8ecu > :first-child { margin-left: 0px; } .framer-pQzx3.framer-vl8ecu > :last-child { margin-right: 0px; } }',
  '.framer-pQzx3.framer-v-1fd2zml.framer-vl8ecu, .framer-pQzx3.framer-v-1utnif5.framer-vl8ecu, .framer-pQzx3.framer-v-1xq93g7.framer-vl8ecu, .framer-pQzx3.framer-v-1h6qm0j.framer-vl8ecu { cursor: unset; }',
  '.framer-pQzx3.framer-v-1fd2zml .framer-i7du61 { overflow: hidden; }',
];
var FramerUOW9Q_5Hg = withCSS(Component, css, 'framer-pQzx3',);
var stdin_default = FramerUOW9Q_5Hg;
FramerUOW9Q_5Hg.displayName = 'Button';
FramerUOW9Q_5Hg.defaultProps = { height: 40, width: 240, };
addPropertyControls(FramerUOW9Q_5Hg, {
  variant: {
    options: ['CQpxbmFkF', 'viyomrbPy', 'Hgu50pcEN', 'Y1_woLLVu', 'LvBn8IXy5',],
    optionTitles: ['Default', 'Loading', 'Disabled', 'Success', 'Error',],
    title: 'Variant',
    type: ControlType.Enum,
  },
},);
addFonts(FramerUOW9Q_5Hg, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://app.framerstatic.com/Inter-SemiBold.cyrillic-ext-C7KWUKA7.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://app.framerstatic.com/Inter-SemiBold.cyrillic-JWV7SOZ6.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://app.framerstatic.com/Inter-SemiBold.greek-ext-FBKSFTSU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://app.framerstatic.com/Inter-SemiBold.greek-EQ3PSENU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://app.framerstatic.com/Inter-SemiBold.latin-ext-ULRSO3ZR.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://app.framerstatic.com/Inter-SemiBold.latin-RDYY2AG2.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://app.framerstatic.com/Inter-SemiBold.vietnamese-ESQNSEQ3.woff2',
    weight: '600',
  },],
},], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/YivtqU53m4zcm4ZOaTY9/SunOJy9Ew9wajOWbP6Rh/sbQWEtsSc.js
var ButtonFonts = getFonts(stdin_default,);
var cycleOrder2 = ['LMA6fyqy7',];
var serializationHash2 = 'framer-haOGX';
var variantClassNames2 = { LMA6fyqy7: 'framer-v-1nwea80', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var formVariants = (form, variants, currentVariant,) => {
  switch (form.state) {
    case 'success':
      var _variants_success;
      return (_variants_success = variants.success) !== null && _variants_success !== void 0 ? _variants_success : currentVariant;
    case 'pending':
      var _variants_pending;
      return (_variants_pending = variants.pending) !== null && _variants_pending !== void 0 ? _variants_pending : currentVariant;
    case 'error':
      var _variants_error;
      return (_variants_error = variants.error) !== null && _variants_error !== void 0 ? _variants_error : currentVariant;
    case 'disabled':
      var _variants_disabled;
      return (_variants_disabled = variants.disabled) !== null && _variants_disabled !== void 0 ? _variants_disabled : currentVariant;
  }
};
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var getProps2 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency2 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'LMA6fyqy7',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsx2(FormContainer, {
          ...restProps,
          ...gestureHandlers,
          action: 'https://api.framer.com/forms/v1/forms/0c68716e-c506-43ca-9e73-518b37205d23/submit',
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-1nwea80', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'LMA6fyqy7',
          redirectUrl: { webPageId: 'qoG9YIQaf', },
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: (formState,) =>
            /* @__PURE__ */ _jsxs2(_Fragment, {
              children: [
                /* @__PURE__ */ _jsxs2(motion2.label, {
                  className: 'framer-2mxqjr',
                  layoutDependency,
                  layoutId: 'tpgTPaGcw',
                  children: [
                    /* @__PURE__ */ _jsx2(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTWVkaXVt',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': '12px',
                            '--framer-font-weight': '500',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(136, 136, 136))',
                          },
                          children: 'Name',
                        },),
                      },),
                      className: 'framer-1ozx58u',
                      fonts: ['Inter-Medium',],
                      layoutDependency,
                      layoutId: 'dPM4J544l',
                      style: { '--extracted-r6o4lv': 'rgb(136, 136, 136)', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(FormPlainTextInput, {
                      className: 'framer-14sl3bm',
                      inputName: 'Name',
                      layoutDependency,
                      layoutId: 'NsAzxSkwp',
                      placeholder: 'Jane Smith',
                      style: {
                        '--framer-input-background': 'rgba(187, 187, 187, 0.15)',
                        '--framer-input-border-bottom-width': '1px',
                        '--framer-input-border-color': 'rgba(136, 136, 136, 0.1)',
                        '--framer-input-border-left-width': '1px',
                        '--framer-input-border-radius-bottom-left': '10px',
                        '--framer-input-border-radius-bottom-right': '10px',
                        '--framer-input-border-radius-top-left': '10px',
                        '--framer-input-border-radius-top-right': '10px',
                        '--framer-input-border-right-width': '1px',
                        '--framer-input-border-style': 'solid',
                        '--framer-input-border-top-width': '1px',
                        '--framer-input-font-color': 'rgb(153, 153, 153)',
                        '--framer-input-placeholder-color': 'rgb(153, 153, 153)',
                      },
                      type: 'text',
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs2(motion2.label, {
                  className: 'framer-1hqwshr',
                  layoutDependency,
                  layoutId: 'FYcdGKpy6',
                  children: [
                    /* @__PURE__ */ _jsx2(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTWVkaXVt',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': '12px',
                            '--framer-font-weight': '500',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(136, 136, 136))',
                          },
                          children: 'Email',
                        },),
                      },),
                      className: 'framer-xd5hky',
                      fonts: ['Inter-Medium',],
                      layoutDependency,
                      layoutId: 'hPS7t2sLH',
                      style: { '--extracted-r6o4lv': 'rgb(136, 136, 136)', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(FormPlainTextInput, {
                      className: 'framer-1oy6h5g',
                      inputName: 'Email',
                      layoutDependency,
                      layoutId: 'PTretWpKS',
                      placeholder: 'jane@framer.com',
                      style: {
                        '--framer-input-background': 'rgba(187, 187, 187, 0.15)',
                        '--framer-input-border-bottom-width': '1px',
                        '--framer-input-border-color': 'rgba(136, 136, 136, 0.1)',
                        '--framer-input-border-left-width': '1px',
                        '--framer-input-border-radius-bottom-left': '10px',
                        '--framer-input-border-radius-bottom-right': '10px',
                        '--framer-input-border-radius-top-left': '10px',
                        '--framer-input-border-radius-top-right': '10px',
                        '--framer-input-border-right-width': '1px',
                        '--framer-input-border-style': 'solid',
                        '--framer-input-border-top-width': '1px',
                        '--framer-input-font-color': 'rgb(153, 153, 153)',
                        '--framer-input-placeholder-color': 'rgb(153, 153, 153)',
                      },
                      type: 'email',
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs2(motion2.label, {
                  className: 'framer-6g3n5v',
                  layoutDependency,
                  layoutId: 'C8FhVHK4i',
                  children: [
                    /* @__PURE__ */ _jsx2(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTWVkaXVt',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': '12px',
                            '--framer-font-weight': '500',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(136, 136, 136))',
                          },
                          children: 'Location',
                        },),
                      },),
                      className: 'framer-kx8c1e',
                      fonts: ['Inter-Medium',],
                      layoutDependency,
                      layoutId: 'yOZbeG32n',
                      style: { '--extracted-r6o4lv': 'rgb(136, 136, 136)', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(FormSelect, {
                      className: 'framer-1ns02nb',
                      inputName: 'Location',
                      layoutDependency,
                      layoutId: 'sSgI_bSf3',
                      required: true,
                      selectDefaultValue: '',
                      selectOptions: [{ disabled: true, title: 'Select\u2026', type: 'option', value: '', }, {
                        title: 'Amsterdam',
                        type: 'option',
                        value: 'amsterdam',
                      }, { title: 'Barcelona', type: 'option', value: 'barcelona', },],
                      style: {
                        '--framer-input-background': 'rgba(187, 187, 187, 0.15)',
                        '--framer-input-border-bottom-width': '1px',
                        '--framer-input-border-color': 'rgba(136, 136, 136, 0.1)',
                        '--framer-input-border-left-width': '1px',
                        '--framer-input-border-radius-bottom-left': '10px',
                        '--framer-input-border-radius-bottom-right': '10px',
                        '--framer-input-border-radius-top-left': '10px',
                        '--framer-input-border-radius-top-right': '10px',
                        '--framer-input-border-right-width': '1px',
                        '--framer-input-border-style': 'solid',
                        '--framer-input-border-top-width': '1px',
                        '--framer-input-font-color': 'rgb(153, 153, 153)',
                        '--framer-input-invalid-text-color': 'rgb(153, 153, 153)',
                      },
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                  width: `calc(${
                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                  } - 40px)`,
                  children: /* @__PURE__ */ _jsx2(motion2.div, {
                    className: 'framer-1tpz3j7-container',
                    layoutDependency,
                    layoutId: 'CqGMd81NB-container',
                    children: /* @__PURE__ */ _jsx2(stdin_default, {
                      height: '100%',
                      id: 'CqGMd81NB',
                      layoutId: 'CqGMd81NB',
                      style: { height: '100%', width: '100%', },
                      type: 'submit',
                      variant: formVariants(formState, { pending: 'viyomrbPy', success: 'Y1_woLLVu', }, 'CQpxbmFkF',),
                      width: '100%',
                    },),
                  },),
                },),
              ],
            },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-haOGX.framer-1u4l97x, .framer-haOGX .framer-1u4l97x { display: block; }',
  '.framer-haOGX.framer-1nwea80 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 280px; }',
  '.framer-haOGX .framer-2mxqjr, .framer-haOGX .framer-1hqwshr, .framer-haOGX .framer-6g3n5v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }',
  '.framer-haOGX .framer-1ozx58u, .framer-haOGX .framer-xd5hky, .framer-haOGX .framer-kx8c1e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-haOGX .framer-14sl3bm, .framer-haOGX .framer-1oy6h5g, .framer-haOGX .framer-1ns02nb { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400px; --framer-input-padding: 12px; flex: none; height: 40px; position: relative; width: 100%; }',
  '.framer-haOGX .framer-1tpz3j7-container { flex: none; height: 40px; position: relative; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-haOGX.framer-1nwea80, .framer-haOGX .framer-2mxqjr, .framer-haOGX .framer-1hqwshr, .framer-haOGX .framer-6g3n5v { gap: 0px; } .framer-haOGX.framer-1nwea80 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-haOGX.framer-1nwea80 > :first-child, .framer-haOGX .framer-2mxqjr > :first-child, .framer-haOGX .framer-1hqwshr > :first-child, .framer-haOGX .framer-6g3n5v > :first-child { margin-top: 0px; } .framer-haOGX.framer-1nwea80 > :last-child, .framer-haOGX .framer-2mxqjr > :last-child, .framer-haOGX .framer-1hqwshr > :last-child, .framer-haOGX .framer-6g3n5v > :last-child { margin-bottom: 0px; } .framer-haOGX .framer-2mxqjr > *, .framer-haOGX .framer-1hqwshr > *, .framer-haOGX .framer-6g3n5v > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }',
];
var FramersbQWEtsSc = withCSS2(Component2, css2, 'framer-haOGX',);
var stdin_default2 = FramersbQWEtsSc;
FramersbQWEtsSc.displayName = 'form test';
FramersbQWEtsSc.defaultProps = { height: 333, width: 280, };
addFonts2(FramersbQWEtsSc, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://app.framerstatic.com/Inter-Medium.cyrillic-ext-M4WHNGTS.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://app.framerstatic.com/Inter-Medium.cyrillic-JVU2PANX.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://app.framerstatic.com/Inter-Medium.greek-ext-4KCQBEIZ.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://app.framerstatic.com/Inter-Medium.greek-DPOQGN7L.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://app.framerstatic.com/Inter-Medium.latin-ext-J4DBSW7F.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://app.framerstatic.com/Inter-Medium.latin-Y3IVPL46.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://app.framerstatic.com/Inter-Medium.vietnamese-PJV76O4P.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2',
    weight: '400',
  },],
}, ...ButtonFonts,], { supportsExplicitInterCodegen: true, },);

// virtual:form
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default2.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default2, ...props, },);
};
var form_default = stdin_default2;
export { form_default as default, };
