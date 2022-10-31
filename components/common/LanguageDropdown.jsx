import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { classNames } from "@lib/utils/classNames";

import styles from "./style.module.scss";
import { languageKey, localesKey } from "./LanguageKey.js";
import CheckCircleIcon from "@utils/icons/CheckCircleIcon";
import SearchIcon from "@utils/icons/SearchIcon";
import useDebounce from "hooks/useDebounce";
import { logButtonClick } from "@analytics/index";
import { analyticsLogger } from "@utils/logger";

const DEBOUNCE_TIMER = 200;

const LANGUAGES = Object.values(languageKey);

const LanguageDropdown = ({ lightMode, mobileView }) => {
  const router = useRouter();
  const { locale } = router;

  const [languages, setLanguages] = useState(LANGUAGES);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(searchValue, DEBOUNCE_TIMER);

  useEffect(() => {
    if (!debouncedSearch) {
      setLanguages(LANGUAGES);
      return;
    }
    const searchedLanguages = LANGUAGES.filter((el) =>
      el.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setLanguages(searchedLanguages);
  }, [debouncedSearch]);

  return (
    <>
      <section
        className={classNames(
          "flex items-center gap-2 mb-6",
          !mobileView && "px-4",
          styles.input_container
        )}
      >
        <SearchIcon
          height={mobileView ? 24 : 15}
          width={mobileView ? 24 : 15}
        />
        <input
          type="text"
          placeholder="Search Language"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={classNames(
            "bg-inherit outline-0 border-0 placeholder-b0c4db max-w-[250px]",
            styles.input_font_size
          )}
        />
      </section>
      <ul className={styles.language_list}>
        {languages.map((lang, idx) => (
          <li
            key={idx}
            className={classNames(
              styles.dropdown_list_items,
              localesKey[lang] === locale &&
                (lightMode ? styles.selected_lang_light : styles.selected_lang),
              mobileView && "mb-2",
              !mobileView && styles.dropdown__list_font_size
            )}
          >
            <a
              className={styles.dropdown_list_link}
              href={`/${localesKey[lang]}`}
              onClick={() =>
                analyticsLogger(() =>
                  logButtonClick(
                    `language switch:${
                      mobileView ? "mobile" : lightMode ? "footer" : "header"
                    }`,
                    "Language switch button clicked",
                    {
                      lang,
                      href: `/${localesKey[lang]}`,
                    }
                  )
                )
              }
            >
              {lang}
            </a>
            {localesKey[lang] === locale && (
              <CheckCircleIcon
                width={mobileView ? 24 : 18}
                height={mobileView ? 24 : 18}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LanguageDropdown;
