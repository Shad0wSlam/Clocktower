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
  <div class="overview-grid-wrapper" data-category="{{ group.group | downcase }}">
    <div class="overview-category">{{ group.plural }}</div>
    <div class="overview-grid">
      {% for member in group.members %}

        {% assign colorClass = "" %}
        {% assign group_lower = group.group | downcase %}
        {% if group_lower == "townsfolk" or group_lower == "outsider" %}
          {% assign colorClass = "char-blue" %}
        {% elsif group_lower == "minion" or group_lower == "demon" %}
          {% assign colorClass = "char-red" %}
        {% elsif group_lower == "traveller" %}
          {% assign colorClass = "char-purple" %}
        {% elsif group_lower == "fabled" %}
          {% assign colorClass = "char-yellow" %}
        {% elsif group_lower == "loric" %}
          {% assign colorClass = "char-green" %}
        {% endif %}

        <div class="character-card" data-charid="{{ member.id }}">
          <a href="{{ '/homebrew/' | append: member.id | relative_url }}">
            <div class="character-image-wrapper">
              <img
                src="https://raw.githubusercontent.com/Shad0wSlam/Clocktower/main/tokens/homebrew/{{ group.group | downcase }}/{{ member.id }}.png"
                alt="{{ member.name }}"
                class="character-icon"
              >
            </div>
            <div class="character-name {{ colorClass }}">{{ member.name }}</div>
          </a>
          <div class="character-tooltip" style="display:none">{{ member.name }}</div>
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
