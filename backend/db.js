const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('Database is connected!!!!!!')
    } catch (error) {
        console.error(`Failed to connect Database ${error.message}`)
    }
}