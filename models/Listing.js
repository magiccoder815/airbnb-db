const mongoose = require("mongoose");

const HostSchema = new mongoose.Schema({
    host_url: String,
    host_id: String,
    host_name: String,
    avatar_url: String,
    superhost: Boolean,
    reviews: Number,
    rating: Number,
    about: String,
    started_year: Number,
    languages: [String],
    location: {
        city: String,
        state: String,
    },
    job: String,
    total_listings: Number,
    listings: [String],
});

const ListingSchema = new mongoose.Schema({
    link: String,
    listing_id: String,
    title: String,
    listing_type: String,
    listing_price: Number,
    zipcode: Number,
    host_url: String,
    host: HostSchema,
});

module.exports = mongoose.model("Listing", ListingSchema);
