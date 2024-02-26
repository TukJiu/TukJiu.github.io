console.log("正在加载：点击频率排序" + Date())
let divs = {}
document.querySelectorAll("div").forEach((v, k) => {
    divs[v.id] = 0
})
Object.assign(divs, JSON.parse(localStorage.getItem("divs")))
if (localStorage.getItem("onsort") == 'true') {
    document.querySelector("#shows").style = "display: block;"
    document.querySelector("#shows").innerHTML = "<p style=\"text-align: center;\">点击频次</p>"
    let divr = []
    let ids = 0
    for (i in divs) {
        let temps = {}
        temps.id = i
        temps.ct = divs[i]
        divr[ids] = temps
        ids++
    }
    divr.sort((a, b) => {
        return b.ct - a.ct
    })
    for (let i = 0; i < ids; i++) {
        document.querySelector("section").innerHTML += `<p id="_${divr[i].id}">${document.querySelector("#"+divr[i].id).querySelector("h3").innerHTML} : ${divr[i].ct}</p>`
        let p = document.createElement('div')
        p = document.querySelector(`#${divr[i].id}`)
        document.querySelector("#main").removeChild(document.querySelector(`#${divr[i].id}`))
        document.querySelector("#main").appendChild(p)
    }
}
if(localStorage.getItem("onsort") == 'true') document.querySelector("#box-sortdivs").checked = true
document.querySelector("#box-sortdivs").onclick = (e)=>{
    localStorage.setItem("onsort", e.target.checked)
}
document.querySelectorAll("a").forEach((v, k) => {
    v.onclick = (e) => {
        divs[e.target.parentNode.id] += 1
        localStorage.setItem("divs", JSON.stringify(divs))
        document.querySelector("#_"+e.target.parentNode.id).innerHTML = `${document.querySelector("#"+e.target.parentNode.id).querySelector("h3").innerHTML} : ${divs[e.target.parentNode.id]}`
    }
})
console.log("已加载：点击频率排序" + Date())