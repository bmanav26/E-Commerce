const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
};
// {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}

module.exports = connectDatabase;
