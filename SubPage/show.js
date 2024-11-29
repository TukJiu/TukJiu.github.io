console.log("links.js loading" + Date())
const types = {
    "link-favourite": "favourite",
    "link-minecraft": "minecraft",
    "link-mihoyo": "mihoyo",
    "link-learn": "learn",
    "link-design": "design",
    "link-docments": "docments",
    "link-build": "build",
    "link-internet": "internet",
    "link-earning": "earning",
    "link-ai": "ai",
    "link-picture": "picture",
    "link-audio": "audio",
    "link-vedio": "vedio",
    "link-text": "text",
    "link-tools": "tools",
    "link-news": "news",
    "link-school": "school",
    "link-gov": "gov",
    "link-black": "black"
}
document.querySelectorAll("a").forEach(v => {
    v.style.display = "none"
})
function show() {
    document.querySelectorAll("a").forEach(v => {
        v.style.display = "none"
    })
    let selectedtypes = []
    if (document.querySelector("#and").checked) {
        document.querySelectorAll("#selector>div>input:checked").forEach(v => {
            selectedtypes.push(types[v.id])
        })
        let elems = "." + selectedtypes.toString().replace(/,/g, ".")
        if (elems != ".") {
            document.querySelectorAll(elems).forEach(v => {
                v.style.display = "inline-block"
            })
        }
    } else {
        document.querySelectorAll("#selector>div>input:checked").forEach(v => {
            selectedtypes.push(types[v.id])
        })
        let elems = "." + selectedtypes.toString().replace(/,/g, ",.")
        if (elems != ".") {
            document.querySelectorAll(elems).forEach(v => {
                v.style.display = "inline-block"
            })
        }
    }
}
document.querySelector("#selector").addEventListener("click", show)
setInterval(() => show, 500)
document.querySelector("#showall").addEventListener("click", () => {
    document.querySelectorAll("#selector>div>input").forEach(v => {
        v.checked = true
    })
    document.querySelector("#and").checked = false
    document.querySelector("#or").checked = true
    show()
})
document.querySelector("#hiddenall").addEventListener("click", () => {
    document.querySelectorAll("#selector>div>input").forEach(v => {
        v.checked = false
    })
    document.querySelector("#and").checked = true
    document.querySelector("#or").checked = false
    show()
})
document.querySelectorAll("#selector>div>input").checked = false
console.log("links.js loaded" + Date())