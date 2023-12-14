
const mongoose = require("mongoose");

const promotionaddingSchema = new mongoose.Schema(
    {
        Image:String
    },
    {
        collection: "ImageDetails",
    }
);

mongoose.model("Promotion",promotionaddingSchema);
