import { SelectLanguage } from "@components/common/SelectLanguage";
import Link from "next/link";
import { BurgerComponent } from "@components/HomePage/BurgerComponent/BurgerComponent";
import { useState, Fragment } from "react";
import { classNames } from "@lib/utils/classNames";

import styles from "./header.module.scss";
import { Dialog, Transition } from "@headlessui/react";
import { MobileMenu } from "@components/MobileMenu";

import { Trans } from "@lingui/macro";
import { logButtonClick } from "@analytics/index";
import { analyticsLogger } from "@utils/logger";

const logo = "/logos/neptune-mutual-full.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const onLanguageButtonClick = () => setIsLanguageDropdownOpen(true);

  const toggleMenu = () => {
    analyticsLogger(() =>
      logButtonClick("Mobile menu open", "Opened mobile menu", {
        screenWidth: window?.screen?.width ?? "N/A",
      })
    );
    if (!isLanguageDropdownOpen) {
      setIsOpen((prev) => !prev);
    }
  };

  function onClose() {
    if (isLanguageDropdownOpen) {
      setIsLanguageDropdownOpen(false);
    } else {
      analyticsLogger(() =>
        logButtonClick("Mobile menu close", "Closed mobile menu", {
          screenWidth: window?.screen?.width ?? "N/A",
        })
      );
      setIsOpen(false);
    }
    // TODO: Find a better solution so that menu can also be closed by pressing `Esc`
  }

  const blogLink = "https://blog.neptunemutual.com";

  return (
    <>
      <div className={`section_border_container ${styles.header_wrapper}`}>
        <div
          className={`${styles.header_container} section_horizontal_container`}
        >
          <div className={styles.logo}>
            <Link href="/" passHref>
              <img src={logo} alt="Neptune Mutual Logo" />
            </Link>
          </div>
          <div className={styles.navbar_content}>
            <a
              href={blogLink}
              rel="noreferrer nofollow"
              target="_blank"
              className={styles.nav_item}
              aria-label="Blog"
              onClick={() =>
                analyticsLogger(() =>
                  logButtonClick(
                    "Header Blog Link",
                    "Blog link clicked at header",
                    {
                      blogLink,
                    }
                  )
                )
              }
            >
              <Trans>Blog</Trans>
            </a>
            <a
              href="https://forms.clickup.com/f/6vvfh-4624/UVJHEDAS2T3P6DCFJM"
              rel="noreferrer nofollow"
              target="_self"
              aria-label="Contact"
              className={classNames(styles.nav_item, styles.last_nav)}
              onClick={() =>
                analyticsLogger(() =>
                  logButtonClick(
                    "Header Contact Link",
                    "Contact link clicked at header",
                    {
                      contactLink:
                        "https://forms.clickup.com/f/6vvfh-4624/UVJHEDAS2T3P6DCFJM",
                    }
                  )
                )
              }
            >
              <Trans>Contact</Trans>
            </a>
            <SelectLanguage />
          </div>
          {!isOpen && <BurgerComponent isOpen={isOpen} onToggle={toggleMenu} />}
        </div>
      </div>
      <MenuModal
        isOpen={isOpen}
        onClose={onClose}
        isLanguageDropdownOpen={isLanguageDropdownOpen}
        onLanguageButtonClick={onLanguageButtonClick}
      />
    </>
  );
};

export const MenuModal = ({
  isOpen,
  onClose,
  isLanguageDropdownOpen,
  onLanguageButtonClick,
}) => {
  return (
    <div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-10 block overflow-y-auto sm:hidden"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 overflow-y-auto bg-[#01052D] bg-opacity-80 backdrop-blur-xl" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={classNames(
                  "inline-block w-full max-w-md  text-left transition-all transform shadow-xl rounded-2xl h-screen",
                  isLanguageDropdownOpen ? "align-top" : "align-middle",
                  isLanguageDropdownOpen ? "py-6" : "p-6"
                )}
              >
                <div className="absolute right-0">
                  <BurgerComponent isOpen={true} onToggle={onClose} />
                </div>
                <div className="mt-12">
                  <MobileMenu
                    isLanguageDropdownOpen={isLanguageDropdownOpen}
                    onLanguageButtonClick={onLanguageButtonClick}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
