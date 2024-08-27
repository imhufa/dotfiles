//!!! 每次主版本更新时，需要弹更新时, 都要记得修改这里的版本号及更新内容
var g_strShowHistory  = 2.0;    // 只有此值变化了，才会主动弹出更新
var g_strVersionMajor = 2;      // 主版本号
var g_strVersionMini  = 0.0;    // 小版本号( ShowHistory 之后的小数点后部分.
var g_strPaypal = 'paypal@openadmintools.com';
var g_arrConfig = 
  {
  useragent_id  :'default',        // 取值范围: g_arrUAList 的 id
  view_type     :'browser',        // 取值范围: device, browser
  useragent_js  : 1                // 1: 改变 js 的值, 0: 不改变js 的值 
  }; 
var g_arrDevList = 
  {
  'AdrMob'   :'Andriod Mobile',
  'AdrTablet':'Android Tablet',
  'BBMob'    :'Blackberry Mobile',
  'BBTablet' :'Blackberry Tablet',
  'IPad'     :'iPad',
  'IPod'     :'iPod Touch',
  'IPhone'   :'iPhone',
  'LuxDesk'  :'Linux Desktop',
  'MacDesk'  :'Macintosh',
  'Mobile'   :'Mobile',
  'Other'    :'Other',
  'Spider'   :'Spider/Bot',
  'SymBob'   :'Symbian Mobile',
  'WinDesk'  :'Windows Desktop',
  'WinPhone' :'Windows Phone',
  'Xbox'     :'Xbox'
  };
  
var g_arrBwsList = 
  {
  'Firefox'  :'Firefox',
  'Chrome'   :'Google Chrome',
  'IE'       :'Internet Explorer',
  'MsEdge'   :'Microsoft Edge',
  'Opera'    :'Opera',
  'Other'    :'Other',
  'Safari'   :'Safari',
  'Spider'   :'Spider/Bot'
  };
//'SamSung-S3'      :{DID:'AdrMob',     BID:'Chrome',   NM:'Chrome on Samsung Galaxy S III',    UA:'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'},
//'SamSung-NT2'     :{DID:'AdrMob',     BID:'Chrome',   NM:'Chrome on Samsung Galaxy Note II',  UA:'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'},
//'SamSung-Tab'     :{DID:'AdrTablet',  BID:'Chrome',   NM:'Chrome on Samsung Galaxy Tab',      UA:'Mozilla/5.0 (Linux; U; Android 2.2; en-US; SAMSUNG GT-P1000 Tablet Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'},
//'SamSung-Tab2'    :{DID:'AdrTablet',  BID:'Chrome',   NM:'Chrome on Samsung Galaxy Tab 2',    UA:'Mozilla/5.0 (Linux; Android 4.0.3; GT-P5100 Build/IML74K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Safari/537.36'},
//'SamSung-Tab3'    :{DID:'AdrTablet',  BID:'Chrome',   NM:'Chrome on Samsung Galaxy Tab 3',    UA:'Mozilla/5.0 (Linux; Android 4.2.2; SM-T310 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.82'},
//'SamSung-Tab4'    :{DID:'AdrTablet',  BID:'Chrome',   NM:'Chrome on Samsung Galaxy Tab 4',    UA:'Mozilla/5.0 (Linux; Android 4.4.2; SM-T530 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36'},
//'SamSung-TabS'    :{DID:'AdrTablet',  BID:'Chrome',   NM:'Chrome on Samsung Galaxy Tab S',    UA:'Mozilla/5.0 (Linux; Android 4.4.2; SM-T800 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.517 Safari/537.36'},

