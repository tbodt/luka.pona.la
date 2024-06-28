---
title: tenpo kulupu
---
  
## tenpo kulupu la lawa pi nasin pona

#W) o kepeken sitelen pi jan luka tawa toki. o toki ala e sijelo ona e selo ona. o toki ala e ni: sina suwi lukin! sina jaki lukin!

#T) o toki kepeken sitelen taso, o pini e pana kalama sina lon ilo. taso, toki sitelen li ken toki luka ala, sina ken sitelen e toki ante lon ilo toki pi sitelen tawa ala.

---

## tenpo kulupu kama

<p class="insa">O SONA E NI SULI: lipu ni li toki e tenpo pi ma sina tan ilo sina.</p>

{% for tenpo in site.data.tenpo %}
{% if tenpo.pini %}{% continue %}{% endif %}
{% include tenpo_wan.html tenpo=tenpo %}
{% endfor %}

---
  
## tenpo kulupu pini

{% for tenpo in site.data.tenpo %}
{% unless tenpo.pini %}{% continue %}{% endunless %}
{% include tenpo_wan.html tenpo=tenpo %}
{% endfor %}

<script src="ijo/nasin-nanpa-pona.js"></script>
<script src="ijo/ante-tenpo.js"></script>

