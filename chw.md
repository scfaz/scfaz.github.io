---
layout: default
title: Community Health Workers
hero: false
---

<!-- ======= Breadcrumbs ======= -->
<section id="breadcrumbs" class="breadcrumbs">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      <li><a href="/services/">Services</a></li>
      <li>Community Health Workers</li>
    </ol>
  </div>
</section>
<!-- End Breadcrumbs -->

<section id="testimonials" class="testimonials">
  <div class="container">

    <div class="section-title">
      <h2>Community Health Workers</h2>
      <p>Please reach out to any of our Community Health Workers.</p>
    </div>

    <div class="row">
      {% for worker in site.data.chw %}
      <div class="col-lg-6">
        <div class="testimonial-item">
          <h3>{{ worker.name }}</h3>
          <h4>{{ worker.location }}</h4>
          <br>
          <div class="contact-info d-flex align-items-center">
            {% if worker.email %}
            <i class="bi bi-envelope d-flex align-items-center">&nbsp;<a href="mailto:{{ worker.email }}">{{ worker.email }}</a></i>
            {% endif %}
            {% if worker.phone %}
            <i class="bi bi-phone d-flex align-items-center ms-4">&nbsp;<a href="tel:{{ worker.phone_raw }}"><span>{{ worker.phone }}</span></a></i>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>

  </div>
</section>