// navigator.platform 可能值列表：
//   http://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
//   此值配置在 OS 字段中，供 JS 更改 UA 时使用. JS 常用的判断移动设备的代码 
//   isPc = n.platform.match(/(Win32|Windows|Mac68K|MacPPC|Macintosh)|MacIntel/i) 
//          ? (!ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) 
//          : false,
// 部分参考: https://deviceatlas.com/blog/list-of-user-agent-strings
var g_arrUAList = 
  {
  // Chrome 
  'Chrome-iPhone'   :{DID:'IPhone',     BID:'Chrome',   OS:'iPhone',        FG:'CMI',  NM:'Chrome on iPhone',                  UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.89 Mobile/12b435 Safari/600.1.4'},
  'Chrome-iPhoneX'  :{DID:'IPhone',     BID:'Chrome',   OS:'iPhone',        FG:'CMI',  NM:'Chrome on iPhone X',                UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/54.0.2840.66 Mobile/16A366 Safari/602.1'}, // 20190621
  'Chrome-iPhoneXR' :{DID:'IPhone',     BID:'Chrome',   OS:'iPhone',        FG:'CMI',  NM:'Chrome on iPhone XR',               UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1'}, // 20190621
  'Chrome-iPod'     :{DID:'IPod',       BID:'Chrome',   OS:'iPod',          FG:'CMIO', NM:'Chrome on iPod Touch',              UA:'Mozilla/5.0 (iPod; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/54.0.2840.66 Mobile/14A403 Safari/602.1'}, // 20190621
  'SamSung-NT3'     :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMN',  NM:'Chrome on Samsung Galaxy Note 3',   UA:'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'},
  'SamSung-TabPro'  :{DID:'AdrTablet',  BID:'Chrome',   OS:'Android',       FG:'CMT',  NM:'Chrome on Samsung Galaxy Tab Pro',  UA:'Mozilla/5.0 (Linux; Android 4.4.2; SM-T520 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'},
  'SamSung-S4'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S4',       UA:'Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Mobile Safari/537.36'},
  'SamSung-S5'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S5',       UA:'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Mobile Safari/537.36'},
  'SamSung-S6'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S6',       UA:'Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36'},
  'SamSung-S7'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S7',       UA:'Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36'},
  'SamSung-S7-Edge' :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S7 Edge',  UA:'Mozilla/5.0 (Linux; Android 6.0.1; SM-G935S Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36'},
  'SamSung-S8'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S8',       UA:'Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36'},
  'SamSung-S9'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CMS',  NM:'Chrome on Samsung Galaxy S9',       UA:'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'},
  
  'Chrome-iPad'     :{DID:'IPad',       BID:'Chrome',   OS:'iPad',          FG:'CPad', NM:'Chrome on iPad',                    UA:'Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/65.0.3325.152 Mobile/16A366 Safari/604.1'},   // 20190621
  'Nexus-6p'        :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'NX6P', NM:'Chrome on Nexus 6P',                UA:'Mozilla/5.0 (Linux; Android 8.1.0; Nexus 6P Build/OPM7.181205.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36'},// 20190621
  'Pixel-2'         :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'PX2',  NM:'Chrome on Pixel 2',                 UA:'Mozilla/5.0 (Linux; Android 9; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36'},// 20190621
  'Pixel-2-XL'      :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'PX2X', NM:'Chrome on Pixel 2 XL',              UA:'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Mobile Safari/537.36'},// 20190621
  
  'Chrome-Mac'      :{DID:'MacDesk',    BID:'Chrome',   OS:'Macintosh',     FG:'CMM',  NM:'Chrome on Mac',                     UA:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'},
  'Chrome-Ubuntu'   :{DID:'LuxDesk',    BID:'Chrome',   OS:'Linux',         FG:'CMU',  NM:'Chrome on Ubuntu',                  UA:'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/49.0.2623.87 Chrome/49.0.2623.87 Safari/537.36'},
  'Chrome-Win'      :{DID:'WinDesk',    BID:'Chrome',   OS:'Win32',         FG:'CMW',  NM:'Chrome on Windows',                 UA:'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'},
  'Chrome-Win7-64'  :{DID:'WinDesk',    BID:'Chrome',   OS:'Win64',         FG:'CMW',  NM:'Chrome on Windows 7 (64-bit)',           UA:'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36'},
  'Chrome-Win-10-64':{DID:'WinDesk',    BID:'Chrome',   OS:'Win64',         FG:'CMW',  NM:'Chrome on Windows 10 (64-bit)',           UA:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36  '},
  'Chrome-GN10'     :{DID:'AdrTablet',  BID:'Chrome',   OS:'Linux armv7l',  FG:'CMG',  NM:'Chrome on Google Nexus 10',         UA:'Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'},
  'Chrome-LGL70'    :{DID:'AdrMob',     BID:'Chrome',   OS:'Android',       FG:'CML',  NM:'Chrome on LG Optimus L70',          UA:'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/49.0.2623.87 Mobile Safari/537.36'},
  
  // Firefox
  'FireFox-AdrMob'  :{DID:'AdrMob',     BID:'Firefox',  OS:'Android',       FG:'FFM',  NM:'FireFox on Android Mobile',         UA:'Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0'},
  'FireFox-AdrTab'  :{DID:'AdrTablet',  BID:'Firefox',  OS:'Android',       FG:'FFT',  NM:'FireFox on Android Tablet',         UA:'Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0'},
  'FireFox-Fedora'  :{DID:'LuxDesk',    BID:'Firefox',  OS:'Linux',         FG:'FFF',  NM:'FireFox on Fedora',                 UA:'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0'},
  'FireFox-IPad'    :{DID:'IPad',       BID:'Firefox',  OS:'iPad',          FG:'FFI',  NM:'FireFox on iPad',                   UA:'Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4'},
  'FireFox-IPhone'  :{DID:'IPhone',     BID:'Firefox',  OS:'iPhone',        FG:'FFP',  NM:'FireFox on iPhone',                 UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4'},
  'FireFox-IPhoneX' :{DID:'IPhone',     BID:'Firefox',  OS:'iPhone',        FG:'FFPX', NM:'FireFox on iPhone X',               UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/17.3b15323 Mobile/16A366 Safari/605.1.15'},
  'FireFox-IPhoneXM':{DID:'IPhone',     BID:'Firefox',  OS:'iPhone',        FG:'FFPX', NM:'FireFox on iPhone XR Max',          UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/13.2b11866 Mobile/16A366 Safari/605.1.15'},
  'FireFox-Mac'     :{DID:'MacDesk',    BID:'Firefox',  OS:'Macintosh',     FG:'FFM',  NM:'FireFox on Mac',                    UA:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:45.0) Gecko/20100101 Firefox/45.0'},
  'FireFox-N900'    :{DID:'Mobile',     BID:'Firefox',  OS:'Linux',         FG:'FFN',  NM:'FireFox on Nokia N900 Linux Mobile',UA:'Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0'},
  'FireFox-Ubuntu'  :{DID:'LuxDesk',    BID:'Firefox',  OS:'Linux',         FG:'FFU',  NM:'FireFox on Ubuntu',                 UA:'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/45.0'},
  'FireFox-Win7-64' :{DID:'WinDesk',    BID:'Firefox',  OS:'Win64',         FG:'FFW',  NM:'FireFox on Windows 7 (64-bit)',     UA:'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0'},
  'FireFox-Win10-64':{DID:'WinDesk',    BID:'Firefox',  OS:'Win64',         FG:'FFW',  NM:'FireFox on Windows 10 (64-bit)',    UA:'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0'},
  
  // IE 
  'IE6'             :{DID:'WinDesk',    BID:'IE',       OS:'Win32',         FG:'IE6',  NM:'Internet Explorer 6',               UA:'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)'},
  'IE7'             :{DID:'WinDesk',    BID:'IE',       OS:'Win32',         FG:'IE7',  NM:'Internet Explorer 7',               UA:'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.0; en-US)'},
  'IE8'             :{DID:'WinDesk',    BID:'IE',       OS:'Win32',         FG:'IE8',  NM:'Internet Explorer 8',               UA:'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)'},
  'IE9'             :{DID:'WinDesk',    BID:'IE',       OS:'Win32',         FG:'IE9',  NM:'Internet Explorer 9',               UA:'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)'},
  'IE10-xb360'      :{DID:'Xbox',       BID:'IE',       OS:'Win32',         FG:'IE9',  NM:'Internet Explorer 9 on Xbox 360',   UA:'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)'},
  'IE10'            :{DID:'WinDesk',    BID:'IE',       OS:'Win32',         FG:'IE10', NM:'Internet Explorer 10',              UA:'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'},
  'IE10-Lumia'      :{DID:'WinPhone',   BID:'IE',       OS:'Win32',         FG:'IE10', NM:'Internet Explorer 10 on Lumia',     UA:'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko'},
  'IE10-xbone'      :{DID:'Xbox',       BID:'IE',       OS:'Win32',         FG:'IE10', NM:'Internet Explorer 10 on Xbox One',  UA:'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)'},
  'IE11'            :{DID:'WinDesk',    BID:'IE',       OS:'Win32',         FG:'IE11', NM:'Internet Explorer 11',              UA:'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko'},
  'IE11-Lumia'      :{DID:'WinPhone',   BID:'IE',       OS:'Win32',         FG:'IE11', NM:'Internet Explorer 11 on Lumia',     UA:'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11; IEMobile/11.0; NOKIA; Lumia 928) like Gecko'},

  // Edge
  'MsEdge12'        :{DID:'WinDesk',    BID:'MsEdge',   OS:'Win32',         FG:'Edge', NM:'Microsoft Edge 12',                  UA:'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'},
  'MsEdge12-Mob10'  :{DID:'WinPhone',   BID:'MsEdge',   OS:'Win32',         FG:'Edge', NM:'Microsoft Edge 12 on Windows Phone', UA:'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.10136'},
  'MsEdge17'        :{DID:'WinDesk',    BID:'MsEdge',   OS:'Win64',         FG:'Edge', NM:'Microsoft Edge 17',              UA:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'}, // 20190621
  // Opera
  'Opera-Mac'       :{DID:'MacDesk',    BID:'Opera',    OS:'Macintosh',     FG:'OPM',  NM:'Opera on Mac',                      UA:'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.9.168 Version/11.52'},
  'Opera-Ubuntu'    :{DID:'LuxDesk',    BID:'Opera',    OS:'Linux',         FG:'OPU',  NM:'Opera on Ubuntu',                   UA:'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16'},
  'Opera-WinDesk'   :{DID:'WinDesk',    BID:'Opera',    OS:'Win32',         FG:'OPW',  NM:'Opera on Windows',                  UA:'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.9.181 Version/12.00'},
  'Opera-Mobile'    :{DID:'Mobile',     BID:'Opera',    OS:'',              FG:'OPN',  NM:'Opera Mini',                        UA:'Opera/9.80 (J2ME/MIDP; Opera Mini/9.80 (J2ME/22.478; U; en) Presto/2.5.25 Version/10.54'},
  'Opera-SymBob'    :{DID:'SymBob',     BID:'Opera',    OS:'Symbian',       FG:'OPS',  NM:'Opera Mini on Symbian',             UA:'Opera/9.80 (J2ME/MIDP; Opera Mini/9.80 (S60; SymbOS; Opera Mobi/23.348; U; en) Presto/2.5.25 Version/10.54'},
  'Opera-AdrMob'    :{DID:'AdrMob',     BID:'Opera',    OS:'Android',       FG:'OSA',  NM:'Opera Mini on Android Mobile',      UA:'Opera/9.80 (Android; Opera Mini/7.6.35766/35.5706; U; en) Presto/2.8.119 Version/11.10'},
  'Opera-IPad'      :{DID:'IPad',       BID:'Opera',    OS:'iPad',          FG:'OPI',  NM:'Opera Mini on iPad',                UA:'Opera/9.80 (iPad; Opera Mini/7.1.32694/27.1407; U; en) Presto/2.8.119 Version/11.10'},
  'Opera-IPhone'    :{DID:'IPhone',     BID:'Opera',    OS:'iPhone',        FG:'OPP',  NM:'Opera Mini on iPhone',              UA:'Opera/9.80 (iPhone; Opera Mini/7.1.32694/27.1407; U; en) Presto/2.8.119 Version/11.10'},
  // Other 
  'Other-NokiaN9'   :{DID:'Mobile',     BID:'Other',    OS:'Symbian',       FG:'Noki', NM:'Nokia Browser on Nokia N9',         UA:'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13'},
  'Other-Kindle'    :{DID:'LuxDesk',    BID:'Other',    OS:'Linux armv7l',  FG:'Silk', NM:'Silk on Amazon Kindle Fire HDX',    UA:'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true'},   
  // Safari
  'Safari-BBMobZ'   :{DID:'BBMob',      BID:'Safari',   OS:'BlackBerry',    FG:'SFB',  NM:'Safari on BlackBerry Z Mobile',     UA:'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+'},
  'Safari-BBMobQ'   :{DID:'BBMob',      BID:'Safari',   OS:'BlackBerry',    FG:'SFB',  NM:'Safari on BlackBerry Q Mobile',     UA:'Mozilla/5.0 (BB10; Kbd) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+'},
  'Safari-BBTab'    :{DID:'BBTablet',   BID:'Safari',   OS:'BlackBerry',    FG:'SFB',  NM:'Safari on BlackBerry Playbook',     UA:'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.0; en-US) AppleWebKit/535.8+ (KHTML, like Gecko) Version/7.2.0.0 Safari/535.8+'},
  'Safari-iPad'     :{DID:'IPad',       BID:'Safari',   OS:'iPad',          FG:'iPad', NM:'Safari on iPad',                    UA:'Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'},   // 20190621
  'Safari-iPadm'    :{DID:'IPad',       BID:'Safari',   OS:'iPad',          FG:'Padm', NM:'Safari on iPad Mini',               UA:'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53'},   
  'Safari-iPHone4'  :{DID:'IPhone',     BID:'Safari',   OS:'iPhone',        FG:'IP4',  NM:'Safari on iPhone 4',                UA:'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'},   
  'Safari-iPHone5'  :{DID:'IPhone',     BID:'Safari',   OS:'iPhone',        FG:'IP5',  NM:'Safari on iPhone 5',                UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53'},   
  'Safari-iPHone6'  :{DID:'IPhone',     BID:'Safari',   OS:'iPhone',        FG:'IP6',  NM:'Safari on iPhone 6/7/8',            UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'},   
  'Safari-iPHone6s' :{DID:'IPhone',     BID:'Safari',   OS:'iPhone',        FG:'IP6+', NM:'Safari on iPhone 6/7/8 Plus',       UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'},  
  'Safari-iPHoneX'  :{DID:'IPhone',     BID:'Safari',   OS:'iPhone',        FG:'IPX',  NM:'Safari on iPhone X',                UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'},  
  'Safari-iPHoneXR' :{DID:'IPhone',     BID:'Safari',   OS:'iPhone',        FG:'IPX',  NM:'Safari on iPhone XR',               UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'},  
  
  'Safari-iPod'     :{DID:'IPod',       BID:'Safari',   OS:'iPod',          FG:'iPod', NM:'Safari on iPod Touch',              UA:'Mozilla/5.0 (iPod touch; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1'}, // 20190621
  
  'Safari-Mac'      :{DID:'MacDesk',    BID:'Safari',   OS:'Macintosh',     FG:'SFM',  NM:'Safari on Mac',                     UA:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12'},   
  'Safari-Win'      :{DID:'WinDesk',    BID:'Safari',   OS:'Win32',         FG:'SFW',  NM:'Safari on Windows',                 UA:'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27'},   
  // Spider
  'BaiduBot'        :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Baid', NM:'Baiduspider',                       UA:'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)'},
  'BaiduBot-Mob'    :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Baid', NM:'Baiduspider Mobile',                UA:'Mozilla/5.0 (Linux;u;Android 4.2.2;zh-cn;) AppleWebKit/534.46 (KHTML,like Gecko) Version/5.1 Mobile Safari/10600.6.3 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)'},
  'Bingbot'         :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Bing', NM:'Bingbot',                           UA:'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)'},
  'Bingbot-Mobile'  :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Bing', NM:'Bingbot Mobile',                    UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)'},
  'Bing AdIdxBot'   :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Bing', NM:'Bing Ads Bot',                      UA:'Mozilla/5.0 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)'},
  'BingPreview'     :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Bing', NM:'BingPreview',                       UA:'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b'},
  'Googlebot'       :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'GGB',  NM:'Googlebot',                         UA:'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'},
  'Googlebot-Mob'   :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'GGM',  NM:'Googlebot Mobile',                  UA:'SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)'},
  'Googlebot-Smart' :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'GGS',  NM:'Googlebot Smartphone',              UA:'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'},
  'Google-AdSense'  :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'GGA',  NM:'Google AdSense Crawler',            UA:'Mediapartners-Google'},
  'Google-AdsBot'   :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'GGD',  NM:'Google AdsBot',                     UA:'AdsBot-Google (+http://www.google.com/adsbot.html)'},
  'YahooBot'        :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'Yaho', NM:'Yahoo! Slurp',                      UA:'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)'},
  'YabdexBot'       :{DID:'Spider',     BID:'Spider',   OS:'',              FG:'YDX',  NM:'Yandexbot',                         UA:'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)'}
  };
  

var m_arrConfig, m_arrDevList, m_arrBwsList, m_arrUAList;


function GetAllStorageSyncData() 
{
	// Immediately return a promise and start asynchronous work
	console.log('call GetAllStorageSyncData');
	return new Promise
	(
		(resolve, reject) => 
		{
			// Asynchronously fetch all data from storage.sync.
			chrome.storage.local.get
			(
				null, 
				(items) => 
				{
					if (chrome.runtime.lastError) // Pass any observed errors down the promise chain.
					{
						return reject(chrome.runtime.lastError);
					}
					resolve(items); // Pass the data retrieved from storage down the promise chain.
				}
			);
		}
	);
}

// 用默认值填充，并将其保存
function LoadDefault()
{
	m_arrConfig  = g_arrConfig;
	m_arrDevList = g_arrDevList;
	m_arrBwsList = g_arrBwsList;
	m_arrUAList  = g_arrUAList;
	SaveConfig();
}

// 保存配置。存到一个大数组 ua_cfg 中
function SaveConfig()
{
	chrome.storage.local.set({'ua_cfg':{'arrConfig':m_arrConfig, 'arrDevList':m_arrDevList,'arrBwsList':m_arrBwsList,'arrUAList': m_arrUAList}});
	console.log("SaveConfig done");
}


// 检测 Config 配置的正确性
function FixConfig()
{
  // 检查当前设置的 User-agent id 是否还存在
  if ( 'default' != m_arrConfig.useragent_id && undefined == m_arrUAList[m_arrConfig.useragent_id])
  {
    m_arrConfig.useragent_id = 'default'; // 校正默认的 UserAgent id 值
	SaveConfig();
  }
}

function MYLANG(pi_strName)
{
  var t_strRet = (chrome.i18n) ? chrome.i18n.getMessage(pi_strName) : (localStorage ? localStorage['_L_'+pi_strName] : pi_strName);
  return (''==t_strRet) ? pi_strName : t_strRet;
}

function CheckVersion()
{
	var t_bFirstInstall = 0;
	var t_bMajorUpdate = 0;
	// !!! 涉及全局变量保存，暂时不使用
	return;

	// 存储的老版本号
	var t_fOldVer = ( undefined == localStorage['version_marjor'] ) ? 0 : (localStorage['version_marjor']+localStorage['version_mini']);
	// 程序硬编码的新版本号
	var t_strNewVer = g_strVersionMajor+g_strVersionMini;
	if ( undefined == localStorage['version_marjor'] )
	{
		t_bFirstInstall = 1;
	}
	else if ( localStorage['version_marjor'] != g_strVersionMajor )
	{
		t_bMajorUpdate = 1;
	}
	else if (localStorage['version_mini'] != g_strVersionMini )
	{
		localStorage['version_mini'] = g_strVersionMini;
	}

	if ( t_fOldVer != t_strNewVer ) // 版本不一致
	{
		GetUID();
	}
	if ( t_fOldVer < 1.2 )
	{
		LoadDefault();
	}

	if (!( t_bFirstInstall || t_bMajorUpdate))
	{
		return;
	}
	localStorage['version_marjor'] = g_strVersionMajor;
	localStorage['version_mini'] = g_strVersionMini;
	// Add old version tag
	if ( t_bFirstInstall )
	{
		var t_strURL = 'https://app.openadmintools.com/'+MYLANG('id')+'/http-user-agent-switcher/welcome/';
		chrome.tabs.create( {url:t_strURL,selected: true} );
	}
}

function GetUID()
{
  var t_strUID = GetConfig('config_uid','');
  if ( '' == t_strUID )
  {
    var t_strUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); }).toUpperCase();
    SetConfig('config_uid', t_strUID);
  }
  return t_strUID;
}// 因为 Chrome 低版的内核， 在扩展的 FRAME 页面中， 不支持Chrome 的特殊API. 
// 所以 FRAME 所需要的 LANG，在 Popup.js 中保存在 localStorage 中。
// FRAME 所需要的语言串，从 localStorage 中提取
function LoadLangToStorage()
{
  var t_strCurLangFlag    = MYLANG('id_folder')+localStorage['version_marjor']+"."+localStorage['version_mini'];
  var t_strSavedLangFlag  = ( undefined == localStorage['version_lang_flag'] ) ? '' : localStorage['version_lang_flag'];
  if ( t_strSavedLangFlag == t_strCurLangFlag )
    return;
  localStorage['version_lang_flag'] = t_strCurLangFlag;
  
  var xhr = new XMLHttpRequest();
  xhr.onload = function() 
  {
    var messages = JSON.parse(xhr.responseText);
    for (var messageId in messages) {
      localStorage['_L_'+messageId] = messages[messageId]['message'];
    }
  }
  xhr.open("GET", "_locales/"+MYLANG('id_folder')+"/messages.json", true);
  xhr.send();  
}


