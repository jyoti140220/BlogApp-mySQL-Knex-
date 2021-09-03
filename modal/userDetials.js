const knex=require('../config/db.connection.js')

knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('password')
    table.string('email')
}).then(()=>{console.log("table crated....")}).catch((err)=>{console.log(err)})


knex.schema.createTableIfNotExists('postTable',(table)=>{
    table.increments('id');
    table.string('post');
    table.string('discription');
    table.integer('like').notNullable().defaultTo('0')
    table.integer('dislike').notNullable().defaultTo('0')
}).then(()=>{console.log("post table created..")}).catch((err)=>{console.log(err)})


module.exports=knex