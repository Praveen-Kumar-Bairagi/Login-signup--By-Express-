const option={
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'Praveen@1234',
        database:'lsjwt'
    }
}

const knex=require('knex')(option);

knex.schema.createTable('information',(table)=>{
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('password')
}).then(()=>{
    console.log('table created')
}).catch((a)=>{
    console.log("table already ctreated")
})

///////////////likedislike////////////

knex.schema.createTable('likedishlike',(table)=>{
    table.increments('id')
    table.boolean('like')
    table.boolean('dishlike')
}).then(()=>{
    console.log('table created')
}).catch((a)=>{
    console.log("table already ctreated")
})

// ////////////////blogs//////////////

knex.schema.createTable('blogs',(table)=>{
    table.increments('id')
    table.string('title')
    table.string('author')
    table.string('description')
}).then(()=>{
    console.log('table created')
}).catch((a)=>{
    console.log("table already ctreated")
})

module.exports=knex