function SetLinkAction(pi_strKey, pi_arrItem)
{
  var t_xCtrl = $('#'+pi_strKey);
  if ( !t_xCtrl )
    return;
  if ('mail' == pi_arrItem['type'])
    t_xCtrl.attr('href', pi_arrItem['url']);
  else
    t_xCtrl.click( function(){ CreateTab(pi_arrItem['type'], pi_arrItem['url'],pi_arrItem['sel']);return false;} );
}



function SetLinkActions(pi_arrItems)
{
  for( var t_strKey in pi_arrItems)
  {
    var t_xCtrlTxt = t_xCtrlImg = t_xCtrl = 0;
    SetLinkAction(t_strKey+'_txt',  pi_arrItems[t_strKey]);
    SetLinkAction(t_strKey+'_img',  pi_arrItems[t_strKey]);
    SetLinkAction(t_strKey,         pi_arrItems[t_strKey]);
  }
}

function CreateTab(pi_strType, pi_strURL, pi_bSel) 
{
  var t_strURL = pi_strURL; // default: 'link'
	if ( 'appenddomain' == pi_strType)
    t_strURL += sessionStorage['domain'];
  else if ( 'appendhost' == pi_strType)
    t_strURL += sessionStorage['host'];
  else if ( 'appendurl' == pi_strType)
    t_strURL += encodeURIComponent(sessionStorage['url']);
  chrome.tabs.create( {url:t_strURL,selected:(pi_bSel?true:false)} );
}

