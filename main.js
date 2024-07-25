class myAPI
{
    processGet(req, res)
    {
        count++
        res.send(`Requête : ${count}`)
    }

    processLaunch()
    {
        console.log(`Application lancée sur : http://localhost:${port}`)
    }
}

const express = require("express")

const h = express()
const port = 3000

count = 0

a = new myAPI()

h.get('/', a.processGet)

h.listen(port, a.processLaunch)

return 0