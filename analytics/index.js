import { Analytics } from "./analytics";
import * as provider from "./providers/amplitude-browser";

const logPageLoad = async (pageName = "index") => {
  const a = new Analytics(provider);
  await a.logPageLoad(pageName);
};

const logButtonClick = async (
  buttonName,
  buttonDescription,
  eventData = {}
) => {
  const a = new Analytics(provider);
  await a.logButtonClick(buttonName, buttonDescription, eventData);
};

const logGesture = async (
  name,
  description,
  eventData = {},
  type = "swipe"
) => {
  const a = new Analytics(provider);
  await a.logGesture(name, description, eventData, type);
};

export { logPageLoad, logButtonClick, logGesture };
