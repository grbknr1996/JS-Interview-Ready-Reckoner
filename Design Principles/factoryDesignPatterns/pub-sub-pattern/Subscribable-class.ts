export class Subscibable<MessageType> {
  private subsibers: Set<(msg: MessageType) => void> = new Set();
  constructor() {}

  subscribe(cb: (msg: MessageType) => void): () => void {
    this.subsibers.add(cb);
    return () => {
      this.subsibers.delete(cb);
    };
  }
  publish(msg: MessageType): void {
    this.subsibers.forEach((cb) => cb(msg));
  }
}
