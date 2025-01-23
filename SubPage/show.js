console.log("links.js loading" + Date())
let tmp_types = {}
document.querySelectorAll("input[type=checkbox]").forEach(v => {
    tmp_types[v.id] = v.id.slice(5)
})
const types = tmp_types
delete tmp_types
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