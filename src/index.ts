import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import AbsctractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler";

const eventHandler = new DOMEventHandler();
// const eventHandler = new MockEventHandler();

const facebook: AbsctractShareButton = new ShareButtonFacebook("http://www.github.com/lucasGabrielDeAA", ".btn-facebook", eventHandler);
facebook.bind();

const twitter: AbsctractShareButton = new ShareButtonTwitter("http://www.github.com/lucasGabrielDeAA", ".btn-twitter", eventHandler);
twitter.bind();

const linkedin: AbsctractShareButton = new ShareButtonLinkedin("http://www.github.com/lucasGabrielDeAA", ".btn-linkedin", eventHandler);
linkedin.bind();

const print: AbsctractShareButton = new ShareButtonPrint(".print", eventHandler);
print.bind();
