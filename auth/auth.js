const jwt = require('jsonwebtoken')

const generatToken = (data) => {
    const token = jwt.sign(data, 'praveen')
    return token
    'registaion'
}
const accessToken = (req,res,next) => {
    const token=req.headers.cookie.split("=")[1]
    // const token=req.headers.cookie.split("=")[0]
    const decoded = jwt.verify(token,'praveen')
    req.data=decoded
    next()

}
module.exports ={generatToken,accessToken}


