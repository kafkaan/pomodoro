const {constants} = require("../constants")

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode:500;
    switch(statusCode){
        case 400:
            res.json({
                title:"Validation failed",
                message:err.message,
                stackTrace : err.stack
            })
        case 404:
            case 400:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace : err.stack
            })
        case constants.FORBIDDEN:
                
                res.json({
                    title:"Forbidden",
                    message:err.message,
                    stackTrace : err.stack
                })
        case constants.UNAUTHORIZED:
                    
                    res.json({
                        title:"Non autorisé",
                        message:err.message,
                        stackTrace : err.stack
                    })
        default:
            console.log("All god")
    




    }

    
};


module.exports = errorHandler;