console.log("正在加载：链接活跃性检测" + Date())
let beloadDate = new Date()
let beload = beloadDate.getMonth() * 100 + beloadDate.getDate()
let deload = localStorage.getItem("deload")
let list = {}
Object.assign(list, JSON.parse(localStorage.getItem("loaded")))
document.querySelectorAll("a").forEach((v,k)=>{
    if(list[v.href] == "true") v.style = "color: green;"
    else if(list[v.href] == "false") v.style = "color: red;"
})
if (beload - Number(deload) > 7) {
    document.querySelectorAll("a").forEach((v, k) => {
        let p = document.createElement("link")
        p.rel = "stylesheet"
        p.type = "text/css"
        p.href = v.href
        p.onload = () => {
            list[v.href] = "true"
            v.style = "color: green;"
            document.querySelector("body").removeChild(p)
            localStorage.setItem("loaded", JSON.stringify(list))
        }
        p.onabort = () => {
            list[v.href] = "false"
            v.style = "color: red;"
            document.querySelector("body").removeChild(p)
            localStorage.setItem("loaded", JSON.stringify(list))
        }
        p.onerror = () => {
            list[v.href] = "false"
            v.style = "color: red;"
            document.querySelector("body").removeChild(p)
            localStorage.setItem("loaded", JSON.stringify(list))
        }
        document.querySelector("body").appendChild(p)
    })
    localStorage.setItem("deload", beload)
}
console.log("已加载：链接活跃性检测" + Date())