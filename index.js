const mongoose = require("mongoose");
const Listing = require("./models/Listing");
const listings = require("./data");

const start = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");

        await Listing.deleteMany(); // clear previous entries
        await Listing.insertMany(listings);

        console.log("✅ Listings inserted successfully!");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error inserting listings:", err);
        process.exit(1);
    }
};

start();
