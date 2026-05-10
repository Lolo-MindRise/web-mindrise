declare global {
  interface Window {
    __mrCursorMounted?: boolean;
    __mrCursorRaf?: number;
    __mrAnchorMounted?: boolean;
  }
}
export {};
