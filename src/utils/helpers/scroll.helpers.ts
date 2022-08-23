export const getScrollPosition = (el: any) => (el.pageYOffset || el.scrollTop) - (el.clientTop || 0)

export const setScrollPosition = (scrollPosition: number, el: any) => (el.scrollTop = scrollPosition)
