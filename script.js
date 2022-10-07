const sWord = document.getElementById('sWord');
const sbtn = document.getElementById('sbtn');
const out1 = document.getElementById('out1');
let suffixes = ["ኢዕኧልኧሽ", "ኣውኢው", "ኣችኧውኣል", "ኧችኣት", "ኧችኣችህኡ", "ኧችኣችኧው", "ኣልኧህኡ", "ኣውኦች", "ኣልኧህ", "ኣልኧሽ", "ኣልችህኡ", "ኣልኣልኧች", "ብኣችኧውስ", "ብኣችኧው", "ኣችኧውን", "ኣልኧች", "ኣልኧን", "ኣልኣችህኡ", "ኣችህኡን", "ኣችህኡ", "ኣችህኡት", "ውኦችንንኣ", "ውኦችን", "ኣችኧው", "ውኦችኡን", "ውኦችኡ", "ኧውንኣ", "ኦችኡን", "ኦውኦች", "ኧኝኣንኧትም", "ኧኝኣንኣ", "ኧኝኣንኧት", "ኧኝኣን", "ኧኝኣውም", "ኧኝኣው", "ኝኣውኣ", "ብኧትን", "ኣችህኡም", "ኦውኣ", "ኧችው", "ኧችኡ", "ኤችኡ", "ንኧው", "ንኧት", "ኣልኡ", "ኣችን", "ክኡም", "ክኡት", "ክኧው", "ኧችን", "ኧችም", "ኧችህ", "ኧችሽ", "ኧችን", "ኧችው", "ይኡሽን", "ይኡሽ", "ኧውኢ", "ኦችንንኣ", "ኣውኢ", "ብኧት", "ኦች", "ኦችኡ", "ውኦን", "ኧኝኣ", "ኝኣውን", "ኝኣው", "ኦችን", "ኣል", "ኧም", "ሽው", "ክም", "ኧው", "ትም", "ውኦ", "ውም", "ውን", "ንም", "ሽን", "ኣች", "ኡት", "ኢት", "ክኡ", "ኤ", "ህ", "ሽ", "ኡ", "ሽ", "ክ", "ኧ", "ኧች", "ኡን", "ን", "ም", "ንኣ", "ው", "ስልኧምኣይ", "ይኧምኣት", "ዕንድኧ", "ይኧትኧ", "ብኧምኣ", "ብኧትኧ", "ዕኧል", "ስልኧ", "ምኧስ", "ዕይኧ", "ዕኧስ", "ዕኧት", "ዕኧን", "ዕኧይ", "ይኣል", "ስኣት", "ስኣን", "ስኣይ", "ስኣል", "ይኣስ", "ይኧ", "ልኧ", "ክኧ", "እን", "ዕን", "ዐል", "ብኧ", "ይ", "ት", "አ", "እ", "ውኢት"];
let prefixes = ["ስልኧምኣይ", "ይኧምኣት", "ዕንድኧ", "ይኧትኧ", "ብኧምኣ", "ብኧትኧ", "ዕኧል", "ስልኧ", "ምኧስ", "ዕይኧ", "ዕኧስ", "ዕኧት", "ዕኧን", "ዕኧይ", "ይኣል", "ስኣት", "ስኣን", "ስኣይ", "ስኣል", "ይኣስ", "ይኧ", "ልኧ", "ክኧ", "እን", "ዕን", "ዐል", "ብኧ", "ይ", "ት", "አ", "እ"];
let Corpus = [];
let  vowels = ["ኧ", "ኡ", "ኢ", "ኣ", "ኤ", "ኦ"];
let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
let sunique = "";

input.addEventListener('change', () =>{
    let files = input.files;
    if(files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        sunique = lines.join('\n');
        Corpus = sunique.split(" ");
        sWord.value = Corpus.join(" ");
    }
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
})


function dupilicateremoval(str){
    var unique = "";
    for(const chr of str){
        if(unique.includes(chr) == false)
            unique += chr;
    }
    return unique;
}

let sWordarray= (str) =>{
    return[...str];
}

