/* eslint-disable */
'use client';
import { Et, } from './chunk-O2PC5PVC.js';
import './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  getFonts,
  Image,
  RichText,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/nFAy8p4fOASsyhPbo192/Ticker.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import { Children, cloneElement, createRef, useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'unframer';
import { LayoutGroup, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useTransform, wrap, } from 'unframer';
var directionTransformers = {
  left: (offset,) => `translateX(-${offset}px)`,
  right: (offset,) => `translateX(${offset}px)`,
  top: (offset,) => `translateY(-${offset}px)`,
  bottom: (offset,) => `translateY(${offset}px)`,
};
var supportsAcceleratedAnimations = typeof Animation !== 'undefined' && typeof Animation.prototype.updatePlaybackRate === 'function';
function Ticker(props,) {
  let {
    slots,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    speed,
    hoverFactor,
    direction,
    alignment,
    sizingOptions,
    fadeOptions,
    style,
  } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha, } = fadeOptions;
  const { widthType, heightType, } = sizingOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const numChildren = Children.count(slots,);
  const hasChildren = numChildren > 0;
  if (direction === true) {
    direction = 'left';
  }
  const isHorizontal = direction === 'left' || direction === 'right';
  const offset = useMotionValue(0,);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer,);
  const parentRef = useRef(null,);
  const childrenRef = useMemo(() => {
    return [/* @__PURE__ */ createRef(), /* @__PURE__ */ createRef(),];
  }, [],);
  const [size, setSize,] = useState({ parent: null, children: null, },);
  let clonedChildren = [];
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren,) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2,) + 1;
    opacity = 1;
  }
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
      const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
      const end = childrenRef[1].current
        ? isHorizontal
          ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth
          : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight
        : 0;
      const childrenLength = end - start + gap;
      setSize({ parent: parentLength, children: childrenLength, },);
    }
  }, [],);
  const childrenStyles = isCanvas ? { contentVisibility: 'auto', } : {};
  if (hasChildren) {
    if (!isCanvas) {
      let initialResize = useRef(true,);
      useEffect(() => {
        measure();
        return Et(parentRef.current, ({ contentSize, },) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            measure();
          }
          initialResize.current = false;
        },);
      }, [],);
    }
    clonedChildren = Children.map(slots, (child, index,) => {
      var ref, ref1, ref2, ref3;
      let ref4;
      if (index === 0) {
        ref4 = childrenRef[0];
      }
      if (index === slots.length - 1) {
        ref4 = childrenRef[1];
      }
      const size2 = {
        width: widthType ? (ref = child.props) === null || ref === void 0 ? void 0 : ref.width : '100%',
        height: heightType ? (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.height : '100%',
      };
      return /* @__PURE__ */ _jsx(LayoutGroup, {
        inherit: 'id',
        children: /* @__PURE__ */ _jsx('li', {
          ref: ref4,
          style: size2,
          children: /* @__PURE__ */ cloneElement(child, {
            style: {
              ...(ref2 = child.props) === null || ref2 === void 0 ? void 0 : ref2.style,
              ...size2,
              flexShrink: 0,
              ...childrenStyles,
            },
            layoutId: child.props.layoutId ? child.props.layoutId + '-original-' + index : void 0,
          }, (ref3 = child.props) === null || ref3 === void 0 ? void 0 : ref3.children,),
        },),
      },);
    },);
  }
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = [
        ...dupedChildren,
        ...Children.map(slots, (child, childIndex,) => {
          var ref, ref1, ref2, ref3;
          return /* @__PURE__ */ _jsx(LayoutGroup, {
            inherit: 'id',
            children: /* @__PURE__ */ _jsx('li', {
              style: { display: 'contents', },
              'aria-hidden': true,
              children: /* @__PURE__ */ cloneElement(child, {
                key: i + ' ' + childIndex,
                style: {
                  ...(ref = child.props) === null || ref === void 0 ? void 0 : ref.style,
                  width: widthType ? (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.width : '100%',
                  height: heightType ? (ref2 = child.props) === null || ref2 === void 0 ? void 0 : ref2.height : '100%',
                  flexShrink: 0,
                  ...childrenStyles,
                },
                layoutId: child.props.layoutId ? child.props.layoutId + '-dupe-' + i : void 0,
              }, (ref3 = child.props) === null || ref3 === void 0 ? void 0 : ref3.children,),
            }, i + 'li' + childIndex,),
          }, i + 'lg' + childIndex,);
        },),
      ];
    }
  }
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children,);
  const initialTime = useRef(null,);
  const prevTime = useRef(null,);
  const xOrY = useRef(0,);
  const isHover = useRef(false,);
  const isInView = useInView(parentRef,);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null,);
  const animationRef = useRef(null,);
  if (!isCanvas) {
    if (supportsAcceleratedAnimations) {
      useEffect(() => {
        if (isReducedMotion || !animateToValue || !speed) {
          return;
        }
        animationRef.current = listRef.current.animate({ transform: [transformer(0,), transformer(animateToValue,),], }, {
          duration: Math.abs(animateToValue,) / speed * 1e3,
          iterations: Infinity,
          easing: 'linear',
        },);
        return () => animationRef.current.cancel();
      }, [hoverFactor, animateToValue, speed,],);
    } else {
      useAnimationFrame((t,) => {
        if (!animateToValue || isReducedMotion || supportsAcceleratedAnimations) {
          return;
        }
        if (initialTime.current === null) {
          initialTime.current = t;
        }
        t = t - initialTime.current;
        const timeSince = prevTime.current === null ? 0 : t - prevTime.current;
        let delta = timeSince * (speed / 1e3);
        if (isHover.current) {
          delta *= hoverFactor;
        }
        xOrY.current += delta;
        xOrY.current = wrap(0, animateToValue, xOrY.current,);
        prevTime.current = t;
        if (!isInView) {
          return;
        }
        offset.set(xOrY.current,);
      },);
    }
  }
  const fadeDirection = isHorizontal ? 'to right' : 'to bottom';
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart,);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask =
    `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs('section', {
      style: placeholderStyles,
      children: [
        /* @__PURE__ */ _jsx('div', { style: emojiStyles, children: '\u2728', },),
        /* @__PURE__ */ _jsx('p', { style: titleStyles, children: 'Connect to Content', },),
        /* @__PURE__ */ _jsx('p', { style: subtitleStyles, children: 'Add layers or components to infinitely loop on your page.', },),
      ],
    },);
  }
  return /* @__PURE__ */ _jsx('section', {
    style: {
      ...containerStyle,
      opacity,
      WebkitMaskImage: fadeContent ? fadeMask : void 0,
      MozMaskImage: fadeContent ? fadeMask : void 0,
      maskImage: fadeContent ? fadeMask : void 0,
      overflow: overflow ? 'visible' : 'hidden',
      padding: paddingValue,
    },
    ref: parentRef,
    children: /* @__PURE__ */ _jsxs(motion.ul, {
      ref: listRef,
      style: {
        ...containerStyle,
        gap,
        top: direction === 'bottom' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        left: direction === 'right' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        placeItems: alignment,
        position: 'relative',
        flexDirection: isHorizontal ? 'row' : 'column',
        ...style,
        transform: supportsAcceleratedAnimations ? void 0 : transform,
        willChange: 'transform',
      },
      onMouseEnter: () => {
        isHover.current = true;
        if (animationRef.current) {
          animationRef.current.updatePlaybackRate(hoverFactor,);
        }
      },
      onMouseLeave: () => {
        isHover.current = false;
        if (animationRef.current) {
          animationRef.current.updatePlaybackRate(1,);
        }
      },
      children: [clonedChildren, dupedChildren,],
    },),
  },);
}
Ticker.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: true, heightType: true, },
  fadeOptions: { fadeContent: true, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0, },
  direction: true,
};
addPropertyControls(Ticker, {
  slots: { type: ControlType.Array, title: 'Children', control: { type: ControlType.ComponentInstance, }, },
  speed: { type: ControlType.Number, title: 'Speed', min: 0, max: 1e3, defaultValue: 100, unit: '%', displayStepper: true, step: 5, },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    defaultValue: 'left',
    displaySegmentedControl: true,
  },
  alignment: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom',],
        left: ['align-top', 'align-middle', 'align-bottom',],
        top: ['align-left', 'align-center', 'align-right',],
        bottom: ['align-left', 'align-center', 'align-right',],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: true,
  },
  gap: { type: ControlType.Number, title: 'Gap', },
  padding: {
    title: 'Padding',
    type: ControlType.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side',],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',],
    valueLabels: ['T', 'R', 'B', 'L',],
    min: 0,
  },
  sizingOptions: {
    type: ControlType.Object,
    title: 'Sizing',
    controls: {
      widthType: { type: ControlType.Boolean, title: 'Width', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
      heightType: { type: ControlType.Boolean, title: 'Height', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
    },
  },
  fadeOptions: {
    type: ControlType.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: ControlType.Boolean, title: 'Fade', defaultValue: true, },
      overflow: {
        type: ControlType.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: false,
        hidden(props,) {
          return props.fadeContent === true;
        },
      },
      fadeWidth: {
        type: ControlType.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeInset: {
        type: ControlType.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
    },
  },
  hoverFactor: {
    type: ControlType.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
    description: 'Slows down the speed while you are hovering.',
  },
},);
var containerStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  placeItems: 'center',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  textIndent: 'none',
};
var placeholderStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  placeContent: 'center',
  placeItems: 'center',
  flexDirection: 'column',
  color: '#96F',
  background: 'rgba(136, 85, 255, 0.1)',
  fontSize: 11,
  overflow: 'hidden',
  padding: '20px 20px 30px 20px',
};
var emojiStyles = { fontSize: 32, marginBottom: 10, };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center', };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: 'center', };
var clamp = (num, min, max,) => Math.min(Math.max(num, min,), max,);
var isValidNumber = (value,) => typeof value === 'number' && !isNaN(value,);

// https :https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js
var TickerFonts = getFonts(Ticker,);
var cycleOrder = ['GSFRnChFA', 'l9f6iav4R',];
var variantClassNames = { GSFRnChFA: 'framer-v-uvc2d5', l9f6iav4R: 'framer-v-1w9d22v', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap = { 'Logo Ticker - M': 'l9f6iav4R', 'Logo Ticker': 'GSFRnChFA', };
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var transformTemplate = (_, t,) => `translate(-50%, -50%) ${t}`;
var Component = /* @__PURE__ */ React.forwardRef(
  function ({ id, style, className, width, height, layoutId, variant: outerVariant = 'GSFRnChFA', ...restProps }, ref,) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
      cycleOrder,
      defaultVariant: 'GSFRnChFA',
      transitions,
      variant,
      variantClassNames,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const defaultLayoutId = React.useId();
    return /* @__PURE__ */ _jsx2(LayoutGroup2, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx2(motion2.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx('framer-BxTPQ', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx('framer-uvc2d5', className,),
          'data-framer-name': 'Logo Ticker',
          layoutDependency,
          layoutId: 'GSFRnChFA',
          ref,
          style: { opacity: 0.6, ...style, },
          transition,
          ...addPropertyOverrides({ l9f6iav4R: { 'data-framer-name': 'Logo Ticker - M', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion2.p, {
                  style: {
                    '--font-selector': 'SW50ZXItQm9sZA==',
                    '--framer-font-family': '"Inter-Bold", "Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-weight': '700',
                    '--framer-letter-spacing': '-0.2px',
                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                  },
                  children: /* @__PURE__ */ _jsx2(motion2.span, {
                    'data-text-fill': 'true',
                    style: { backgroundImage: 'linear-gradient(90deg, rgb(21, 132, 235) 0%, rgb(36, 214, 217) 100%)', },
                    children: 'Featured by',
                  },),
                },),
              },),
              className: 'framer-kqr5os',
              fonts: ['Inter-Bold',],
              layoutDependency,
              layoutId: 'XfndhbYr8',
              style: {
                '--extracted-r6o4lv': 'var(--token-15fc6ab8-c2ea-472c-853a-fd5eab1ecf4a, rgba(10, 10, 13, 0.6))',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                '--framer-paragraph-spacing': '0px',
                opacity: 0,
              },
              transformTemplate,
              transition,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(motion2.div, {
              className: 'framer-33yjyg',
              'data-framer-name': 'Ticker Container',
              layoutDependency,
              layoutId: 'DIozXdNnd',
              transition,
              children: /* @__PURE__ */ _jsx2(motion2.div, {
                className: 'framer-aj5tiq-container',
                layoutDependency,
                layoutId: 'LY9zg3llC-container',
                transition,
                children: /* @__PURE__ */ _jsx2(Ticker, {
                  alignment: 'center',
                  direction: 'left',
                  fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false, },
                  gap: 48,
                  height: '100%',
                  hoverFactor: 0.5,
                  id: 'LY9zg3llC',
                  layoutId: 'LY9zg3llC',
                  padding: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingPerSide: false,
                  paddingRight: 10,
                  paddingTop: 10,
                  sizingOptions: { heightType: true, widthType: true, },
                  slots: [
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 214,
                        pixelHeight: 56,
                        pixelWidth: 214,
                        src:
                          new URL(
                            'assets/2MRVAPOv5JgK3XywRONSUaIKqk.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-ho7oum',
                      'data-framer-name': 'ticker6',
                      layoutDependency,
                      layoutId: 'wIBpL1t1o',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 266,
                        pixelHeight: 56,
                        pixelWidth: 266,
                        src:
                          new URL(
                            'assets/AWy6GJFmKZrXWU757K5RoZkK3g.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-m43icu',
                      'data-framer-name': 'ticker5',
                      layoutDependency,
                      layoutId: 'DiDAbjJRO',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 175,
                        pixelHeight: 56,
                        pixelWidth: 175,
                        src:
                          new URL(
                            'assets/rZQaW9lAvPXMyLnVeXIW6OB7mA.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1lkiw69',
                      'data-framer-name': 'ticker4',
                      layoutDependency,
                      layoutId: 'H2SK1ImTm',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 241,
                        pixelHeight: 56,
                        pixelWidth: 241,
                        src:
                          new URL(
                            'assets/Q10yYhvk0MrTo7QY1DcHQgJMo.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1pkn5xg',
                      'data-framer-name': 'ticker3',
                      layoutDependency,
                      layoutId: 'ccoKfMTwo',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 202,
                        pixelHeight: 56,
                        pixelWidth: 202,
                        src:
                          new URL(
                            'assets/ppxS5gb3Cz9F0carwvkiKmJGAU.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1r2h739',
                      'data-framer-name': 'ticker2',
                      layoutDependency,
                      layoutId: 'JoXhu8PjD',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 218,
                        pixelHeight: 56,
                        pixelWidth: 218,
                        src:
                          new URL(
                            'assets/UDE4FbyVmBdXLpobJWNt4qebTHA.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/knRmyHsV6t1ykfHFuFk9/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1zxwag',
                      'data-framer-name': 'ticker1',
                      layoutDependency,
                      layoutId: 'D0cqPvsIH',
                      transition,
                    },),
                  ],
                  speed: 75,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
          ],
        },),
      },),
    },);
  },
);
var css = [
  '.framer-BxTPQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-BxTPQ .framer-154d70i { display: block; }',
  '.framer-BxTPQ .framer-uvc2d5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 32px 16px 32px 16px; position: relative; width: 708px; }',
  '.framer-BxTPQ .framer-kqr5os { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-BxTPQ .framer-33yjyg { flex: none; height: 200px; overflow: visible; position: relative; width: 676px; }',
  '.framer-BxTPQ .framer-aj5tiq-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-BxTPQ .framer-ho7oum { aspect-ratio: 3.8214285714285716 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 92px; }',
  '.framer-BxTPQ .framer-m43icu { aspect-ratio: 4.75 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 114px; }',
  '.framer-BxTPQ .framer-1lkiw69 { aspect-ratio: 3.125 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 75px; }',
  '.framer-BxTPQ .framer-1pkn5xg { aspect-ratio: 4.303571428571429 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 103px; }',
  '.framer-BxTPQ .framer-1r2h739 { aspect-ratio: 3.607142857142857 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 87px; }',
  '.framer-BxTPQ .framer-1zxwag { aspect-ratio: 3.892857142857143 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 93px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BxTPQ .framer-uvc2d5 { gap: 0px; } .framer-BxTPQ .framer-uvc2d5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-BxTPQ .framer-uvc2d5 > :first-child { margin-top: 0px; } .framer-BxTPQ .framer-uvc2d5 > :last-child { margin-bottom: 0px; } }',
  '.framer-BxTPQ.framer-v-1w9d22v .framer-uvc2d5 { gap: 0px; height: 96px; padding: 32px 0px 32px 0px; width: 359px; }',
  '.framer-BxTPQ.framer-v-1w9d22v .framer-33yjyg { width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BxTPQ.framer-v-1w9d22v .framer-uvc2d5 { gap: 0px; } .framer-BxTPQ.framer-v-1w9d22v .framer-uvc2d5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-BxTPQ.framer-v-1w9d22v .framer-uvc2d5 > :first-child { margin-top: 0px; } .framer-BxTPQ.framer-v-1w9d22v .framer-uvc2d5 > :last-child { margin-bottom: 0px; } }',
];
var FramerF1yUSD211 = withCSS(Component, css, 'framer-BxTPQ',);
var stdin_default = FramerF1yUSD211;
FramerF1yUSD211.displayName = 'Logo Ticker';
FramerF1yUSD211.defaultProps = { height: 64, width: 708, };
addPropertyControls2(FramerF1yUSD211, {
  variant: {
    options: ['GSFRnChFA', 'l9f6iav4R',],
    optionTitles: ['Logo Ticker', 'Logo Ticker - M',],
    title: 'Variant',
    type: ControlType2.Enum,
  },
},);
addFonts(FramerF1yUSD211, [...TickerFonts,],);

// virtual:logos
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var logos_default = stdin_default;
export { logos_default as default, };
