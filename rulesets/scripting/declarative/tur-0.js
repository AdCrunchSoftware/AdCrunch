/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

// ruleset: tur-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"body.ad_block_detected\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"body #oden.adsbygoogle-noablate\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"#detect.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".content-wrapper\",\"action\":[\"style\",\"filter: none!important;\"]}\n{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}","{\"selector\":\".reklam-alan-tam\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".reklam\",\"action\":[\"style\",\"display: block!important; height: 1px!important;\"]}","{\"selector\":\".icerik_reklam\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}\n{\"selector\":\".rek1\",\"action\":[\"style\",\"height: 1px!important;\"]}\n{\"selector\":\".reklam_kontrol\",\"action\":[\"style\",\"height: 1px!important;\"]}","{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display:block!important;\"]}","{\"selector\":\"#blogkafemnet-reklam\",\"action\":[\"style\",\"height: 1px!important;\"]}","{\"selector\":\".adsmd\",\"action\":[\"style\",\"height: 1px!important;\"]}","{\"selector\":\".video-banner\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body > .container\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body > #page\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#dt_contenedor\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".jw-preview[style*=\\\"background-image: url\\\"]\",\"action\":[\"style\",\"background: none !important;\"]}","{\"selector\":\"body.pageskin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".main-content\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#site\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body > #wrap\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#header\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".pageskin .oblong\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".pageskin .rectangle\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#wt-masthead\",\"action\":[\"style\",\"height: 0px !important; min-height: 0px !important;\"]}\n{\"selector\":\".wt-container[style*=\\\"padding-top: 0px;\\\"]\",\"action\":[\"style\",\"padding-top: 60px!important;\"]}\n{\"selector\":\".wt-masthead\",\"action\":[\"style\",\"padding: 0 !important;\"]}","{\"selector\":\"body > div[class=\\\"orta\\\"]\",\"action\":[\"style\",\"margin-top: -150px !important;\"]}","{\"selector\":\".page_container > .single\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}\n{\"selector\":\"body .fixed_header\",\"action\":[\"style\",\"top: 0 !important;\"]}\n{\"selector\":\"body .page_container\",\"action\":[\"style\",\"margin-top: 80px !important;\"]}\n{\"selector\":\"body > div.site-outer\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#wrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}\n{\"selector\":\".pageskin header\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#wrap\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#roadblock\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".td-pb-row > .tdc-column > .wpb_wrapper\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: static !important;\"]}\n{\"selector\":\"html.fancybox-lock:has(> body) > body\",\"action\":[\"style\",\"overflow: visible!important;\"]}\n{\"selector\":\"html.fancybox-lock:has(> body)\",\"action\":[\"style\",\"overflow: visible!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#live-top-menu\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#ikinci\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#reki[style*=\\\"display\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}\n{\"selector\":\"header.container\",\"action\":[\"style\",\"margin-top: 20px !important;\"]}","{\"selector\":\".billBoardFrame\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".layout\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".container.main\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}","{\"selector\":\"#iframe-video\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".global-header\",\"action\":[\"style\",\"margin-bottom: 24px !important;\"]}","{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"html.async-hide\",\"action\":[\"style\",\"opacity: 1 !important;\"]}","{\"selector\":\"body.no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"body > main\",\"action\":[\"style\",\"padding-left: unset !important;\"]}\n{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0!important;\"]}","{\"selector\":\"ul.app-features\",\"action\":[\"style\",\"margin-top: 0!important;\"]}","{\"selector\":\".header[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".yildiz-pageskin #header\",\"action\":[\"style\",\"margin: 0 auto 0px auto !important;\"]}","{\"selector\":\".tab-embed\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}","{\"selector\":\"html.uk-modal-page > body\",\"action\":[\"style\",\"overflow: auto !important;\"]}\n{\"selector\":\"html.uk-modal-page\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"body > .orta:not([style*=\\\"margin-top:\\\"])\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}\n{\"selector\":\"div.duyuru-izle.duyuru-izle\",\"action\":[\"style\",\"margin-top: 20px !important;\"]}\n{\"selector\":\"div.orta.izle[style^=\\\"margin-top:\\\"]:not(#style_important)\",\"action\":[\"style\",\"margin-top: 180px !important;\"]}\n{\"selector\":\"div.orta[style^=\\\"margin-top:\\\"]:not(.izle)\",\"action\":[\"style\",\"margin-top: 131px !important;\"]}","{\"selector\":\"#header2\",\"action\":[\"style\",\"height: 100px !important;\"]}","{\"selector\":\".topBanner + header\",\"action\":[\"style\",\"top: 0 !important;\"]}\n{\"selector\":\".topBanner\",\"action\":[\"style\",\"top: -50px !important;\"]}\n{\"selector\":\"body > div[class^=\\\"sfv_\\\"] > div[id]\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important; padding-right: 0 !important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"#videos\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\".banner\",\"action\":[\"style\",\"visibility: hidden !important; height: 150px !important;\"]}","{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible !important; padding-right: 0 !important;\"]}","{\"selector\":\"#galleryContent\",\"action\":[\"style\",\"visibility: visible!important;\"]}","{\"selector\":\".videoAdBlock > div.content\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}","{\"selector\":\".samBackground[style]\",\"action\":[\"style\",\"background-image: none!important;\"]}\n{\"selector\":\".td-background-link #td-outer-wrap\",\"action\":[\"style\",\"cursor: auto !important;\"]}\n{\"selector\":\".x-root\",\"action\":[\"style\",\"background-image: none !important;\"]}\n{\"selector\":\"body > #x-root\",\"action\":[\"style\",\"background-image: none!important;\"]}\n{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none!important;\"]}\n{\"selector\":\"body.td-ad-background-link #td-outer-wrap\",\"action\":[\"style\",\"cursor: auto!important;\"]}\n{\"selector\":\"body.td-ad-background-link\",\"action\":[\"style\",\"background-image: none!important;\"]}","{\"selector\":\"#header\",\"action\":[\"style\",\"height: 0px !important;\"]}","{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}","{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0!important;\"]}","{\"selector\":\".Banner\",\"action\":[\"style\",\"border: none !important;\"]}\n{\"selector\":\"a[href$=\\\"#ReklamRezervasyon\\\"]\",\"action\":[\"style\",\"visibility:hidden !important;\"]}","{\"selector\":\".tbanner\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"#dinami\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"div[class^=\\\"adv-\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\"div > a[href][target=\\\"_blank\\\"][style*=\\\"display: flex !important;\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"center > div > a[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".tepe-banner\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body.has-mtsnb[style^=\\\"padding-top:\\\"]\",\"action\":[\"style\",\"padding-top: 0!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"#solust\",\"action\":[\"style\",\"position: static!important;\"]}","{\"selector\":\"#menuBG.sabitle\",\"action\":[\"style\",\"top: 0!important;\"]}","{\"selector\":\"#head > .menu-bar.cloned\",\"action\":[\"style\",\"top: 0!important;\"]}","{\"selector\":\".previd-link\",\"action\":[\"style\",\"visibility: hidden!important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -10000px!important;\"]}","{\"selector\":\"#mvp-site-main\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".in-view-ads\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height:1px!important;\"]}","{\"selector\":\".top-banner-wrapper\",\"action\":[\"style\",\"padding: 1px!important; background-color: #007fc5!important;\"]}","{\"selector\":\".sayfafull.uzat > .ie-navigasyon + .soltaraf\",\"action\":[\"style\",\"width:calc(100% - 290px)!important;\"]}\n{\"selector\":\".sayfafull.uzat > .soltaraf\",\"action\":[\"style\",\"width:calc(100% - 253px)!important;\"]}\n{\"selector\":\".soltaraf\",\"action\":[\"style\",\"width: calc(100%)!important;\"]}","{\"selector\":\".min-height-at-index\",\"action\":[\"style\",\"height: 144px!important;\"]}","{\"selector\":\".with-popup\",\"action\":[\"style\",\"overflow: visible!important;\"]}\n{\"selector\":\"body.with-bg\",\"action\":[\"style\",\"padding-top: 0!important;\"]}","{\"selector\":\"header.advertControlArea\",\"action\":[\"style\",\"top: 0!important;\"]}","{\"selector\":\"#player-has-ads\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".card-video\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"html > body\",\"action\":[\"style\",\"background-image: none !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; background-color: #171717 !important;\"]}","{\"selector\":\".embed-responsive\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#content.container\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\".fancybox-lock body\",\"action\":[\"style\",\"overflow: auto !important;\"]}\n{\"selector\":\".fancybox-lock\",\"action\":[\"style\",\"overflow: auto !important; margin-right: unset !important;\"]}","{\"selector\":\"main.content-index\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\".video-content > div.ads\",\"action\":[\"style\",\"height: 0 !important; visibility: hidden !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important; background-image: none !important;\"]}","{\"selector\":\"#main\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"#video > div#videos\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".container\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"div[id=\\\"episode\\\"][style]\",\"action\":[\"style\",\"height: unset !important; width: unset !important; overflow: unset !important; position: unset !important;\"]}","{\"selector\":\".embed-col.ikinci\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#cn-content\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#videos\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".tab-embed\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".video-content\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#player\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#episode\",\"action\":[\"style\",\"height: unset !important; width: unset !important; position: unset !important;\"]}","{\"selector\":\"#reki\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#kendisi\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#film\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".video\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body div#player\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".plyr\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#konu\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#episode\",\"action\":[\"style\",\"height: unset !important; width: unset !important; position: unset !important; overflow: unset !important;\"]}","{\"selector\":\"#cn-content\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"#episode\",\"action\":[\"style\",\"height: auto !important; width: auto !important; overflow: auto !important; position: unset !important;\"]}","{\"selector\":\"#kendisi\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"#iki.oynama\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"#preroll_skip_btn\",\"action\":[\"style\",\"display: block !important;\"]}\n{\"selector\":\".player\",\"action\":[\"style\",\"display: block !important;\"]}\n{\"selector\":\"body > main#wrapper\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body #site\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\".table-area\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"body > header\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\".player-poster\",\"action\":[\"style\",\"background-image: none !important;\"]}"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,-12,93,13,14,-14,41,-14,51,15,16,17,-18,94,-19,94,20,21,-21,121,-22,-23,94,22,-24,94,25,26,27,28,29,30,31,-32,40,33,34,35,36,37,38,-39,94,-40,108,40,42,43,44,45,46,47,48,-49,110,50,-51,114,-51,127,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,94,95,-95,108,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,115,116,117,118,119,120,122,123,124,125,126,128,129,130];
const hostnamesMap = new Map([["menufiyatlari.com.tr",1],["akillikafa.com",2],["kazanimtestleri.com.tr",2],["turkishairforce.org",3],["degisimmedya.com",3],["karadenizgazete.com.tr",3],["mangaship.net",4],["boxofficeturkiye.com",5],["iddaaorantahmin.com",6],["fontyukle.net",7],["cadcamsektoru.com",8],["osxinfo.net",9],["blogkafem.net",10],["baho.com.tr",11],["dizipal840.com",12],["dizipal740.com",12],["dizipal739.com",12],["dizipal1.cloud",13],["dizipal2.cloud",13],["dizipal4.cloud",13],["dizipal5.cloud",13],["dizipal9.cloud",13],["dizipal10.cloud",13],["dizipal11.cloud",13],["dizipal12.cloud",13],["dizipal14.cloud",13],["dizipal37.cloud",13],["dizipal39.cloud",13],["dizipal43.cloud",13],["dizipal45.cloud",13],["dizipal47.cloud",13],["dizipal48.cloud",13],["dizipal54.cloud",13],["dizipal58.cloud",13],["dizipal59.cloud",13],["dizipal60.cloud",13],["dizipal61.cloud",13],["dizipal67.cloud",13],["dizipal73.cloud",13],["dizipal74.cloud",13],["dizipal132.cloud",13],["dizipal133.cloud",13],["dizipal134.cloud",13],["dizipal135.cloud",13],["dizipal140.cloud",13],["webdramaturkey.*",15],["dizikorea.*",16],["dizitime.*",17],["filmmakinesi.*",19],["sinema.cx",21],["diziyo.*",22],["setfilmizleyin.com",22],["hdfilmizle.site",22],["dizigom1.tv",23],["filmizlehdfilm.com",24],["jetfilmizle.*",26],["sezonlukdizi6.com",28],["dizimom.*",29],["filmizlesene.*",30],["hdfilmcehennemi.*",32],["sinefy3.com",35],["filmzal.*",35],["hdfilmizlesene.org",36],["webtekno.com",38],["fullfilmizlesene.net",39],["coin-turk.com",40],["fullhdfilm.*",41],["dizimom.tv",42],["asyadiziizle.com",42],["canlidizi6.org",42],["sinemalar.com",43],["popsci.com.tr",44],["itemci.com",45],["hdfilmizleamk.*",47],["mackolik.com",48],["neskici.com",49],["dizimodu.com",49],["dizifilmbox.*",50],["apara.com.tr",51],["yenisafak.com",52],["fullhdfilmizle.*",53],["1080pizle.net",55],["kizlarsoruyor.com",57],["gazetevatan.com",58],["radyofenomen.com",59],["gratis.com",60],["turkce-brosurler.com",61],["r10.net",62],["tamindir.com",63],["tarsusakdeniz.com",64],["sinefilmizlesen.com",65],["kelebekfilmizlee.com",67],["fullhdizle.*",68],["webteizle.xyz",70],["webteizle1.xyz",70],["webteizle2.xyz",70],["webteizle3.xyz",70],["webteizle4.xyz",70],["webteizle5.xyz",70],["webteizle6.xyz",70],["webteizle7.xyz",70],["webteizle8.xyz",70],["webteizle9.xyz",70],["webteizle10.xyz",70],["webteizle.click",70],["webteizle1.click",70],["webteizle2.click",70],["webteizle3.click",70],["webteizle4.click",70],["webteizle5.click",70],["webteizle6.click",70],["webteizle7.click",70],["webteizle8.click",70],["webteizle9.click",70],["webteizle10.click",70],["webteizle3.com",70],["webteizle4.com",70],["webteizle5.com",70],["webteizle6.com",70],["webteizle7.com",70],["webteizle8.com",70],["webteizle9.com",70],["webteizle10.com",70],["webteizle.info",70],["webteizle1.info",70],["webteizle2.info",70],["webteizle3.info",70],["webteizle4.info",70],["webteizle5.info",70],["webteizle6.info",70],["webteizle7.info",70],["webteizle8.info",70],["webteizle9.info",70],["webteizle10.info",70],["selcuksportshdamp5.xyz",72],["selcuksportshd78.biz",72],["ssport.tv",73],["fullhdfilmizlesene.*",74],["altinpiyasa.com",75],["akakce.com",76],["besiktas.com.tr",77],["dizimax2.com",77],["61saat.com",78],["esgundem26.com",78],["jurnalci.com",79],["eroticpub.com",80],["kriptoarena.com",81],["eskisehirekspres.net",82],["karaman24.com",82],["haberlisin.com",82],["eskisehirhaber.com",82],["halk54.com",82],["sonsaat.com.tr",83],["mobeseizle.net",84],["haberintakasi.com",85],["technopat.net",86],["ademyurt.com",87],["haber61.net",88],["mygaziantep.com",89],["aydinpost.com",89],["tercihrobotu.com.tr",90],["motosiklet.net",91],["tr.link",92],["muud.com.tr",93],["ceptenmuzikindir.me",94],["mp3indirhane.com",94],["filmindir.be",95],["evrensel.net",96],["bilgenc.com",97],["trabzonhaber24.com",98],["forum.turkmmo.com",98],["cazkolik.com",99],["61medya.net",100],["finansgundem.com",101],["tranimeizle.*",102],["teknoblog.com",103],["ucuzaucak.net",103],["piyasaanketi.com",103],["birgun.net",104],["sanayigazetesi.com.tr",105],["fanatik.com.tr",106],["altin.in",107],["t24.com.tr",108],["forum.donanimhaber.com",109],["arabam.com",110],["cumhuriyet.com.tr",111],["sabah.com.tr",112],["fullhddizifilmizle2.net",113],["fullhddizifilmizle3.net",113],["fullhddizifilmizle4.net",113],["fullhddizifilmizle5.net",113],["contentx.me",114],["siyahfilmizle.*",114],["fullhdfilmizlesenebox.org",114],["pchocasi.com.tr",114],["dizilab9.*",114],["dizilab8.*",114],["fullhdfilmizletv.*",114],["filmizletv.*",114],["turkcealtyazi.org",114],["hdfilmcehennemi.so",115],["izlehdfilm.net",116],["filmmodu.io",118],["tranimaci.com",119],["nesine.com",120],["cepteteb.com.tr",121],["elle.com.tr",122],["filmerotikizle.com",123],["fullfilmizle.cc",124],["koinfinans.com",125],["filmgo.org",126],["4kfilmizlesene.*",127],["moonfilmizle.com",128],["webdramaturkey.com",129],["dizirella.com",130],["burcufilm.com",130],["filmizlersin.com",130],["fulltimehdfilmizle.*",130],["fullfilmizle.*",130],["tekparthdfilmizle.com",130],["sinekolik.com",131],["hdizlefilmleri.com",131],["safirfilmizle1.com",132],["filmkuzusu1.com",132],["hdfreeizle.com",133],["superfilmgeldi.net",133],["hdmixfilim.com",133],["elzemfilm.org",134],["dizicaps.*",134],["sexfilmleriizle.com",134],["goodfilmizle.com",135],["fullhdfilmizle.vip",136],["fullhdfilmmodu2.*",136],["filmizle5.org",136],["filmizle6.org",136],["filmizle7.org",136],["filmizle8.org",136],["filmizle9.org",136],["filmizle10.org",136],["filmizle11.org",136],["filmizle12.org",136],["filmizle13.org",136],["filmizle14.org",136],["filmizle15.org",136],["filmizle16.org",136],["filmizle17.org",136],["filmizle18.org",136],["filmizle19.org",136],["filmizle20.org",136],["filmizle21.org",136],["filmizle22.org",136],["filmizle23.org",136],["filmizle24.org",136],["filmizle25.org",136],["hdfilmcanavari.org",137],["fullhdfilmizleabi.com",137],["fullhd720pizle.live",138],["erotikfilmtube.com",139],["sinemia.org",140],["filmmodu.co",140],["filmsezonu.com",141],["kultfilmler.com",142],["filmmoduu.com",143],["hdfilmizle.org",143],["hdfilmcehennem.live",144],["oyunu.com.tr",145],["yabancidizi.*",146],["xyzsports173.xyz",147],["xyzsports174.xyz",147],["xyzsports175.xyz",147],["xyzsports176.xyz",147],["xyzsports177.xyz",147],["xyzsports178.xyz",147],["xyzsports179.xyz",147],["xyzsports180.xyz",147],["xyzsports181.xyz",147],["xyzsports182.xyz",147],["xyzsports183.xyz",147],["xyzsports184.xyz",147],["xyzsports185.xyz",147],["xyzsports186.xyz",147],["xyzsports187.xyz",147],["xyzsports188.xyz",147],["xyzsports189.xyz",147],["xyzsports190.xyz",147],["xyzsports191.xyz",147],["xyzsports192.xyz",147],["xyzsports193.xyz",147],["xyzsports194.xyz",147],["xyzsports195.xyz",147],["xyzsports196.xyz",147],["xyzsports197.xyz",147],["xyzsports198.xyz",147],["xyzsports199.xyz",147],["xyzsports200.xyz",147],["ugurfilm7.com",148],["ugurfilm8.com",148],["ugurfilm9.com",148],["ugurfilm10.com",148],["ugurfilm11.com",148],["ugurfilm12.com",148],["ugurfilm13.com",148],["ugurfilm14.com",148],["ugurfilm15.com",148],["ugurfilm16.com",148],["trgoals967.xyz",149],["trgoals968.xyz",149],["trgoals969.xyz",149],["trgoals970.xyz",149],["trgoals971.xyz",149],["trgoals972.xyz",149],["trgoals973.xyz",149],["trgoals974.xyz",149],["trgoals975.xyz",149],["trgoals976.xyz",149],["trgoals977.xyz",149],["trgoals978.xyz",149],["trgoals979.xyz",149],["trgoals980.xyz",149],["trgoals981.xyz",149],["trgoals982.xyz",149],["trgoals983.xyz",149],["trgoals984.xyz",149],["trgoals985.xyz",149],["trgoals986.xyz",149],["trgoals987.xyz",149],["trgoals988.xyz",149],["trgoals989.xyz",149],["trgoals990.xyz",149],["trgoals991.xyz",149],["trgoals992.xyz",149],["trgoals993.xyz",149],["trgoals994.xyz",149],["trgoals995.xyz",149],["trgoals996.xyz",149],["trgoals997.xyz",149],["trgoals998.xyz",149],["trgoals999.xyz",149],["trgoals1000.xyz",149],["trgoals1001.xyz",149],["trgoals1002.xyz",149],["trgoals1003.xyz",149],["trgoals1004.xyz",149],["trgoals1005.xyz",149],["trgoals1006.xyz",149],["trgoals1007.xyz",149],["trgoals1008.xyz",149],["trgoals1009.xyz",149],["trgoals1010.xyz",149]]);
const hasEntities = true;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
