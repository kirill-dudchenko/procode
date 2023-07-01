const moment = require('moment');
const momentDurationFormatSetup = require("moment-duration-format");

function getAge(dateOfBirth){
    let age = moment.duration(moment().diff(dateOfBirth))
    return moment.duration(age, "milliseconds").format();
}

console.log(getAge("1995-04-03")) //output 26 years, 1 month, 19 days