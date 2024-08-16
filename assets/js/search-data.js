---
layout: null
sitemap: false
---

var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp: 'doc', 'doc.search != false' -%}
    {%- for doc in docs -%}
      {
        "title": {{ doc.title | jsonify }},
        "excerpt":
          {%- if site.search_full_content == true -%}
          {{ doc.content | 
            replace:"</p>", " " | 
            replace:"</h1>", " " | 
            replace:"</h2>", " " | 
            replace:"</h3>", " " | 
            replace:"</h4>", " " | 
            replace:"</h5>", " " | 
            replace:"</h6>", " "|
          strip_html | strip_newlines | jsonify }},
        {%- else -%}
          {{ doc.content | 
            replace:"</p>", " " | 
            replace:"</h1>", " " | 
            replace:"</h2>", " " | 
            replace:"</h3>", " " | 
            replace:"</h4>", " " | 
            replace:"</h5>", " " | 
            replace:"</h6>", " "|
           strip_html | strip_newlines | truncatewords: 50 | jsonify }},
        {%- endif -%}
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }}
      } {%- unless forloop.last and l -%}, {%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}
];

$(document).ready(function () {
  var siteBaseurl = '/pasta-piracy';

  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if (query.lastIndexOf(" ") != query.length - 1) {
            q.term(term, { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != "") {
            q.term(term, { usePipeline: false, editDistance: 1, boost: 1 })
          }
        });
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">' + result.length + ' result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      var itemUrl = store[ref].url;

      // Ensure correct base URL is used for search result links on GitHub Pages
      if (window.location.hostname === "danetuso.github.io") {
        itemUrl = siteBaseurl + itemUrl;
      }

      var searchitem =
        '<article class="entry">' +
        '<h3 class="entry-title">' +
        '<a href="' + itemUrl + '">' + store[ref].title + '</a>' +
        '</h3>' +
        '<div class="entry-excerpt">' +
        '<p>' + store[ref].excerpt.split(" ").splice(0, 20).join(" ") + '...</p>' +
        '</div>' +
        '</article>';
      resultdiv.append(searchitem);
    }
  });
});
