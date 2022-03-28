import LinkedinFilledIcon from "@utils/icons/LinkedinFilledIcon";
import TwitterFilledIcon from "@utils/icons/TwitterFilledIcon";
import MediumFilledIcon from "@utils/icons/MediumFilledIcon";
import FacebookFilledIcon from "@utils/icons/FacebookFilledIcon";
import styles from "./style.module.scss";
import { teamMembers } from "@lib/data/team-data";

export const TeamMemberDetails = ({ idx }) => {
  const { name, title, nameInvariant, links } =
    teamMembers[idx] || teamMembers[0];

  return (
    <div className={styles.details_wrapper}>
      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.role}>{title}</h4>
      <div className={styles.links}>
        {links?.linkedIn && (
          <a
            href={links.linkedIn}
            target={"_blank"}
            rel="noreferrer nofollow"
            aria-label={"LinkedIn Profile of " + nameInvariant}
          >
            <LinkedinFilledIcon />
          </a>
        )}
        {links?.twitter && (
          <a
            href={links.twitter}
            target={"_blank"}
            rel="noreferrer nofollow"
            aria-label={"Twitter Profile of " + nameInvariant}
          >
            <TwitterFilledIcon />
          </a>
        )}
        {links?.medium && (
          <a
            href={links.medium}
            target={"_blank"}
            rel="noreferrer nofollow"
            aria-label={"Medium Link of " + nameInvariant}
          >
            <MediumFilledIcon />
          </a>
        )}
        {links?.facebook && (
          <a
            href={links.facebook}
            target={"_blank"}
            rel="noreferrer nofollow"
            aria-label={"Facebook Profile of " + nameInvariant}
          >
            <FacebookFilledIcon />
          </a>
        )}
      </div>
    </div>
  );
};
