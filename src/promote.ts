import { getInsertionPositions } from "./insertion.ts"

export function promote(configs: any) {
  const positions = getInsertionPositions(configs)
  const { promotionNodes, targetContainer } = configs

  console.log('positions', positions, promotionNodes)

  for (let i in positions) {
    const elm = targetContainer.children[positions[i]].nextElementSibling
    if (i >= promotionNodes.length) {
      return
    }

    targetContainer.insertBefore(promotionNodes[i], elm)
  }
}
