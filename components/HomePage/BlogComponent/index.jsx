import { Fragment, useEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { classNames } from "@lib/utils/classNames";
import styles from "./style.module.scss";
import { Trans } from "@lingui/macro";
import ArrowNarrowRightIcon from "@utils/icons/ArrowNarrowRightIcon";

const URL = `https://api.neptunemutual.com/blog`;

export const BlogComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(URL, {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });

      const getFormattedDate = (x) => {
        // Safari doesn't like dashes
        const normalized = x.replace(/-/g, "/");

        const code =
          navigator.userLanguage ||
          (navigator.languages &&
            navigator.languages.length &&
            navigator.languages[0]) ||
          navigator.language ||
          navigator.browserLanguage ||
          navigator.systemLanguage ||
          "en";

        return new Date(normalized).toLocaleDateString(code, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        });
      };

      const getImages = (content) => {
        const imageRegex = /<img.*?src="(.*?)"[^>]+>/g;
        const images = [];
        let img;
        while ((img = imageRegex.exec(content))) {
          images.push(img[1]);
        }
        return images[0];
      };

      const data = await response.json();

      const _posts = data.data.items.slice(0, 4).map((x) => {
        return {
          date: getFormattedDate(x.pubDate[0]),
          title: x.title[0],
          link: x.link,
          thumbnail: getImages(x["content:encoded"]),
        };
      });
      setPosts(_posts);
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setTimeout(() => ScrollTrigger.refresh(), 500);
    }
  }, [posts]);

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
                href="https://medium.com/neptune-mutual"
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
              href="https://medium.com/neptune-mutual"
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
