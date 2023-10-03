let dd = new Date()
if(dd.getMonth()+1 == 5 && dd.getDate() == 25) {
    document.querySelectorAll("h3").forEach((v,k)=>{
        v.innerHTML = v.title
    })
}