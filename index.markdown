---
layout: home
title: Home
---

<section class="hero">
  <div class="wrap hero__content">
    <p class="eyebrow">Chief-Prince-Of-Function</p>
    <h1>Michael Fusco</h1>
    <p class="lead">Veteran, builder, nonprofit founder, and aspiring full-stack developer creating useful things with purpose.</p>
    <p>I’m a husband, father, veteran, and hands-on builder focused on meaningful work, thoughtful writing, and practical digital tools. From Veterans Go Outdoors to RiverLog and other projects in development, this site is where I share what I’m building, learning, and refining along the way.</p>
    <div class="cta-row">
      <a class="button button--primary" href="#projects">View Projects</a>
      <a class="button button--secondary" href="{{ '/writing/' | relative_url }}">Read Writing</a>
    </div>
    <p><a class="text-link" href="{{ '/about/' | relative_url }}">Learn More About Me</a></p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>About</h2>
    <p>I’m a veteran, family man, nonprofit founder, and builder learning in public. My work sits at the intersection of service, craftsmanship, technology, and the outdoors.</p>
    <a class="text-link" href="{{ '/about/' | relative_url }}">Read the full story</a>
  </div>
</section>

<section class="section section--tinted" id="projects">
  <div class="wrap">
    <div class="section-heading-row">
      <h2>Featured Projects</h2>
    </div>
    <div class="card-grid">
      {% for project in site.data.projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
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

<section class="section section--accent">
  <div class="wrap">
    <h2>Mission &amp; Values</h2>
    <p>I care about building things that matter—tools that are useful, work that serves others, and a life shaped by faith, family, discipline, and gratitude.</p>
    <ul class="value-list">
      <li>Growth</li>
      <li>Service</li>
      <li>Faith</li>
      <li>Family</li>
      <li>Discipline</li>
      <li>Craftsmanship</li>
    </ul>
  </div>
</section>
