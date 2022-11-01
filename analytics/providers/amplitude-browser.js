import * as amplitude from "@amplitude/analytics-browser";

const events = {
  PREMIUM: "PREMIUM",
  LIQUIDITY: "LIQUIDITY",
};

const init = (option) => {
  option = option || {};

  amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, null, {
    serverUrl: process.env.NEXT_PUBLIC_AMPLITUDE_SERVER_URL,

    // serverZone: amplitude.Types.ServerZone.US,
    serverZone: amplitude.Types.ServerZone.EU,
    ...option,
  });
};

const log = (funnel, journey, step, seq, account, event, props) => {
  init({});

  if (props) {
    amplitude.track(event, { funnel, journey, step, seq, ...props });
    return;
  }

  amplitude.track(event);
};

const logPremium = (account, coverKey, productKey, dollarValue) => {
  // funnel: Policy Purchase
  // journey: Purchase-Policy-Page-2
  // sequence: 9999
  // event: 'Closed/Won'

  init({});

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey;

  amplitude.revenue(
    new amplitude.Revenue()
      .setProductId(productId)
      .setRevenueType(events.PREMIUM)
      .setPrice(dollarValue)
      .setQuantity(1)
  );
};

const logAddLiquidity = (account, coverKey, productKey, dollarValue) => {
  // funnel: Liquidity Addition
  // journey: Add-Liquidity-Page-2
  // sequence: 9999
  // event: 'Closed/Won'

  init({});

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey;

  amplitude.revenue(
    new amplitude.Revenue()
      .setProductId(productId)
      .setRevenueType(events.LIQUIDITY)
      .setPrice(dollarValue)
  );
};

const logWalletConnected = async (account) => {
  init();
  createUserObject(account);

  try {
    const trackResult = await amplitude.track("new-browser", {
      name: "sam",
      place: "shire",
    }).promise;
    console.log({ trackResult });
  } catch (e) {
    console.log({ e });
  }
};

const logPageLoad = (pageName = "index") => {
  init();

  const eventName = "page-load";
  try {
    amplitude.track(eventName, {
      pageName,
    });

    // const event = new amplitude.Revenue()
    //   .setProductId("prod123")
    //   .setPrice(9.99)
    //   .setQuantity(21);

    // amplitude.revenue(event);
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logButtonClick = (
  buttonName,
  buttonDescription,
  eventData = {},
  type = "click"
) => {
  init();

  const eventName = `${buttonName} click`;

  try {
    amplitude.track(eventName, {
      buttonName,
      buttonDescription,
      type,
      ...eventData,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logGesture = (name, description, eventData = {}, type = "swipe") => {
  init();

  const eventName = `${name} ${type}`;

  try {
    amplitude.track(eventName, {
      name,
      description,
      type,
      ...eventData,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

export {
  log,
  logAddLiquidity,
  logPremium,
  logWalletConnected,
  logPageLoad,
  logButtonClick,
  logGesture,
};
