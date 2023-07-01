const moment = require('moment');
const momentDurationFormatSetup = require("moment-duration-format");

const getAge = (dateOfBirth) => {
    let age = moment.duration(moment().diff(dateOfBirth))
    return moment.duration(age, "milliseconds").format();
}

module.exports = {
    getAge
}