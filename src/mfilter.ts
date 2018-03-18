export type Mail = GoogleAppsScript.Gmail.GmailMessage

export type FilterAction = (mail: Mail) => boolean

export function execute(filters: Array<FilterAction>, query: string = 'in:inbox -in:chats') {
    GmailApp.search(query).forEach(thread => {
        var mail = GmailApp.getMessagesForThread(thread).pop()
        if (mail == undefined) return
        for (var filter of filters) {
            if (!filter(mail)) break
        }
    })
}
