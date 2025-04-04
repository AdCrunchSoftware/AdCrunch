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

// ruleset: deu-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["",["{\"selector\":\".footnote\",\"tasks\":[[\"has\",{\"selector\":\".headline-box\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".module.c1.hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"span.issuerPromotionHint\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.suffix.wo-inline-block.pull-right\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.wo-inline-block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".sliderItem.active\",\"tasks\":[[\"has\",{\"selector\":\"span.news-item:has(img[alt=\\\"Anzeige\\\"])\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td.right:has(img[alt=\\\"Anzeige\\\"])\"}]]}"],["{\"selector\":\"#ContainerFull\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.elementor-heading-title\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"span.username\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has-text\",\"Werbung\"]]}"],["{\"selector\":\".avgrid_1_of_1.viewlet-bottom\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertorials\"]]}]]}","{\"selector\":\".gridteaser.gridteaser-m\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\".cm-post-widget-three.cm-post-widget-section\",\"tasks\":[[\"has\",{\"selector\":\".section-title\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\"div[data-testid=\\\"card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span.MuiCardHeader-title\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"div[data-testid=\\\"reco-wrapper\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"indexesm__HeadlineElement-fragment-product-master__\\\"]\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}"],["{\"selector\":\".eight.columns.alpha.content\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".m-teaser\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".m-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".row.block03\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZEIGE|Anzeige|Werbung|WERBUNG/\"]]}]]}"],["{\"selector\":\".post-overview\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.YzqVVZ\",\"tasks\":[[\"has\",{\"selector\":\"span.wixui-rich-text__text\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\"div.text-asset.text-width\",\"tasks\":[[\"has\",{\"selector\":\"p.text-width\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.gridArea__teaserM\",\"tasks\":[[\"has\",{\"selector\":\"div.teaserBlock__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Anzeige\"],[\"spath\",\" > strong > a[target=\\\"_blank\\\"][rel=\\\"noopener\\\"] > picture\"]]}"],["{\"selector\":\".node.teaser\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".b-module\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}","{\"selector\":\".mfe-lex\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\".node--article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"ANZEIGEN\"]]}]]}"],["{\"selector\":\".mleft-10\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box\"]]}","{\"selector\":\".mleft-10.small-font.light-grey\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box + .border-blue-2\"]]}"],["{\"selector\":\"article[id^=\\\"teaser-\\\"][data-placement]\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".col4\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Unterstützt durch:\"]]}]]}"],["{\"selector\":\".content-item-medium\",\"tasks\":[[\"has\",{\"selector\":\"data\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".content-item-small\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".contentnewsitem-box .box-reload .news-list\",\"tasks\":[[\"has\",{\"selector\":\"span.media-heading\",\"tasks\":[[\"has-text\",\"[Anzeige]\"]]}]]}","{\"selector\":\".contentnewsitem-box .box-reload > div\",\"tasks\":[[\"has\",{\"selector\":\".news-list span.media-heading\",\"tasks\":[[\"has-text\",\"[Anzeige]\"]]}],[\"spath\",\" + hr\"]]}"],["{\"selector\":\".alice-teaser-list-item\",\"tasks\":[[\"has\",{\"selector\":\".alice-teaser-meta-text\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}","{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}"],["{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Native Advertising\"]]}","{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Publireportage\"]]}"],["{\"selector\":\".bg-gray-light\",\"tasks\":[[\"has\",{\"selector\":\"div.text-right\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".px-4.md\\\\:px-6.py-3.h-full.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\".mb-3.text-xs.leading-none.text-center\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ende===\"]]}"],["{\"selector\":\"form\",\"tasks\":[[\"has\",{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Download\"]]}]]}"],["{\"selector\":\".swiper\",\"tasks\":[[\"has\",{\"selector\":\".headline\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\".custom\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div[data-test=\\\"whisperer-product-wrapper\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".gb-container\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"article[class^=\\\"dvs-ad-tyblqtres-uno\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}","{\"selector\":\"div[class^=\\\"dvbloqbasic\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".small-12.column\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"+ span\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".appetizer\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}]]}"],["{\"selector\":\"[data-test=\\\"mms-base-teaser\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}","{\"selector\":\"[data-test=\\\"mms-search-flagship-sba\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}","{\"selector\":\"[data-test=\\\"mms-search-showcase\\\"] + div\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has-text\",\"- Werbung -\"]]}"],["{\"selector\":\".sp-module\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Kleinanzeigen\"]]}]]}"],["{\"selector\":\"[data-testid=\\\"home-brand-portal-section-container\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".teaser_container.teaser-htmlcode.relative.row\",\"tasks\":[[\"has\",{\"selector\":\".f1de-container-title\",\"tasks\":[[\"has-text\",\"Die besten Leasing-Deals\"]]}]]}"],["{\"selector\":\".introa_news\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".moduletable.text-center\",\"tasks\":[[\"has\",{\"selector\":\".bildunterschrift\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".card-body\",\"tasks\":[[\"has-text\",\"Sponsoren\"]]}"],["{\"selector\":\".outer-spacing--xxlarge-top\",\"tasks\":[[\"has-text\",\"Werbung von\"]]}","{\"selector\":\"a[class*=\\\"ArticleTeaserBox\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div.ov-subline\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".list_item\",\"tasks\":[[\"has\",{\"selector\":\".dachzeile\",\"tasks\":[[\"has-text\",\"Partnerzone\"]]}]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"span.banner-text + h4\",\"tasks\":[[\"has-text\",\"/Partner-Angebot|Angebote/\"]]}]]}"],["{\"selector\":\".services-item\",\"tasks\":[[\"has-text\",\"bei Amazon\"]]}"],["{\"selector\":\".postlist-item\",\"tasks\":[[\"has\",{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".content-view-containerbox\",\"tasks\":[[\"has-text\",\"SONDER-VERÖFFENTLICHUNG\"]]}"],["{\"selector\":\".fc_bloglist_item\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".mod_flexicontent_standard_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".moduletable\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"[data-qa-id=\\\"result-list-entry\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-author-name\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".text-right.text-white.col-6\",\"tasks\":[[\"has-text\",\"präsentiert von\"]]}"],["{\"selector\":\".jeg_post.jeg_pl_md_2.pr.format-standard\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PR-INFO\"]]}]]}"],["{\"selector\":\".afl-widget-root\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Beliebt bei t-online\"]]}]]}"],["{\"selector\":\"div[id^=\\\"T-\\\"][onfocus^=\\\"A('zid=\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.article-tile\",\"tasks\":[[\"has\",{\"selector\":\"span.article-tile__badge2\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\"div[id^=\\\"gridSuche_panRecord_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[id^=\\\"gridSuche_lblUrl_\\\"]\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".small-12.column.space\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"--Anzeige--\"]]}]]}"],["{\"selector\":\".artikel-preview-content\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"-ANZEIGE-\"]]}]]}"],["{\"selector\":\"div[id][data-qa]\",\"tasks\":[[\"has\",{\"selector\":\".c-buelent-linkbox__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.ExtraPostBlock\",\"tasks\":[[\"has\",{\"selector\":\"div.post_block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}],[\"spath\",\":not(.with_rep)\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + button\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\".dlcharts + div:not(.List)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ft-charts-main > div:not(.List):not(.caps)\",\"action\":[\"remove\",\"\"]}"]];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,-42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,-64,65,65,66,67,68,69,70,71,72,73,74];
const hostnamesMap = new Map([["wallstreet-online.de",1],["stol.it",2],["alles-mahlsdorf.de",3],["android-hilfe.de",4],["apfeltalk.de",5],["avguide.ch",6],["back-intern.de",7],["baur.de",8],["bergsteiger.de",9],["berliner-kurier.de",10],["berliner-zeitung.de",11],["berlinstadtservice.de",12],["bitreporter.de",13],["carpediem.life",14],["celleheute.de",15],["computerbase.de",16],["computerbild.de",17],["cyclingmagazine.de",18],["dkamera.de",19],["ebay.de",20],["emotion.de",21],["fazemag.de",22],["finanzen.net",23],["focus.de",24],["games.ch",25],["gamestar.de",26],["giga.de",27],["gofeminin.de",28],["handelszeitung.ch",29],["hardwareluxx.de",30],["heise.de",31],["ibooks.to",32],["imsueden.de",33],["kajak-magazin.com",34],["knuspr.de",35],["koeln.de",36],["la-palma24.info",37],["lausitz-tv.de",38],["lessentiel.lu",39],["linkedin.com",40],["marbacher-zeitung.de",41],["mediamarkt.at",42],["mediamarkt.de",43],["saturn.de",42],["meissen-fernsehen.de",45],["mmnews.de",46],["mobile.de",47],["motorsport-total.com",48],["notebookcheck.com",49],["nur-positive-nachrichten.de",50],["o-sport.de",51],["onvista.de",52],["pctipp.ch",53],["pcwelt.de",54],["pollenflug.de",55],["produktion.de",56],["report-d.de",57],["satvision.de",58],["seo-suedwest.de",59],["shop-apotheke.at",60],["skodacommunity.de",61],["smartphonemag.de",62],["sportdeutschland.tv",63],["swz.it",64],["t-online.de",65],["www-t--online-de.cdn.ampproject.org",67],["tag24.de",68],["tiger.ch",69],["tonight.de",70],["um-tv.de",71],["unicum.de",72],["welt.de",73],["winfuture-forum.de",74],["zentrum-der-gesundheit.de",75],["chip.de",76]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
