module Actions {
  let dry_run = false;
  export function setDryRun(v: boolean) {
    dry_run = v;
  }

  export function markRead(target: Message | Thread) {
    target.markRead();
  }
}