function GetConfig(pi_strKey, pi_strDef)
{
  return (undefined == localStorage[pi_strKey]) ? pi_strDef : localStorage[pi_strKey];
}

function SetConfig(pi_strKey, pi_strVal)
{
  localStorage[pi_strKey] = pi_strVal;
}

function GetSelectedVal(pi_strCtrlID) // 获取当前 Select 控件 中已经选择的 Value
{
  var t_xCtrl = document.getElementById(pi_strCtrlID);
  return (-1 == t_xCtrl.selectedIndex) ? '' : t_xCtrl.options[t_xCtrl.selectedIndex].value;
}

function GetSelectedText(pi_strCtrlID) // 获取当前 Select 控件 中已经选择的 Text
{
  var t_xCtrl = document.getElementById(pi_strCtrlID);
  return (-1 == t_xCtrl.selectedIndex) ? '' : t_xCtrl.options[t_xCtrl.selectedIndex].text;
}

function LoadAgentsToList(pi_strSelID)
{
  // 根据查看类型选择合适的列表
  var t_arrList           = 'device'  == m_arrConfig.view_type ? m_arrDevList : m_arrBwsList ;
  var t_strListID         = 'device'  == m_arrConfig.view_type ? 'DID' : 'BID';
  var t_strSelectedListID = 'default' == pi_strSelID ? 'default' : m_arrUAList[pi_strSelID][t_strListID]; // 当前选中的一级菜单项ID
  // 建立一级 List
  var t_strSelect = '<SELECT SIZE=5 id="ua_list"><optgroup label="'+MYLANG('Default')+'"><option value="default"'+('default'==pi_strSelID?' selected':'')+'>'+MYLANG('UADefautChrome')+'</option></optgroup>';
  var t_bFirstGroup = 1; // Fisrt Group 项
  for( var t_strID in t_arrList)
  {
    // 判断此一级菜单下面，是否有二级List项。如果没有，则不建 
    var t_bCreated = 0;
    for( var t_strUaID in m_arrUAList)
    {
      if ( m_arrUAList[t_strUaID][t_strListID] != t_strID )
        continue;
      // 有二级List，创建
      if ( 0 == t_bCreated ) // 还没有创建一级 List
      {
        t_strSelect += ( t_bFirstGroup ? '</optgroup>':'')+'<optgroup label="'+t_arrList[t_strID]+'">';
        t_bFirstGroup = 0;
        t_bCreated = 1;
      }
      t_strSelect += '<option value="'+t_strUaID+'"'+( t_strUaID==pi_strSelID ?' selected':'')+'>' + m_arrUAList[t_strUaID]['NM']+'</option>';
    }
  }
  t_strSelect += '</select>';
  $('#wrap_ualist').html(t_strSelect);
}//
// Background.js：
//   用于显示定制菜单；与 popup 以及 contents 保持通信
//   正式发行时，需要与 public.js, setting.js 联合为一个文件 
//  
//
// debug 页面：
// 直接访问 chrome-extension://fhkpopnohfhkelcgoicnjabimpmcicng/bk.html
// !!! 多语言版本


