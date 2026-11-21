---
layout: default
title: Board
hero: false
---

<!-- ======= Breadcrumbs ======= -->
<section id="breadcrumbs" class="breadcrumbs">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      <li>About</li>
      <li>Board of Directors</li>
    </ol>
  </div>
</section><!-- End Breadcrumbs -->

<!-- ======= Team Section ======= -->
<section id="team" class="team">
  <div class="container">
    <div class="row">
      {% for member in site.data.board %}
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="{{ member.image }}" alt="{{ member.name }}">
          <h4>{{ member.name }}</h4>
          <span>{{ member.role }}</span>
          {% if member.email %}
          <span>
            <a href="mailto:{{ member.email }}">{{ member.email }}</a>
          </span>
          {% endif %}
          {% if member.phone %}
          <span>
            <a href="tel:{{ member.phone_raw }}">{{ member.phone }}</a>
          </span>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section><!-- End Team Section -->
