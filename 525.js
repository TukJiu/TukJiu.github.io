let _525Date = new Date()
if(_525Date.getMonth()+1 == 5 && _525Date.getDate() == 25) {
    document.querySelectorAll("h3").forEach((v,k)=>{
        v.innerHTML = v.title
    })
}