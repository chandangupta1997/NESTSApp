const jwt = require('jsonwebtoken')


//authentication

const authentication = async function (req, res, next) {
    try {
        let token = req.headers["authorization"]

        if (!token) return res.status(400).send({ status: false, msg: "please provide token in request hadder in form of Bearear token " })
        if (!token.startsWith("Bearer")) return res.status(400).send({ status: false, msg: "please provide token in request hadder in form of Bearear token " })


        token = token.split("Bearer")
        token = token[1].trim()


        let validateToken = jwt.verify(token, "MyPrivateKey")
        console.log("verify token ", validateToken)


        req.decodedToken = validateToken


        next()

    } catch (err) {


        
        return res.status(500).send({ status: false, msg: "error occure for more information move on console", error: err.message })
        // priority wise error catch if any space present in anywhere at token catch only hadder part


    }

}

















module.exports.authentication = authentication



