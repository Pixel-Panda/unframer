'use client';
import { defaultEvents, NullState, useIconSelection, } from './chunk-RSQQT5RN.js';
import './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js
import { jsx as _jsx3, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType3,
  cx as cx2,
  getFonts,
  Image,
  RichText,
  useActiveVariantCallback,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion3, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/hKjtTuWGYB451ckw6eTN/rQJeCcsGr1fSnWO0FT2G/Hero.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import * as React from 'react';
import { useEffect, useRef, useState, } from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'unframer/dist/framer';
import { motion, } from 'unframer';

// https :https://framer.com/m/hero-icons/Home.js@0.0.27
var r;
var l = (e,) => {
  if (!r) {
    const t = ({ size: o = 24, ...a }, n,) =>
      e.createElement(
        'svg',
        { viewBox: '0 0 20 20', fill: 'currentColor', width: o, height: o, ref: n, ...a, },
        e.createElement('path', {
          d: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z',
        },),
      );
    r = e.forwardRef(t,);
  }
  return r;
};

// https :https://framerusercontent.com/modules/hKjtTuWGYB451ckw6eTN/rQJeCcsGr1fSnWO0FT2G/Hero.js
var iconKeys = [
  'AcademicCap',
  'AcademicCapOutline',
  'Adjustments',
  'AdjustmentsOutline',
  'Annotation',
  'AnnotationOutline',
  'Archive',
  'ArchiveOutline',
  'ArrowCircleDown',
  'ArrowCircleLeft',
  'ArrowCircleRight',
  'ArrowCircleUp',
  'ArrowCircleUpOutline',
  'ArrowDown',
  'ArrowDownOutline',
  'ArrowLeft',
  'ArrowLeftOutline',
  'ArrowNarrowDown',
  'ArrowNarrowLeft',
  'ArrowNarrowRight',
  'ArrowNarrowUp',
  'ArrowNarrowUpOutline',
  'ArrowRight',
  'ArrowRightOutline',
  'ArrowUp',
  'ArrowUpOutline',
  'ArrowsExpand',
  'ArrowsExpandOutline',
  'AtSymbol',
  'AtSymbolOutline',
  'Backspace',
  'BackspaceOutline',
  'BadgeCheck',
  'BadgeCheckOutline',
  'Ban',
  'BanOutline',
  'Beaker',
  'BeakerOutline',
  'Bell',
  'BellOutline',
  'BookOpen',
  'BookOpenOutline',
  'Bookmark',
  'BookmarkAlt',
  'BookmarkAltOutline',
  'BookmarkOutline',
  'Briefcase',
  'BriefcaseOutline',
  'Cake',
  'CakeOutline',
  'Calculator',
  'CalculatorOutline',
  'Calendar',
  'CalendarOutline',
  'Camera',
  'CameraOutline',
  'Cash',
  'CashOutline',
  'ChartBar',
  'ChartBarOutline',
  'ChartPie',
  'ChartPieOutline',
  'ChartSquareBar',
  'Chat',
  'ChatAlt',
  'ChatAlt2',
  'ChatAlt2Outline',
  'ChatAltOutline',
  'ChatOutline',
  'Check',
  'CheckCircle',
  'CheckCircleOutline',
  'CheckOutline',
  'ChevronDoubleDown',
  'ChevronDoubleLeft',
  'ChevronDoubleRight',
  'ChevronDoubleUp',
  'ChevronDown',
  'ChevronDownOutline',
  'ChevronLeft',
  'ChevronLeftOutline',
  'ChevronRight',
  'ChevronRightOutline',
  'ChevronUp',
  'ChevronUpOutline',
  'Chip',
  'ChipOutline',
  'Clipboard',
  'ClipboardCheck',
  'ClipboardCopy',
  'ClipboardCopyOutline',
  'ClipboardList',
  'ClipboardListOutline',
  'ClipboardOutline',
  'Clock',
  'ClockOutline',
  'Cloud',
  'CloudDownload',
  'CloudDownloadOutline',
  'CloudOutline',
  'CloudUpload',
  'CloudUploadOutline',
  'Code',
  'CodeOutline',
  'Cog',
  'CogOutline',
  'Collection',
  'CollectionOutline',
  'ColorSwatch',
  'ColorSwatchOutline',
  'CreditCard',
  'CreditCardOutline',
  'Cube',
  'CubeOutline',
  'CubeTransparent',
  'CurrencyBangladeshi',
  'CurrencyDollar',
  'CurrencyEuro',
  'CurrencyEuroOutline',
  'CurrencyPound',
  'CurrencyPoundOutline',
  'CurrencyRupee',
  'CurrencyRupeeOutline',
  'CurrencyYen',
  'CurrencyYenOutline',
  'CursorClick',
  'CursorClickOutline',
  'Database',
  'DatabaseOutline',
  'DesktopComputer',
  'DeviceMobile',
  'DeviceMobileOutline',
  'DeviceTablet',
  'DeviceTabletOutline',
  'Document',
  'DocumentAdd',
  'DocumentAddOutline',
  'DocumentDownload',
  'DocumentDuplicate',
  'DocumentOutline',
  'DocumentRemove',
  'DocumentReport',
  'DocumentSearch',
  'DocumentText',
  'DocumentTextOutline',
  'DotsCircleHorizontal',
  'DotsHorizontal',
  'DotsVertical',
  'DotsVerticalOutline',
  'Download',
  'DownloadOutline',
  'Duplicate',
  'DuplicateOutline',
  'EmojiHappy',
  'EmojiHappyOutline',
  'EmojiSad',
  'EmojiSadOutline',
  'Exclamation',
  'ExclamationCircle',
  'ExclamationOutline',
  'ExternalLink',
  'ExternalLinkOutline',
  'Eye',
  'EyeOff',
  'EyeOffOutline',
  'EyeOutline',
  'FastForward',
  'FastForwardOutline',
  'Film',
  'FilmOutline',
  'Filter',
  'FilterOutline',
  'FingerPrint',
  'FingerPrintOutline',
  'Fire',
  'FireOutline',
  'Flag',
  'FlagOutline',
  'Folder',
  'FolderAdd',
  'FolderAddOutline',
  'FolderDownload',
  'FolderOpen',
  'FolderOpenOutline',
  'FolderOutline',
  'FolderRemove',
  'FolderRemoveOutline',
  'Gift',
  'GiftOutline',
  'Globe',
  'GlobeAlt',
  'GlobeAltOutline',
  'GlobeOutline',
  'Hand',
  'HandOutline',
  'Hashtag',
  'HashtagOutline',
  'Heart',
  'HeartOutline',
  'Home',
  'HomeOutline',
  'Identification',
  'Inbox',
  'InboxIn',
  'InboxInOutline',
  'InboxOutline',
  'InformationCircle',
  'Key',
  'KeyOutline',
  'Library',
  'LibraryOutline',
  'LightBulb',
  'LightBulbOutline',
  'LightningBolt',
  'LightningBoltOutline',
  'Link',
  'LinkOutline',
  'LocationMarker',
  'LockClosed',
  'LockClosedOutline',
  'LockOpen',
  'LockOpenOutline',
  'Login',
  'LoginOutline',
  'Logout',
  'LogoutOutline',
  'Mail',
  'MailOpen',
  'MailOpenOutline',
  'MailOutline',
  'Map',
  'MapOutline',
  'Menu',
  'MenuAlt1',
  'MenuAlt1Outline',
  'MenuAlt2',
  'MenuAlt2Outline',
  'MenuAlt3',
  'MenuAlt3Outline',
  'MenuAlt4',
  'MenuAlt4Outline',
  'MenuOutline',
  'Microphone',
  'MicrophoneOutline',
  'Minus',
  'MinusCircle',
  'MinusCircleOutline',
  'MinusOutline',
  'MinusSm',
  'MinusSmOutline',
  'Moon',
  'MoonOutline',
  'MusicNote',
  'MusicNoteOutline',
  'Newspaper',
  'NewspaperOutline',
  'OfficeBuilding',
  'PaperAirplane',
  'PaperAirplaneOutline',
  'PaperClip',
  'PaperClipOutline',
  'Pause',
  'PauseOutline',
  'Pencil',
  'PencilAlt',
  'PencilAltOutline',
  'PencilOutline',
  'Phone',
  'PhoneIncoming',
  'PhoneIncomingOutline',
  'PhoneMissedCall',
  'PhoneOutgoing',
  'PhoneOutgoingOutline',
  'PhoneOutline',
  'Photograph',
  'PhotographOutline',
  'Play',
  'PlayOutline',
  'Plus',
  'PlusCircle',
  'PlusCircleOutline',
  'PlusOutline',
  'PlusSm',
  'PlusSmOutline',
  'PresentationChartBar',
  'Printer',
  'PrinterOutline',
  'Puzzle',
  'PuzzleOutline',
  'Qrcode',
  'QrcodeOutline',
  'QuestionMarkCircle',
  'ReceiptRefund',
  'ReceiptRefundOutline',
  'ReceiptTax',
  'ReceiptTaxOutline',
  'Refresh',
  'RefreshOutline',
  'Reply',
  'ReplyOutline',
  'Rewind',
  'RewindOutline',
  'Rss',
  'RssOutline',
  'Save',
  'SaveAs',
  'SaveAsOutline',
  'SaveOutline',
  'Scale',
  'ScaleOutline',
  'Scissors',
  'ScissorsOutline',
  'Search',
  'SearchCircle',
  'SearchCircleOutline',
  'SearchOutline',
  'Selector',
  'SelectorOutline',
  'Server',
  'ServerOutline',
  'Share',
  'ShareOutline',
  'ShieldCheck',
  'ShieldCheckOutline',
  'ShieldExclamation',
  'ShoppingBag',
  'ShoppingBagOutline',
  'ShoppingCart',
  'ShoppingCartOutline',
  'SortAscending',
  'SortAscendingOutline',
  'SortDescending',
  'Sparkles',
  'SparklesOutline',
  'Speakerphone',
  'SpeakerphoneOutline',
  'Star',
  'StarOutline',
  'StatusOffline',
  'StatusOfflineOutline',
  'StatusOnline',
  'StatusOnlineOutline',
  'Stop',
  'StopOutline',
  'Sun',
  'SunOutline',
  'Support',
  'SupportOutline',
  'SwitchHorizontal',
  'SwitchVertical',
  'Table',
  'TableOutline',
  'Tag',
  'TagOutline',
  'Template',
  'TemplateOutline',
  'Terminal',
  'TerminalOutline',
  'ThumbDown',
  'ThumbDownOutline',
  'ThumbUp',
  'ThumbUpOutline',
  'Ticket',
  'TicketOutline',
  'Translate',
  'TranslateOutline',
  'Trash',
  'TrashOutline',
  'TrendingDown',
  'TrendingDownOutline',
  'TrendingUp',
  'TrendingUpOutline',
  'Truck',
  'TruckOutline',
  'Upload',
  'UploadOutline',
  'User',
  'UserAdd',
  'UserAddOutline',
  'UserCircle',
  'UserCircleOutline',
  'UserGroup',
  'UserGroupOutline',
  'UserOutline',
  'UserRemove',
  'UserRemoveOutline',
  'Users',
  'UsersOutline',
  'Variable',
  'VariableOutline',
  'VideoCamera',
  'VideoCameraOutline',
  'ViewBoards',
  'ViewBoardsOutline',
  'ViewGrid',
  'ViewGridAdd',
  'ViewGridAddOutline',
  'ViewGridOutline',
  'ViewList',
  'ViewListOutline',
  'VolumeOff',
  'VolumeOffOutline',
  'VolumeUp',
  'VolumeUpOutline',
  'Wifi',
  'WifiOutline',
  'X',
  'XCircle',
  'XCircleOutline',
  'XOutline',
  'ZoomIn',
  'ZoomInOutline',
  'ZoomOut',
  'ZoomOutOutline',
];
var moduleBaseUrl = 'https://framer.com/m/hero-icons/';
var lowercaseIconKeyPairs = iconKeys.reduce((res, key,) => {
  res[key.toLowerCase()] = key;
  return res;
}, {},);
function Icon(props,) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, mirrored, } = props;
  const isMounted = useRef(false,);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs,);
  const [SelectedIcon, setSelectedIcon,] = useState(iconKey === 'Home' ? l(React,) : null,);
  async function importModule() {
    try {
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@0.0.27`;
      const module = await import(
        /* webpackIgnore: true */
        iconModuleUrl
      );
      if (isMounted.current) {
        setSelectedIcon(module.default(React,),);
      }
    } catch {
      if (isMounted.current) {
        setSelectedIcon(null,);
      }
    }
  }
  useEffect(() => {
    isMounted.current = true;
    importModule();
    return () => {
      isMounted.current = false;
    };
  }, [iconKey,],);
  const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx(NullState, {},) : null;
  return /* @__PURE__ */ _jsx(motion.div, {
    style: { display: 'contents', },
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    children: SelectedIcon
      ? /* @__PURE__ */ _jsx(SelectedIcon, {
        style: { width: '100%', height: '100%', transform: mirrored ? 'scale(-1, 1)' : void 0, },
        color,
      },)
      : emptyState,
  },);
}
Icon.displayName = 'Hero';
Icon.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: 'Home',
  iconSearch: 'Home',
  color: '#66F',
  selectByList: true,
  mirrored: false,
};
addPropertyControls(Icon, {
  selectByList: {
    type: ControlType.Boolean,
    title: 'Select',
    enabledTitle: 'List',
    disabledTitle: 'Search',
    defaultValue: Icon.defaultProps.selectByList,
  },
  iconSelection: {
    type: ControlType.Enum,
    options: iconKeys,
    defaultValue: Icon.defaultProps.iconSelection,
    title: 'Name',
    hidden: ({ selectByList, },) => !selectByList,
    description: 'Find every icon name on the [Hero site](https://heroicons.com/)',
  },
  iconSearch: {
    type: ControlType.String,
    title: 'Name',
    placeholder: 'Menu, Wifi, Box\u2026',
    hidden: ({ selectByList, },) => selectByList,
  },
  mirrored: { type: ControlType.Boolean, enabledTitle: 'Yes', disabledTitle: 'No', defaultValue: Icon.defaultProps.mirrored, },
  color: { type: ControlType.Color, title: 'Color', defaultValue: Icon.defaultProps.color, },
  ...defaultEvents,
},);

// https :https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import * as React2 from 'react';
import { LayoutGroup, motion as motion2, } from 'unframer';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  Image as Image1,
  Stack,
  useAddVariantProps,
  useVariantState,
  withCSS,
} from 'unframer/dist/framer';

// https :https://framer.com/m/framer/useConstant.js@^1.0.0
import { useRef as useRef2, } from 'react';
function useConstant(init,) {
  const ref = useRef2(null,);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// https :https://framer.com/m/framer/randomID.js@^2.0.0
var BASE62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function randomID(length = 5,) {
  return Array(length,).fill(0,).map(
    () => BASE62[Math.floor(Math.random() * BASE62.length,)],
  ).join('',);
}
function useRandomID(length = 5,) {
  return useConstant(
    () => randomID(length,),
  );
}

// https :https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js
var cycleOrder = [
  'AD1uRb789',
  't6uYX0tBZ',
  'AnI2DvQZf',
  'JG7MxGgTY',
  'snFARdAmz',
  'Nz_Z2NTH0',
  'cHv8JY9g7',
  'tR7FlThNE',
  'bg0lLngd2',
  'FKNQjSL73',
  'UozSdcuUY',
  'EgLxQrxHD',
  'vol5AdrV3',
  'rbMcqs1eA',
  'OY_j7HdJV',
  'mcvPgNUgN',
  'Jj_gJ6raO',
  'UYFenO8zH',
  'RpMB9X2cU',
  'tExww8aRk',
  'anaA6RL0b',
  'y8osi5SA0',
  'v2n6jd8d8',
  'vrPxXX3Sq',
  'YC5psLXzO',
  'wQ9whLvFH',
  'hUi9TraZo',
  'ji0e3Gqv5',
  'nMHdUM1t6',
  'Stnp3oRU4',
  'TxmZTsvXB',
  'bNhqIdQoj',
  'OYkCSZPL0',
  'bOMpuyzc_',
  'NqCoJY2pH',
];
var variantClassNames = {
  'AD1uRb789': 'framer-v-rqhbs3',
  't6uYX0tBZ': 'framer-v-ina8tq',
  'AnI2DvQZf': 'framer-v-lwbc2o',
  'JG7MxGgTY': 'framer-v-vqryag',
  'snFARdAmz': 'framer-v-kwp1i3',
  'Nz_Z2NTH0': 'framer-v-1h8ejmh',
  'cHv8JY9g7': 'framer-v-c75qsa',
  'tR7FlThNE': 'framer-v-1ftwjq5',
  'bg0lLngd2': 'framer-v-osfy8l',
  'FKNQjSL73': 'framer-v-5qhg5s',
  'UozSdcuUY': 'framer-v-5ats54',
  'EgLxQrxHD': 'framer-v-z5mnn6',
  'vol5AdrV3': 'framer-v-6xnqop',
  'rbMcqs1eA': 'framer-v-xmx6ye',
  'OY_j7HdJV': 'framer-v-a1v8wx',
  'mcvPgNUgN': 'framer-v-1oj0oue',
  'Jj_gJ6raO': 'framer-v-19e1lqz',
  'UYFenO8zH': 'framer-v-16en86l',
  'RpMB9X2cU': 'framer-v-1vzsblg',
  'tExww8aRk': 'framer-v-1kgllbw',
  'anaA6RL0b': 'framer-v-zia1yx',
  'y8osi5SA0': 'framer-v-9mi1m7',
  'v2n6jd8d8': 'framer-v-zgdwlg',
  'vrPxXX3Sq': 'framer-v-1dgnypb',
  'YC5psLXzO': 'framer-v-rum36c',
  'wQ9whLvFH': 'framer-v-1u5c2u8',
  'hUi9TraZo': 'framer-v-1dt8e1w',
  'ji0e3Gqv5': 'framer-v-1rkl824',
  'nMHdUM1t6': 'framer-v-17d51pb',
  'Stnp3oRU4': 'framer-v-158neyh',
  'TxmZTsvXB': 'framer-v-1atb71u',
  'bNhqIdQoj': 'framer-v-1x8h963',
  'OYkCSZPL0': 'framer-v-hblyuj',
  'bOMpuyzc_': 'framer-v-cra8ie',
  'NqCoJY2pH': 'framer-v-1sz721s',
};
var humanReadableVariantMap = {
  'Jason': 'AD1uRb789',
  'Jess': 't6uYX0tBZ',
  'Olli': 'AnI2DvQZf',
  'Myah': 'JG7MxGgTY',
  'Ammaar': 'snFARdAmz',
  'Siena': 'Nz_Z2NTH0',
  'Cheryl': 'cHv8JY9g7',
  'Aleeza': 'tR7FlThNE',
  'Elli': 'bg0lLngd2',
  'Piotr': 'FKNQjSL73',
  'Ayisha': 'UozSdcuUY',
  'Nataniel': 'EgLxQrxHD',
  'Nikita': 'vol5AdrV3',
  'Tim': 'rbMcqs1eA',
  'Carley': 'OY_j7HdJV',
  'Arda': 'mcvPgNUgN',
  'Lacey-Mae': 'Jj_gJ6raO',
  'Bo': 'UYFenO8zH',
  'Shelbie': 'RpMB9X2cU',
  'Dillon': 'tExww8aRk',
  'Selin': 'OYkCSZPL0',
  'Rhian': 'y8osi5SA0',
  'Ada': 'v2n6jd8d8',
  'Lois': 'vrPxXX3Sq',
  'Maisie': 'YC5psLXzO',
  'Lori': 'wQ9whLvFH',
  'Jardel': 'hUi9TraZo',
  'Jethro': 'ji0e3Gqv5',
  'Carmen': 'nMHdUM1t6',
  'Patrik': 'Stnp3oRU4',
  'Barry': 'TxmZTsvXB',
  'Alejandro': 'bNhqIdQoj',
  'Denny': 'bOMpuyzc_',
  'Becca': 'NqCoJY2pH',
};
var transitions = {
  'default': { 'type': 'spring', 'ease': [0.44, 0, 0.56, 1,], 'duration': 0.3, 'delay': 0, 'stiffness': 500, 'damping': 60, 'mass': 1, },
};
var Component = /* @__PURE__ */ React2.forwardRef(
  function (
    {
      style,
      className,
      layoutId,
      width,
      height,
      variant: outerVariant = 'AD1uRb789',
      background: VurELiPqN = 'rgb(255, 219, 222)',
      radius: Z2NuoQS1k = 60,
      rotation: tc_6nmlts = 0,
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { variants, baseVariant, gestureVariant, classNames, transition, setVariant, setGestureState, } = useVariantState({
      defaultVariant: 'AD1uRb789',
      variant,
      transitions,
      variantClassNames,
      cycleOrder,
    },);
    const variantProps = React2.useMemo(() => ({
      't6uYX0tBZ': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Jess',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/XfjXHJ2H7SzzlzPr1bGFm1T9BpI.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'AnI2DvQZf': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Olli',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/qCpU7HJtiveCC9wTFuh7L4wc8YM.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'JG7MxGgTY': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Myah',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/Q8IGGb6PvVKrjNuovM2HijDWFU.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'snFARdAmz': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Ammaar',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/iGk4x1NJSVgWzFvuQQADJp9I.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'Nz_Z2NTH0': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Siena',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/ikD34vgzaLM6N50MKdcR9HVBnk.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'cHv8JY9g7': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Cheryl',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/mUVPNgOqhd1MFYjLtFtiBwvxfY.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'tR7FlThNE': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Aleeza',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/62fnqd1V6QN3j0vPr4hlpB3HnQ.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'bg0lLngd2': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Elli',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/Vu8TxX7VMCMZDjoliFK7D0nOyX0.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'FKNQjSL73': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Piotr',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/ofIUD8MCjke7Xz8jkh29AWqajJo.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'UozSdcuUY': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Ayisha',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/5nnqp2inSINDktAAWpI7gxJei0w.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'EgLxQrxHD': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Nataniel',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/lKaaStgbmdIe8TfrIkFlKzHazV0.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'vol5AdrV3': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Nikita',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/bpeWvtoxuajqEtlukZhUFt9KM.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'rbMcqs1eA': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Tim',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/GoWNvgKZvVTzmZQKHoh2Ccnk4E.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'OY_j7HdJV': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Carley',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/40ioqcNOrsoBIVnpfGVsXh9jpM.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'mcvPgNUgN': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Arda',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/U8RU6HcYtcK32VUY2uTSF9QTqo.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'Jj_gJ6raO': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Lacey-Mae',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/1OwzdZHx9ElDw1ZAavs6WGWBSw.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'UYFenO8zH': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Bo',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/Tlwk5hINm0ferm6DGDyUoqL6pc.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'RpMB9X2cU': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Shelbie',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/Pm9TTOkN341IYtePLdPGmhG0E.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'tExww8aRk': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Dillon',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/GOsVbTpzcPHfZ9EMcOSPddNS6go.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'anaA6RL0b': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Selin',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/GaxkgrTkzKlxI7B3EJtZp4dabI.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'y8osi5SA0': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Rhian',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/LEd8c4Zf28fU29XZ4c04ImOzs.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'v2n6jd8d8': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Ada',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/3oPVBjvZEnTN9DZf7tUMW54TS2k.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'vrPxXX3Sq': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Lois',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/99qcDQP7xzsxlgXsq47uID7sAm4.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'YC5psLXzO': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Maisie',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/BRu6MhHhp9NjldqU9TTCEAEoGKg.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'wQ9whLvFH': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Lori',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/ebCaegtDakUaQGRtXSYmPR43Q.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'hUi9TraZo': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Jardel',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/B8580pOtLEBrg7wIFp62oXfFQ.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'ji0e3Gqv5': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Jethro',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/szTmT1K4f8nn5CutvLWFlBdt8k.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'nMHdUM1t6': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Carmen',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/e6GZhp0s96FXaIiLYSRyZYZYypo.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'Stnp3oRU4': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Patrik',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/6xGPl1j87mG8XoUzCwRYzEohM8.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'TxmZTsvXB': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Barry',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/mhC7dhzvLcqmUofPcC2BW8vh4.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'bNhqIdQoj': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Alejandro',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/YynUn6LSLWVQia4pOtIxhY77SSA.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'OYkCSZPL0': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Selin',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/u2K6WSbQVKHiOUvOF3auFya79y8.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'bOMpuyzc_': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Denny',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/BJytCbStiWSy9rxpQ0wU6I3SNiI.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
      'NqCoJY2pH': {
        'AD1uRb789': {
          'center': false,
          'data-framer-name': 'Becca',
          '__contentWrapperStyle': { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
        },
        'XGgsiaAin': {
          'background': {
            'src':
              new URL(
                'assets/xyIaIR0LhPm1PVVUVrQ7TDGTyA.png',
                'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
              ).href,
            'pixelWidth': 440,
            'pixelHeight': 440,
            'intrinsicWidth': 440,
            'intrinsicHeight': 440,
            'fit': 'fill',
          },
          'intrinsicWidth': 440,
          'intrinsicHeight': 440,
        },
      },
    }), [],);
    const addVariantProps = useAddVariantProps(baseVariant, gestureVariant, variantProps,);
    const defaultLayoutId = useRandomID();
    return /* @__PURE__ */ _jsx2(LayoutGroup, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx2(motion2.div, {
        initial: variant,
        animate: variants,
        className: cx('framer-47hmZ', classNames,),
        style: { 'display': 'contents', },
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        children: /* @__PURE__ */ _jsx2(Stack, {
          ...restProps,
          layoutId: 'AD1uRb789',
          className: cx('framer-rqhbs3', className,),
          style: {
            'borderBottomLeftRadius': Z2NuoQS1k,
            'borderBottomRightRadius': Z2NuoQS1k,
            'borderTopRightRadius': Z2NuoQS1k,
            'borderTopLeftRadius': Z2NuoQS1k,
            'backgroundColor': VurELiPqN,
            ...style,
          },
          direction: 'horizontal',
          distribution: 'center',
          alignment: 'center',
          gap: 10,
          __fromCanvasComponent: true,
          __contentWrapperStyle: { 'width': '100%', 'height': '100%', 'padding': '0px 0px 0px 0px', },
          center: false,
          'data-framer-name': 'Jason',
          transition,
          ref,
          ...addVariantProps('AD1uRb789',),
          children: /* @__PURE__ */ _jsx2(Image1, {
            layoutId: 'XGgsiaAin',
            className: 'framer-kj56m6',
            style: {
              'borderBottomLeftRadius': 60,
              'borderBottomRightRadius': 60,
              'borderTopRightRadius': 60,
              'borderTopLeftRadius': 60,
              'rotate': tc_6nmlts,
            },
            background: {
              'src':
                new URL(
                  'assets/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png',
                  'https://framerusercontent.com/modules/PLP5SWQpFPuFrn7tLf3t/suo2OcdmUu5xmjtBXZ7I/dkRfXNUhM.js',
                ).href,
              'pixelWidth': 440,
              'pixelHeight': 440,
              'intrinsicWidth': 440,
              'intrinsicHeight': 440,
              'fit': 'fill',
            },
            'data-framer-name': 'Avatar',
            variants: {
              't6uYX0tBZ': {
                'borderBottomLeftRadius': 60,
                'borderBottomRightRadius': 60,
                'borderTopRightRadius': 60,
                'borderTopLeftRadius': 60,
              },
            },
            transition,
            ...addVariantProps('XGgsiaAin',),
          },),
        },),
      },),
    },);
  },
);
var css = [
  '.framer-47hmZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',
  '.framer-47hmZ .framer-rqhbs3 { position: relative; overflow: hidden; width: 100px; height: 100px; }',
  '.framer-47hmZ .framer-kj56m6 { position: relative; overflow: visible; width: 1px; height: 100%; flex: 1 0 0px; }',
  '.framer-47hmZ.framer-v-ina8tq .framer-rqhbs3, .framer-47hmZ.framer-v-lwbc2o .framer-rqhbs3, .framer-47hmZ.framer-v-vqryag .framer-rqhbs3, .framer-47hmZ.framer-v-kwp1i3 .framer-rqhbs3, .framer-47hmZ.framer-v-1h8ejmh .framer-rqhbs3, .framer-47hmZ.framer-v-c75qsa .framer-rqhbs3, .framer-47hmZ.framer-v-1ftwjq5 .framer-rqhbs3, .framer-47hmZ.framer-v-osfy8l .framer-rqhbs3, .framer-47hmZ.framer-v-5qhg5s .framer-rqhbs3, .framer-47hmZ.framer-v-5ats54 .framer-rqhbs3, .framer-47hmZ.framer-v-z5mnn6 .framer-rqhbs3, .framer-47hmZ.framer-v-6xnqop .framer-rqhbs3, .framer-47hmZ.framer-v-xmx6ye .framer-rqhbs3, .framer-47hmZ.framer-v-a1v8wx .framer-rqhbs3, .framer-47hmZ.framer-v-1oj0oue .framer-rqhbs3, .framer-47hmZ.framer-v-19e1lqz .framer-rqhbs3, .framer-47hmZ.framer-v-16en86l .framer-rqhbs3, .framer-47hmZ.framer-v-1vzsblg .framer-rqhbs3, .framer-47hmZ.framer-v-1kgllbw .framer-rqhbs3, .framer-47hmZ.framer-v-zia1yx .framer-rqhbs3, .framer-47hmZ.framer-v-9mi1m7 .framer-rqhbs3, .framer-47hmZ.framer-v-zgdwlg .framer-rqhbs3, .framer-47hmZ.framer-v-1dgnypb .framer-rqhbs3, .framer-47hmZ.framer-v-rum36c .framer-rqhbs3, .framer-47hmZ.framer-v-1u5c2u8 .framer-rqhbs3, .framer-47hmZ.framer-v-1dt8e1w .framer-rqhbs3, .framer-47hmZ.framer-v-1rkl824 .framer-rqhbs3, .framer-47hmZ.framer-v-17d51pb .framer-rqhbs3, .framer-47hmZ.framer-v-158neyh .framer-rqhbs3, .framer-47hmZ.framer-v-1atb71u .framer-rqhbs3, .framer-47hmZ.framer-v-1x8h963 .framer-rqhbs3, .framer-47hmZ.framer-v-hblyuj .framer-rqhbs3, .framer-47hmZ.framer-v-cra8ie .framer-rqhbs3, .framer-47hmZ.framer-v-1sz721s .framer-rqhbs3 { width: 100px; height: 100px; }',
  '.framer-47hmZ.framer-v-1ftwjq5 .framer-kj56m6, .framer-47hmZ.framer-v-osfy8l .framer-kj56m6 { width: 1px; height: 100%; right: auto; bottom: auto; left: auto; top: auto; flex: 1 0 0px; }',
];
var FramerdkRfXNUhM = withCSS(Component, css,);
var stdin_default = FramerdkRfXNUhM;
FramerdkRfXNUhM.displayName = 'Memoji';
FramerdkRfXNUhM.defaultProps = { 'width': 100, 'height': 100, };
addPropertyControls2(FramerdkRfXNUhM, {
  'variant': {
    'type': ControlType2.Enum,
    'title': 'Variant',
    'options': [
      'AD1uRb789',
      't6uYX0tBZ',
      'AnI2DvQZf',
      'JG7MxGgTY',
      'snFARdAmz',
      'Nz_Z2NTH0',
      'cHv8JY9g7',
      'tR7FlThNE',
      'bg0lLngd2',
      'FKNQjSL73',
      'UozSdcuUY',
      'EgLxQrxHD',
      'vol5AdrV3',
      'rbMcqs1eA',
      'OY_j7HdJV',
      'mcvPgNUgN',
      'Jj_gJ6raO',
      'UYFenO8zH',
      'RpMB9X2cU',
      'tExww8aRk',
      'anaA6RL0b',
      'y8osi5SA0',
      'v2n6jd8d8',
      'vrPxXX3Sq',
      'YC5psLXzO',
      'wQ9whLvFH',
      'hUi9TraZo',
      'ji0e3Gqv5',
      'nMHdUM1t6',
      'Stnp3oRU4',
      'TxmZTsvXB',
      'bNhqIdQoj',
      'OYkCSZPL0',
      'bOMpuyzc_',
      'NqCoJY2pH',
    ],
    'optionTitles': [
      'Jason',
      'Jess',
      'Olli',
      'Myah',
      'Ammaar',
      'Siena',
      'Cheryl',
      'Aleeza',
      'Elli',
      'Piotr',
      'Ayisha',
      'Nataniel',
      'Nikita',
      'Tim',
      'Carley',
      'Arda',
      'Lacey-Mae',
      'Bo',
      'Shelbie',
      'Dillon',
      'Selin',
      'Rhian',
      'Ada',
      'Lois',
      'Maisie',
      'Lori',
      'Jardel',
      'Jethro',
      'Carmen',
      'Patrik',
      'Barry',
      'Alejandro',
      'Selin',
      'Denny',
      'Becca',
    ],
  },
  'VurELiPqN': { 'type': ControlType2.Color, 'title': 'Background', 'defaultValue': 'rgb(255, 219, 222)', },
  'Z2NuoQS1k': { 'type': ControlType2.Number, 'title': 'Radius', 'defaultValue': 60, 'min': 0, },
  'tc_6nmlts': { 'type': ControlType2.Number, 'title': 'Rotation', 'defaultValue': 0, 'min': -180, 'max': 180, 'unit': '\xB0', },
},);
addFonts(FramerdkRfXNUhM, [],);

// https :https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js
var HeroFonts = getFonts(Icon,);
var MemojiFonts = getFonts(stdin_default,);
var cycleOrder2 = ['bkNTL_hDD', 'SUKuEnEm3', 'uKYMy2q_h', 'q40bx8oO9', 'XKqaB2Aqx',];
var variantClassNames2 = {
  bkNTL_hDD: 'framer-v-1lrc4mm',
  q40bx8oO9: 'framer-v-1ts3cmm',
  SUKuEnEm3: 'framer-v-1opdecj',
  uKYMy2q_h: 'framer-v-wgi97k',
  XKqaB2Aqx: 'framer-v-18fh10w',
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap2 = {
  'Our team': 'XKqaB2Aqx',
  'Why us': 'q40bx8oO9',
  Feature: 'SUKuEnEm3',
  Learn: 'uKYMy2q_h',
  Normal: 'bkNTL_hDD',
};
var transitions2 = {
  default: { damping: 57, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], mass: 0.9, stiffness: 547, type: 'spring', },
  uKYMy2q_h: { damping: 57, delay: 0, duration: 0.3, ease: [0, 1.08, 0.56, 1,], mass: 0.9, stiffness: 547, type: 'tween', },
};
var transformTemplate = (_, t,) => `translateX(-50%) ${t}`;
var Component2 = /* @__PURE__ */ React3.forwardRef(
  function ({ id, style, className, width, height, layoutId, variant: outerVariant = 'bkNTL_hDD', ...restProps }, ref,) {
    const outerVariantId = humanReadableVariantMap2[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
      cycleOrder: cycleOrder2,
      defaultVariant: 'bkNTL_hDD',
      transitions: transitions2,
      variant,
      variantClassNames: variantClassNames2,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
    const onMouseLeave19yhvao = activeVariantCallback(async (...args) => {
      setVariant('bkNTL_hDD',);
    },);
    const onMouseEnterw91hx7 = activeVariantCallback(async (...args) => {
      setVariant('SUKuEnEm3',);
    },);
    const onMouseEnterwdtlpu = activeVariantCallback(async (...args) => {
      setVariant('uKYMy2q_h',);
    },);
    const onMouseEnterf9bpm1 = activeVariantCallback(async (...args) => {
      setVariant('q40bx8oO9',);
    },);
    const onMouseEnter13rq2kx = activeVariantCallback(async (...args) => {
      setVariant('XKqaB2Aqx',);
    },);
    const isDisplayed = () => {
      if (['SUKuEnEm3', 'q40bx8oO9',].includes(baseVariant,)) {
        return false;
      }
      return true;
    };
    const isDisplayed1 = () => {
      if (['SUKuEnEm3', 'uKYMy2q_h', 'XKqaB2Aqx',].includes(baseVariant,)) {
        return false;
      }
      return true;
    };
    const isDisplayed2 = () => {
      if (['uKYMy2q_h', 'q40bx8oO9', 'XKqaB2Aqx',].includes(baseVariant,)) {
        return false;
      }
      return true;
    };
    const isDisplayed3 = () => {
      if (['SUKuEnEm3', 'uKYMy2q_h', 'q40bx8oO9',].includes(baseVariant,)) {
        return false;
      }
      return true;
    };
    const defaultLayoutId = React3.useId();
    return /* @__PURE__ */ _jsx3(LayoutGroup2, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx3(motion3.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx2('framer-WJ0iJ', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsxs(motion3.div, {
          ...restProps,
          className: cx2('framer-1lrc4mm', className,),
          'data-framer-name': 'Normal',
          layoutDependency,
          layoutId: 'bkNTL_hDD',
          ref,
          style: { ...style, },
          transition,
          ...addPropertyOverrides(
            {
              q40bx8oO9: { 'data-framer-name': 'Why us', 'data-highlight': true, onMouseLeave: onMouseLeave19yhvao, },
              SUKuEnEm3: { 'data-framer-name': 'Feature', 'data-highlight': true, onMouseLeave: onMouseLeave19yhvao, },
              uKYMy2q_h: { 'data-framer-name': 'Learn', 'data-highlight': true, onMouseLeave: onMouseLeave19yhvao, },
              XKqaB2Aqx: { 'data-framer-name': 'Our team', 'data-highlight': true, onMouseLeave: onMouseLeave19yhvao, },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx3(motion3.div, {
              className: 'framer-16t42pb',
              'data-framer-name': 'Background',
              layoutDependency,
              layoutId: 'hYGWNtalr',
              style: {
                backdropFilter: 'blur(0px)',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                WebkitBackdropFilter: 'blur(0px)',
              },
              transition,
              variants: {
                q40bx8oO9: { backgroundColor: 'rgb(255, 255, 255)', },
                SUKuEnEm3: { backgroundColor: 'rgb(255, 255, 255)', },
                uKYMy2q_h: { backgroundColor: 'rgb(255, 255, 255)', },
                XKqaB2Aqx: { backgroundColor: 'rgb(255, 255, 255)', },
              },
            },),
            /* @__PURE__ */ _jsxs(motion3.div, {
              className: 'framer-13vlarb',
              'data-framer-name': 'Main navbar',
              layoutDependency,
              layoutId: 'DKtMe6eX8',
              transition,
              ...addPropertyOverrides(
                {
                  q40bx8oO9: { transformTemplate, },
                  SUKuEnEm3: { transformTemplate, },
                  uKYMy2q_h: { transformTemplate, },
                  XKqaB2Aqx: { transformTemplate, },
                },
                baseVariant,
                gestureVariant,
              ),
              children: [
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-lqyhv1',
                  'data-framer-name': 'Menu item',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'NdilS6xV8',
                  onMouseEnter: onMouseEnterw91hx7,
                  style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Features',
                      },),
                    },),
                    className: 'framer-1gsifwy',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'nm09tjo2E',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-172vxej',
                  'data-framer-name': 'Menu item',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'fHPVhd813',
                  onMouseEnter: onMouseEnterwdtlpu,
                  style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
                  transition,
                  ...addPropertyOverrides(
                    { uKYMy2q_h: { 'data-highlight': void 0, onMouseEnter: void 0, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Learn',
                      },),
                    },),
                    className: 'framer-1jy9rhn',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'VY7d9MXLC',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-19z4lym',
                  'data-framer-name': 'Menu item',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'rp5iF4m3_',
                  onMouseEnter: onMouseEnterf9bpm1,
                  style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Why us',
                      },),
                    },),
                    className: 'framer-11n50ye',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'FRfLvTU6z',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-1ig1wnu',
                  'data-framer-name': 'Menu item',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'kfi1_2LO7',
                  onMouseEnter: onMouseEnter13rq2kx,
                  style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Our team',
                      },),
                    },),
                    className: 'framer-1g1au7n',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'XvWwJMt0y',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
              ],
            },),
            /* @__PURE__ */ _jsx3(motion3.div, {
              className: 'framer-1ir1cuw',
              'data-framer-name': 'Hover background',
              layoutDependency,
              layoutId: 'HoB1lmcEM',
              style: {
                backgroundColor: 'rgb(224, 246, 250)',
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                opacity: 0,
              },
              transition,
              variants: {
                q40bx8oO9: { backgroundColor: 'rgb(250, 238, 219)', opacity: 1, },
                SUKuEnEm3: { backgroundColor: 'rgb(237, 229, 245)', opacity: 1, },
                uKYMy2q_h: { backgroundColor: 'rgb(252, 219, 226)', opacity: 1, },
                XKqaB2Aqx: { backgroundColor: 'rgb(209, 238, 250)', opacity: 1, },
              },
            },),
            isDisplayed() && /* @__PURE__ */ _jsxs(motion3.div, {
              className: 'framer-glg9l4',
              'data-framer-name': 'Learn',
              layoutDependency,
              layoutId: 'C96sQNyfH',
              style: { filter: 'blur(20px)', opacity: 0, WebkitFilter: 'blur(20px)', },
              transition,
              variants: { uKYMy2q_h: { filter: 'blur(0px)', opacity: 1, WebkitFilter: 'blur(0px)', }, },
              children: [
                /* @__PURE__ */ _jsx3(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 3783,
                    intrinsicWidth: 2650,
                    pixelHeight: 3783,
                    pixelWidth: 2650,
                    sizes: '160px',
                    src:
                      new URL(
                        'assets/FUj2cxmlUA18rVHkK705RcqSa0.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href,
                    srcSet: `${
                      new URL(
                        'assets/512/FUj2cxmlUA18rVHkK705RcqSa0.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 358w, ${
                      new URL(
                        'assets/1024/FUj2cxmlUA18rVHkK705RcqSa0.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 717w, ${
                      new URL(
                        'assets/2048/FUj2cxmlUA18rVHkK705RcqSa0.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 1434w, ${
                      new URL(
                        'assets/FUj2cxmlUA18rVHkK705RcqSa0.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 2650w`,
                  },
                  className: 'framer-dijb1m',
                  layoutDependency,
                  layoutId: 'qST4d1cHV',
                  style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Course 1',
                      },),
                    },),
                    className: 'framer-tivela',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'HGNQAKBaf',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.85,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx3(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 4e3,
                    intrinsicWidth: 6e3,
                    pixelHeight: 4e3,
                    pixelWidth: 6e3,
                    sizes: '160px',
                    src:
                      new URL(
                        'assets/lSArg2UzkPugOKy8K5kEUSgSO5k.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href,
                    srcSet: `${
                      new URL(
                        'assets/512/lSArg2UzkPugOKy8K5kEUSgSO5k.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 512w, ${
                      new URL(
                        'assets/1024/lSArg2UzkPugOKy8K5kEUSgSO5k.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 1024w, ${
                      new URL(
                        'assets/2048/lSArg2UzkPugOKy8K5kEUSgSO5k.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 2048w, ${
                      new URL(
                        'assets/4096/lSArg2UzkPugOKy8K5kEUSgSO5k.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 4096w, ${
                      new URL(
                        'assets/lSArg2UzkPugOKy8K5kEUSgSO5k.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 6000w`,
                  },
                  className: 'framer-mm3n38',
                  layoutDependency,
                  layoutId: 'snzdtCtSB',
                  style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Course 2',
                      },),
                    },),
                    className: 'framer-1wp8wu5',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'F33_x58x3',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.85,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx3(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 6e3,
                    intrinsicWidth: 4e3,
                    pixelHeight: 6e3,
                    pixelWidth: 4e3,
                    sizes: '160px',
                    src:
                      new URL(
                        'assets/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href,
                    srcSet: `${
                      new URL(
                        'assets/512/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 341w, ${
                      new URL(
                        'assets/1024/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 682w, ${
                      new URL(
                        'assets/2048/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 1365w, ${
                      new URL(
                        'assets/4096/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 2730w, ${
                      new URL(
                        'assets/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 4000w`,
                  },
                  className: 'framer-1m7voah',
                  layoutDependency,
                  layoutId: 'iSFCuh2AE',
                  style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Course 3',
                      },),
                    },),
                    className: 'framer-1pn7ar8',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'uTyXN3ueW',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.85,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx3(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 3999,
                    intrinsicWidth: 3999,
                    pixelHeight: 3999,
                    pixelWidth: 3999,
                    sizes: '160px',
                    src:
                      new URL(
                        'assets/CSe4BT3sW00R3OM0KLLGZAkrHg.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href,
                    srcSet: `${
                      new URL(
                        'assets/512/CSe4BT3sW00R3OM0KLLGZAkrHg.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 512w, ${
                      new URL(
                        'assets/1024/CSe4BT3sW00R3OM0KLLGZAkrHg.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 1024w, ${
                      new URL(
                        'assets/2048/CSe4BT3sW00R3OM0KLLGZAkrHg.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 2048w, ${
                      new URL(
                        'assets/CSe4BT3sW00R3OM0KLLGZAkrHg.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 3999w`,
                  },
                  className: 'framer-1xo9d10',
                  layoutDependency,
                  layoutId: 'KEXyw83_T',
                  style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx3(motion3.p, {
                        style: {
                          '--font-selector': 'R0Y7U3luZS01MDA=',
                          '--framer-font-family': '"Syne", sans-serif',
                          '--framer-font-size': '18px',
                          '--framer-font-weight': '500',
                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                        },
                        children: 'Final',
                      },),
                    },),
                    className: 'framer-1825p1p',
                    fonts: ['GF;Syne-500',],
                    layoutDependency,
                    layoutId: 'RvXbFdWAE',
                    style: {
                      '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                      '--framer-link-text-decoration': 'underline',
                      '--framer-paragraph-spacing': '0px',
                      opacity: 0.85,
                    },
                    transition,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
              ],
            },),
            isDisplayed1() && /* @__PURE__ */ _jsxs(motion3.div, {
              className: 'framer-sl2zhn',
              'data-framer-name': 'Why us',
              layoutDependency,
              layoutId: 'Gx04iO3NM',
              style: { filter: 'blur(20px)', opacity: 0, WebkitFilter: 'blur(20px)', },
              transition,
              variants: { q40bx8oO9: { filter: 'blur(0px)', opacity: 1, WebkitFilter: 'blur(0px)', }, },
              children: [
                /* @__PURE__ */ _jsxs(motion3.div, {
                  className: 'framer-gvanw8',
                  layoutDependency,
                  layoutId: 'd0q4WmWUi',
                  transition,
                  children: [
                    /* @__PURE__ */ _jsx3(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 2667,
                        intrinsicWidth: 4e3,
                        pixelHeight: 2667,
                        pixelWidth: 4e3,
                        sizes: '340px',
                        src:
                          new URL(
                            'assets/9UGN1FfyrRGk696ZD7Unuv1IHU.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href,
                        srcSet: `${
                          new URL(
                            'assets/512/9UGN1FfyrRGk696ZD7Unuv1IHU.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 512w, ${
                          new URL(
                            'assets/1024/9UGN1FfyrRGk696ZD7Unuv1IHU.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 1024w, ${
                          new URL(
                            'assets/2048/9UGN1FfyrRGk696ZD7Unuv1IHU.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 2048w, ${
                          new URL(
                            'assets/9UGN1FfyrRGk696ZD7Unuv1IHU.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 4000w`,
                      },
                      className: 'framer-1zmbhp',
                      layoutDependency,
                      layoutId: 'oRVjPTNNp',
                      style: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      transition,
                      children: /* @__PURE__ */ _jsx3(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                          children: /* @__PURE__ */ _jsx3(motion3.p, {
                            style: {
                              '--font-selector': 'R0Y7U3luZS01MDA=',
                              '--framer-font-family': '"Syne", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-font-weight': '500',
                              '--framer-text-color': 'var(--extracted-r6o4lv)',
                            },
                            children: 'Personal',
                          },),
                        },),
                        className: 'framer-1woruty',
                        fonts: ['GF;Syne-500',],
                        layoutDependency,
                        layoutId: 'oLRa52ac0',
                        style: {
                          '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                          '--framer-link-text-color': 'rgb(0, 153, 255)',
                          '--framer-link-text-decoration': 'underline',
                          '--framer-paragraph-spacing': '0px',
                          opacity: 0.85,
                        },
                        transition,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 4e3,
                        intrinsicWidth: 6e3,
                        pixelHeight: 4e3,
                        pixelWidth: 6e3,
                        sizes: '340px',
                        src:
                          new URL(
                            'assets/CMEyn5wiQ4bXUfm31YNoIpo2iw.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href,
                        srcSet: `${
                          new URL(
                            'assets/512/CMEyn5wiQ4bXUfm31YNoIpo2iw.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 512w, ${
                          new URL(
                            'assets/1024/CMEyn5wiQ4bXUfm31YNoIpo2iw.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 1024w, ${
                          new URL(
                            'assets/2048/CMEyn5wiQ4bXUfm31YNoIpo2iw.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 2048w, ${
                          new URL(
                            'assets/4096/CMEyn5wiQ4bXUfm31YNoIpo2iw.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 4096w, ${
                          new URL(
                            'assets/CMEyn5wiQ4bXUfm31YNoIpo2iw.jpg',
                            'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                          ).href
                        } 6000w`,
                      },
                      className: 'framer-1g21m3o',
                      layoutDependency,
                      layoutId: 'XHHscAdJ1',
                      style: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      transition,
                      children: /* @__PURE__ */ _jsx3(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                          children: /* @__PURE__ */ _jsx3(motion3.p, {
                            style: {
                              '--font-selector': 'R0Y7U3luZS01MDA=',
                              '--framer-font-family': '"Syne", sans-serif',
                              '--framer-font-size': '18px',
                              '--framer-font-weight': '500',
                              '--framer-text-color': 'var(--extracted-r6o4lv)',
                            },
                            children: 'Enterprise',
                          },),
                        },),
                        className: 'framer-1btrxaq',
                        fonts: ['GF;Syne-500',],
                        layoutDependency,
                        layoutId: 'aOD0LKqah',
                        style: {
                          '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                          '--framer-link-text-color': 'rgb(0, 153, 255)',
                          '--framer-link-text-decoration': 'underline',
                          '--framer-paragraph-spacing': '0px',
                          opacity: 0.85,
                        },
                        transition,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs(motion3.div, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 6e3,
                    intrinsicWidth: 4e3,
                    pixelHeight: 6e3,
                    pixelWidth: 4e3,
                    sizes: '340px',
                    src:
                      new URL(
                        'assets/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href,
                    srcSet: `${
                      new URL(
                        'assets/512/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 341w, ${
                      new URL(
                        'assets/1024/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 682w, ${
                      new URL(
                        'assets/2048/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 1365w, ${
                      new URL(
                        'assets/4096/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 2730w, ${
                      new URL(
                        'assets/XUERVHcs9SF51OPi8hnaeZ3hQ7g.jpg',
                        'https://framerusercontent.com/modules/3EDzgSpTqmQsBFxpXycJ/W0zNsrcZ2WAwVuzt0BCl/rXuKNGhVw.js',
                      ).href
                    } 4000w`,
                  },
                  className: 'framer-rkfwss',
                  layoutDependency,
                  layoutId: 'Ck44Rsuw_',
                  style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
                  transition,
                  children: [
                    /* @__PURE__ */ _jsx3(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                        children: /* @__PURE__ */ _jsx3(motion3.p, {
                          style: {
                            '--font-selector': 'R0Y7U3luZS01MDA=',
                            '--framer-font-family': '"Syne", sans-serif',
                            '--framer-font-size': '18px',
                            '--framer-font-weight': '500',
                            '--framer-text-color': 'var(--extracted-r6o4lv)',
                          },
                          children: 'Categories',
                        },),
                      },),
                      className: 'framer-anwe52',
                      fonts: ['GF;Syne-500',],
                      layoutDependency,
                      layoutId: 'OJHtfp4QP',
                      style: {
                        '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                        '--framer-paragraph-spacing': '0px',
                        opacity: 0.85,
                      },
                      transition,
                      variants: { q40bx8oO9: { opacity: 1, }, },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsxs(motion3.div, {
                      className: 'framer-i5hjqf',
                      layoutDependency,
                      layoutId: 'w4NGxNmOK',
                      transition,
                      children: [
                        /* @__PURE__ */ _jsxs(motion3.div, {
                          className: 'framer-ta8mts',
                          layoutDependency,
                          layoutId: 'Kag_DTEkb',
                          transition,
                          children: [
                            /* @__PURE__ */ _jsx3(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                  style: {
                                    '--font-selector': 'R0Y7U3luZS01MDA=',
                                    '--framer-font-family': '"Syne", sans-serif',
                                    '--framer-font-size': '18px',
                                    '--framer-font-weight': '500',
                                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                                  },
                                  children: 'Wireframe',
                                },),
                              },),
                              className: 'framer-4j3y7h',
                              fonts: ['GF;Syne-500',],
                              layoutDependency,
                              layoutId: 'wwiuZz6aK',
                              style: {
                                '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                '--framer-paragraph-spacing': '0px',
                                opacity: 0.48,
                              },
                              transition,
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx3(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                  style: {
                                    '--font-selector': 'R0Y7U3luZS01MDA=',
                                    '--framer-font-family': '"Syne", sans-serif',
                                    '--framer-font-size': '18px',
                                    '--framer-font-weight': '500',
                                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                                  },
                                  children: 'Prototype',
                                },),
                              },),
                              className: 'framer-qdkfje',
                              fonts: ['GF;Syne-500',],
                              layoutDependency,
                              layoutId: 'Shq3pCzkb',
                              style: {
                                '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                '--framer-paragraph-spacing': '0px',
                                opacity: 0.48,
                              },
                              transition,
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx3(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                  style: {
                                    '--font-selector': 'R0Y7U3luZS01MDA=',
                                    '--framer-font-family': '"Syne", sans-serif',
                                    '--framer-font-size': '18px',
                                    '--framer-font-weight': '500',
                                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                                  },
                                  children: 'Freelance',
                                },),
                              },),
                              className: 'framer-1tjyrur',
                              fonts: ['GF;Syne-500',],
                              layoutDependency,
                              layoutId: 'yXGEvScXs',
                              style: {
                                '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                '--framer-paragraph-spacing': '0px',
                                opacity: 0.48,
                              },
                              transition,
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                          ],
                        },),
                        /* @__PURE__ */ _jsxs(motion3.div, {
                          className: 'framer-qcw1g8',
                          layoutDependency,
                          layoutId: 'uzCGfPPhC',
                          transition,
                          children: [
                            /* @__PURE__ */ _jsx3(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                  style: {
                                    '--font-selector': 'R0Y7U3luZS01MDA=',
                                    '--framer-font-family': '"Syne", sans-serif',
                                    '--framer-font-size': '18px',
                                    '--framer-font-weight': '500',
                                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                                  },
                                  children: 'Wireframe',
                                },),
                              },),
                              className: 'framer-xv4i6x',
                              fonts: ['GF;Syne-500',],
                              layoutDependency,
                              layoutId: 'SDFolv24R',
                              style: {
                                '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                '--framer-paragraph-spacing': '0px',
                                opacity: 0.48,
                              },
                              transition,
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx3(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                  style: {
                                    '--font-selector': 'R0Y7U3luZS01MDA=',
                                    '--framer-font-family': '"Syne", sans-serif',
                                    '--framer-font-size': '18px',
                                    '--framer-font-weight': '500',
                                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                                  },
                                  children: 'Prototype',
                                },),
                              },),
                              className: 'framer-1tnoq7c',
                              fonts: ['GF;Syne-500',],
                              layoutDependency,
                              layoutId: 'KLPAA5caD',
                              style: {
                                '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                '--framer-paragraph-spacing': '0px',
                                opacity: 0.48,
                              },
                              transition,
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx3(RichText, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                                children: /* @__PURE__ */ _jsx3(motion3.p, {
                                  style: {
                                    '--font-selector': 'R0Y7U3luZS01MDA=',
                                    '--framer-font-family': '"Syne", sans-serif',
                                    '--framer-font-size': '18px',
                                    '--framer-font-weight': '500',
                                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                                  },
                                  children: 'Freelance',
                                },),
                              },),
                              className: 'framer-r785a0',
                              fonts: ['GF;Syne-500',],
                              layoutDependency,
                              layoutId: 'mJxR9Zdm0',
                              style: {
                                '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                                '--framer-link-text-color': 'rgb(0, 153, 255)',
                                '--framer-link-text-decoration': 'underline',
                                '--framer-paragraph-spacing': '0px',
                                opacity: 0.48,
                              },
                              transition,
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                          ],
                        },),
                      ],
                    },),
                  ],
                },),
              ],
            },),
            isDisplayed2() && /* @__PURE__ */ _jsxs(motion3.div, {
              className: 'framer-1vmebvn',
              'data-framer-name': 'Features',
              layoutDependency,
              layoutId: 'xv5xDUtpX',
              style: { filter: 'blur(20px)', opacity: 0, WebkitFilter: 'blur(20px)', },
              transition,
              variants: { SUKuEnEm3: { filter: 'blur(0px)', opacity: 1, WebkitFilter: 'blur(0px)', }, },
              children: [
                /* @__PURE__ */ _jsxs(motion3.div, {
                  className: 'framer-8q2d2h',
                  'data-border': true,
                  layoutDependency,
                  layoutId: 'Vnf4VbRq1',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgb(227, 227, 227)',
                    '--border-left-width': '1px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  },
                  transition,
                  children: [
                    /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-1obha0f-container',
                      layoutDependency,
                      layoutId: 'PDD6vnp3O-container',
                      transition,
                      children: /* @__PURE__ */ _jsx3(Icon, {
                        color: 'rgb(117, 30, 210)',
                        height: '100%',
                        iconSearch: 'Home',
                        iconSelection: 'Tag',
                        id: 'PDD6vnp3O',
                        layoutId: 'PDD6vnp3O',
                        mirrored: false,
                        selectByList: true,
                        style: { height: '100%', width: '100%', },
                        width: '100%',
                      },),
                    },),
                    /* @__PURE__ */ _jsxs(motion3.div, {
                      className: 'framer-1xgfnw6',
                      layoutDependency,
                      layoutId: 'Nk6XQMHGt',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      transition,
                      children: [
                        /* @__PURE__ */ _jsx3(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                            children: /* @__PURE__ */ _jsx3(motion3.p, {
                              style: {
                                '--font-selector': 'R0Y7U3luZS01MDA=',
                                '--framer-font-family': '"Syne", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '500',
                                '--framer-text-color': 'var(--extracted-r6o4lv)',
                              },
                              children: 'Wireframe',
                            },),
                          },),
                          className: 'framer-14x43vu',
                          fonts: ['GF;Syne-500',],
                          layoutDependency,
                          layoutId: 'S5pDfIDtL',
                          style: {
                            '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            '--framer-paragraph-spacing': '0px',
                          },
                          transition,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx3(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                            children: /* @__PURE__ */ _jsx3(motion3.p, {
                              style: {
                                '--font-selector': 'R0Y7U3luZS01MDA=',
                                '--framer-font-family': '"Syne", sans-serif',
                                '--framer-font-weight': '500',
                                '--framer-text-color': 'var(--extracted-r6o4lv)',
                              },
                              children: 'Create interactive mockups',
                            },),
                          },),
                          className: 'framer-1izelth',
                          fonts: ['GF;Syne-500',],
                          layoutDependency,
                          layoutId: 'CeCkqFgau',
                          style: {
                            '--extracted-r6o4lv': 'rgba(28, 30, 33, 0.45)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            '--framer-paragraph-spacing': '0px',
                          },
                          transition,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs(motion3.div, {
                  className: 'framer-617n6',
                  'data-border': true,
                  layoutDependency,
                  layoutId: 'EVHKaZ1Ar',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgb(227, 227, 227)',
                    '--border-left-width': '1px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  },
                  transition,
                  children: [
                    /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-1ft79f8-container',
                      layoutDependency,
                      layoutId: 'J_L9SGxQq-container',
                      transition,
                      children: /* @__PURE__ */ _jsx3(Icon, {
                        color: 'rgb(117, 30, 210)',
                        height: '100%',
                        iconSearch: 'Home',
                        iconSelection: 'User',
                        id: 'J_L9SGxQq',
                        layoutId: 'J_L9SGxQq',
                        mirrored: false,
                        selectByList: true,
                        style: { height: '100%', width: '100%', },
                        width: '100%',
                      },),
                    },),
                    /* @__PURE__ */ _jsxs(motion3.div, {
                      className: 'framer-1ww2vxq',
                      layoutDependency,
                      layoutId: 'HcLnXk2vd',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      transition,
                      children: [
                        /* @__PURE__ */ _jsx3(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                            children: /* @__PURE__ */ _jsx3(motion3.p, {
                              style: {
                                '--font-selector': 'R0Y7U3luZS01MDA=',
                                '--framer-font-family': '"Syne", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '500',
                                '--framer-text-color': 'var(--extracted-r6o4lv)',
                              },
                              children: 'User testing',
                            },),
                          },),
                          className: 'framer-7yg104',
                          fonts: ['GF;Syne-500',],
                          layoutDependency,
                          layoutId: 'YQB6m_B6z',
                          style: {
                            '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            '--framer-paragraph-spacing': '0px',
                          },
                          transition,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx3(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                            children: /* @__PURE__ */ _jsx3(motion3.p, {
                              style: {
                                '--font-selector': 'R0Y7U3luZS01MDA=',
                                '--framer-font-family': '"Syne", sans-serif',
                                '--framer-font-weight': '500',
                                '--framer-text-color': 'var(--extracted-r6o4lv)',
                              },
                              children: 'Create interactive mockups',
                            },),
                          },),
                          className: 'framer-qccegp',
                          fonts: ['GF;Syne-500',],
                          layoutDependency,
                          layoutId: 'rkZ76NhpL',
                          style: {
                            '--extracted-r6o4lv': 'rgba(28, 30, 33, 0.45)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            '--framer-paragraph-spacing': '0px',
                          },
                          transition,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs(motion3.div, {
                  className: 'framer-jzdjlf',
                  'data-border': true,
                  layoutDependency,
                  layoutId: 'vnCJptvii',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgb(227, 227, 227)',
                    '--border-left-width': '1px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                  },
                  transition,
                  children: [
                    /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-1ey2gnb-container',
                      layoutDependency,
                      layoutId: 'lcddpzQSx-container',
                      transition,
                      children: /* @__PURE__ */ _jsx3(Icon, {
                        color: 'rgb(117, 30, 210)',
                        height: '100%',
                        iconSearch: 'Home',
                        iconSelection: 'ArrowCircleRight',
                        id: 'lcddpzQSx',
                        layoutId: 'lcddpzQSx',
                        mirrored: false,
                        selectByList: true,
                        style: { height: '100%', width: '100%', },
                        width: '100%',
                      },),
                    },),
                    /* @__PURE__ */ _jsxs(motion3.div, {
                      className: 'framer-oyym9y',
                      layoutDependency,
                      layoutId: 'oEDBb0ApP',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      transition,
                      children: [
                        /* @__PURE__ */ _jsx3(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                            children: /* @__PURE__ */ _jsx3(motion3.p, {
                              style: {
                                '--font-selector': 'R0Y7U3luZS01MDA=',
                                '--framer-font-family': '"Syne", sans-serif',
                                '--framer-font-size': '18px',
                                '--framer-font-weight': '500',
                                '--framer-text-color': 'var(--extracted-r6o4lv)',
                              },
                              children: 'Protyping',
                            },),
                          },),
                          className: 'framer-1uiubhj',
                          fonts: ['GF;Syne-500',],
                          layoutDependency,
                          layoutId: 'yFh_zMejr',
                          style: {
                            '--extracted-r6o4lv': 'rgb(28, 30, 33)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            '--framer-paragraph-spacing': '0px',
                          },
                          transition,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx3(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                            children: /* @__PURE__ */ _jsx3(motion3.p, {
                              style: {
                                '--font-selector': 'R0Y7U3luZS01MDA=',
                                '--framer-font-family': '"Syne", sans-serif',
                                '--framer-font-weight': '500',
                                '--framer-text-color': 'var(--extracted-r6o4lv)',
                              },
                              children: 'Create interactive mockups',
                            },),
                          },),
                          className: 'framer-8igm6d',
                          fonts: ['GF;Syne-500',],
                          layoutDependency,
                          layoutId: 'XJhJWFY9U',
                          style: {
                            '--extracted-r6o4lv': 'rgba(28, 30, 33, 0.45)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                            '--framer-paragraph-spacing': '0px',
                          },
                          transition,
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                  ],
                },),
              ],
            },),
            isDisplayed3() && /* @__PURE__ */ _jsxs(motion3.div, {
              className: 'framer-1w1b19f',
              'data-framer-name': 'About',
              layoutDependency,
              layoutId: 'smsBJd5IK',
              style: { filter: 'blur(20px)', opacity: 0, WebkitFilter: 'blur(20px)', },
              transformTemplate,
              transition,
              variants: { XKqaB2Aqx: { filter: 'blur(0px)', opacity: 1, WebkitFilter: 'blur(0px)', }, },
              children: [
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-6daqro-container',
                  layoutDependency,
                  layoutId: 'vdGonOdlb-container',
                  style: { rotate: -15, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(stdin_default, {
                    background: 'rgb(255, 219, 222)',
                    height: '100%',
                    id: 'vdGonOdlb',
                    layoutId: 'vdGonOdlb',
                    radius: 60,
                    rotation: 0,
                    style: { height: '100%', width: '100%', },
                    variant: 'AD1uRb789',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-1or3xpq-container',
                  layoutDependency,
                  layoutId: 'Vfd4Iq804-container',
                  style: { rotate: 5, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(stdin_default, {
                    background: 'rgb(224, 219, 255)',
                    height: '100%',
                    id: 'Vfd4Iq804',
                    layoutId: 'Vfd4Iq804',
                    radius: 60,
                    rotation: 0,
                    style: { height: '100%', width: '100%', },
                    variant: 't6uYX0tBZ',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-184ccbv-container',
                  layoutDependency,
                  layoutId: 'Cv8N_xbG6-container',
                  style: { rotate: -3, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(stdin_default, {
                    background: 'rgb(219, 247, 255)',
                    height: '100%',
                    id: 'Cv8N_xbG6',
                    layoutId: 'Cv8N_xbG6',
                    radius: 60,
                    rotation: 0,
                    style: { height: '100%', width: '100%', },
                    variant: 'AnI2DvQZf',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-nf0ed7-container',
                  layoutDependency,
                  layoutId: 'KfVp1XF0I-container',
                  style: { rotate: 5, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(stdin_default, {
                    background: 'rgb(186, 242, 217)',
                    height: '100%',
                    id: 'KfVp1XF0I',
                    layoutId: 'KfVp1XF0I',
                    radius: 60,
                    rotation: 0,
                    style: { height: '100%', width: '100%', },
                    variant: 'JG7MxGgTY',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx3(motion3.div, {
                  className: 'framer-16fvjc4-container',
                  layoutDependency,
                  layoutId: 'fnzlsHDvW-container',
                  style: { rotate: -10, },
                  transition,
                  children: /* @__PURE__ */ _jsx3(stdin_default, {
                    background: 'rgb(242, 236, 191)',
                    height: '100%',
                    id: 'fnzlsHDvW',
                    layoutId: 'fnzlsHDvW',
                    radius: 60,
                    rotation: 0,
                    style: { height: '100%', width: '100%', },
                    variant: 'snFARdAmz',
                    width: '100%',
                  },),
                },),
              ],
            },),
          ],
        },),
      },),
    },);
  },
);
var css2 = [
  '.framer-WJ0iJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-WJ0iJ .framer-8akjsg { display: block; }',
  '.framer-WJ0iJ .framer-1lrc4mm { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 420px; }',
  '.framer-WJ0iJ .framer-16t42pb { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.847457627118665% - 100% / 2); width: 100%; z-index: 1; }',
  '.framer-WJ0iJ .framer-13vlarb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 400px; z-index: 10; }',
  '.framer-WJ0iJ .framer-lqyhv1, .framer-WJ0iJ .framer-172vxej, .framer-WJ0iJ .framer-19z4lym, .framer-WJ0iJ .framer-1ig1wnu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: transform; }',
  '.framer-WJ0iJ .framer-1gsifwy, .framer-WJ0iJ .framer-1jy9rhn, .framer-WJ0iJ .framer-11n50ye, .framer-WJ0iJ .framer-1g1au7n { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 2; }',
  '.framer-WJ0iJ .framer-1ir1cuw { flex: none; height: 40px; left: calc(50.00000000000002% - 107px / 2); overflow: visible; position: absolute; top: calc(50.847457627118665% - 40px / 2); width: 107px; z-index: 1; }',
  '.framer-WJ0iJ .framer-glg9l4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 173px; justify-content: center; left: calc(50.00000000000002% - 700px / 2); overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 40px; width: 700px; z-index: 2; }',
  '.framer-WJ0iJ .framer-dijb1m, .framer-WJ0iJ .framer-mm3n38, .framer-WJ0iJ .framer-1m7voah, .framer-WJ0iJ .framer-1xo9d10 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 1px; will-change: transform; z-index: 0; }',
  '.framer-WJ0iJ .framer-1znkvk-container, .framer-WJ0iJ .framer-fbb51h-container, .framer-WJ0iJ .framer-chshrw-container, .framer-WJ0iJ .framer-r29a-container, .framer-WJ0iJ .framer-1obha0f-container, .framer-WJ0iJ .framer-1ft79f8-container, .framer-WJ0iJ .framer-1ey2gnb-container { flex: none; height: 40px; position: relative; width: 40px; }',
  '.framer-WJ0iJ .framer-tivela, .framer-WJ0iJ .framer-1wp8wu5, .framer-WJ0iJ .framer-1pn7ar8, .framer-WJ0iJ .framer-1825p1p, .framer-WJ0iJ .framer-1woruty, .framer-WJ0iJ .framer-1btrxaq, .framer-WJ0iJ .framer-anwe52, .framer-WJ0iJ .framer-4j3y7h, .framer-WJ0iJ .framer-qdkfje, .framer-WJ0iJ .framer-1tjyrur, .framer-WJ0iJ .framer-xv4i6x, .framer-WJ0iJ .framer-1tnoq7c, .framer-WJ0iJ .framer-r785a0, .framer-WJ0iJ .framer-14x43vu, .framer-WJ0iJ .framer-7yg104, .framer-WJ0iJ .framer-1uiubhj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-WJ0iJ .framer-1fv2vfe, .framer-WJ0iJ .framer-jk7rq5, .framer-WJ0iJ .framer-u4p161, .framer-WJ0iJ .framer-4rcvhd, .framer-WJ0iJ .framer-rwfmr8, .framer-WJ0iJ .framer-1izelth, .framer-WJ0iJ .framer-qccegp, .framer-WJ0iJ .framer-8igm6d { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-WJ0iJ .framer-sl2zhn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 170px; justify-content: center; left: calc(50.00000000000002% - 700px / 2); overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 40px; width: 700px; z-index: 2; }',
  '.framer-WJ0iJ .framer-gvanw8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 170px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 340px; }',
  '.framer-WJ0iJ .framer-1zmbhp, .framer-WJ0iJ .framer-1g21m3o { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 100%; will-change: transform; z-index: 0; }',
  '.framer-WJ0iJ .framer-rkfwss { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 1px; will-change: transform; z-index: 0; }',
  '.framer-WJ0iJ .framer-i5hjqf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-WJ0iJ .framer-ta8mts, .framer-WJ0iJ .framer-qcw1g8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 104px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-WJ0iJ .framer-1vmebvn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 170px; justify-content: center; left: calc(50.00000000000002% - 660px / 2); overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 40px; width: 660px; z-index: 2; }',
  '.framer-WJ0iJ .framer-8q2d2h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 1px; will-change: transform; z-index: 0; }',
  '.framer-WJ0iJ .framer-1xgfnw6, .framer-WJ0iJ .framer-1ww2vxq, .framer-WJ0iJ .framer-oyym9y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-WJ0iJ .framer-617n6, .framer-WJ0iJ .framer-jzdjlf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 1px; will-change: transform; z-index: 2; }',
  '.framer-WJ0iJ .framer-1w1b19f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 40px; width: min-content; z-index: 1; }',
  '.framer-WJ0iJ .framer-6daqro-container, .framer-WJ0iJ .framer-1or3xpq-container, .framer-WJ0iJ .framer-184ccbv-container, .framer-WJ0iJ .framer-nf0ed7-container, .framer-WJ0iJ .framer-16fvjc4-container { flex: none; height: 100px; position: relative; width: 100px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WJ0iJ .framer-1lrc4mm, .framer-WJ0iJ .framer-13vlarb, .framer-WJ0iJ .framer-lqyhv1, .framer-WJ0iJ .framer-172vxej, .framer-WJ0iJ .framer-19z4lym, .framer-WJ0iJ .framer-1ig1wnu, .framer-WJ0iJ .framer-glg9l4, .framer-WJ0iJ .framer-dijb1m, .framer-WJ0iJ .framer-mm3n38, .framer-WJ0iJ .framer-1m7voah, .framer-WJ0iJ .framer-1xo9d10, .framer-WJ0iJ .framer-sl2zhn, .framer-WJ0iJ .framer-gvanw8, .framer-WJ0iJ .framer-1zmbhp, .framer-WJ0iJ .framer-1g21m3o, .framer-WJ0iJ .framer-rkfwss, .framer-WJ0iJ .framer-i5hjqf, .framer-WJ0iJ .framer-ta8mts, .framer-WJ0iJ .framer-qcw1g8, .framer-WJ0iJ .framer-1vmebvn, .framer-WJ0iJ .framer-8q2d2h, .framer-WJ0iJ .framer-1xgfnw6, .framer-WJ0iJ .framer-617n6, .framer-WJ0iJ .framer-1ww2vxq, .framer-WJ0iJ .framer-jzdjlf, .framer-WJ0iJ .framer-oyym9y, .framer-WJ0iJ .framer-1w1b19f { gap: 0px; } .framer-WJ0iJ .framer-1lrc4mm > *, .framer-WJ0iJ .framer-gvanw8 > *, .framer-WJ0iJ .framer-rkfwss > *, .framer-WJ0iJ .framer-ta8mts > *, .framer-WJ0iJ .framer-qcw1g8 > *, .framer-WJ0iJ .framer-1xgfnw6 > *, .framer-WJ0iJ .framer-1ww2vxq > *, .framer-WJ0iJ .framer-oyym9y > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-WJ0iJ .framer-1lrc4mm > :first-child, .framer-WJ0iJ .framer-dijb1m > :first-child, .framer-WJ0iJ .framer-mm3n38 > :first-child, .framer-WJ0iJ .framer-1m7voah > :first-child, .framer-WJ0iJ .framer-1xo9d10 > :first-child, .framer-WJ0iJ .framer-gvanw8 > :first-child, .framer-WJ0iJ .framer-1zmbhp > :first-child, .framer-WJ0iJ .framer-1g21m3o > :first-child, .framer-WJ0iJ .framer-rkfwss > :first-child, .framer-WJ0iJ .framer-ta8mts > :first-child, .framer-WJ0iJ .framer-qcw1g8 > :first-child, .framer-WJ0iJ .framer-8q2d2h > :first-child, .framer-WJ0iJ .framer-1xgfnw6 > :first-child, .framer-WJ0iJ .framer-617n6 > :first-child, .framer-WJ0iJ .framer-1ww2vxq > :first-child, .framer-WJ0iJ .framer-jzdjlf > :first-child, .framer-WJ0iJ .framer-oyym9y > :first-child { margin-top: 0px; } .framer-WJ0iJ .framer-1lrc4mm > :last-child, .framer-WJ0iJ .framer-dijb1m > :last-child, .framer-WJ0iJ .framer-mm3n38 > :last-child, .framer-WJ0iJ .framer-1m7voah > :last-child, .framer-WJ0iJ .framer-1xo9d10 > :last-child, .framer-WJ0iJ .framer-gvanw8 > :last-child, .framer-WJ0iJ .framer-1zmbhp > :last-child, .framer-WJ0iJ .framer-1g21m3o > :last-child, .framer-WJ0iJ .framer-rkfwss > :last-child, .framer-WJ0iJ .framer-ta8mts > :last-child, .framer-WJ0iJ .framer-qcw1g8 > :last-child, .framer-WJ0iJ .framer-8q2d2h > :last-child, .framer-WJ0iJ .framer-1xgfnw6 > :last-child, .framer-WJ0iJ .framer-617n6 > :last-child, .framer-WJ0iJ .framer-1ww2vxq > :last-child, .framer-WJ0iJ .framer-jzdjlf > :last-child, .framer-WJ0iJ .framer-oyym9y > :last-child { margin-bottom: 0px; } .framer-WJ0iJ .framer-13vlarb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-WJ0iJ .framer-13vlarb > :first-child, .framer-WJ0iJ .framer-lqyhv1 > :first-child, .framer-WJ0iJ .framer-172vxej > :first-child, .framer-WJ0iJ .framer-19z4lym > :first-child, .framer-WJ0iJ .framer-1ig1wnu > :first-child, .framer-WJ0iJ .framer-glg9l4 > :first-child, .framer-WJ0iJ .framer-sl2zhn > :first-child, .framer-WJ0iJ .framer-i5hjqf > :first-child, .framer-WJ0iJ .framer-1vmebvn > :first-child, .framer-WJ0iJ .framer-1w1b19f > :first-child { margin-left: 0px; } .framer-WJ0iJ .framer-13vlarb > :last-child, .framer-WJ0iJ .framer-lqyhv1 > :last-child, .framer-WJ0iJ .framer-172vxej > :last-child, .framer-WJ0iJ .framer-19z4lym > :last-child, .framer-WJ0iJ .framer-1ig1wnu > :last-child, .framer-WJ0iJ .framer-glg9l4 > :last-child, .framer-WJ0iJ .framer-sl2zhn > :last-child, .framer-WJ0iJ .framer-i5hjqf > :last-child, .framer-WJ0iJ .framer-1vmebvn > :last-child, .framer-WJ0iJ .framer-1w1b19f > :last-child { margin-right: 0px; } .framer-WJ0iJ .framer-lqyhv1 > *, .framer-WJ0iJ .framer-172vxej > *, .framer-WJ0iJ .framer-19z4lym > *, .framer-WJ0iJ .framer-1ig1wnu > *, .framer-WJ0iJ .framer-i5hjqf > *, .framer-WJ0iJ .framer-1w1b19f > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-WJ0iJ .framer-glg9l4 > *, .framer-WJ0iJ .framer-sl2zhn > *, .framer-WJ0iJ .framer-1vmebvn > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-WJ0iJ .framer-dijb1m > *, .framer-WJ0iJ .framer-mm3n38 > *, .framer-WJ0iJ .framer-1m7voah > *, .framer-WJ0iJ .framer-1xo9d10 > *, .framer-WJ0iJ .framer-1zmbhp > *, .framer-WJ0iJ .framer-1g21m3o > *, .framer-WJ0iJ .framer-8q2d2h > *, .framer-WJ0iJ .framer-617n6 > *, .framer-WJ0iJ .framer-jzdjlf > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }',
  '.framer-WJ0iJ.framer-v-1opdecj .framer-1lrc4mm, .framer-WJ0iJ.framer-v-wgi97k .framer-1lrc4mm, .framer-WJ0iJ.framer-v-1ts3cmm .framer-1lrc4mm, .framer-WJ0iJ.framer-v-18fh10w .framer-1lrc4mm { display: block; height: 324px; padding: unset; width: 800px; }',
  '.framer-WJ0iJ.framer-v-1opdecj .framer-16t42pb, .framer-WJ0iJ.framer-v-wgi97k .framer-16t42pb, .framer-WJ0iJ.framer-v-1ts3cmm .framer-16t42pb, .framer-WJ0iJ.framer-v-18fh10w .framer-16t42pb { top: 0px; }',
  '.framer-WJ0iJ.framer-v-1opdecj .framer-13vlarb, .framer-WJ0iJ.framer-v-wgi97k .framer-13vlarb, .framer-WJ0iJ.framer-v-1ts3cmm .framer-13vlarb, .framer-WJ0iJ.framer-v-18fh10w .framer-13vlarb { left: 50%; position: absolute; top: 10px; width: min-content; }',
  '.framer-WJ0iJ.framer-v-1opdecj .framer-1ir1cuw { left: 199px; top: calc(9.25925925925928% - 40px / 2); }',
  '.framer-WJ0iJ.framer-v-1opdecj .framer-1vmebvn { top: 100px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WJ0iJ.framer-v-1opdecj .framer-1lrc4mm { gap: 0px; } .framer-WJ0iJ.framer-v-1opdecj .framer-1lrc4mm > *, .framer-WJ0iJ.framer-v-1opdecj .framer-1lrc4mm > :first-child, .framer-WJ0iJ.framer-v-1opdecj .framer-1lrc4mm > :last-child { margin: 0px; } }',
  '.framer-WJ0iJ.framer-v-wgi97k .framer-1ir1cuw { left: 308px; top: calc(9.25925925925928% - 40px / 2); width: 81px; }',
  '.framer-WJ0iJ.framer-v-wgi97k .framer-glg9l4 { bottom: 51px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WJ0iJ.framer-v-wgi97k .framer-1lrc4mm { gap: 0px; } .framer-WJ0iJ.framer-v-wgi97k .framer-1lrc4mm > *, .framer-WJ0iJ.framer-v-wgi97k .framer-1lrc4mm > :first-child, .framer-WJ0iJ.framer-v-wgi97k .framer-1lrc4mm > :last-child { margin: 0px; } }',
  '.framer-WJ0iJ.framer-v-1ts3cmm .framer-1ir1cuw { left: calc(54.75000000000002% - 101px / 2); top: 10px; width: 101px; }',
  '.framer-WJ0iJ.framer-v-1ts3cmm .framer-sl2zhn { top: 104px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WJ0iJ.framer-v-1ts3cmm .framer-1lrc4mm { gap: 0px; } .framer-WJ0iJ.framer-v-1ts3cmm .framer-1lrc4mm > *, .framer-WJ0iJ.framer-v-1ts3cmm .framer-1lrc4mm > :first-child, .framer-WJ0iJ.framer-v-1ts3cmm .framer-1lrc4mm > :last-child { margin: 0px; } }',
  '.framer-WJ0iJ.framer-v-18fh10w .framer-1ir1cuw { left: unset; right: 204px; top: 10px; width: 111px; }',
  '.framer-WJ0iJ.framer-v-18fh10w .framer-1w1b19f { top: 130px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WJ0iJ.framer-v-18fh10w .framer-1lrc4mm { gap: 0px; } .framer-WJ0iJ.framer-v-18fh10w .framer-1lrc4mm > *, .framer-WJ0iJ.framer-v-18fh10w .framer-1lrc4mm > :first-child, .framer-WJ0iJ.framer-v-18fh10w .framer-1lrc4mm > :last-child { margin: 0px; } }',
];
var FramerrXuKNGhVw = withCSS2(Component2, css2, 'framer-WJ0iJ',);
var stdin_default2 = FramerrXuKNGhVw;
FramerrXuKNGhVw.displayName = 'Mega Menu';
FramerrXuKNGhVw.defaultProps = { height: 59, width: 420, };
addPropertyControls3(FramerrXuKNGhVw, {
  variant: {
    options: ['bkNTL_hDD', 'SUKuEnEm3', 'uKYMy2q_h', 'q40bx8oO9', 'XKqaB2Aqx',],
    optionTitles: ['Normal', 'Feature', 'Learn', 'Why us', 'Our team',],
    title: 'Variant',
    type: ControlType3.Enum,
  },
},);
addFonts2(FramerrXuKNGhVw, [
  {
    family: 'Syne',
    moduleAsset: {
      localModuleIdentifier: 'local-module:canvasComponent/rXuKNGhVw:default',
      url: 'https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_0KuT6kR47NCV5Z.ttf',
    },
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_0KuT6kR47NCV5Z.ttf',
    weight: '500',
  },
  ...HeroFonts,
  ...MemojiFonts,
],);

// virtual:menus
import { WithFramerBreakpoints, } from 'unframer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default2.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default2, ...props, },);
};
var menus_default = stdin_default2;
export { menus_default as default, };
