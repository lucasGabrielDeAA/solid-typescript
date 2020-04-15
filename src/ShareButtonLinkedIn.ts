import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
  constructor(url: string, className: string, eventHandler: EventHandler) {
    super(url, className, eventHandler);
  }

  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}