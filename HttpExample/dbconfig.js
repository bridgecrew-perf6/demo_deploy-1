// This is database configuration file
const config={
    user:'se_writer',
    password:'Se@1234!',
    server:'idc-srv-sql4',
    database:'SE_MachineAdvisor',
    port :1433,
    options: {
        enableArithPort: true,
        validateBulkLoadParameters:false,
        encrypt: false,
    }
   
}

module.exports=config;