import { EasingFunctions as easing } from "./easing.helpers"

export const animate = ({ from, to, onUpdate, onComplete, duration = 600, easeMethod = "linear" }: any) => {
  const startTime = performance.now()

  const tick = () => {
    const elapsed = performance.now() - startTime

    window.requestAnimationFrame(() => onUpdate(getValue(from, to, elapsed, duration, easeMethod), elapsed <= duration ? tick : onComplete))
  }

  tick()
}

const getValue = (start: any, end: any, elapsed: any, duration: number, easeMethod: string) => {
  if (elapsed > duration) return end

  return start + (end - start) * easing[easeMethod](elapsed / duration)
}
