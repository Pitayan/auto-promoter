import { configure } from "./configure.ts"
import { promote } from "./promote.ts"

function init() {
  const cur = document.currentScript
  const configs = configure({ 
    data: cur ? cur.dataset : null,
    template: cur.innerHTML,
  })

  cur.innerHTML = ''

  if (cur && cur.dataset && configs) {
    // initalize ads
    return promote(configs)
  }

  return function(configs: Record<string, any>) {
    console.log("Hello! This is autoPromoter!", configs)
  }
}

export const autoPromoter = init()

