// gapps's type names are too long...
type Message = GoogleAppsScript.Gmail.GmailMessage;
type Thread = GoogleAppsScript.Gmail.GmailThread;

import { Actions } from "./actions";
type Filter = (t: Thread) => boolean;

function main() {
  Actions.setDryRun(true);

  const query = "in:inbox -in:chats";

  execute(
    query,
    [
      (thread: Thread) => {
        const from = thread.getMessages()[0].getFrom();
        return from.includes("notifications@github.com");
      }
    ],
    (target: Thread) => {
      Actions.markRead(target);
    }
  );
}

function execute(
  query: string,
  filters: Array<Filter>,
  action: Actions.Action
) {
  GmailApp.search(query).forEach(thread => {
    for (let filter of filters) {
      if (!filter(thread)) return;
      action(thread);
    }
  });
}
