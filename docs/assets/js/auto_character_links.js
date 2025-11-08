document.addEventListener("DOMContentLoaded", () => {
  // Build a map of character names -> URLs
  const charMap = {};
  
  {% for group in site.data.homebrew %}
    {% for member in group.members %}
      charMap["{{ member.name | escape }}"] = "{{ '/homebrew/' | append: member.id | relative_url }}";
    {% endfor %}
  {% endfor %}

  // Function to replace [[Character Name]] with a link
  function linkCharacters(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;

    while (node = walker.nextNode()) {
      const parent = node.parentNode;
      let text = node.nodeValue;
      let replaced = false;

      // Match [[Character Name]]
      text = text.replace(/\[\[([^\]]+)\]\]/g, (match, charName) => {
        const url = charMap[charName.trim()];
        if (url) {
          replaced = true;
          return `<a href="${url}" class="character-link">${charName}</a>`;
        } else {
          return match; // leave it unchanged
        }
      });

      if (replaced) {
        const span = document.createElement('span');
        span.innerHTML = text;
        parent.replaceChild(span, node);
      }
    }
  }

  // Apply to entire document body
  linkCharacters(document.body);
});
