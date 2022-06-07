var config =require('./dbconfig');
const sql = require('mssql');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let pool =await sql.connect(config);
    // context.log("pool");
    // context.log(pool);
    let input=req.body;
    // context.log(input);
    let insert_db=await pool.request().input('Machine1', sql.NVarChar, input.name)
    //insert_dailly
    .input('Time1', sql.DateTime, input.timestamp)
    .input('Size1', sql.Int, input.data.size)
    .input('Result1', sql.Bit, input.data.result)
    .query("INSERT INTO TIT50test(Machine,Time,Size,Result)VALUES(@Machine1,@Time1,@Size1,@Result1)",(err,res)=> {})
    .query("SElect * from TIT50test where Time=@Time1")
    context.res = {
        body:insert_db.recordset[0]
    };
}