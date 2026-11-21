---
layout: default
title: Advisors
hero: false
---

<!-- ======= Breadcrumbs ======= -->
<section id="breadcrumbs" class="breadcrumbs">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      <li>About</li>
      <li>Advisors</li>
    </ol>
  </div>
</section><!-- End Breadcrumbs -->

<!-- ======= Team Section ======= -->
<section id="team" class="team">
  <div class="container">
    <div class="row">
      {% for advisor in site.data.advisors %}
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="{{ advisor.image }}" alt="{{ advisor.name }}">
          <h4>{{ advisor.name }}</h4>
          {% if advisor.email %}
          <span>
            <a href="mailto:{{ advisor.email }}">{{ advisor.email }}</a>
          </span>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section><!-- End Team Section -->