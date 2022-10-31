import LinkedinFilledIcon from "@utils/icons/LinkedinFilledIcon";
import TwitterFilledIcon from "@utils/icons/TwitterFilledIcon";
import MediumFilledIcon from "@utils/icons/MediumFilledIcon";
import FacebookFilledIcon from "@utils/icons/FacebookFilledIcon";
import styles from "./style.module.scss";
import { teamMembers } from "@lib/data/team-data";
import { logButtonClick } from "@analytics/index";
import { analyticsLogger } from "@utils/logger";

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
            onClick={() =>
              analyticsLogger(() =>
                logButtonClick(
                  "Team LinkedIn link",
                  `${name} LinkedIn link clicked`,
                  {
                    member: name,
                    linkName: "LinkedIn",
                    href: links.linkedIn,
                  }
                )
              )
            }
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
            onClick={() =>
              analyticsLogger(() =>
                logButtonClick(
                  "Team Twitter link",
                  `${name} Twitter link clicked`,
                  {
                    member: name,
                    linkName: "Twitter",
                    href: links.twitter,
                  }
                )
              )
            }
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
            onClick={() =>
              analyticsLogger(() =>
                logButtonClick(
                  "Team Medium link",
                  `${name} Medium link clicked`,
                  {
                    member: name,
                    linkName: "Medium",
                    href: links.medium,
                  }
                )
              )
            }
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
            onClick={() =>
              analyticsLogger(() =>
                logButtonClick(
                  "Team Facebook link",
                  `${name} Facebook link clicked`,
                  {
                    member: name,
                    linkName: "Facebook",
                    href: links.facebook,
                  }
                )
              )
            }
          >
            <FacebookFilledIcon />
          </a>
        )}
      </div>
    </div>
  );
};
