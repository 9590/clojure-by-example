!function(e){"use strict";function t(){$("h1, h2").each(function(){var e=$(this),t=e.nextUntil("h1, h2");c.add({id:e.prop("id"),title:e.text(),body:t.text()})})}function n(){a=$(".content"),h=$(".dark-box"),o=$(".search-results"),$("#input-search").on("keyup",i)}function i(e){if(r(),o.addClass("visible"),27===e.keyCode&&(this.value=""),this.value){var t=c.search(this.value).filter(function(e){return e.score>1e-4});t.length?(o.empty(),$.each(t,function(e,t){var n=document.getElementById(t.ref);o.append("<li><a href='#"+t.ref+"'>"+$(n).text()+"</a></li>")}),s.call(this)):(o.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else r(),o.removeClass("visible")}function s(){this.value&&a.highlight(this.value,l)}function r(){a.unhighlight(l)}var a,h,o,l=($(e),{element:"span",className:"search-highlight"}),c=new lunr.Index;c.ref("id"),c.field("title",{boost:10}),c.field("body"),c.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(t),$(n)}(window);