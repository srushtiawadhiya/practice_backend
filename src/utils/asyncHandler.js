//first approach in promises
const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}


export {asyncHandler}





















//second approch in try and catch 
/*
const asyncHandler = (fn) => async (req,res,next) => { // function ko function mai pass kr n 
   try {
        await fn(req,res,next)
   }catch (error) {
    res.status(error.code || 500).json({
        success: false,
        message: error.message
    })
   }
} 
   */