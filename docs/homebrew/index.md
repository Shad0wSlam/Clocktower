---
layout: default
title: "Homebrews"
permalink: /homebrew
---

<link rel="stylesheet" href="{{ '/assets/css/overview.css' | relative_url }}">

<div class="category-filters">
  <button class="filter-btn active" data-category="all">All</button>
  {% for group in site.data.homebrew %}
    <button class="filter-btn" data-category="{{ group.group | downcase }}">{{ group.plural }}</button>
  {% endfor %}
</div>

{% for group in site.data.homebrew %}
  <div class="character-grid-wrapper" data-category="{{ group.group | downcase }}">
    <div class="character-category">{{ group.plural }}</div>
    <div class="character-grid">
      {% for member in group.members %}
        <div class="character-card" data-charid="{{ member.id }}">
          <a href="{{ '/homebrew/' | append: member.id | relative_url }}">
            <div class="character-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/Shad0wSlam/Clocktower/main/tokens/homebrew/{{ group.group | downcase }}/{{ member.id }}.png"
                alt="{{ member.name }}"
                class="character-icon"
              >
            </div>
            <div class="character-name">{{ member.name }}</div>
          </a>
          <div class="character-tooltip" style="display:none">{{ member.name }}</div>
        </div>
      {% endfor %}
    </div>
  </div>
{% endfor %}
<!-- 
<script>
document.addEventListener("DOMContentLoaded", () => {
  const HEADER_HEIGHT = 110; // adjust to match your header height

  // === Create a single reusable tooltip element for all cards/links ===
const tooltipEl = document.createElement('div');
tooltipEl.className = 'character-tooltip-body';
tooltipEl.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
document.body.appendChild(tooltipEl);


  // === Helper function to show tooltip at correct position ===
  function showTooltip(target, text) {
    tooltipEl.textContent = text;

    const rect = target.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const tooltipHeight = tooltipEl.offsetHeight;
    const viewportHeight = window.innerHeight;

    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top - HEADER_HEIGHT;
    const position = spaceBelow >= tooltipHeight + 10 ? 'bottom' : 'top';

    tooltipEl.style.left = `${rect.left + rect.width / 2}px`;

    if (position === 'bottom') {
      tooltipEl.style.top = `${rect.bottom + 5 + scrollY}px`;
      tooltipEl.style.transform = 'translateX(-50%) translateY(-8px)';
    } else {
      tooltipEl.style.top = `${rect.top - tooltipHeight - 5 + scrollY}px`;
      tooltipEl.style.transform = 'translateX(-50%) translateY(-8px)';
    }

    tooltipEl.style.opacity = '0';
    requestAnimationFrame(() => {
      tooltipEl.style.opacity = '1';
      tooltipEl.style.transform = 'translateX(-50%) translateY(0)';
    });
  }

  function hideTooltip() {
    tooltipEl.style.opacity = '0';
    tooltipEl.style.transform = 'translateX(-50%) translateY(-8px)';
  }

  // === Character link tooltips (existing system) ===
  document.querySelectorAll('.character-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      const abilityText = link.dataset.ability || 'Ability not found';
      showTooltip(link, abilityText);
    });
    link.addEventListener('mouseleave', hideTooltip);
  });

  // === Character card tooltips (new unified system) ===
  fetch("https://raw.githubusercontent.com/Shad0wSlam/Clocktower/main/libraries/shadowslam_homebrew.json")
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('.character-card').forEach(card => {
        const id = card.dataset.charid + "_shadowslam";
        const charData = data.find(c => c.id === id);
        const tooltipText = charData?.ability || "Ability not found.";

        card.addEventListener('mouseenter', () => showTooltip(card, tooltipText));
        card.addEventListener('mouseleave', hideTooltip);
      });
    })
    .catch(err => console.error("Failed to load ability data:", err));
});
</script> -->