//var g_iDebug = 0;
//function LOG(pi_strTxt)
//{
//  localStorage['@debug_'+(g_iDebug++)] = pi_strTxt;
//  // console.log(pi_strTxt);
//}
// console.log('[background.js] loaded');

g_fnCallback = function(pi_arrReq)
	{
		for(var t=0,i=pi_arrReq.requestHeaders.length;t<i;++t)
		{
			if( 'User-Agent' == pi_arrReq.requestHeaders[t].name)
			{
				// 在这里修改 发送至 server 的 User-agent String
				if (undefined == m_arrUAList[m_arrConfig.useragent_id])
				{
					m_arrConfig.useragent_id = 'default'; // 校正默认的 UserAgent id 值
				}
				if ( 'default' != m_arrConfig.useragent_id )
				{
					console.log('[background.js] ['+pi_arrReq.requestHeaders[t].name+'] '+pi_arrReq.requestHeaders[t].value);
					pi_arrReq.requestHeaders[t].value = m_arrUAList[ m_arrConfig.useragent_id ]['UA'];
					console.log('[background.js] new ua-value:'+pi_arrReq.requestHeaders[t].value);
				}
				break;
			}
		}
		return{requestHeaders:pi_arrReq.requestHeaders} 
	};

// 侦听 http header 事件
// 权限说明 : https://developer.chrome.com/docs/extensions/reference/webRequest
console.log('[background.js] onBeforeSendHeaders.addListener');
//chrome.webRequest.onBeforeSendHeaders.addListener
//  (
//  g_fnCallback,
//  {urls:['<all_urls>']},
//  ['blocking','requestHeaders']
//  );

