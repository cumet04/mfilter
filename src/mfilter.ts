import { ThreadWrapper } from "./wrapper"

type GmailThread = GoogleAppsScript.Gmail.GmailThread

export type FilterAction = (thread: GmailThread) => boolean

export function execute(filters: Array<FilterAction>, query: string = 'in:inbox -in:chats') {
    GmailApp.search(query).forEach(thread => {
        var tw = ThreadWrapper.wrap(thread)
        for (var filter of filters) {
            if (!filter(tw)) break
        }
        tw.refresh()
    })
}
