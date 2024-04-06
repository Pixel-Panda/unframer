import * as React from "react"

import { UnframerBreakpoint } from "unframer"

export interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: '⚪️ Day Middle' | '⚪️ Day Left' | '⚫️ Night Middle' | '⚫️ Night Left'
    "image"?: boolean
    "image"?: {src: string, srcSet?: string, alt?: string}
    "icon"?: boolean
    "icon"?: 'AddressBook' | 'AirTrafficControl' | 'Airplane' | 'AirplaneInFlight' | 'AirplaneLanding' | 'AirplaneTakeoff' | 'AirplaneTilt' | 'Airplay' | 'Alarm' | 'Alien' | 'AlignBottom' | 'AlignBottomSimple' | 'AlignCenterVertical' | 'AlignLeft' | 'AlignLeftSimple' | 'AlignRight' | 'AlignRightSimple' | 'AlignTop' | 'AlignTopSimple' | 'AmazonLogo' | 'Anchor' | 'AnchorSimple' | 'AndroidLogo' | 'AngularLogo' | 'Aperture' | 'AppStoreLogo' | 'AppWindow' | 'AppleLogo' | 'ApplePodcastsLogo' | 'Archive' | 'ArchiveBox' | 'ArchiveTray' | 'Armchair' | 'ArrowArcLeft' | 'ArrowArcRight' | 'ArrowBendDownLeft' | 'ArrowBendDownRight' | 'ArrowBendLeftDown' | 'ArrowBendLeftUp' | 'ArrowBendRightDown' | 'ArrowBendRightUp' | 'ArrowBendUpLeft' | 'ArrowBendUpRight' | 'ArrowCircleDown' | 'ArrowCircleDownLeft' | 'ArrowCircleDownRight' | 'ArrowCircleLeft' | 'ArrowCircleRight' | 'ArrowCircleUp' | 'ArrowCircleUpLeft' | 'ArrowCircleUpRight' | 'ArrowClockwise' | 'ArrowDown' | 'ArrowDownLeft' | 'ArrowDownRight' | 'ArrowElbowDownLeft' | 'ArrowElbowDownRight' | 'ArrowElbowLeft' | 'ArrowElbowLeftDown' | 'ArrowElbowLeftUp' | 'ArrowElbowRight' | 'ArrowElbowRightDown' | 'ArrowElbowRightUp' | 'ArrowElbowUpLeft' | 'ArrowElbowUpRight' | 'ArrowFatDown' | 'ArrowFatLeft' | 'ArrowFatLineDown' | 'ArrowFatLineLeft' | 'ArrowFatLineRight' | 'ArrowFatLineUp' | 'ArrowFatLinesDown' | 'ArrowFatLinesLeft' | 'ArrowFatLinesRight' | 'ArrowFatLinesUp' | 'ArrowFatRight' | 'ArrowFatUp' | 'ArrowLeft' | 'ArrowLineDown' | 'ArrowLineDownLeft' | 'ArrowLineDownRight' | 'ArrowLineLeft' | 'ArrowLineRight' | 'ArrowLineUp' | 'ArrowLineUpLeft' | 'ArrowLineUpRight' | 'ArrowRight' | 'ArrowSquareDown' | 'ArrowSquareDownLeft' | 'ArrowSquareDownRight' | 'ArrowSquareIn' | 'ArrowSquareLeft' | 'ArrowSquareOut' | 'ArrowSquareRight' | 'ArrowSquareUp' | 'ArrowSquareUpLeft' | 'ArrowSquareUpRight' | 'ArrowUDownLeft' | 'ArrowUDownRight' | 'ArrowULeftDown' | 'ArrowULeftUp' | 'ArrowURightDown' | 'ArrowURightUp' | 'ArrowUUpLeft' | 'ArrowUUpRight' | 'ArrowUp' | 'ArrowUpLeft' | 'ArrowUpRight' | 'ArrowsClockwise' | 'ArrowsDownUp' | 'ArrowsHorizontal' | 'ArrowsIn' | 'ArrowsInCardinal' | 'ArrowsInLineVertical' | 'ArrowsInSimple' | 'ArrowsLeftRight' | 'ArrowsMerge' | 'ArrowsOut' | 'ArrowsOutCardinal' | 'ArrowsOutSimple' | 'ArrowsSplit' | 'ArrowsVertical' | 'Article' | 'ArticleMedium' | 'ArticleNyTimes' | 'Asterisk' | 'AsteriskSimple' | 'At' | 'Atom' | 'Baby' | 'Backpack' | 'Backspace' | 'Bag' | 'BagSimple' | 'Balloon' | 'Bandaids' | 'Bank' | 'Barbell' | 'Barcode' | 'Barricade' | 'Baseball' | 'BaseballCap' | 'Basket' | 'Basketball' | 'Bathtub' | 'BatteryCharging' | 'BatteryEmpty' | 'BatteryFull' | 'BatteryHigh' | 'BatteryLow' | 'BatteryMedium' | 'BatteryPlus' | 'BatteryPlusVertical' | 'BatteryVerticalEmpty' | 'BatteryVerticalFull' | 'BatteryVerticalHigh' | 'BatteryVerticalLow' | 'BatteryWarning' | 'Bed' | 'BeerBottle' | 'BeerStein' | 'BehanceLogo' | 'Bell' | 'BellRinging' | 'BellSimple' | 'BellSimpleRinging' | 'BellSimpleSlash' | 'BellSimpleZ' | 'BellSlash' | 'BellZ' | 'BezierCurve' | 'Bicycle' | 'Binoculars' | 'Bird' | 'Bluetooth' | 'BluetoothConnected' | 'BluetoothSlash' | 'BluetoothX' | 'Boat' | 'Bone' | 'Book' | 'BookBookmark' | 'BookOpen' | 'BookOpenText' | 'Bookmark' | 'BookmarkSimple' | 'Bookmarks' | 'BookmarksSimple' | 'Books' | 'Boot' | 'BoundingBox' | 'BowlFood' | 'BracketsAngle' | 'BracketsCurly' | 'BracketsRound' | 'BracketsSquare' | 'Brain' | 'Brandy' | 'Bridge' | 'Briefcase' | 'BriefcaseMetal' | 'Broadcast' | 'Broom' | 'Browser' | 'Browsers' | 'Bug' | 'BugBeetle' | 'BugDroid' | 'Buildings' | 'Bus' | 'Butterfly' | 'Cactus' | 'Cake' | 'Calculator' | 'Calendar' | 'CalendarBlank' | 'CalendarCheck' | 'CalendarPlus' | 'CalendarX' | 'CallBell' | 'Camera' | 'CameraPlus' | 'CameraRotate' | 'CameraSlash' | 'Campfire' | 'Car' | 'CarProfile' | 'CarSimple' | 'Cardholder' | 'Cards' | 'CaretCircleDoubleUp' | 'CaretCircleDown' | 'CaretCircleLeft' | 'CaretCircleRight' | 'CaretCircleUp' | 'CaretCircleUpDown' | 'CaretDoubleDown' | 'CaretDoubleLeft' | 'CaretDoubleRight' | 'CaretDoubleUp' | 'CaretDown' | 'CaretLeft' | 'CaretRight' | 'CaretUp' | 'CaretUpDown' | 'Carrot' | 'CassetteTape' | 'CastleTurret' | 'Cat' | 'CellSignalFull' | 'CellSignalHigh' | 'CellSignalLow' | 'CellSignalMedium' | 'CellSignalNone' | 'CellSignalSlash' | 'CellSignalX' | 'Certificate' | 'Chair' | 'Chalkboard' | 'ChalkboardSimple' | 'ChalkboardTeacher' | 'Champagne' | 'ChargingStation' | 'ChartBar' | 'ChartBarHorizontal' | 'ChartDonut' | 'ChartLine' | 'ChartLineDown' | 'ChartLineUp' | 'ChartPie' | 'ChartPieSlice' | 'ChartPolar' | 'ChartScatter' | 'Chat' | 'ChatCentered' | 'ChatCenteredDots' | 'ChatCenteredText' | 'ChatCircle' | 'ChatCircleDots' | 'ChatCircleText' | 'ChatDots' | 'ChatTeardrop' | 'ChatTeardropDots' | 'ChatTeardropText' | 'ChatText' | 'Chats' | 'ChatsCircle' | 'ChatsTeardrop' | 'Check' | 'CheckCircle' | 'CheckFat' | 'CheckSquare' | 'CheckSquareOffset' | 'Checks' | 'Church' | 'Circle' | 'CircleDashed' | 'CircleHalf' | 'CircleHalfTilt' | 'CircleNotch' | 'CirclesFour' | 'CirclesThree' | 'CirclesThreePlus' | 'Circuitry' | 'Clipboard' | 'ClipboardText' | 'Clock' | 'ClockAfternoon' | 'ClockClockwise' | 'ClockCounterClockwise' | 'ClockCountdown' | 'ClosedCaptioning' | 'Cloud' | 'CloudArrowDown' | 'CloudArrowUp' | 'CloudCheck' | 'CloudFog' | 'CloudLightning' | 'CloudMoon' | 'CloudRain' | 'CloudSlash' | 'CloudSnow' | 'CloudSun' | 'CloudWarning' | 'CloudX' | 'Club' | 'CoatHanger' | 'CodaLogo' | 'Code' | 'CodeBlock' | 'CodeSimple' | 'CodepenLogo' | 'CodesandboxLogo' | 'Coffee' | 'Coin' | 'CoinVertical' | 'Coins' | 'Columns' | 'Command' | 'Compass' | 'CompassTool' | 'ComputerTower' | 'Confetti' | 'ContactlessPayment' | 'Control' | 'Cookie' | 'CookingPot' | 'Copy' | 'CopySimple' | 'Copyleft' | 'Copyright' | 'CornersIn' | 'CornersOut' | 'Couch' | 'Cpu' | 'CreditCard' | 'Crop' | 'Cross' | 'Crosshair' | 'CrosshairSimple' | 'Crown' | 'CrownSimple' | 'Cube' | 'CubeFocus' | 'CubeTransparent' | 'CurrencyBtc' | 'CurrencyCircleDollar' | 'CurrencyCny' | 'CurrencyDollar' | 'CurrencyDollarSimple' | 'CurrencyEth' | 'CurrencyEur' | 'CurrencyGbp' | 'CurrencyInr' | 'CurrencyJpy' | 'CurrencyKrw' | 'CurrencyKzt' | 'CurrencyNgn' | 'CurrencyRub' | 'Cursor' | 'CursorClick' | 'CursorText' | 'Cylinder' | 'Database' | 'Desktop' | 'DesktopTower' | 'Detective' | 'DevToLogo' | 'DeviceMobile' | 'DeviceMobileCamera' | 'DeviceMobileSpeaker' | 'DeviceTablet' | 'DeviceTabletCamera' | 'DeviceTabletSpeaker' | 'Devices' | 'Diamond' | 'DiamondsFour' | 'DiceFive' | 'DiceFour' | 'DiceOne' | 'DiceSix' | 'DiceThree' | 'DiceTwo' | 'Disc' | 'DiscordLogo' | 'Divide' | 'Dna' | 'Dog' | 'Door' | 'DoorOpen' | 'Dot' | 'DotOutline' | 'DotsNine' | 'DotsSix' | 'DotsSixVertical' | 'DotsThree' | 'DotsThreeCircle' | 'DotsThreeOutline' | 'DotsThreeVertical' | 'Download' | 'DownloadSimple' | 'Dress' | 'DribbbleLogo' | 'Drop' | 'DropHalf' | 'DropHalfBottom' | 'DropboxLogo' | 'Ear' | 'EarSlash' | 'Egg' | 'EggCrack' | 'Eject' | 'EjectSimple' | 'Elevator' | 'Engine' | 'Envelope' | 'EnvelopeOpen' | 'EnvelopeSimple' | 'EnvelopeSimpleOpen' | 'Equalizer' | 'Equals' | 'Eraser' | 'EscalatorDown' | 'EscalatorUp' | 'Exam' | 'Exclude' | 'ExcludeSquare' | 'Export' | 'Eye' | 'EyeClosed' | 'EyeSlash' | 'Eyedropper' | 'EyedropperSample' | 'Eyeglasses' | 'FaceMask' | 'FacebookLogo' | 'Factory' | 'Faders' | 'FadersHorizontal' | 'Fan' | 'FastForward' | 'FastForwardCircle' | 'Feather' | 'FigmaLogo' | 'File' | 'FileArchive' | 'FileArrowDown' | 'FileArrowUp' | 'FileAudio' | 'FileCloud' | 'FileCode' | 'FileCss' | 'FileCsv' | 'FileDashed' | 'FileDoc' | 'FileHtml' | 'FileImage' | 'FileJpg' | 'FileJs' | 'FileJsx' | 'FileLock' | 'FileMagnifyingGlass' | 'FileMinus' | 'FilePdf' | 'FilePlus' | 'FilePng' | 'FilePpt' | 'FileRs' | 'FileSql' | 'FileSvg' | 'FileText' | 'FileTs' | 'FileTsx' | 'FileVideo' | 'FileVue' | 'FileX' | 'FileXls' | 'FileZip' | 'Files' | 'FilmReel' | 'FilmScript' | 'FilmSlate' | 'FilmStrip' | 'Fingerprint' | 'FingerprintSimple' | 'FinnTheHuman' | 'Fire' | 'FireExtinguisher' | 'FireSimple' | 'FirstAid' | 'FirstAidKit' | 'Fish' | 'FishSimple' | 'Flag' | 'FlagBanner' | 'FlagCheckered' | 'FlagPennant' | 'Flame' | 'Flashlight' | 'Flask' | 'FloppyDisk' | 'FloppyDiskBack' | 'FlowArrow' | 'Flower' | 'FlowerLotus' | 'FlowerTulip' | 'FlyingSaucer' | 'Folder' | 'FolderDashed' | 'FolderLock' | 'FolderMinus' | 'FolderNotch' | 'FolderNotchMinus' | 'FolderNotchOpen' | 'FolderNotchPlus' | 'FolderOpen' | 'FolderPlus' | 'FolderSimple' | 'FolderSimpleDashed' | 'FolderSimpleLock' | 'FolderSimpleMinus' | 'FolderSimplePlus' | 'FolderSimpleStar' | 'FolderSimpleUser' | 'FolderStar' | 'FolderUser' | 'Folders' | 'Football' | 'Footprints' | 'ForkKnife' | 'FrameCorners' | 'FramerLogo' | 'Function' | 'Funnel' | 'FunnelSimple' | 'GameController' | 'Garage' | 'GasCan' | 'GasPump' | 'Gauge' | 'Gavel' | 'Gear' | 'GearFine' | 'GearSix' | 'GenderFemale' | 'GenderIntersex' | 'GenderMale' | 'GenderNeuter' | 'GenderNonbinary' | 'GenderTransgender' | 'Ghost' | 'Gif' | 'Gift' | 'GitBranch' | 'GitCommit' | 'GitDiff' | 'GitFork' | 'GitMerge' | 'GitPullRequest' | 'GithubLogo' | 'GitlabLogo' | 'GitlabLogoSimple' | 'Globe' | 'GlobeHemisphereEast' | 'GlobeHemisphereWest' | 'GlobeSimple' | 'GlobeStand' | 'Goggles' | 'GoodreadsLogo' | 'GoogleCardboardLogo' | 'GoogleChromeLogo' | 'GoogleDriveLogo' | 'GoogleLogo' | 'GooglePhotosLogo' | 'GooglePlayLogo' | 'GooglePodcastsLogo' | 'Gradient' | 'GraduationCap' | 'Grains' | 'GrainsSlash' | 'Graph' | 'GridFour' | 'GridNine' | 'Guitar' | 'Hamburger' | 'Hammer' | 'Hand' | 'HandCoins' | 'HandEye' | 'HandFist' | 'HandGrabbing' | 'HandHeart' | 'HandPalm' | 'HandPointing' | 'HandSoap' | 'HandSwipeLeft' | 'HandSwipeRight' | 'HandTap' | 'HandWaving' | 'Handbag' | 'HandbagSimple' | 'HandsClapping' | 'HandsPraying' | 'Handshake' | 'HardDrive' | 'HardDrives' | 'Hash' | 'HashStraight' | 'Headlights' | 'Headphones' | 'Headset' | 'Heart' | 'HeartBreak' | 'HeartHalf' | 'HeartStraight' | 'HeartStraightBreak' | 'Heartbeat' | 'Hexagon' | 'HighHeel' | 'HighlighterCircle' | 'Hoodie' | 'Horse' | 'Hourglass' | 'HourglassHigh' | 'HourglassLow' | 'HourglassMedium' | 'HourglassSimple' | 'HourglassSimpleHigh' | 'HourglassSimpleLow' | 'House' | 'HouseLine' | 'HouseSimple' | 'IceCream' | 'IdentificationBadge' | 'IdentificationCard' | 'Image' | 'ImageSquare' | 'Images' | 'ImagesSquare' | 'Infinity' | 'Info' | 'InstagramLogo' | 'Intersect' | 'IntersectSquare' | 'IntersectThree' | 'Jeep' | 'Kanban' | 'Key' | 'KeyReturn' | 'Keyboard' | 'Keyhole' | 'Knife' | 'Ladder' | 'LadderSimple' | 'Lamp' | 'Laptop' | 'Layout' | 'Leaf' | 'Lifebuoy' | 'Lightbulb' | 'LightbulbFilament' | 'Lighthouse' | 'Lightning' | 'LightningA' | 'LightningSlash' | 'LineSegment' | 'LineSegments' | 'Link' | 'LinkBreak' | 'LinkSimple' | 'LinkSimpleBreak' | 'LinkSimpleHorizontal' | 'LinkedinLogo' | 'LinuxLogo' | 'List' | 'ListBullets' | 'ListChecks' | 'ListDashes' | 'ListMagnifyingGlass' | 'ListNumbers' | 'ListPlus' | 'Lock' | 'LockKey' | 'LockKeyOpen' | 'LockLaminated' | 'LockLaminatedOpen' | 'LockOpen' | 'LockSimple' | 'LockSimpleOpen' | 'Lockers' | 'MagicWand' | 'Magnet' | 'MagnetStraight' | 'MagnifyingGlass' | 'MagnifyingGlassMinus' | 'MagnifyingGlassPlus' | 'MapPin' | 'MapPinLine' | 'MapTrifold' | 'MarkerCircle' | 'Martini' | 'MaskHappy' | 'MaskSad' | 'MathOperations' | 'Medal' | 'MedalMilitary' | 'MediumLogo' | 'Megaphone' | 'MegaphoneSimple' | 'MessengerLogo' | 'MetaLogo' | 'Metronome' | 'Microphone' | 'MicrophoneSlash' | 'MicrophoneStage' | 'MicrosoftExcelLogo' | 'MicrosoftOutlookLogo' | 'MicrosoftTeamsLogo' | 'MicrosoftWordLogo' | 'Minus' | 'MinusCircle' | 'MinusSquare' | 'Money' | 'Monitor' | 'MonitorPlay' | 'Moon' | 'MoonStars' | 'Moped' | 'MopedFront' | 'Mosque' | 'Motorcycle' | 'Mountains' | 'Mouse' | 'MouseSimple' | 'MusicNote' | 'MusicNoteSimple' | 'MusicNotes' | 'MusicNotesPlus' | 'MusicNotesSimple' | 'NavigationArrow' | 'Needle' | 'Newspaper' | 'NewspaperClipping' | 'Notches' | 'Note' | 'NoteBlank' | 'NotePencil' | 'Notebook' | 'Notepad' | 'Notification' | 'NotionLogo' | 'NumberCircleEight' | 'NumberCircleFive' | 'NumberCircleFour' | 'NumberCircleNine' | 'NumberCircleOne' | 'NumberCircleSeven' | 'NumberCircleSix' | 'NumberCircleThree' | 'NumberCircleTwo' | 'NumberCircleZero' | 'NumberEight' | 'NumberFive' | 'NumberFour' | 'NumberNine' | 'NumberOne' | 'NumberSeven' | 'NumberSix' | 'NumberSquareEight' | 'NumberSquareFive' | 'NumberSquareFour' | 'NumberSquareNine' | 'NumberSquareOne' | 'NumberSquareSeven' | 'NumberSquareSix' | 'NumberSquareThree' | 'NumberSquareTwo' | 'NumberSquareZero' | 'NumberThree' | 'NumberTwo' | 'NumberZero' | 'Nut' | 'NyTimesLogo' | 'Octagon' | 'OfficeChair' | 'Option' | 'OrangeSlice' | 'Package' | 'PaintBrush' | 'PaintBrushBroad' | 'PaintBrushHousehold' | 'PaintBucket' | 'PaintRoller' | 'Palette' | 'Pants' | 'PaperPlane' | 'PaperPlaneRight' | 'PaperPlaneTilt' | 'Paperclip' | 'PaperclipHorizontal' | 'Parachute' | 'Paragraph' | 'Parallelogram' | 'Park' | 'Password' | 'Path' | 'PatreonLogo' | 'Pause' | 'PauseCircle' | 'PawPrint' | 'PaypalLogo' | 'Peace' | 'Pen' | 'PenNib' | 'PenNibStraight' | 'Pencil' | 'PencilCircle' | 'PencilLine' | 'PencilSimple' | 'PencilSimpleLine' | 'PencilSimpleSlash' | 'PencilSlash' | 'Pentagram' | 'Pepper' | 'Percent' | 'Person' | 'PersonArmsSpread' | 'PersonSimple' | 'PersonSimpleBike' | 'PersonSimpleRun' | 'PersonSimpleThrow' | 'PersonSimpleWalk' | 'Perspective' | 'Phone' | 'PhoneCall' | 'PhoneDisconnect' | 'PhoneIncoming' | 'PhoneOutgoing' | 'PhonePlus' | 'PhoneSlash' | 'PhoneX' | 'PhosphorLogo' | 'Pi' | 'PianoKeys' | 'PictureInPicture' | 'PiggyBank' | 'Pill' | 'PinterestLogo' | 'Pinwheel' | 'Pizza' | 'Placeholder' | 'Planet' | 'Plant' | 'Play' | 'PlayCircle' | 'PlayPause' | 'Playlist' | 'Plug' | 'PlugCharging' | 'Plugs' | 'PlugsConnected' | 'Plus' | 'PlusCircle' | 'PlusMinus' | 'PlusSquare' | 'PokerChip' | 'PoliceCar' | 'Polygon' | 'Popcorn' | 'PottedPlant' | 'Power' | 'Prescription' | 'Presentation' | 'PresentationChart' | 'Printer' | 'Prohibit' | 'ProhibitInset' | 'ProjectorScreen' | 'ProjectorScreenChart' | 'Pulse' | 'PushPin' | 'PushPinSimple' | 'PushPinSimpleSlash' | 'PushPinSlash' | 'PuzzlePiece' | 'QrCode' | 'Question' | 'Queue' | 'Quotes' | 'Radical' | 'Radio' | 'RadioButton' | 'Radioactive' | 'Rainbow' | 'RainbowCloud' | 'ReadCvLogo' | 'Receipt' | 'ReceiptX' | 'Record' | 'Rectangle' | 'Recycle' | 'RedditLogo' | 'Repeat' | 'RepeatOnce' | 'Rewind' | 'RewindCircle' | 'RoadHorizon' | 'Robot' | 'Rocket' | 'RocketLaunch' | 'Rows' | 'Rss' | 'RssSimple' | 'Rug' | 'Ruler' | 'Scales' | 'Scan' | 'Scissors' | 'Scooter' | 'Screencast' | 'ScribbleLoop' | 'Scroll' | 'Seal' | 'SealCheck' | 'SealQuestion' | 'SealWarning' | 'Selection' | 'SelectionAll' | 'SelectionBackground' | 'SelectionForeground' | 'SelectionInverse' | 'SelectionPlus' | 'SelectionSlash' | 'Shapes' | 'Share' | 'ShareFat' | 'ShareNetwork' | 'Shield' | 'ShieldCheck' | 'ShieldCheckered' | 'ShieldChevron' | 'ShieldPlus' | 'ShieldSlash' | 'ShieldStar' | 'ShieldWarning' | 'ShirtFolded' | 'ShootingStar' | 'ShoppingBag' | 'ShoppingBagOpen' | 'ShoppingCart' | 'ShoppingCartSimple' | 'Shower' | 'Shrimp' | 'Shuffle' | 'ShuffleAngular' | 'ShuffleSimple' | 'Sidebar' | 'SidebarSimple' | 'Sigma' | 'SignIn' | 'SignOut' | 'Signature' | 'Signpost' | 'SimCard' | 'Siren' | 'SketchLogo' | 'SkipBack' | 'SkipBackCircle' | 'SkipForward' | 'SkipForwardCircle' | 'Skull' | 'SlackLogo' | 'Sliders' | 'SlidersHorizontal' | 'Slideshow' | 'Smiley' | 'SmileyAngry' | 'SmileyBlank' | 'SmileyMeh' | 'SmileyNervous' | 'SmileySad' | 'SmileySticker' | 'SmileyWink' | 'SmileyXEyes' | 'SnapchatLogo' | 'Sneaker' | 'SneakerMove' | 'Snowflake' | 'SoccerBall' | 'SortAscending' | 'SortDescending' | 'SoundcloudLogo' | 'Spade' | 'Sparkle' | 'SpeakerHifi' | 'SpeakerHigh' | 'SpeakerLow' | 'SpeakerNone' | 'SpeakerSimpleHigh' | 'SpeakerSimpleLow' | 'SpeakerSimpleNone' | 'SpeakerSimpleSlash' | 'SpeakerSimpleX' | 'SpeakerSlash' | 'SpeakerX' | 'Spinner' | 'SpinnerGap' | 'Spiral' | 'SplitHorizontal' | 'SplitVertical' | 'SpotifyLogo' | 'Square' | 'SquareHalf' | 'SquareHalfBottom' | 'SquareLogo' | 'SquareSplitVertical' | 'SquaresFour' | 'Stack' | 'StackOverflowLogo' | 'StackSimple' | 'Stairs' | 'Stamp' | 'Star' | 'StarAndCrescent' | 'StarFour' | 'StarHalf' | 'StarOfDavid' | 'SteeringWheel' | 'Steps' | 'Stethoscope' | 'Sticker' | 'Stool' | 'Stop' | 'StopCircle' | 'Storefront' | 'Strategy' | 'StripeLogo' | 'Student' | 'Subtitles' | 'Subtract' | 'SubtractSquare' | 'Suitcase' | 'SuitcaseRolling' | 'SuitcaseSimple' | 'Sun' | 'SunDim' | 'SunHorizon' | 'Sunglasses' | 'Swap' | 'Swatches' | 'SwimmingPool' | 'Sword' | 'Synagogue' | 'Syringe' | 'TShirt' | 'Table' | 'Tabs' | 'Tag' | 'TagChevron' | 'TagSimple' | 'Target' | 'Taxi' | 'TelegramLogo' | 'Television' | 'TelevisionSimple' | 'TennisBall' | 'Tent' | 'Terminal' | 'TerminalWindow' | 'TestTube' | 'TextAUnderline' | 'TextAa' | 'TextAlignCenter' | 'TextAlignJustify' | 'TextAlignLeft' | 'TextAlignRight' | 'TextB' | 'TextColumns' | 'TextH' | 'TextHFive' | 'TextHFour' | 'TextHOne' | 'TextHSix' | 'TextHThree' | 'TextHTwo' | 'TextIndent' | 'TextItalic' | 'TextOutdent' | 'TextStrikethrough' | 'TextT' | 'TextUnderline' | 'Textbox' | 'Thermometer' | 'ThermometerCold' | 'ThermometerHot' | 'ThermometerSimple' | 'ThumbsDown' | 'ThumbsUp' | 'Ticket' | 'TidalLogo' | 'TiktokLogo' | 'Timer' | 'Tipi' | 'ToggleLeft' | 'ToggleRight' | 'Toilet' | 'ToiletPaper' | 'Toolbox' | 'Tooth' | 'Tote' | 'ToteSimple' | 'Trademark' | 'TrademarkRegistered' | 'TrafficCone' | 'TrafficSign' | 'TrafficSignal' | 'Train' | 'TrainRegional' | 'TrainSimple' | 'Tram' | 'Translate' | 'Trash' | 'TrashSimple' | 'Tray' | 'Tree' | 'TreeEvergreen' | 'TreePalm' | 'TreeStructure' | 'TrendDown' | 'TrendUp' | 'Triangle' | 'Trophy' | 'Truck' | 'TwitchLogo' | 'TwitterLogo' | 'Umbrella' | 'UmbrellaSimple' | 'Unite' | 'UniteSquare' | 'Upload' | 'UploadSimple' | 'Usb' | 'User' | 'UserCircle' | 'UserCircleGear' | 'UserCircleMinus' | 'UserCirclePlus' | 'UserFocus' | 'UserGear' | 'UserList' | 'UserMinus' | 'UserPlus' | 'UserRectangle' | 'UserSquare' | 'UserSwitch' | 'Users' | 'UsersFour' | 'UsersThree' | 'Van' | 'Vault' | 'Vibrate' | 'Video' | 'VideoCamera' | 'VideoCameraSlash' | 'Vignette' | 'VinylRecord' | 'VirtualReality' | 'Virus' | 'Voicemail' | 'Volleyball' | 'Wall' | 'Wallet' | 'Warehouse' | 'Warning' | 'WarningCircle' | 'WarningDiamond' | 'WarningOctagon' | 'Watch' | 'WaveSawtooth' | 'WaveSine' | 'WaveSquare' | 'WaveTriangle' | 'Waveform' | 'Waves' | 'Webcam' | 'WebcamSlash' | 'WebhooksLogo' | 'WechatLogo' | 'WhatsappLogo' | 'Wheelchair' | 'WheelchairMotion' | 'WifiHigh' | 'WifiLow' | 'WifiMedium' | 'WifiNone' | 'WifiSlash' | 'WifiX' | 'Wind' | 'WindowsLogo' | 'Wine' | 'Wrench' | 'X' | 'XCircle' | 'XSquare' | 'YinYang' | 'YoutubeLogo'
    "icon Background"?: string
    "icon"?: string
    "title"?: string
    "text"?: string
    "cTA"?: boolean
    "cTA"?: string
    "link"?: string
}

const Component = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

Component.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default Component

