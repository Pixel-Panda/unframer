/* eslint-disable */
'use client';
import './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/j9cpR8yXlU3UtAPcguLJ/MOVIkZrqA7DXUiHZgPfL/vitO4v4o_.js
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  cx,
  Floating,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useOverlayState,
  useVariantState,
  withCSS,
  withFX,
} from 'unframer';
import { AnimatePresence, LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var MotionDivWithFX = withFX(motion.div,);
var cycleOrder = ['afltwohg0',];
var serializationHash = 'framer-Hb99i';
var variantClassNames = { afltwohg0: 'framer-v-15a397', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
var transition2 = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var animation = { opacity: 0, rotate: 0, scale: 1, transition: transition2, x: 0, y: 0, };
var animation1 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, transition: transition2, x: 0, y: 0, };
var animation2 = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 0, };
var Overlay = ({ children, blockDocumentScrolling, enabled = true, },) => {
  const [visible, setVisible,] = useOverlayState({ blockDocumentScrolling, },);
  return children({
    hide: () => setVisible(false,),
    show: () => setVisible(true,),
    toggle: () => setVisible(!visible,),
    visible: enabled && visible,
  },);
};
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'afltwohg0',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onMouseEnter1gx595p = (overlay,) =>
    activeVariantCallback(async (...args) => {
      overlay.show();
    },);
  const ref1 = React.useRef(null,);
  const ref2 = React.useRef(null,);
  const ref3 = React.useRef(null,);
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
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-15a397', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'afltwohg0',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: /* @__PURE__ */ _jsx(Overlay, {
            blockDocumentScrolling: false,
            children: (overlay,) =>
              /* @__PURE__ */ _jsxs(_Fragment, {
                children: [
                  /* @__PURE__ */ _jsx(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, { children: 'a menu real overlay', },),
                    },),
                    className: 'framer-is140v',
                    'data-highlight': true,
                    fonts: ['Inter',],
                    id: `${layoutId}-is140v`,
                    layoutDependency,
                    layoutId: 'I8j2gyKel',
                    onMouseEnter: onMouseEnter1gx595p(overlay,),
                    ref: ref2,
                    style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                    transformTemplate: transformTemplate1,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx(AnimatePresence, {
                    children: overlay.visible && /* @__PURE__ */ _jsx(Floating, {
                      alignment: 'center',
                      anchorRef: ref2,
                      className: cx(serializationHash, classNames, ...sharedStyleClassNames,),
                      collisionDetection: true,
                      collisionDetectionPadding: 20,
                      'data-framer-portal-id': `${layoutId}-is140v`,
                      offsetX: 0,
                      offsetY: 10,
                      onDismiss: overlay.hide,
                      placement: 'bottom',
                      portalSelector: '#overlay',
                      safeArea: true,
                      zIndex: 11,
                      children: /* @__PURE__ */ _jsx(MotionDivWithFX, {
                        __perspectiveFX: false,
                        __smartComponentFX: true,
                        __targetOpacity: 1,
                        animate: animation1,
                        className: 'framer-1vp15te',
                        exit: animation,
                        initial: animation2,
                        layoutDependency,
                        layoutId: 'LW_O3kPtE',
                        ref: ref3,
                        role: 'dialog',
                        style: {
                          backgroundColor: 'rgb(255, 255, 255)',
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.05)',
                        },
                        children: /* @__PURE__ */ _jsxs(motion.div, {
                          className: 'framer-10c8ste',
                          'data-border': true,
                          'data-framer-name': 'Menu',
                          layoutDependency,
                          layoutId: 'o2IaTQid7',
                          style: {
                            '--border-bottom-width': '1px',
                            '--border-color': 'rgb(235, 235, 235)',
                            '--border-left-width': '1px',
                            '--border-right-width': '1px',
                            '--border-style': 'solid',
                            '--border-top-width': '1px',
                            backgroundColor: 'rgb(255, 255, 255)',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: [
                            /* @__PURE__ */ _jsxs(motion.div, {
                              className: 'framer-1qzcvpp',
                              'data-framer-name': 'Left',
                              layoutDependency,
                              layoutId: 'Xp1w_KxP9',
                              children: [
                                /* @__PURE__ */ _jsx(RichText, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                                    children: /* @__PURE__ */ _jsx(motion.p, {
                                      style: {
                                        '--font-selector': 'SW50ZXItTWVkaXVt',
                                        '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                        '--framer-font-size': '10px',
                                        '--framer-font-weight': '500',
                                        '--framer-letter-spacing': '0.05em',
                                        '--framer-line-height': '1.5em',
                                        '--framer-text-alignment': 'left',
                                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))',
                                      },
                                      children: 'PRODUCT',
                                    },),
                                  },),
                                  className: 'framer-raoq06',
                                  fonts: ['Inter-Medium',],
                                  layoutDependency,
                                  layoutId: 'oIZyBT1w7',
                                  style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.4)', '--framer-paragraph-spacing': '0px', },
                                  verticalAlignment: 'top',
                                  withExternalLayout: true,
                                },),
                                /* @__PURE__ */ _jsxs(motion.div, {
                                  className: 'framer-16wtwv1',
                                  'data-framer-name': 'Item',
                                  layoutDependency,
                                  layoutId: 'pe3VrjY8y',
                                  children: [
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '15px',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.01em',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(17, 17, 17))',
                                          },
                                          children: 'Design',
                                        },),
                                      },),
                                      className: 'framer-g5uqtm',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'UVkzS4pKe',
                                      style: { '--extracted-r6o4lv': 'rgb(17, 17, 17)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '12px',
                                            '--framer-font-weight': '500',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))',
                                          },
                                          children: 'An infinite canvas',
                                        },),
                                      },),
                                      className: 'framer-voq7s',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'jGr_kbvp0',
                                      style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.5)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs(motion.div, {
                                  className: 'framer-156v7m6',
                                  'data-framer-name': 'Item',
                                  layoutDependency,
                                  layoutId: 'jia9HBUQN',
                                  children: [
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '15px',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.01em',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(17, 17, 17))',
                                          },
                                          children: 'Content',
                                        },),
                                      },),
                                      className: 'framer-13n82ol',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'mlJPvXIlQ',
                                      style: { '--extracted-r6o4lv': 'rgb(17, 17, 17)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '12px',
                                            '--framer-font-weight': '500',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))',
                                          },
                                          children: 'Create your first blog',
                                        },),
                                      },),
                                      className: 'framer-ymbyn1',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'GHyOeYAuU',
                                      style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.5)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs(motion.div, {
                                  className: 'framer-yyzakw',
                                  'data-framer-name': 'Item',
                                  layoutDependency,
                                  layoutId: 'ugrz2L60p',
                                  children: [
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '15px',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.01em',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(17, 17, 17))',
                                          },
                                          children: 'Publish',
                                        },),
                                      },),
                                      className: 'framer-teephp',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'NUM1oHmiy',
                                      style: { '--extracted-r6o4lv': 'rgb(17, 17, 17)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '12px',
                                            '--framer-font-weight': '500',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))',
                                          },
                                          children: 'Go live within seconds',
                                        },),
                                      },),
                                      className: 'framer-1xz664v',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'IVKS9tN1Y',
                                      style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.5)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                  ],
                                },),
                              ],
                            },),
                            /* @__PURE__ */ _jsx(motion.div, {
                              className: 'framer-yao7d8',
                              'data-framer-name': 'Separator',
                              layoutDependency,
                              layoutId: 'cO0jwQspc',
                              style: { backgroundColor: 'rgb(235, 235, 235)', },
                            },),
                            /* @__PURE__ */ _jsxs(motion.div, {
                              className: 'framer-1sh9f8',
                              'data-framer-name': 'Right',
                              layoutDependency,
                              layoutId: 'pzaNe904u',
                              children: [
                                /* @__PURE__ */ _jsx(RichText, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                                    children: /* @__PURE__ */ _jsx(motion.p, {
                                      style: {
                                        '--font-selector': 'SW50ZXItTWVkaXVt',
                                        '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                        '--framer-font-size': '10px',
                                        '--framer-font-weight': '500',
                                        '--framer-letter-spacing': '0.05em',
                                        '--framer-line-height': '1.5em',
                                        '--framer-text-alignment': 'left',
                                        '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))',
                                      },
                                      children: 'RESOURCES',
                                    },),
                                  },),
                                  className: 'framer-mx5ump',
                                  fonts: ['Inter-Medium',],
                                  layoutDependency,
                                  layoutId: 'aEwWJUGYD',
                                  style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.4)', '--framer-paragraph-spacing': '0px', },
                                  verticalAlignment: 'top',
                                  withExternalLayout: true,
                                },),
                                /* @__PURE__ */ _jsxs(motion.div, {
                                  className: 'framer-1bg32dx',
                                  'data-framer-name': 'Item',
                                  layoutDependency,
                                  layoutId: 'CBBliaLo1',
                                  children: [
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '15px',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.01em',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(17, 17, 17))',
                                          },
                                          children: 'Blog',
                                        },),
                                      },),
                                      className: 'framer-v0k3th',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'TYTpN4cc0',
                                      style: { '--extracted-r6o4lv': 'rgb(17, 17, 17)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '12px',
                                            '--framer-font-weight': '500',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))',
                                          },
                                          children: 'Interviews and how-tos',
                                        },),
                                      },),
                                      className: 'framer-8nhvva',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'baS4PNu2I',
                                      style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.5)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs(motion.div, {
                                  className: 'framer-1hqddui',
                                  'data-framer-name': 'Item',
                                  layoutDependency,
                                  layoutId: 'xSiE9Awd8',
                                  children: [
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '15px',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.01em',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(17, 17, 17))',
                                          },
                                          children: 'Updates',
                                        },),
                                      },),
                                      className: 'framer-1a7j7w7',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'jf_v9W6My',
                                      style: { '--extracted-r6o4lv': 'rgb(17, 17, 17)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '12px',
                                            '--framer-font-weight': '500',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))',
                                          },
                                          children: 'Features and bug fixes',
                                        },),
                                      },),
                                      className: 'framer-qqg1d0',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'hKrVBsJIF',
                                      style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.5)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                  ],
                                },),
                                /* @__PURE__ */ _jsxs(motion.div, {
                                  className: 'framer-1tqxgjz',
                                  'data-framer-name': 'Item',
                                  layoutDependency,
                                  layoutId: 'ZPwtI38Rd',
                                  children: [
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '15px',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.01em',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(17, 17, 17))',
                                          },
                                          children: 'Documentation',
                                        },),
                                      },),
                                      className: 'framer-1uzmh27',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'EKwa9zfdK',
                                      style: { '--extracted-r6o4lv': 'rgb(17, 17, 17)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                    /* @__PURE__ */ _jsx(RichText, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                                        children: /* @__PURE__ */ _jsx(motion.p, {
                                          style: {
                                            '--font-selector': 'SW50ZXItTWVkaXVt',
                                            '--framer-font-family': '"Inter-Medium", "Inter", "Inter Placeholder", sans-serif',
                                            '--framer-font-size': '12px',
                                            '--framer-font-weight': '500',
                                            '--framer-line-height': '1.5em',
                                            '--framer-text-alignment': 'left',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.5))',
                                          },
                                          children: 'Get started with our API',
                                        },),
                                      },),
                                      className: 'framer-12r8zo1',
                                      fonts: ['Inter-Medium',],
                                      layoutDependency,
                                      layoutId: 'r1BUXmnOK',
                                      style: { '--extracted-r6o4lv': 'rgba(0, 0, 0, 0.5)', '--framer-paragraph-spacing': '0px', },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                    },),
                                  ],
                                },),
                              ],
                            },),
                          ],
                        },),
                      },),
                    },),
                  },),
                ],
              },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-Hb99i.framer-1o80vlf, .framer-Hb99i .framer-1o80vlf { display: block; }',
  '.framer-Hb99i.framer-15a397 { height: 19px; overflow: hidden; position: relative; width: 114px; }',
  '.framer-Hb99i .framer-is140v { flex: none; height: auto; left: 50%; position: absolute; top: 47%; white-space: pre; width: auto; }',
  '.framer-Hb99i .framer-1vp15te { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-Hb99i .framer-10c8ste { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; width: 600px; }',
  '.framer-Hb99i .framer-1qzcvpp, .framer-Hb99i .framer-1sh9f8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 30px 30px 30px; position: relative; width: 1px; }',
  '.framer-Hb99i .framer-raoq06, .framer-Hb99i .framer-g5uqtm, .framer-Hb99i .framer-voq7s, .framer-Hb99i .framer-13n82ol, .framer-Hb99i .framer-ymbyn1, .framer-Hb99i .framer-teephp, .framer-Hb99i .framer-1xz664v, .framer-Hb99i .framer-mx5ump, .framer-Hb99i .framer-v0k3th, .framer-Hb99i .framer-8nhvva, .framer-Hb99i .framer-1a7j7w7, .framer-Hb99i .framer-qqg1d0, .framer-Hb99i .framer-1uzmh27, .framer-Hb99i .framer-12r8zo1 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '.framer-Hb99i .framer-16wtwv1, .framer-Hb99i .framer-156v7m6, .framer-Hb99i .framer-yyzakw, .framer-Hb99i .framer-1bg32dx, .framer-Hb99i .framer-1hqddui, .framer-Hb99i .framer-1tqxgjz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-Hb99i .framer-yao7d8 { align-self: stretch; flex: none; height: auto; overflow: hidden; position: relative; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Hb99i .framer-1vp15te, .framer-Hb99i .framer-10c8ste, .framer-Hb99i .framer-1qzcvpp, .framer-Hb99i .framer-16wtwv1, .framer-Hb99i .framer-156v7m6, .framer-Hb99i .framer-yyzakw, .framer-Hb99i .framer-1sh9f8, .framer-Hb99i .framer-1bg32dx, .framer-Hb99i .framer-1hqddui, .framer-Hb99i .framer-1tqxgjz { gap: 0px; } .framer-Hb99i .framer-1vp15te > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Hb99i .framer-1vp15te > :first-child, .framer-Hb99i .framer-1qzcvpp > :first-child, .framer-Hb99i .framer-16wtwv1 > :first-child, .framer-Hb99i .framer-156v7m6 > :first-child, .framer-Hb99i .framer-yyzakw > :first-child, .framer-Hb99i .framer-1sh9f8 > :first-child, .framer-Hb99i .framer-1bg32dx > :first-child, .framer-Hb99i .framer-1hqddui > :first-child, .framer-Hb99i .framer-1tqxgjz > :first-child { margin-top: 0px; } .framer-Hb99i .framer-1vp15te > :last-child, .framer-Hb99i .framer-1qzcvpp > :last-child, .framer-Hb99i .framer-16wtwv1 > :last-child, .framer-Hb99i .framer-156v7m6 > :last-child, .framer-Hb99i .framer-yyzakw > :last-child, .framer-Hb99i .framer-1sh9f8 > :last-child, .framer-Hb99i .framer-1bg32dx > :last-child, .framer-Hb99i .framer-1hqddui > :last-child, .framer-Hb99i .framer-1tqxgjz > :last-child { margin-bottom: 0px; } .framer-Hb99i .framer-10c8ste > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Hb99i .framer-10c8ste > :first-child { margin-left: 0px; } .framer-Hb99i .framer-10c8ste > :last-child { margin-right: 0px; } .framer-Hb99i .framer-1qzcvpp > *, .framer-Hb99i .framer-1sh9f8 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Hb99i .framer-16wtwv1 > *, .framer-Hb99i .framer-156v7m6 > *, .framer-Hb99i .framer-yyzakw > *, .framer-Hb99i .framer-1bg32dx > *, .framer-Hb99i .framer-1hqddui > *, .framer-Hb99i .framer-1tqxgjz > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }',
  '.framer-Hb99i[data-border="true"]::after, .framer-Hb99i [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramervitO4v4o_ = withCSS(Component, css, 'framer-Hb99i',);
var stdin_default = FramervitO4v4o_;
FramervitO4v4o_.displayName = 'MenuOverlay';
FramervitO4v4o_.defaultProps = { height: 19, width: 114, };
addFonts(FramervitO4v4o_, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2',
    weight: '400',
  }, {
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
  },],
},], { supportsExplicitInterCodegen: true, },);

// virtual:menu-overlay
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var menu_overlay_default = stdin_default;
export { menu_overlay_default as default, };
