Jekyll::Hooks.register [:pages, :documents], :post_init do |lipu|
  nimi = lipu.basename
  toki = nil
  nimi.match(/\.(\w+)$/) do |m|
    toki = m[1]
    next if !(lipu.site.config["toki"] || []).include?(toki)
    nimi = nimi.delete_suffix(".#{toki}")
  end
  lipu.data["toki"] ||= toki
  lipu.data["nimi_ilo"] ||= nimi
end

Jekyll::Hooks.register :site, :post_read do |ma_lipu|
  ma_lipu.pages.each do |lipu|
    nimi, toki = lipu.data["nimi_ilo"], lipu.data["toki"]
    lipu_pi_toki_ante = []
    ma_lipu.pages.each do |lipu_ante|
      nimi_ante, toki_ante = lipu_ante.data["nimi_ilo"], lipu_ante.data["toki"]
      if nimi == nimi_ante
        lipu_pi_toki_ante << lipu_ante
      end
    end
    lipu.data["toki_ante"] = lipu_pi_toki_ante
  end
end