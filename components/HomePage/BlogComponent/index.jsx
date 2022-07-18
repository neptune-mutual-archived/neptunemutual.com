import { Fragment, useEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { classNames } from "@lib/utils/classNames";
import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";
import ArrowNarrowRightIcon from "@utils/icons/ArrowNarrowRightIcon";
import { getFormattedDate } from "@lib/utils/methods";

export const BlogComponent = ({ blogs }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const _posts = blogs.map((x) => {
        const _date = getFormattedDate(new Date(x.published_at).toString());
        return {
          date: _date,
          title: x.title,
          link: x.url,
          thumbnail: x.feature_image,
        };
      });
      setPosts(_posts);
    }
  }, [blogs]);

  useEffect(() => {
    if (posts.length > 0) {
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }
  }, [posts]);

  const blogLink = "https://blog.neptunemutual.com";
  return (
    <div className={"section_border_container"}>
      <div className={"section_horizontal_container"}>
        <div className={styles.section}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>
              <Trans>Latest Updates</Trans>
            </h2>
            <div className={styles.section_cta}>
              <a
                href={blogLink}
                target="_blank"
                rel="noreferrer nofollow"
                aria-label="Blog"
              >
                <span>
                  <Trans>Check out Our Blog</Trans>
                </span>
              </a>
              <ArrowNarrowRightIcon />
            </div>
          </div>

          <div className={classNames(styles.posts_container)}>
            {posts.map(({ link, thumbnail, title, date }, idx) => (
              <Fragment key={idx}>
                <a
                  href={link}
                  target={"_blank"}
                  rel="noreferrer nofollow"
                  className={classNames(styles.post, styles[`post-${idx + 1}`])}
                >
                  <div className={classNames(styles.image_container)}>
                    <img
                      src={thumbnail}
                      alt={title}
                      className={styles["post-img-1"]}
                    />
                  </div>
                  <div className={classNames(styles.text_container)}>
                    <p>{date}</p>
                    <h3>{title}</h3>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>

          <div className={styles.section_second_cta}>
            <a
              rel="noreferrer nofollow"
              href={blogLink}
              target="_blank"
              aria-label="Read our Blog"
            >
              <span>
                <Trans>Read Our Blog</Trans>
              </span>
            </a>
            <ArrowNarrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
