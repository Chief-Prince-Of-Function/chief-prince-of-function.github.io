---
layout: home
title: Home
---

<section class="hero">
  <div class="wrap hero__content">
    <div class="hero-text">
      <p class="eyebrow">Chief-Prince-Of-Function</p>
      <h1>Building systems and practical tools.</h1>
      <p class="lead">I build real-world apps, dashboards, and operational tools for teams, communities, and day-to-day work in the field.</p>
      <p>I’m Michael Fusco, a veteran, builder, and nonprofit founder focused on useful software and clear execution. This site is where I share projects I have shipped and writing from the path.</p>
      <div class="cta-row">
        <a class="button button--primary" href="#projects">View Projects</a>
      </div>
    </div>

    <div class="hero-image">
      <img src="{{ '/pfp.jpg' | relative_url }}" alt="Portrait of Michael Fusco">
    </div>
  </div>
</section>

<section class="section section--tinted" id="projects">
  <div class="wrap">
    <div class="section-heading-row">
      <h2>Featured Projects</h2>
    </div>
    <div class="projects-layout">
      <div class="card-grid card-grid--featured-row">
        {% for project in site.data.projects %}
          {% if project.featured %}
            {% include project-card.html project=project %}
          {% endif %}
        {% endfor %}
      </div>

      <div class="card-grid card-grid--secondary-row">
        {% for project in site.data.projects %}
          {% unless project.featured %}
            {% include project-card.html project=project %}
          {% endunless %}
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section class="section" id="built-and-shipped">
  <div class="wrap">
    <h2>Built and Shipped</h2>
    <ul class="proof-list">
      <li>Shipped RiverLog as a real, usable app for tracking fishing trips, catches, and decisions on the water.</li>
      <li>Built operational systems and workflows that keep work organized, visible, and moving.</li>
      <li>Worked across field operations, nonprofit leadership, and builder environments where practical tools matter.</li>
    </ul>
  </div>
</section>

<section class="section" id="writing">
  <div class="wrap">
    <div class="section-heading-row">
      <h2>Writing</h2>
      <a class="text-link" href="{{ '/writing/' | relative_url }}">View All Posts</a>
    </div>
    <div class="card-grid">
      {% for post in site.posts limit:3 %}
        {% include post-card.html post=post %}
      {% endfor %}
    </div>
  </div>
</section>
