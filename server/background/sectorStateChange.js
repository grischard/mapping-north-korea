const Sector = require("../models/Sector.js");

module.exports = {
    run: () => {
        //setInterval(() => {
            Sector.find({})
            .populate({
                path: "state"
            })
            .populate({
                path: "events"
            })
            .exec(function (err, sectors) {
                if (err) {
                    log.err(" <= RES /sector ERROR db error.", err);
                    res.sendStatus(500);
                    return;
                }

                sectors = sectors.filter(x => x.state.title === "Being edited" || x.state.title === "Being reviewed");

                console.log(sectors);
            });
        //}, 5000);
    }
}