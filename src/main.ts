import * as mfilter from "./mfilter"
var global: any

function main() {
    mfilter.execute([
        (mail: mfilter.Mail) => {
            Logger.log("flow1.action")
            Logger.log(`title: ${mail.getSubject()}`)
            Logger.log(mail.getDate())
            return true
        },
        (mail: mfilter.Mail) => {
            Logger.log("flow2.action")
            Logger.log(`title: ${mail.getSubject()}`)
            return false
        },
        (mail: mfilter.Mail) => {
            Logger.log("flow3.action")
            Logger.log(`title: ${mail.getSubject()}`)
            return true
        },
    ])
}

global.main = main
