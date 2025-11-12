---
layout: default
title: "Scripts"
permalink: /scripts
---

<link rel="stylesheet" href="{{ '/assets/css/overview.css' | relative_url }}">

<!-- Filter Buttons -->
<div class="category-filters">
  <button class="filter-btn active" data-category="all">All</button>
  {% for group in site.data.scripts %}
    <button class="filter-btn" data-category="{{ group.group | downcase }}">{{ group.group }}</button>
  {% endfor %}
</div>

<!-- Script Grid Sections -->
{% for group in site.data.scripts %}
  <div class="overview-grid-wrapper" data-category="{{ group.group | downcase }}">
    <div class="overview-category">{{ group.group }}</div>
    <div class="overview-grid">
      {% for script in group.scripts %}
        <div class="script-card" data-scriptid="{{ script.id }}">
          <a href="{{ '/script/' | append: script.id | relative_url }}">
            <div class="script-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/Shad0wSlam/Clocktower/main/scripts/logo/{{ script.id }}.png"
                alt="{{ script.name }}"
                class="script-icon"
              >
            </div>
            <div class="script-info">
              <div class="script-name">{{ script.name }}</div>
              <div class="script-tags">
                {% if script.difficulty %}
                    <span class="tag tag-difficulty tag-difficulty-{{ script.difficulty }}">{{ script.difficulty }}</span>
                {% endif %}
                {% if script.type %}
                    <span class="tag tag-type tag-type-{{ script.type }}">{{ script.type }}</span>
                {% endif %}
                </div>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
{% endfor %}

<script>
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gridWrappers = document.querySelectorAll('.overview-grid-wrapper');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      // Toggle active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide grids
      gridWrappers.forEach(wrapper => {
        if (category === 'all' || wrapper.dataset.category === category) {
          wrapper.style.display = 'block';
        } else {
          wrapper.style.display = 'none';
        }
      });
    });
  });
});
</script>
