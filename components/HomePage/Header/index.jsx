import { SelectLanguage } from "@components/common/SelectLanguage";
import Link from "next/link";
import { BurgerComponent } from "@components/HomePage/BurgerComponent/BurgerComponent";
import { useState, Fragment } from "react";
import { classNames } from "@lib/utils/classNames";

import styles from "./header.module.scss";
import { Dialog, Transition } from "@headlessui/react";
import { MobileMenu } from "@components/MobileMenu";

import { Trans } from "@lingui/macro";

const logo = "/logos/neptune-mutual-full.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  function onClose() {
    setIsOpen(false);
    // TODO: Find a better solution so that menu can also be closed by pressing `Esc`
  }

  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <Link href="/" passHref>
              <img src={logo} alt="Neptune Mutual Logo" />
            </Link>
          </div>
          <div className={styles.navbar_content}>
            <a
              href="https://medium.com/neptune-mutual"
              rel="noreferrer"
              target="_blank"
              className={styles.nav_item}
              aria-label="Blog"
            >
              <Trans>Blog</Trans>
            </a>
            <a
              href="https://forms.clickup.com/f/6vvfh-4624/UVJHEDAS2T3P6DCFJM"
              rel="noreferrer"
              target="_self"
              aria-label="Contact"
              className={classNames(styles.nav_item, styles.last_nav)}
            >
              <Trans>Contact</Trans>
            </a>
            <SelectLanguage />
          </div>
          <BurgerComponent isOpen={isOpen} onToggle={toggleMenu} />
        </div>
      </div>
      <MenuModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export const MenuModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform shadow-xl rounded-2xl">
                <MobileMenu />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
