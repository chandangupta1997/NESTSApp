const jwt = require("jsonwebtoken")


//generate token 
const generateToken = async function (user) {
    try {

       //  creating token 
       
        var token = await jwt.sign({ userId: user._id}, "MyPrivateKey", {
            // expiresIn: "10h" 
            expiresIn: "20d"
            // expiresIn: "120s" 
            // expiresIn: "30s" 
        });

        token={
            userId:user._id,
            token:token
        }
        return token

    }
    catch (err) {
        console.log(err)
    }
}




module.exports.generateToken=generateToken