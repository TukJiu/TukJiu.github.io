const http = require('http')
const https = require('https')
const fs = require('fs')
const urls = require('url')

http.createServer((req, res) => {
    console.log(`<http 80> [${req.socket.remoteAddress}] : starting get ${req.url}`)
    if (req.url === '/') req.url = '/index.html'
    fs.readFile(req.url.slice(1), (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('404 Not Found')
            console.log(`<http 80> [${req.socket.remoteAddress}] : get ${req.url} 404`)
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
            console.log(`<http 80> [${req.socket.remoteAddress}] : get ${req.url} 200`)
        }
    })
}).listen(80)
http.createServer((req, res) => {
    console.log(`<linkserver 93> [${req.socket.remoteAddress}] : starting request ${req.url}`)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("charset", "utf-8")
    res.writeHead(200, "{'Content-Type': 'json/html'}")
    let schme = urls.parse(req.url, true).query
    let url = schme.url
    let name = schme.name
    if (url == undefined || name == undefined) {
        res.end(JSON.stringify({
            "code": "403",
            "msg": "[403]参数未完全传递",
            "name": null,
            "url": null
        }))
        console.log(`<linkserver 93> [${req.socket.remoteAddress}] : request [403]参数未完全传递 ===>> ${req.url}`)
        return
    }
    if (url.slice(0, 7) == "http://") {
        http.request({
            host: urls.parse(url, true).host,
            path: urls.parse(url, true).path,
            method: 'HEAD'
        }, (resr) => {
            if (resr.statusCode >= 200 && resr.statusCode < 400) {
                res.end(JSON.stringify({
                    "code": "200",
                    "msg": `链接正常：[200]${name} : ${url}`,
                    "name": name,
                    "url": url
                }))
                console.log(`<linkserver 93> [${req.socket.remoteAddress}] : 链接正常：[200]${name} : ${url}`)
            } else {
                res.end(JSON.stringify({
                    "code": "404",
                    "msg": `链接无效：[404]${name} : ${url}`,
                    "name": name,
                    "url": url
                }))
                console.log(`<linkserver 93> [${req.socket.remoteAddress}] : 链接无效：[404]${name} : ${url}`)
            }
        }).on('error', (e) => {
            res.end(JSON.stringify({
                "code": "500",
                "msg": `主机下线: [500]${name} : ${url}===>>${e.message}`,
                "name": name,
                "url": url
            }))
            console.log(`<linkserver 93> [${req.socket.remoteAddress}] : 主机下线: [500]${name} : ${url}===>>${e.message}`)
        }).end()
    } else if (url.slice(0, 8) == "https://") {
        https.request({
            host: urls.parse(url, true).host,
            path: urls.parse(url, true).path,
            method: 'HEAD'
        }, (resr) => {
            if (resr.statusCode >= 200 && resr.statusCode < 400) {
                res.end(JSON.stringify({
                    "code": "200",
                    "msg": `链接正常：[200]${name} : ${url}`,
                    "name": name,
                    "url": url
                }))
                console.log(`<linkserver 93> [${req.socket.remoteAddress}] : 链接正常：[200]${name} : ${url}`)
            } else {
                res.end(JSON.stringify({
                    "code": "404",
                    "msg": `链接无效：[404]${name} : ${url}`,
                    "name": name,
                    "url": url
                }))
            }
        }).on('error', (e) => {
            res.end(JSON.stringify({
                "code": "500",
                "msg": `主机下线: [500]${name} : ${url}===>>${e.message}`,
                "name": name,
                "url": url
            }))
            console.log(`<linkserver 93> [${req.socket.remoteAddress}] : 主机下线: [500]${name} : ${url}===>>${e.message}`)
        }).end()
    } else {
        res.end(JSON.stringify({
            "code": "405",
            "msg": `协议错误：[405]${name} : ${url}`,
            "name": name,
            "url": url
        }))
        console.log(`<linkserver 93> [${req.socket.remoteAddress}] : 协议错误：[405]${name} : ${url}`)
    }
}).listen(93)