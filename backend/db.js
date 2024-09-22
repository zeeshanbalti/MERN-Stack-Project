const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://baltiZeeshan:zeeshan968972006.9@cluster0.mgedi.mongodb.net/foodForPractic?retryWrites=true&w=majority';
const mongoDb = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        const fetchDatas = mongoose.connection.db.collection("baltiData");

        if (fetchDatas) {
            console.log("Collection 'baltiData' exists.");

            const data = await fetchDatas.find({}).toArray(); // Await the promise

            if (data.length === 0) {
                console.log('No data found in the baltiData collection.');
            } else {
                // console.log('Fetched data:', data); 
            }
        } else {
            console.log("Collection 'baltiData' does not exist.");
        }

    } catch (err) {
        console.error("MongoDB connection error or fetching error:", err);
    }
};

module.exports = mongoDb;
