function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  } else {
    const text = str
      .trim()
      .split(" ")
      .map((word) => `${word.charAt(0).toUpperCase()}${word.substring(1)}`)
      .join("");
    return text.length > 139 ? false : `#${text}`;
  }
}
