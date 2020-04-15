import EventHandler from "./DOMEventHandler";

export default abstract class AbsctractShareButton {
  eventHandler: EventHandler;
  className: string;
  
  constructor(className: string, eventHandler: EventHandler) {
    this.className = className;
    this.eventHandler = eventHandler;
  }

  abstract createAction();

  bind() {
    const action = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, "click", action);
  }
}