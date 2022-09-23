import { useEffect, useState } from "react";

const useCookies = ({ cookieName }) => {
  let cookieValidity = 12;

  const [showPopup, setShowPopup] = useState(false);
  const [cookieDomain, setCookieDomain] = useState();

  const getCookie = (name) => {
    if (process.browser) {
      let v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    }
  };

  useEffect(() => {
    let userConsent = getCookie(cookieName);
    if (!userConsent) {
      setShowPopup(true);
    }
  }, [cookieName]);

  const setConsent = (consent) => {
    if (process.browser) {
      let cookieExpiry = new Date();
      cookieExpiry = new Date(
        cookieExpiry.setMonth(cookieExpiry.getMonth() + cookieValidity)
      );
      document.cookie =
        cookieName +
        '={"consent":' +
        consent +
        ',"timestamp": "' +
        Date.now() +
        '"}; domain=' +
        cookieDomain +
        "; path=/; expires=" +
        cookieExpiry +
        ";";
      setShowPopup(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCookieDomain(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    let currentCookie = JSON.parse(getCookie(cookieName));
    if (currentCookie?.consent) {
      setShowPopup(false);
    }
  }, [cookieName]);

  return {
    showPopup,
    setShowPopup,
    getCookie,
    setConsent,
  };
};

export default useCookies;
