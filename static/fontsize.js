/* 
* @Author: Marte
* @Date:   2017-03-14 13:14:31
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-14 13:19:54
*/

;(function (doc, win, undefined) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
recalc = function () {
var clientWidth = docEl.clientWidth;
if (clientWidth === undefined) return;
    docEl.style.fontSize =  clientWidth / 3.75 + 'px';
};
if (doc.addEventListener === undefined) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);