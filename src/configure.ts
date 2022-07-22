import { 
  DATA_ATTR_GOOGLE_ADS,
  DEFAULT_OFFSET_ELEMENTS_OF_ARTICLE,
  DEFAULT_MAX_PROMOTION_IN_ARTICLE
} from "./constant.ts"

export function configure({ data, template }) {
  let offset = DEFAULT_OFFSET_ELEMENTS_OF_ARTICLE
  let max = DEFAULT_MAX_PROMOTION_IN_ARTICLE
  let targetContainer = null

  const parser = new DOMParser()
  const dom = parser.parseFromString(template, "text/html")

  const attrsConfigs: Record<string, string | undefined> = {
    __init__: false,
    get targetContainer() {
      return targetContainer
    },
    set articleQuerySelector(val: string) {
      targetContainer = document.querySelector(val)
    },
    get offset() {
      return offset
    },
    set offset(val: string | number) {
      offset = parseInt(val) || offset
    },
    get max() {
      return max
    },
    set max(val: string | number) {
      max = parseInt(val) || max
    },
    promotionNodes: dom.body.querySelectorAll(`:scope > *`),
  }

  if (data) {
    // Sanitation
    for (let c in data) {
      attrsConfigs[c] = data[c]
    }

    console.log(attrsConfigs)

    return attrsConfigs
  }


  return null
}
