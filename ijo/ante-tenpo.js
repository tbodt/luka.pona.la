function ante_tenpo(tenpo){
    //convert GMT-5 String to a new Date
    let date = new Date();
    let kipisiNanpa = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}) GMT([+-]?\d{1,2})/.exec(tenpo);
    if (kipisiNanpa == null)
        return '!sitelen tenpo pakala! ' + tenpo;
    let [_, sike, mun, suno, iloSuli, iloLili, antePiMaTenpo] = kipisiNanpa;
    date.setUTCFullYear(sike, parseInt(mun) - 1, suno);
    date.setUTCHours(iloSuli, iloLili, 0, 0, 0);
    //great, now these have been set to  UTC. we need to find the offset between UTC and gmt-5 so we can adjust accordingly. 
    date.setTime(date.getTime() - parseInt(antePiMaTenpo) * 60 * 60 * 1000);
    return date;
}

function sitelen_tenpo_pi_toki_ma(tenpo) {
    let date = ante_tenpo(tenpo);
    if (typeof date === 'string') return tenpo;
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
    };
    return date.toLocaleString(undefined, options);
}

function sitelen_tenpo_pona(tenpo) {
    tenpo = ante_tenpo(tenpo);
    if (typeof tenpo === 'string') return tenpo;
    return `sike#${o_nnp(tenpo.getFullYear())})\u200bmun#${o_nnp(tenpo.getMonth()+1)})\u200bsuno#${o_nnp(tenpo.getDate())} lon tenpo ilo #${tenpo.getHours()}:${tenpo.getMinutes().toString().padStart(2,0)}`;
    //sike#NNNN)mun#NN)suno#NN lon tenpo ilo #N)
}

for (element of document.getElementsByClassName("tenpo")){
    console.log(element);
    let sitelen_ilo_tenpo = element.textContent;
    if (IJO_LIPU.toki == 'tok')
        element.textContent = sitelen_tenpo_pona(element.textContent);
    else
        element.textContent = sitelen_tenpo_pi_toki_ma(element.textContent);
}