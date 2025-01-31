const express = require('express')
const app = express.Router()

app.get('/:date?',(req,res,next)=>{
    let   { date:reqDate } = req.params
    const isUnix = !isNaN(reqDate)
    reqDate = isUnix ? Number(reqDate) : reqDate
    let dateTime = new Date();
    if ( reqDate ){
        dateTime = new Date(reqDate)
    }
    if ( dateTime != 'Invalid Date'){
        return res.status(200).json({unix:dateTime.getTime(),utc:dateTime.toUTCString()})
    }
    next(new Error('Invalid Date'))
})

module.exports.timestampRoute = app