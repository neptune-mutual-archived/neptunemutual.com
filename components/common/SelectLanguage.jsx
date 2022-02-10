import React, { useState } from "react";
import ArrowLeftIcon from "@utils/icons/ArrowLeftIcon";
import { useRouter } from "next/router";
import { classNames } from "@lib/utils/classNames";

import styles from "./style.module.scss";

export function SelectLanguage({ textFill, arrowFill, borderFill }) {
  const router = useRouter();
  const { locale } = router;
  const [selectedLang, setSelectedLang] = useState(() =>
    locale === "zh" ? "zh" : "en"
  );

  const handleClick = (e, lang) => {
    e.preventDefault();
    router.push(router.asPath, "", { locale: lang });
    setSelectedLang(lang);
  };

  return (
    <div className="rounded flex items-end py-1 z-30">
      <div className={styles.dropdown_container}>
        <button
          className={classNames(
            borderFill ? borderFill : "border-333333",
            "bg-transparent border  relative w-full py-2 px-3 text-left rounded cursor-pointer focus:outline-none  sm:text-sm",
            styles.dropdown_btn
          )}
        >
          <span
            className={classNames(
              textFill ? textFill : "text-black",
              "block leading-5 font-inter text-lg pr-7"
            )}
          >
            {selectedLang}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <div className="-rotate-90 relative top-1 pb-3">
              <ArrowLeftIcon
                className={classNames(
                  arrowFill ? arrowFill : "fill-black",
                  "w-4 h-5"
                )}
              />
            </div>
          </span>
        </button>
        <div className={styles.dropdown_menu}>
          <ul
            className={classNames(
              styles.dropdown_list,
              borderFill ?? "border-333333",
              textFill ?? "text-black"
            )}
          >
            {router.locales.map((lang, idx) => (
              <li
                key={idx}
                className={classNames(
                  lang === selectedLang && "text-amber-600"
                )}
              >
                <a href={"/"} onClick={(e) => handleClick(e, lang)}>
                  {lang}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
