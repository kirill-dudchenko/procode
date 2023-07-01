const os = require('os')

let procObj = os.cpus()

function getName() {

    let name = "";
    
    for (let i in procObj) {
        name += ++i + ". " + procObj[0]['model']
        name += "\n"
    }

    return name;
}

function getSpeed() {
    
    let speed = ""

    for (let i in procObj) {
        speed += ++i + ". " + procObj[0]['speed']
        speed += "\n"
    }

    return speed;
}

module.exports = {
    name: getName(),
    speed: getSpeed()
}

