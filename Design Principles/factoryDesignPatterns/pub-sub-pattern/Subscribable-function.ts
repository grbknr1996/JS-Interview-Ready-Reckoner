export function createSubscibable<MessageType>() {
  const subsibers: Set<(msg: MessageType) => void> = new Set();

  return {
    subscribe(cb: (msg: MessageType) => void): () => void {
      subsibers.add(cb);
      return () => {
        subsibers.delete(cb);
      };
    },
    publish(msg: MessageType): void {
      subsibers.forEach((cb) => cb(msg));
    },
  };
}
