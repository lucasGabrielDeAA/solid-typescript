import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  constructor(url: string, className: string, eventHandler: EventHandler) {
    super(url, className, eventHandler);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}