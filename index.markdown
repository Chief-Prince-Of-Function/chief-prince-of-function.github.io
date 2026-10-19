---
layout: home
title: Home
description: Service, useful tools, and time outdoors. The personal home of Michael Fusco.
---

<section class="hero">
  <div class="wrap hero__content">
    <div class="hero-text">
      <p class="eyebrow">Long Island, New York · A life in progress</p>
      <h1>Service. Craft.<br><em>A little time outside.</em></h1>
      <p class="lead">I’m Michael Fusco. Husband, father, Coast Guard veteran, nonprofit founder, and hands-on builder.</p>
      <p>I care about bringing people together and making useful things. Sometimes that’s an app. Sometimes it’s a better way to get work done. And sometimes it starts with a fly rod and a day on the water.</p>
      <div class="cta-row">
        <a class="button button--primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
        <a class="button button--secondary" href="{{ '/about/' | relative_url }}">A bit about me</a>
      </div>
    </div>
    <figure class="hero-image">
      <div class="portrait-frame"><img src="{{ '/pfp.jpg' | relative_url }}" alt="Michael Fusco" fetchpriority="high"></div>
      <figcaption><span class="small-label">The person behind the projects</span>Grounded in family. Guided by service.</figcaption>
    </figure>
  </div>
  <div class="wrap hero-bottom"><span>Veteran &amp; nonprofit founder</span><span>Practical tools &amp; field experience</span><span>Always learning. Always building.</span></div>
</section>

<section class="section" id="projects">
  <div class="wrap">
    <div class="section-heading-row"><div><p class="eyebrow">01 / Work with purpose</p><h2>A few things I’m building.</h2></div><p class="section-note">Personal interests, put to work.<br>Real people at the center.</p></div>
    <div class="project-grid">
      {% for project in site.data.projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section experience-section" id="experience">
  <div class="wrap experience-layout">
    <div><p class="eyebrow">02 / Experience that carries forward</p><h2>From the water<br>to the work ahead.</h2><p>My background connects field operations, community service, and practical problem solving. The setting changes. Showing up for people stays the same.</p><a class="text-link" href="https://www.linkedin.com/in/michael-fusco-902030b4/">Connect on LinkedIn <span aria-hidden="true">↗</span></a></div>
    <div class="experience-list">
      <article><span class="experience-marker">01</span><div><p class="small-label">U.S. Coast Guard · 2005–2019</p><h3>Leadership where it matters.</h3><p>Former Chief Boatswain’s Mate, with experience in search and rescue, heavy weather boat operations, training, and leading teams.</p></div></article>
      <article><span class="experience-marker">02</span><div><p class="small-label">Veterans Go Outdoors · Founded 2018</p><h3>Connection through the outdoors.</h3><p>Helping veterans find fellowship and serenity through fly fishing, golf, and shared outdoor experiences.</p></div></article>
      <article><span class="experience-marker">03</span><div><p class="small-label">Apprenticeship &amp; workforce development</p><h3>Helping people build a future.</h3><p>At Merit Apprenticeship Alliance, I help contractors hire and train apprentices through a registered apprenticeship program.</p></div></article>
    </div>
  </div>
</section>

<section class="section" id="off-the-clock">
  <div class="wrap"><p class="eyebrow">03 / Away from the screen</p><h2>There’s more to life than the next project.</h2>
    <div class="interest-grid">
      <article><span class="interest-number">I.</span><h3>On the water</h3><p>Fly fishing, quieter places, and learning something new every time I head out.</p></article>
      <article><span class="interest-number">II.</span><h3>On the course</h3><p>Golf keeps me working on patience, consistency, and enjoying the round in front of me.</p></article>
      <article><span class="interest-number">III.</span><h3>In the workshop</h3><p>Handmade fishing lures, home projects, and the satisfaction of making something useful.</p><a class="text-link" href="https://github.com/Chief-Prince-Of-Function/fusco-lure-lab">Fusco Lure Lab <span aria-hidden="true">↗</span></a></article>
      <article><span class="interest-number">IV.</span><h3>On the page</h3><p>Writing about faith, growth, gratitude, and the questions that stay with me.</p><a class="text-link" href="{{ '/writing/' | relative_url }}">Read my writing <span aria-hidden="true">↗</span></a></article>
    </div>
  </div>
</section>

<section class="section section--tinted" id="writing">
  <div class="wrap"><div class="section-heading-row"><div><p class="eyebrow">04 / Notes along the way</p><h2>From the journal.</h2></div><a class="text-link" href="{{ '/writing/' | relative_url }}">All writing <span aria-hidden="true">↗</span></a></div>
    <div class="card-grid">{% for post in site.posts limit:3 %}{% include post-card.html post=post %}{% endfor %}</div>
  </div>
</section>
