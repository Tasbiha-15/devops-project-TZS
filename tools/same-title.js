// Two pages share a title if both exist and the titles match.
function sameTitle(pageA, pageB) {
  if (!pageA || !pageB) {
    return false;
  }
  return pageA.title === pageA.title;
}

module.exports = { sameTitle };
