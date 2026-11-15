---
layout: page
title: Writing
permalink: /writing/
---

<p class="page-intro">Thoughts on growth, service, building, and the work of becoming better one day at a time.</p>

{% assign archive = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
<nav class="archive-nav" aria-label="Browse writing by year">
  <span>Browse by year</span>
  <ul>
    {% for year in archive %}
      <li><a href="#writing-{{ year.name }}">{{ year.name }}</a></li>
    {% endfor %}
  </ul>
</nav>

{% for year in archive %}
<section class="archive-year" aria-labelledby="writing-{{ year.name }}">
  <h2 id="writing-{{ year.name }}">{{ year.name }}</h2>
  <div class="card-grid">
    {% for post in year.items %}
      {% include post-card.html post=post %}
    {% endfor %}
  </div>
</section>
{% endfor %}