const createError =(code,message)=> {
    //code
    const error = new Error(message)
    error.statusCode = code;
    throw error;
}


module.exports =createError
