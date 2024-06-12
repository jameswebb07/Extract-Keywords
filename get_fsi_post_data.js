javascript:(function() {
    // Extract title from <h1> element
    var h1Element = document.querySelector('h1');
    var title = h1Element ? h1Element.textContent.trim() : '';

    // Extract contentURL from meta tags
    var contentURLMeta = document.querySelector('meta[itemprop="contentURL"]');
    var media_url = contentURLMeta ? contentURLMeta.content : '';

    // Extract identifier from script tags
    var identifierScript = document.querySelector('script');
    var identifierMatch = identifierScript ? identifierScript.textContent.match(/this\.page\.identifier\s*=\s*(\d+)/) : null;
    var identifier = identifierMatch ? identifierMatch[1] : '';

    // Extract description from meta tags
    var descriptionMeta = document.querySelector('meta[name="description"]');
    var description_one_line = descriptionMeta ? descriptionMeta.content : '';

    // Extract all paragraph text from <p> elements
    var paragraphElements = document.querySelectorAll('p');
    var description_paragraph = Array.from(paragraphElements).map(p => p.textContent.trim()).join('\n');

    // Extract tags from <a> elements
    var tagElements = document.querySelectorAll('a.elementor-post-info__terms-list-item[href*="/category/"], a.elementor-post-info__terms-list-item[href*="/tag/"]');
    var tags = Array.from(tagElements).map(a => a.textContent.trim()).join(', ');

    // Extract thumbnail URL from meta tags
    var thumbnailMeta = document.querySelector('meta[property="og:image"]');
    var thumb = thumbnailMeta ? thumbnailMeta.content : '';

    // Log the extracted data
    var data = {
        title: title,
        url: media_url,
        permalink: window.location.href,
        id: identifier,
        description_one_line: description_one_line,
        description_paragraph: description_paragraph,
        tags: tags,
        thumb: thumb
    };
    console.log(data);
})();
