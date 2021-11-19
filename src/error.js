export const TOO_MUCH_PADDING = "sankey.layout.tooMuchPadding";
export const TOO_SMALL_NODE = "sankey.layout.tooSmallNode";

export class SankeyError extends Error {
  constructor(type, message, data) {
    super(message);
    this.type = type;
    this.data = data;
  }
}
