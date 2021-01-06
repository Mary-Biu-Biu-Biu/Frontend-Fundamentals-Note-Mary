const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    console.log('收到请求')
    console.log('url' + request.url)
    if (request.method === 'GET') {
        console.log('GET')
        fs.readFile('2020-12-11/事件循环.html', 'utf-8', (err, data) => {
            if (err) {
                throw err
            }
            // 发送响应数据
            response.write(data)
            // 结束
            console.log('结束文档读取')
        })
    }
    console.log('end')
    response.end()
})

server.listen('3001', 'localhost')
