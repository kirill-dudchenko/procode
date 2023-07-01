const moment = require('moment');
const momentDurationFormatSetup = require("moment-duration-format");
let dateOfBirth = ''

setInterval(() => {
    console.log('Прошло еще десять минут...');
}, 600000);

const setAge = (age) => {
    dateOfBirth = age;
}

const getAge = () => {
    if (dateOfBirth == '') {
        console.log('Дата рождения не установлена')
        return false
    }
    let age = moment.duration(moment().diff(dateOfBirth))
    return moment.duration(age, "milliseconds").format();
}

module.exports = {
    setAge,
    getAge,
    dateOfBirth
}