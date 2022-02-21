import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { classNames } from "@lib/utils/classNames";

import styles from "./style.module.scss";
import { languageKey, localesKey } from "./LanguageKey.js";
import CheckCircleIcon from "@utils/icons/CheckCircleIcon";
import SearchIcon from "@utils/icons/SearchIcon";

const DEBOUNCE_TIMER = 200;

const LANGUAGES = Object.values(languageKey);

const LanguageDropdown = ({ lightMode, mobileView }) => {
  const router = useRouter();
  const { locale } = router;

  const [languages, setLanguages] = useState(LANGUAGES);
  const [searchValue, setSearchValue] = useState("");
  const debounceTimer = useRef(null);

  const searchLanguage = (value) => {
    if (!value) {
      setLanguages(LANGUAGES);
      return;
    }
    const searchedLanguages = LANGUAGES.filter((el) =>
      el.toLowerCase().includes(value.toLowerCase())
    );
    setLanguages(searchedLanguages);
  };

  const debounceSearch = (value) => {
    setSearchValue(value);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(
        () => searchLanguage(value),
        DEBOUNCE_TIMER
      );
    } else {
      debounceTimer.current = setTimeout(
        () => searchLanguage(value),
        DEBOUNCE_TIMER
      );
    }
  };

  return (
    <>
      <section
        className={classNames(
          "flex items-center gap-2 mb-4",
          mobileView && "mb-8"
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
          onChange={(e) => debounceSearch(e.target.value)}
          className={classNames(
            "bg-inherit outline-0 border-0 placeholder-b0c4db max-w-[250px]",
            mobileView && "text-xl"
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
              mobileView && "mb-2"
            )}
          >
            <a
              className={styles.dropdown_list_link}
              href={`/${localesKey[lang] === "en" ? "" : localesKey[lang]}`}
            >
              {lang}
            </a>
            {localesKey[lang] === locale && <CheckCircleIcon />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LanguageDropdown;
