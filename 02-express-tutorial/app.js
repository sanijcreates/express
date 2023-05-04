const { resolveSoa } = require('dns');
const http = require('http')
const {readFileSync} = require('fs')


const readFile = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const js = readFileSync('./navbar-app/browser-app.js')
// the first parameter has to be req
const server = http.createServer((req, res) => {
    //way to send html file. 
    // you have to state that the content type is html. 
    // if you replace text/html with text/plain, it will display the html as plain text.    
    // search mime types to learn more.
    const url = req.url; 
    //html
    res.writeHead(200,{'content-type': 'text/html'})
    if(url === '/') {
    res.write(readFile)
    res.end()
    //styles
    } else if(url ==='/styles.css') {
        res.writeHead(200,{'content-type' : 'text/css'})
        res.write(styles)
        res.end()
    } else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript' })
        res.write(js)
        res.end()
    } 
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>error</h1>')
        res.end()
    }
    
    
})


server.listen(5000)