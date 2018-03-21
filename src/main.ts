import * as mfilter from "./mfilter"
import { setDryRun } from "./wrapper"
var global: any
type GmailThread = GoogleAppsScript.Gmail.GmailThread

function main() {
    setDryRun()

    mfilter.execute([
        (thread: GmailThread) => {
            Logger.log("flow1.action")
            Logger.log(`title: ${thread.getFirstMessageSubject()}`)
            Logger.log(thread.getLastMessageDate())
            return true
        },
        (thread: GmailThread) => {
            Logger.log("flow2.action")
            Logger.log(`title: ${thread.getFirstMessageSubject()}`)
            return false
        },
        (thread: GmailThread) => {
            Logger.log("flow3.action")
            Logger.log(`title: ${thread.getFirstMessageSubject()}`)
            return true
        },
    ])
}

global.main = main
