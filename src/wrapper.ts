type GmailMessage = GoogleAppsScript.Gmail.GmailMessage
type GmailThread = GoogleAppsScript.Gmail.GmailThread
type GmailAttachment = GoogleAppsScript.Gmail.GmailAttachment
type GmailLabel = GoogleAppsScript.Gmail.GmailLabel
type Integer = GoogleAppsScript.Integer

var dry_run: boolean = true
export function setDryRun(v: boolean) {
    dry_run = v
}

function alertLockedFunction(name: string) {
    Logger.log(`locked function "${name}" is called. nothing done.`)
}

export class MessageWrapper implements GmailMessage {
    private action_log: string[] = []
    outputActions(): string {
        return String(this.action_log)
    }
    constructor(private original: GmailMessage) { }
    static wrap(original: GmailMessage): GmailMessage {
        return original instanceof MessageWrapper ? original : new MessageWrapper(original)
    }

    forward(recipient: string): GmailMessage
    forward(recipient: string, options: Object): GmailMessage
    forward(recipient: string, options?: Object): GmailMessage {
        alertLockedFunction("forward")
        return this
    }
    getAttachments(): GmailAttachment[] { return this.original.getAttachments() }
    getBcc(): string { return this.original.getBcc() }
    getBody(): string { return this.original.getBody() }
    getCc(): string { return this.original.getCc() }
    getDate(): Date { return this.original.getDate() }
    getFrom(): string { return this.original.getFrom() }
    getId(): string { return this.original.getId() }
    getPlainBody(): string { return this.original.getPlainBody() }
    getRawContent(): string { return this.original.getRawContent() }
    getReplyTo(): string { return this.original.getReplyTo() }
    getSubject(): string { return this.original.getSubject() }
    getThread(): GmailThread { return this.original.getThread() }
    getTo(): string { return this.original.getTo() }
    isDraft(): boolean { return this.original.isDraft() }
    isInChats(): boolean { return this.original.isInChats() }
    isInInbox(): boolean { return this.original.isInInbox() }
    isInTrash(): boolean { return this.original.isInTrash() }
    isStarred(): boolean { return this.original.isStarred() }
    isUnread(): boolean { return this.original.isUnread() }
    markRead(): GmailMessage {
        this.action_log.push("markRead")
        return dry_run ? this : MessageWrapper.wrap(this.original.markRead())
    }
    markUnread(): GmailMessage {
        this.action_log.push("markUnread")
        return dry_run ? this : MessageWrapper.wrap(this.original.markUnread())
    }
    moveToTrash(): GmailMessage {
        this.action_log.push("moveToTrash")
        return dry_run ? this : MessageWrapper.wrap(this.original.moveToTrash())
    }
    refresh(): GmailMessage {
        this.action_log.push("refresh")
        return dry_run ? this : MessageWrapper.wrap(this.original.refresh())
    }
    reply(body: string): GmailMessage;
    reply(body: string, options: Object): GmailMessage;
    reply(body: string, options?: Object): GmailMessage {
        alertLockedFunction("reply")
        return this
    }
    replyAll(body: string): GmailMessage;
    replyAll(body: string, options: Object): GmailMessage
    replyAll(body: string, options?: Object): GmailMessage {
        alertLockedFunction("replyAll")
        return this
    }
    star(): GmailMessage {
        this.action_log.push("star")
        return dry_run ? this : MessageWrapper.wrap(this.original.star())
    }
    unstar(): GmailMessage {
        this.action_log.push("unstar")
        return dry_run ? this : MessageWrapper.wrap(this.original.unstar())
    }
}

export class ThreadWrapper implements GmailThread {
    private action_log: string[] = []
    outputActions(): string {
        return String(this.action_log)
    }
    constructor(private original: GmailThread) { }
    static wrap(original: GmailThread): GmailThread {
        return original instanceof ThreadWrapper ? original : new ThreadWrapper(original)
    }

    getFirstMessageSubject(): string { return this.original.getFirstMessageSubject() }
    getId(): string { return this.original.getId() }
    getLabels(): GmailLabel[] { return this.original.getLabels() }
    getLastMessageDate(): Date { return this.original.getLastMessageDate() }
    getMessageCount(): Integer { return this.original.getMessageCount() }
    getPermalink(): string { return this.original.getPermalink() }
    hasStarredMessages(): boolean { return this.original.hasStarredMessages() }
    isImportant(): boolean { return this.original.isImportant() }
    isInChats(): boolean { return this.original.isInChats() }
    isInInbox(): boolean { return this.original.isInInbox() }
    isInSpam(): boolean { return this.original.isInSpam() }
    isInTrash(): boolean { return this.original.isInTrash() }
    isUnread(): boolean { return this.original.isUnread() }
    getMessages(): GmailMessage[] {
        return this.original.getMessages().map(m => { return MessageWrapper.wrap(m) })
    }

    markImportant(): GmailThread {
        this.action_log.push("markImportant")
        return dry_run ? this : ThreadWrapper.wrap(this.original.markImportant())
    }
    markRead(): GmailThread {
        this.action_log.push("markRead")
        return dry_run ? this : ThreadWrapper.wrap(this.original.markRead())
    }
    markUnimportant(): GmailThread {
        this.action_log.push("markUnimportant")
        return dry_run ? this : ThreadWrapper.wrap(this.original.markUnimportant())
    }
    markUnread(): GmailThread {
        this.action_log.push("markUnread")
        return dry_run ? this : ThreadWrapper.wrap(this.original.markUnread())
    }
    moveToArchive(): GmailThread {
        this.action_log.push("moveToArchive")
        return dry_run ? this : ThreadWrapper.wrap(this.original.moveToArchive())
    }
    moveToInbox(): GmailThread {
        this.action_log.push("moveToInbox")
        return dry_run ? this : ThreadWrapper.wrap(this.original.moveToInbox())
    }
    moveToSpam(): GmailThread {
        this.action_log.push("moveToSpam")
        return dry_run ? this : ThreadWrapper.wrap(this.original.moveToSpam())
    }
    moveToTrash(): GmailThread {
        this.action_log.push("moveToTrash")
        return dry_run ? this : ThreadWrapper.wrap(this.original.moveToTrash())
    }
    refresh(): GmailThread {
        this.action_log.push("refresh")
        return dry_run ? this : ThreadWrapper.wrap(this.original.refresh())
    }
    addLabel(label: GmailLabel): GmailThread {
        this.action_log.push(`addLabel(${label.getName()})`)
        return dry_run ? this : ThreadWrapper.wrap(this.original.addLabel(label))
    }
    removeLabel(label: GmailLabel): GmailThread {
        this.action_log.push(`removeLabel(${label.getName()})`)
        return dry_run ? this : ThreadWrapper.wrap(this.original.removeLabel(label))
    }

    reply(body: string): GmailThread;
    reply(body: string, options: Object): GmailThread;
    reply(body: string, options?: Object): GmailThread {
        alertLockedFunction("reply")
        return this
    }
    replyAll(body: string): GmailThread;
    replyAll(body: string, options: Object): GmailThread;
    replyAll(body: string, options?: Object): GmailThread {
        alertLockedFunction("replyAll")
        return this
    }
}
