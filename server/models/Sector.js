const mongoose = require("mongoose");

var sectorSchema = new mongoose.Schema({
    sectorSet: { type: mongoose.Schema.Types.ObjectId, ref: "SectorSet", required: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true },
    coordinates: { type: [[[ Number ]]], required: true }
});
sectorSchema.virtual("events", {
    ref: 'Event',
    localField: '_id',
    foreignField: 'sector'
  });

module.exports = mongoose.model("Sector", sectorSchema);