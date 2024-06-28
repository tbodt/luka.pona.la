---
title: luka pona
toki: tok
---

## tenpo kulupu kama poka

{% assign tenpo_mute = site.data.tenpo | where_exp: "tenpo", "tenpo.pini != true" %}
{% for tenpo in tenpo_mute limit:3 %}
{% include tenpo_wan.html tenpo=tenpo %}
{% endfor %}

<p class="insa"><a href="events.tok.html">o lukin e tenpo kulupu ale</a></p>

<script src="ijo/nasin-nanpa-pona.js"></script>
<script src="ijo/ante-tenpo.js"></script>
