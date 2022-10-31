import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";
import { useCookies } from "context/cookies";

function handleClose() {
  // Called when hit `Esc`
  console.log("Please accept cookies");
}

export const CookiePolicy = () => {
  const { accepted, setAccepted } = useCookies();
  const [isOpen, setIsOpen] = useState(!accepted);

  function closeModal(allow) {
    setIsOpen(false);
    if (allow) setAccepted(true);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={handleClose}>
        <div className={styles.dialog_content}>
          <Transition.Child as={Fragment}>
            <Dialog.Overlay className={styles.overlay} />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className={styles.trick_el} aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child as={Fragment}>
            <div className={styles.content_container}>
              <Dialog.Title as="h3" className={styles.title}>
                <Trans>Cookies disclaimer</Trans>
              </Dialog.Title>
              <p>
                <Trans>
                  We use third-party cookies in order to personalize your
                  experience.
                </Trans>
              </p>
              <div>
                <button
                  className={styles.accept}
                  onClick={() => closeModal(true)}
                >
                  <Trans>Accept</Trans>
                </button>
                <button
                  className={styles.decline}
                  onClick={() => closeModal(false)}
                >
                  <Trans>Decline</Trans>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