function fun1(){
    for(var j=0; j<Corpus.length; j++){
        if(["ትምህርት", "ተማሪ", "መኪና", "ብርቱካን", "ነጋዴ", "ሀኪም", "ኢትዮጵያ", "ኢትዮጵያዊ", "ጋናዊው", "አ.አ", "ት.ቤት", "ዓ.ም", "መ.ቤት","አዲስ","አበባ"].includes(Corpus[j]))        
            continue;
        else if(Corpus[j].length > 2){
            let suniques = dupilicateremoval(Corpus[j]);
            let sarray = [];
            sarray = sWordarray(suniques);
            for(var i=0; i<sarray.length; i++){
                if(sarray[i] == "ሀ")
                    sarray[i] = "ህኧ";
                else if(sarray[i] == "ሁ")
                    sarray[i] = "ህኡ";
                else if(sarray[i] == "ሂ")
                    sarray[i] = "ህኢ";
                else if(sarray[i] == "ሃ")
                    sarray[i] = "ህኣ";
                else if(sarray[i] == "ሄ")
                    sarray[i] = "ህኤ";
                else if(sarray[i] == "ሆ")
                    sarray[i] = "ህኦ";
                else if(sarray[i] == "ለ")
                    sarray[i] = "ልኧ";
                else if(sarray[i] == "ሉ")
                    sarray[i] = "ልኡ";
                else if(sarray[i] == "ሊ")
                    sarray[i] = "ልኢ";
                else if(sarray[i] == "ላ")
                    sarray[i] = "ልኣ";
                else if(sarray[i] == "ሌ")
                    sarray[i] = "ልኤ";
                else if(sarray[i] == "ሎ")
                    sarray[i] = "ልኦ";
                else if(sarray[i] == "ሐ")
                    sarray[i] = "ሕኧ";
                else if(sarray[i] == "ሑ")
                    sarray[i] = "ሕኡ";
                else if(sarray[i] == "ሒ")
                    sarray[i] = "ሕኢ";
                else if(sarray[i] == "ሓ")
                    sarray[i] = "ሕኣ";
                else if(sarray[i] == "ሔ")
                    sarray[i] = "ሕኤ";
                else if(sarray[i] == "ሖ")
                    sarray[i] = "ሕኦ";
                else if(sarray[i] == "መ")
                    sarray[i] = "ምኧ";
                else if(sarray[i] == "ሙ")
                    sarray[i] = "ምኡ";
                else if(sarray[i] == "ሚ")
                    sarray[i] = "ምኢ";
                else if(sarray[i] == "ማ")
                    sarray[i] = "ምኣ";
                else if(sarray[i] == "ሜ")
                    sarray[i] = "ምኤ";
                else if(sarray[i] == "ሞ")
                    sarray[i] = "ምኦ";
                else if(sarray[i] == "ሠ")
                    sarray[i] = "ሥኧ";
                else if(sarray[i] == "ሡ")
                    sarray[i] = "ሥኡ";
                else if(sarray[i] == "ሢ")
                    sarray[i] = "ሥኢ";
                else if(sarray[i] == "ሣ")
                    sarray[i] = "ሥኣ";
                else if(sarray[i] == "ሤ")
                    sarray[i] = "ሥኤ";
                else if(sarray[i] == "ሦ")
                    sarray[i] = "ሥኦ";
                else if(sarray[i] == "ረ")
                    sarray[i] = "ርኧ";
                else if(sarray[i] == "ሩ")
                    sarray[i] = "ርኡ";
                else  if(sarray[i] == "ሪ")
                    sarray[i] = "ርኢ";
                else if(sarray[i] == "ራ")
                    sarray[i] = "ርኣ";
                else if(sarray[i] == "ሬ")
                    sarray[i] = "ርኤ";
                else if(sarray[i] == "ሮ")
                    sarray[i] = "ርኦ";
                else if(sarray[i] == "ሰ")
                    sarray[i] = "ስኧ";
                else if(sarray[i] == "ሱ")
                    sarray[i] = "ስኡ";
                else if(sarray[i] == "ሲ")
                    sarray[i] = "ስኢ";
                else if(sarray[i] == "ሳ")
                    sarray[i] = "ስኣ";
                else if(sarray[i] == "ሴ")
                    sarray[i] = "ስኤ";
                else if(sarray[i] == "ሶ")
                    sarray[i] = "ስኦ";
                else if(sarray[i] == "ሸ")
                    sarray[i] = "ሽኧ";
                else if(sarray[i] == "ሹ")
                    sarray[i] = "ሽኡ";
                else if(sarray[i] == "ሺ")
                    sarray[i] = "ሽኢ";
                else if(sarray[i] == "ሻ")
                    sarray[i] = "ሽኣ";
                else if(sarray[i] == "ሼ")
                    sarray[i] = "ሽኤ";
                else if(sarray[i] == "ሾ")
                    sarray[i] = "ሽኦ";
                else if(sarray[i] == "ቀ")
                    sarray[i] = "ቅኧ";
                else if(sarray[i] == "ቁ")
                    sarray[i] = "ቅኡ";
                else if(sarray[i] == "ቂ")
                    sarray[i] = "ቅኢ";
                else if(sarray[i] == "ቃ")
                    sarray[i] = "ቅኣ";
                else if(sarray[i] == "ቄ")
                    sarray[i] = "ቅኤ";
                else if(sarray[i] == "ቆ")
                    sarray[i] = "ቅኦ";
                else if(sarray[i] == "በ")
                    sarray[i] = "ብኧ";
                else if(sarray[i] == "ቡ")
                    sarray[i] = "ብኡ";
                else if(sarray[i] == "ቢ")
                    sarray[i] = "ብኢ";
                else if(sarray[i] == "ባ")
                    sarray[i] = "ብኣ";
                else if(sarray[i] == "ቤ")
                    sarray[i] = "ብኤ";
                else if(sarray[i] == "ቦ")
                    sarray[i] = "ብኦ";
                else if(sarray[i] == "ተ")
                    sarray[i] = "ትኧ";
                else if(sarray[i] == "ቱ")
                    sarray[i] = "ትኡ";
                else if(sarray[i] == "ቲ")
                    sarray[i] = "ትኢ";
                else if(sarray[i] == "ታ")
                    sarray[i] = "ትኣ";
                else if(sarray[i] == "ቴ")
                    sarray[i] = "ትኤ";
                else if(sarray[i] == "ቶ")
                    sarray[i] = "ትኦ";
                else if(sarray[i] == "ቸ")
                    sarray[i] = "ችኧ";
                else if(sarray[i] == "ቹ")
                    sarray[i] = "ችኡ";
                else if(sarray[i] == "ቺ")
                    sarray[i] = "ችኢ";
                else if(sarray[i] == "ቻ")
                    sarray[i] = "ችኣ";
                else if(sarray[i] == "ቼ")
                    sarray[i] = "ችኤ";
                else if(sarray[i] == "ቾ")
                    sarray[i] = "ችኦ";
                else if(sarray[i] == "ኀ")
                    sarray[i] = "ኅኧ";
                else if(sarray[i] == "ኁ")
                    sarray[i] = "ኅኡ";
                else if(sarray[i] == "ኂ")
                    sarray[i] = "ኅኢ";
                else if(sarray[i] == "ኃ")
                    sarray[i] = "ኅኣ";
                else if(sarray[i] == "ኄ")
                    sarray[i] = "ኅኤ";
                else if(sarray[i] == "ኆ")
                    sarray[i] = "ኅኦ";
                else if(sarray[i] == "ነ")
                    sarray[i] = "ንኧ";
                else if(sarray[i] == "ኑ")
                    sarray[i] = "ንኡ";
                else if(sarray[i] == "ኒ")
                    sarray[i] = "ንኢ";
                else if(sarray[i] == "ና")
                    sarray[i] = "ንኣ";
                else if(sarray[i] == "ኔ")
                    sarray[i] = "ንኤ";
                else if(sarray[i] == "ኖ")
                    sarray[i] = "ንኦ";
                else if(sarray[i] == "ኘ")
                    sarray[i] = "ኝኧ";
                else if(sarray[i] == "ኙ")
                    sarray[i] = "ኝኡ";
                else if(sarray[i] == "ኚ")
                    sarray[i] = "ኝኢ";
                else if(sarray[i] == "ኛ")
                    sarray[i] = "ኝኣ";
                else if(sarray[i] == "ኜ")
                    sarray[i] = "ኝኤ";
                else if(sarray[i] == "ኞ")
                    sarray[i] = "ኝኦ";
                else if(sarray[i] == "አ")
                    sarray[i] = "እኧ";
                else if(sarray[i] == "ኡ")
                    sarray[i] = "እኡ";
                else if(sarray[i] == "ኢ")
                    sarray[i] = "እኢ";
                else if(sarray[i] == "ኣ")
                    sarray[i] = "እኣ";
                else if(sarray[i] == "ኤ")
                    sarray[i] = "እኤ";
                else if(sarray[i] == "ኦ")
                    sarray[i] = "እኦ";
                else if(sarray[i] == "ከ")
                    sarray[i] = "ክኧ";
                else if(sarray[i] == "ኩ")
                    sarray[i] = "ክኡ";
                else if(sarray[i] == "ኪ")
                    sarray[i] = "ክኢ";
                else if(sarray[i] == "ካ")
                    sarray[i] = "ክኣ";
                else if(sarray[i] == "ኬ")
                    sarray[i] = "ክኤ";
                else if(sarray[i] == "ኮ")
                    sarray[i] = "ክኦ";
                else if(sarray[i] == "ኸ")
                    sarray[i] = "ኽኧ";
                else if(sarray[i] == "ኹ")
                    sarray[i] = "ኽኡ";
                else if(sarray[i] == "ኺ")
                    sarray[i] = "ኽኢ";
                else if(sarray[i] == "ኻ")
                    sarray[i] = "ኽኣ";
                else if(sarray[i] == "ኼ")
                    sarray[i] = "ኽኤ";
                else if(sarray[i] == "ኾ")
                    sarray[i] = "ኽኦ";
                else if(sarray[i] == "ወ")
                    sarray[i] = "ውኧ";
                else if(sarray[i] == "ዉ")
                    sarray[i] = "ውኡ";
                else if(sarray[i] == "ዊ")
                    sarray[i] = "ውኢ";
                else if(sarray[i] == "ዋ")
                    sarray[i] = "ውኣ";
                else if(sarray[i] == "ዌ")
                    sarray[i] = "ውኤ";
                else if(sarray[i] == "ዎ")
                    sarray[i] = "ውኦ";
                else if(sarray[i] == "ዐ")
                    sarray[i] = "ዕኧ";
                else if(sarray[i] == "ዑ")
                    sarray[i] = "ዕኡ";
                else if(sarray[i] == "ዒ")
                    sarray[i] = "ዕኢ";
                else if(sarray[i] == "ዓ")
                    sarray[i] = "ዕኣ";
                else if(sarray[i] == "ዔ")
                    sarray[i] = "ዕኤ";
                else if(sarray[i] == "ዖ")
                    sarray[i] = "ዕኦ";
                else if(sarray[i] == "ዘ")
                    sarray[i] = "ዝኧ";
                else if(sarray[i] == "ዙ")
                    sarray[i] = "ዝኡ";
                else if(sarray[i] == "ዚ")
                        sarray[i] = "ዝኢ";
                else if(sarray[i] == "ዛ")
                    sarray[i] = "ዝኣ";
                else if(sarray[i] == "ዜ")
                    sarray[i] = "ዝኤ";
                else if(sarray[i] == "ዞ")
                    sarray[i] = "ዝኦ";
                else if(sarray[i] == "ዠ")
                    sarray[i] = "ዥኧ";
                else if(sarray[i] == "ዡ")
                    sarray[i] = "ዥኡ";
                else if(sarray[i] == "ዢ")
                    sarray[i] = "ዥኢ";
                else if(sarray[i] == "ዣ")
                    sarray[i] = "ዥኣ";
                else if(sarray[i] == "ዤ")
                    sarray[i] = "ዥኤ";
                else if(sarray[i] == "ዦ")
                    sarray[i] = "ዥኦ";
                else if(sarray[i] == "የ")
                    sarray[i] = "ይኧ";
                else if(sarray[i] == "ዩ")
                    sarray[i] = "ይኡ";
                else if(sarray[i] == "ዪ")
                    sarray[i] = "ይኢ";
                else if(sarray[i] == "ያ")
                    sarray[i] = "ይኣ";
                else if(sarray[i] == "ዬ")
                    sarray[i] = "ይኤ";
                else if(sarray[i] == "ዮ")
                    sarray[i] = "ይኦ";
                else if(sarray[i] == "ደ")
                    sarray[i] = "ድኧ";
                else if(sarray[i] == "ዱ")
                    sarray[i] = "ድኡ";
                else if(sarray[i] == "ዲ")
                    sarray[i] = "ድኢ";
                else if(sarray[i] == "ዳ")
                    sarray[i] = "ድኣ";
                else if(sarray[i] == "ዴ")
                    sarray[i] = "ድኤ";
                else if(sarray[i] == "ዶ")
                    sarray[i] = "ድኦ";
                else if(sarray[i] == "ጀ")
                    sarray[i] = "ጅኧ";
                else if(sarray[i] == "ጁ")
                    sarray[i] = "ጅኡ";
                else if(sarray[i] == "ጂ")
                    sarray[i] = "ጅኢ";
                else if(sarray[i] == "ጃ")
                    sarray[i] = "ጅኣ";
                else if(sarray[i] == "ጄ")
                    sarray[i] = "ጅኤ";
                else if(sarray[i] == "ጆ")
                    sarray[i] = "ጅኦ";
                else if(sarray[i] == "ገ")
                    sarray[i] = "ግኧ";
                else if(sarray[i] == "ጉ")
                    sarray[i] = "ግኡ";
                else if(sarray[i] == "ጊ")
                    sarray[i] = "ግኢ";
                else if(sarray[i] == "ጋ")
                    sarray[i] = "ግኣ";
                else if(sarray[i] == "ጌ")
                    sarray[i] = "ግኤ";
                else if(sarray[i] == "ጎ")
                    sarray[i] = "ግኦ";
                else if(sarray[i] == "ጠ")
                    sarray[i] = "ጥኧ";
                else if(sarray[i] == "ጡ")
                    sarray[i] = "ጥኡ";
                else if(sarray[i] == "ጢ")
                    sarray[i] = "ጥኢ";
                else if(sarray[i] == "ጣ")
                    sarray[i] = "ጥኣ";
                else if(sarray[i] == "ጤ")
                    sarray[i] = "ጥኤ";
                else if(sarray[i] == "ጦ")
                    sarray[i] = "ጥኦ";
                else if(sarray[i] == "ጨ")
                    sarray[i] = "ጭኧ";
                else if(sarray[i] == "ጩ")
                    sarray[i] = "ጭኡ";
                else if(sarray[i] == "ጪ")
                    sarray[i] = "ጭኢ";
                else if(sarray[i] == "ጫ")
                    sarray[i] = "ጭኣ";
                else if(sarray[i] == "ጬ")
                    sarray[i] = "ጭኤ";
                else if(sarray[i] == "ጮ")
                    sarray[i] = "ጭኦ";
                else if(sarray[i] == "ጰ")
                    sarray[i] = "ጵኧ";
                else if(sarray[i] == "ጱ")
                    sarray[i] = "ጵኡ";
                else if(sarray[i] == "ጲ")
                    sarray[i] = "ጵኢ";
                else if(sarray[i] == "ጳ")
                    sarray[i] = "ጵኣ";
                else if(sarray[i] == "ጴ")
                    sarray[i] = "ጵኤ";
                else if(sarray[i] == "ጶ")
                    sarray[i] = "ጵኦ";
                else if(sarray[i] == "ጸ")
                    sarray[i] = "ጽኧ";
                else if(sarray[i] == "ጹ")
                    sarray[i] = "ጽኡ";
                else if(sarray[i] == "ጺ")
                    sarray[i] = "ጽኢ";
                else if(sarray[i] == "ጻ")
                    sarray[i] = "ጽኣ";
                else if(sarray[i] == "ጼ")
                    sarray[i] = "ጽኤ";
                else if(sarray[i] == "ጾ")
                    sarray[i] = "ጽኦ";
                else if(sarray[i] == "ፀ")
                    sarray[i] = "ፅኧ";
                else if(sarray[i] == "ፁ")
                    sarray[i] = "ፅኡ";
                else if(sarray[i] == "ፂ")
                    sarray[i] = "ፅኢ";
                else if(sarray[i] == "ፃ")
                    sarray[i] = "ፅኣ";
                else if(sarray[i] == "ፄ")
                    sarray[i] = "ፅኤ";
                else if(sarray[i] == "ፆ")
                    sarray[i] = "ፅኦ";
                else if(sarray[i] == "ፈ")
                    sarray[i] = "ፍኧ";
                else if(sarray[i] == "ፉ")
                    sarray[i] = "ፍኡ";
                else if(sarray[i] == "ፋ")
                    sarray[i] = "ፍኣ";
                else if(sarray[i] == "ፌ")
                    sarray[i] = "ፍኤ";
                else if(sarray[i] == "ፎ")
                    sarray[i] = "ፍኦ";
                else if(sarray[i] == "ፐ")
                    sarray[i] = "ፕኧ";
                else if(sarray[i] == "ፑ")
                    sarray[i] = "ፕኡ";
                else if(sarray[i] == "ፒ")
                    sarray[i] = "ፕኢ";
                else if(sarray[i] == "ፓ")
                    sarray[i] = "ፕኣ";
                else if(sarray[i] == "ፔ")
                    sarray[i] = "ፕኤ";  
                else if(sarray[i] == "ፖ")
                    sarray[i] = "ፕኦ";
            }
            let newsWord = sarray.join("");
            for (var i = 0; i < suffixes.length; i++) {
                if (newsWord.length > 3)
                    if (newsWord.startsWith(prefixes[i]) || newsWord.endsWith(suffixes[i]))
                        newsWord = newsWord.replace(suffixes[i], "");
            }

            while(newsWord.includes("ኧ") | newsWord.includes("ኡ") | newsWord.includes("ኢ") | newsWord.includes("ኣ") | newsWord.includes("ኤ") | newsWord.includes("ኦ") == true){
                for(var i=0; i<vowels.length; i++)
                    if(newsWord.length > 2)
                        newsWord = newsWord.replace(vowels[i], "");
            }
            Corpus[j] = newsWord;
            }
            else
                continue;
        
        }
    out1.value = Corpus.join(" ");
   
    }
sbtn.addEventListener('click', fun1);


