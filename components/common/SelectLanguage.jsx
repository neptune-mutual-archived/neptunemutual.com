import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { classNames } from "@lib/utils/classNames";

import styles from "./style.module.scss";
import GlobalLanguageIcon from "@utils/icons/GlobalLanguageIcon";
import { languageKey } from "./LanguageKey.js";
import LanguageDropdown from "@components/common/LanguageDropdown";
import useOnClickOutside from "hooks/useOnClickOutside";

export function SelectLanguage({
  lightMode = false,
  showDropdownOnFocus = true,
  onButtonClick,
  mobileView = false,
}) {
  const router = useRouter();
  const { locale } = router;

  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);

  const languagDropdownRef = useRef();

  const onLanguageButtonClick = () => setShowLanguageDropDown((prev) => !prev);

  const closeLanguageDropdowm = () => setShowLanguageDropDown(false);

  useOnClickOutside(languagDropdownRef, closeLanguageDropdowm);

  return (
    <div ref={languagDropdownRef} className="rounded flex items-end py-1 z-30">
      <div className={styles.dropdown_container}>
        <button
          onClick={onButtonClick ? onButtonClick : onLanguageButtonClick}
          className={classNames(
            "bg-transparent border  relative w-full py-2 px-3 text-left rounded cursor-pointer focus:outline-none  sm:text-sm",
            styles.dropdown_btn,
            mobileView && styles.mobile_dropdown_btn
          )}
        >
          <div className="flex gap-2">
            <GlobalLanguageIcon
              className={mobileView ? styles.svg_color : undefined}
            />
            <span className={classNames("block leading-5 font-inter text-lg")}>
              {languageKey[locale]}
            </span>
          </div>
        </button>
        {showDropdownOnFocus && showLanguageDropDown && (
          <div className={styles.dropdown_menu}>
            <div
              className={classNames(
                styles.dropdown_list,
                lightMode && styles.dropdown_list_background_light
              )}
            >
              <LanguageDropdown lightMode={lightMode} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
