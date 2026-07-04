// Subtiele overlay-scrollbar: verschijnt tijdens het scrollen en verdwijnt
// zodra het beeld stilstaat. De native scrollbar is verborgen (zie index.css),
// zodat er geen witte baan naast de kleurvlakken staat en er geen layout-sprong
// optreedt.
export function initOverlayScrollbar() {
  const bar = document.createElement('div')
  bar.className = 'overlayScrollbar'
  const thumb = document.createElement('div')
  thumb.className = 'overlayScrollbarThumb'
  bar.appendChild(thumb)
  document.body.appendChild(bar)

  let hideTimer: number | undefined

  const update = () => {
    const doc = document.documentElement
    const winH = window.innerHeight
    const scrollH = doc.scrollHeight

    // Niets te scrollen -> geen indicator
    if (scrollH <= winH + 1) {
      bar.classList.remove('isVisible')
      return
    }

    const thumbH = Math.max((winH / scrollH) * winH, 40)
    const maxTop = winH - thumbH
    const top = maxTop * (window.scrollY / (scrollH - winH))
    thumb.style.height = `${thumbH}px`
    thumb.style.transform = `translateY(${top}px)`
  }

  const show = () => {
    update()
    bar.classList.add('isVisible')
    window.clearTimeout(hideTimer)
    hideTimer = window.setTimeout(() => bar.classList.remove('isVisible'), 800)
  }

  window.addEventListener('scroll', show, { passive: true })
  window.addEventListener('resize', update)
  update()
}
