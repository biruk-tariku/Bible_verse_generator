const soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");



const quotess = [{
    quote: `“ሁሉን ታደርግ ዘንድ ቻይ እንደ ሆንህ፥ አሳብህም ይከለከል ዘንድ ከቶ እንደማይቻል አወቅሁ።”`,
    writer:`ኢዮብ 42፥2`
},{
    quote:`“እነሆ፥ ከእስራኤል ቤትና ከይሁዳ ቤት ጋር አዲስ ቃል ኪዳን የምገባበት ወራት ይመጣል፥ ይላል እግዚአብሔር፤”`,
    writer:`ኤርምያስ 31፥31`
},{
    quote:`“እግዚአብሔር የኃይልና የፍቅር ራስንም የመግዛት መንፈስ እንጂ የፍርሃት መንፈስ አልሰጠንምና።”`,
    writer:`2ኛ ጢሞቴዎስ 1፥7`
},{
    quote:`“በምትሄድበት ሁሉ አምላክህ እግዚአብሔር ከአንተ ጋር ነውና ጽና፥ አይዞህ አትፍራ፥ አትደንግጥ ብዬ አላዘዝሁህምን?”`,
    writer:`ኢያሱ 1፥9`
},{
    quote:`“ሕፃን ተወልዶልናልና፥ ወንድ ልጅም ተሰጥቶናልና፤ አለቅነትም በጫንቃው ላይ ይሆናል፤ ስሙም ድንቅ መካር፥ ኃያል አምላክ፥ የዘላለም አባት፥ የሰላም አለቃ ተብሎ ይጠራል።”`,
    writer:`ኢሳይያስ 9፥6`
},{
    quote:`“ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል።”`,
    writer:`2ኛ ቆሮ 5፥17`
},{
    quote:`“ወዳጆች ሆይ፥ ፍቅር ከእግዚአብሔር ስለ ሆነ፥ የሚወደውም ሁሉ ከእግዚአብሔር ስለ ተወለደ እግዚአብሔርንም ስለሚያውቅ፥ እርስ በርሳችን እንዋደድ።”`,
    writer:`1ኛ ዮሐንስ 4፥7`
},{
    quote:`“መልካሙን ሥራችሁን አይተው በሰማያት ያለውን አባታችሁን እንዲያከብሩ ብርሃናችሁ እንዲሁ በሰው ፊት ይብራ።”`,
    writer:`ማቴዎስ 5፥16`
},{
    quote:`“እነርሱም፦ አንቺ ቤተ ልሔም፥ የይሁዳ ምድር፥ ከይሁዳ ገዢዎች ከቶ አታንሽም፤ ሕዝቤን እስራኤልን የሚጠብቅ መስፍን ከአንቺ ይወጣልና ተብሎ በነቢይ እንዲህ ተጽፎአልና በይሁዳ ቤተ ልሔም ነው አሉት።”`,
    writer:`ማቴዎስ 2፥5-6`
},{
    quote:`“ፊልጶስ ናትናኤልን አግኝቶ፦ ሙሴ በሕግ ነቢያትም ስለ እርሱ የጻፉትን የዮሴፍን ልጅ የናዝሬቱን ኢየሱስን አግኝተነዋል አለው።”`,
    writer:`ዮሐንስ 1፥46`
},{
    quote:`“ከእናንተ ግን ማንም ጥበብ ቢጎድለው፥ ሳይነቅፍ በልግስና ለሁሉ የሚሰጠውን እግዚአብሔርን ይለምን፥ ለእርሱም ይሰጠዋል።”`,
    writer:`ያዕቆብ 1፥5`
},{
    quote:`“እግዚአብሔር ሥራን ሁሉ የተሰወረውንም ነገር ሁሉ፥ መልካምም ቢሆን ክፉም ቢሆን፥ ወደ ፍርድ ያመጣዋልና።”`,
    writer:`መክብብ 12፥14`
},{
    quote:`“አቤቱ፥ ረድኤቴ መድኃኒቴም፥ የአፌ ቃልና የልቤ አሳብ በፊትህ ያማረ ይሁን።”`,
    writer:`መዝሙር 19፥14`
},{
    quote:`“ከወደደን ከትልቅ ፍቅሩ የተነሣ በበደላችን ሙታን እንኳ በሆንን ጊዜ ከክርስቶስ ጋር ሕይወት ሰጠን፥ በጸጋ ድናችኋልና፥”`,
    writer:`ኤፌሶን 2፥5`
},{
    quote:`“ከሽማግሌዎቹም አንዱ፦ አታልቅስ፤ እነሆ፥ ከይሁዳ ነገድ የሆነው አንበሳ እርሱም የዳዊት ሥር መጽሐፉን ይዘረጋ ዘንድ ሰባቱንም ማኅተም ይፈታ ዘንድ ድል ነሥቶአል አለኝ።”`,
    writer:`ራእይ 5፥5`
},{
    quote:`²⁰ እኛ አገራችን በሰማይ ነውና፥ ከዚያም ደግሞ የሚመጣ መድኃኒትን እርሱንም ጌታን ኢየሱስ ክርስቶስን እንጠባበቃለን፤
    ²¹ እርሱም ሁሉን እንኳ ለራሱ ሊያስገዛ እንደሚችልበት አሠራር፥ ክቡር ሥጋውን እንዲመስል የተዋረደውን ሥጋችንን ይለውጣል።`,
    writer:`ፊልጵስዩስ 3`
},{
    quote:`⁷ እንግዲህ፥ ወንድሞች ሆይ፥ ጌታ እስኪመጣ ድረስ ታገሡ። እነሆ፥ ገበሬው የፊተኛውንና የኋለኛውን ዝናብ እስኪቀበል ድረስ እርሱን እየታገሠ የከበረውን የመሬት ፍሬ ይጠብቃል።
    ⁸ እናንተ ደግሞ ታገሡ፥ ልባችሁንም አጽኑ፤ የጌታ መምጣት ቀርቦአልና።`,
    writer:`ያዕቆብ 5`
},{
    quote:`“እኛ በመንፈስ እግዚአብሔርን የምናመልክ በክርስቶስ ኢየሱስም የምንመካ በሥጋም የማንታመን እኛ የተገረዝን ነንና።”`,
    writer:`ፊልጵስዩስ 3፥3`
},{
    quote:`“የጌታችን የኢየሱስ ክርስቶስ ጸጋ ከመንፈሳችሁ ጋር ይሁን፤ አሜን።”`,
    writer:`ፊልጵስዩስ 4፥23`
},{
    quote:`²⁶ ተቆጡ ኃጢአትንም አታድርጉ፤
    ²⁷ በቁጣችሁ ላይ ፀሐይ አይግባ፥ ለዲያብሎስም ፈንታ አትስጡት።`,
    writer:`ኤፌሶን 4`
},{
    quote:`“ለአንዳንዶች የሚዘገይ እንደሚመስላቸው ጌታ ስለ ተስፋ ቃሉ አይዘገይም፥ ነገር ግን ሁሉ ወደ ንስሐ እንዲደርሱ እንጂ ማንም እንዳይጠፋ ወዶ ስለ እናንተ ይታገሣል።”`,
    writer:`2ኛ ጴጥሮስ 3፥9`
},{
    quote:`“ከእግዚአብሔር በቀር አምላክ ማን ነው? ከአምላካችን በቀር አምላክ ማን ነው?”`,
    writer:`መዝሙር 18፥31`
},] 


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    btn.classList.add("loading");
    btn.innerHTML = "Loading verse...";
    let random = Math.floor(Math.random() * quotess.length);

    quote.innerHTML = quotess[random].quote;
    writer.innerHTML = quotess[random].writer;
    btn.innerHTML = "ቀጣይ ጥቅስ";
})

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} says ${writer.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerHTML);
});

twitterBtn.addEventListener("click", ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${quote.innerHTML} `;
    window.open(tweeturl,"_blank")
});