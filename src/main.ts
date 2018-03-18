import * as mfilter from "./mfilter"
var global: any

function main() {
    mfilter.execute([
        (mail: mfilter.Mail) => {
            Logger.log("flow1.action")
            Logger.log(mail.getDate())
            return true
        },
        (mail: mfilter.Mail) => {
            Logger.log("flow2.action")
            return false
        },
        (mail: mfilter.Mail) => {
            Logger.log("flow3.action")
            return true
        },
    ])
}

global.main = main
