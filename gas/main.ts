// gapps's type names are too long...
type Message = GoogleAppsScript.Gmail.GmailMessage;
type Thread = GoogleAppsScript.Gmail.GmailThread;

import { Actions } from "./actions";

function main() {
  Actions.setDryRun(true);

  const query = "in:inbox -in:chats";
  const filters = [
    (thread: Thread) => {
      console.log("filter1");
      return true;
    },
    (thread: Thread) => {
      console.log("filter2");
      return false;
    },
    (thread: Thread) => {
      console.log("filter3");
      return true;
    }
  ];

  GmailApp.search(query).forEach(thread => {
    for (let filter of filters) {
      if (!filter(thread)) return;
    }
  });
}
