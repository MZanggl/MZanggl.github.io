var thread = decodeURI(document.location.hash).substr(1);
              
var disqus_config = function () {
this.page.url = "https://mzanggl.github.io/disqus.html?word="+thread; 
this.page.identifier = thread; 
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://manabichan.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
