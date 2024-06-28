---
title: events
---
  
## code of conduct

<p>1. Do not make comments related to the physical appearance of fellow participants, either negative or positive.</p>

<p>2. LPSL lessons are voice-off spaces. Please remain muted. Feel free to use the text chat if you require clarification on any points.</p>

---

## events scheduled

<p class="insa">IMPORTANT: All events are displayed in your computer's local time. </p>

{% for tenpo in site.data.tenpo %}
{% if tenpo.pini %}{% continue %}{% endif %}
{% include tenpo_wan.html tenpo=tenpo %}
{% endfor %}

---

## archive

{% for tenpo in site.data.tenpo %}
{% unless tenpo.pini %}{% continue %}{% endunless %}
{% include tenpo_wan.html tenpo=tenpo %}
{% endfor %}

<script src="ijo/ante-tenpo.js"></script>
