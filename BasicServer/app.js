const http = require('http');
const axios = require('axios')

const imageurl = 'https://thumbs.dreamstime.com/b/freelancer-programmer-falling-his-face-down-taking-nap-computer-concept-tired-lazy-82553144.jpg'

http.createServer((req, res) => {

    if (req.url === '/image') {

            res.writeHead(200, {
                'Content-Type': 'image/jpg'
            })

            axios.get(imageurl, { responseType: 'stream' }).then(resp => {
                resp.data.pipe(res)
            })
     }
}).listen(8000, () => {})
