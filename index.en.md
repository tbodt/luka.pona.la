---
title: luka pona sign language
---

## events coming soon

{% assign tenpo_mute = site.data.tenpo | where_exp: "tenpo", "tenpo.pini != true" %}
{% for tenpo in tenpo_mute limit:3 %}
{% include tenpo_wan.html tenpo=tenpo %}
{% endfor %}

<p class="insa"><a href="events.en.html">View all events</a></p>
  
<script src="ijo/ante-tenpo.js"></script>