chrome.webRequest.onBeforeSendHeaders.addListener
  (
  g_fnCallback,
  {urls:['<all_urls>']},
  ["blocking", "requestHeaders"]
  );
  
// 侦听来自 content.js 的请求，返回相应的 UA 串以及 PLATFORM,  以供修改本地 JS的UA值。
chrome.runtime.onMessage.addListener
	(
		function(request, sender, sendResponse)
		{
			// console.log('[background] receive action:' + request.action);
			if ( 'getUserAgent' == request.action)
			{
				// 在这里修改 发送至 server 的 User-agent String
				FixConfig();
				sendResponse({
				userAgent: ('default' == m_arrConfig.useragent_id || 0 == m_arrConfig.useragent_js ) ? '' :  m_arrUAList[ m_arrConfig.useragent_id ]['UA'],
				platform: ('default' == m_arrConfig.useragent_id || 0 == m_arrConfig.useragent_js ) ? '' :  m_arrUAList[ m_arrConfig.useragent_id ]['OS']
				});
			}
			else if ( 'change_ua' == request.action)
			{
				// console.log('chrome.runtime.onMessage.addListener '+request.new_ua_id);
				ChangeUserAgent(request.new_ua_id);
			}
			else if ( 'change_view_type' == request.action)
			{
				ChangeViewType(request.new_view_type);
			}
			return true;
		}
	); 

