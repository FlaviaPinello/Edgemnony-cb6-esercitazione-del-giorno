const express = require ('express')

const router = express.Router()


router.use(express.static('./public'))

router.get('/', (req, res)=>{
    //res.send('Home')
    res.sendFile(__dirname + '/public/index.html')
})



module.exports = router