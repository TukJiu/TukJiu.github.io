const redirect_urlParams = new URLSearchParams(window.location.search)
const redirect_goUrl = redirect_urlParams.get('gourl')
if (redirect_goUrl) {
    if (confirm('您访问了含有跳转参数的URL，是否跳转到 ' + redirect_goUrl + ' ?')) {
        window.location.href = redirect_goUrl
    }
}