chrome.runtime.onInstalled.addListener(	() => 
	{
		// console.log('[background.js]*** call chrome.runtime.onInstalled.addListener');
	});

// 读取配置
chrome.storage.local.get
	(
		null, 
		(items) => 
		{
			if (chrome.runtime.lastError) // Pass any observed errors down the promise chain.
			{
				return;
			}
			// console.log('[background.js] storage.local.get ok. copy to mem');
			m_arrConfig  = items.ua_cfg.arrConfig;
			m_arrDevList = items.ua_cfg.arrDevList;
			m_arrBwsList = items.ua_cfg.arrBwsList;
			m_arrUAList  = items.ua_cfg.arrUAList;
			FixConfig();
			InitBackground();
		}
	);

// console.log('[background.js] loaded');
//------------------------- Background functions -------------------------

function InitBackground()
{
	//!!! LoadLangToStorage();
	//!!! CheckVersion();
	Reload();
}

function CreateMenu()
{
	// console.log('[backgound.js] CreateMenu-1');
	// 1. 建立一级菜单: default
	chrome.contextMenus.removeAll();
	chrome.contextMenus.create({id:'default',contexts:['all'],title:MYLANG('Default'),type:'checkbox',checked:'default' == m_arrConfig.useragent_id});
	chrome.contextMenus.create({id:'sep-1', contexts:['all'], type:'separator'}); // separator 也必须有 id
	// 根据查看类型选择合适的列表
	var t_arrList			= 'device'  == m_arrConfig.view_type ? m_arrDevList : m_arrBwsList ;
	var t_strListID			= 'device'  == m_arrConfig.view_type ? 'DID' : 'BID';
	var t_strSelectedListID	= 'default' == m_arrConfig.useragent_id ? 'default' : m_arrUAList[m_arrConfig.useragent_id][t_strListID]; // 当前选中的一级菜单项ID
	// 建立一级菜单
	for( var t_strID in t_arrList)
	{
		// 判断此一级菜单下面，是否有二级菜单项。如果没有，则不建 
		for( var t_strUaID in m_arrUAList)
		{
			if ( m_arrUAList[t_strUaID][t_strListID] != t_strID )
			{
				continue;
			}
			// 有二级菜单，创建
			var t_strTitle = ( t_strID == t_strSelectedListID ) ? ('[ '+t_arrList[t_strID]+' ]') : t_arrList[t_strID];
			chrome.contextMenus.create({id:t_strID,contexts:["all"],	title:t_strTitle,	type:"normal"});
			break;
		}
	}
	// 辅助菜单：view by, option, check ua
	chrome.contextMenus.create({id:'sep-2', 	contexts:['all'],type:'separator'});
	chrome.contextMenus.create({id:'VIEW-BY',	contexts:["all"],title:MYLANG('UAGroup'),type:"normal"});
	chrome.contextMenus.create({id:'VIEW-BY-DEV',parentId:"VIEW-BY",contexts:["all"],title:MYLANG('Device'), type:"checkbox",checked:'device' == m_arrConfig.view_type });
	chrome.contextMenus.create({id:'VIEW-BY-BWS',parentId:"VIEW-BY",contexts:["all"],title:MYLANG('Browser'),type:"checkbox",checked:'device' != m_arrConfig.view_type });
	chrome.contextMenus.create({id:'OPTIONS', contexts:["all"],title:MYLANG('Options'),type:"normal" });
	chrome.contextMenus.create({id:'CHECKUA', contexts:["all"],title:MYLANG('UACheck'),type:"normal" });

	// 2. 建立二级菜单
	for( var t_strUaID in m_arrUAList)
	{
		// 因为要将 t_strUaID 值传递给 onclick 中的事件代码，故使用 自执行函数
		(function(pi_strID){
			chrome.contextMenus.create
			({
				id:pi_strID,
				parentId:m_arrUAList[pi_strID][t_strListID],
				contexts:["all"],
				title:m_arrUAList[pi_strID]['NM'],
				type:"checkbox",
				checked: pi_strID == m_arrConfig.useragent_id
				//onclick:function(){ ChangeUserAgent(pi_strID);}
			});
		})(t_strUaID);
	}
  
	// 3. 绑定事件
	// Extensions using event pages or Service Workers cannot pass an onclick parameter to chrome.contextMenus.create. Instead, use the chrome.contextMenus.onClicked event.
	chrome.contextMenus.onClicked.addListener
	( 
		function (pi_arrClickData)
		{
			// console.log('[background.js] mene id: ' + pi_arrClickData.menuItemId);
			switch(pi_arrClickData.menuItemId)
			{
				case 'VIEW-BY-DEV':	ChangeViewType('device');					break;
				case 'VIEW-BY-BWS':	ChangeViewType('browser');					break;
				case 'OPTIONS':		chrome.tabs.create( {url:"options.html"});	break;
				case 'CHECKUA':		chrome.tabs.create({url:"https://useragent.openadmintools.com/?ref=ext_ua"}); break;
				default:			ChangeUserAgent(pi_arrClickData.menuItemId);	break;
			}
		}
	);
}

