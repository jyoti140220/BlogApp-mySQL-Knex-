const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'Jyoti34@12',
        database:'BlogApp'
    }
})

module.exports=knex