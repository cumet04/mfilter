type Message = GoogleAppsScript.Gmail.GmailMessage;
type Thread = GoogleAppsScript.Gmail.GmailThread;

export module Actions {
  export type Action = (t: Message | Thread) => void;

  let dry_run = false;
  export function setDryRun(v: boolean) {
    dry_run = v;
  }

  export function markRead(target: Message | Thread) {
    if (dry_run) return;
    target.markRead();
  }
}