function Reload()
{
  CreateMenu(); // 重建菜单
  SetBadgeIconText(); // 设置 icon text
}

function ChangeUserAgent(pi_strUaID)
{
  m_arrConfig.useragent_id  = pi_strUaID;
  CreateMenu(); // 重建菜单
  chrome.tabs.reload(); // 重戴 TABS
  SetBadgeIconText(); // 设置 icon text
  SaveConfig();
}

// 修改菜单的浏览方式  
function ChangeViewType(pi_strType)
{
  m_arrConfig.view_type  = pi_strType;
  CreateMenu(); // 重建菜单
  SaveConfig();
}

// 修改 JS-ua 的发送方式
function ChangeUaJsmode(pi_strEnable)
{
  m_arrConfig.useragent_js  = pi_strEnable;
  SaveConfig();
}

// 设置扩展图标
// document: https://developer.chrome.com/docs/extensions/reference/action/
function SetBadgeIconText()
{
	if ( 'default' == m_arrConfig.useragent_id )
	{
		chrome.action.setIcon( {path:"chrome-extension://"+chrome.runtime.id+"/image/logo-19.png"});
		chrome.action.setTitle( {title:"Http User-Agent Switcher\nCurrent Agent: Default"})
		chrome.action.setBadgeText({text:""});
	}
	else
	{
		chrome.action.setIcon({path:"chrome-extension://"+chrome.runtime.id+"/image/logo-19-light.png"});
		chrome.action.setTitle( {title:"Http User-Agent Switcher\nCurrent User-Agent: "+m_arrUAList[m_arrConfig.useragent_id]['NM']+"("+m_arrUAList[m_arrConfig.useragent_id]['FG']+")"});
		var t_strFlag = undefined == m_arrUAList[m_arrConfig.useragent_id]['FG'] ? "" : m_arrUAList[m_arrConfig.useragent_id]['FG'];
		chrome.action.setBadgeText({text:t_strFlag});
	}
}