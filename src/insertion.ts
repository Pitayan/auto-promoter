// The kernel logic for calculating maximum items to place in article content
// 1 <= count <= MAX(default to DEFFAULT_MAX_ADS)
export function getArticleMaxAds(
  containerClientHeight,
  windowInnerHeight,
  max,
) {
  if (isNaN(windowInnerHeight)) {
    return 1;
  }

  return Math.max(
    Math.min(Math.ceil(containerClientHeight / windowInnerHeight / 2), max),
    1,
  );
}

// To get the interval for each promotion content
export function getArticleAdsStep(targetContainer, max, offset) {
  const directChildren = targetContainer.querySelectorAll(`:scope > *`);

  if (directChildren.length - offset <= 0) return 0;

  const step = ~~((directChildren.length - offset) / Math.max(max, 2));

  return step;
}

export function getInsertionPositions({ targetContainer, offset, max }) {
  const result = [];
  const _max = getArticleMaxAds(
    targetContainer.clientHeight,
    window.innerHeight,
    max,
  );
  const step = getArticleAdsStep(targetContainer, _max, offset);

  if (step < 1) {
    return result;
  }

  for (let i = 1; i <= _max; i++) {
    result.push(step * i);
  }

  return result;
}
