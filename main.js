const btnEl = document.querySelector(".btn");
const emojinameEl = document.querySelector(".emoji-name");


const emoji = [];

async function getEmoji(){

        let response = await fetch("https://emoji-api.com/emojis?access_key=c6085e0e9264ba508a827f9df25a24db8193df14")
        data = await response.json()
console.log(data);    
        for(let i = 0; i<1500; i++){
            emoji.push({
                emojiName: data[i].character, 
                emojiCode: data[i].unicodeName,
            })
        }
    
}
console.log(emoji);

getEmoji();

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojinameEl.innerText = emoji[randomNum].emojiCode;
})