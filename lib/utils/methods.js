export const getFormattedDate = (x) => {
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

export async function getPosts() {
  try {
    const url = process.env.NEXT_PUBLIC_BLOG_API_URL;
    const response = await fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    const { posts } = await response.json();
    return posts.slice(0, 4);
  } catch (e) {
    return [];
  }
}
