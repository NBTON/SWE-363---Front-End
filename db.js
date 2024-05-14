const mongoose = require("mongoose");
// const { DATABASE_URL } = require("./envVariables");
const DATABASE_URL = "mongodb://127.0.0.1:27017/conect-ed";
(async () => {
    try {
        const connectioninstance = await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("db connected on", DATABASE_URL, connectioninstance.connection.host);
    } catch (error) {
        console.log(error.message, DATABASE_URL,);
        process.exit(1)
    }
})();
