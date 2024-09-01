
function rolldice()
{
    const numofdice=document.getElementById("numofdice").value
    const diceresult=document.getElementById("diceresult")
    const diceimg=document.getElementById("diceimg")
    const vals=[]
    const images=['img1.jpeg','img2.jpg','img3.jpeg','img4.jpg','img5.png','img6.png']
    diceimg.innerHTML=''
    for(let i=0;i<numofdice;i++)
    {
        const value=Math.floor(Math.random()*5)
        vals.push(value+1)
        const imgele=document.createElement("img")
        imgele.src=images[value]
        diceimg.appendChild(imgele)
        imgele.style.width="150px"
        imgele.style.height="150px"
    }
    diceresult.textContent=`dice:${vals.join(',')}`
}