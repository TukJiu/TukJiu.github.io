let dyingDate = new Date()
let d = `${dyingDate.getMonth()+1}-${dyingDate.getDate()}`
if(d=="4-4"||d=="5-12"||d=="9-3"||d=="12-13"||d=="12-17"||d=="9-18"||d=="7-7") {
    document.querySelector("html").style="filter:grayscale(0.8)"
    //filter: grayscale(1)
    //中国5个公祭日分别是4月4日、5月12、9月3日、12月13日、12月17日。
}
