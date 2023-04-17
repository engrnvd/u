export const colorHelper = {
  isLight(color: string) {
    if (!color) return true
    const hex = color.replace('#', '')
    const c_r = parseInt(hex.substring(0, 2), 16)
    const c_g = parseInt(hex.substring(2, 4), 16)
    const c_b = parseInt(hex.substring(4), 16)
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000
    return brightness > 155
  },
  shadeColor(col: string, amt: number) {
    col = col.replace(/^.*#/, '')
    if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

    let [r, g, b] = col.match(/.{2}/g);
    // @ts-ignore
    ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

    // @ts-ignore
    r = Math.max(Math.min(255, r), 0).toString(16)
    // @ts-ignore
    g = Math.max(Math.min(255, g), 0).toString(16)
    // @ts-ignore
    b = Math.max(Math.min(255, b), 0).toString(16)

    const rr = (r.length < 2 ? '0' : '') + r
    const gg = (g.length < 2 ? '0' : '') + g
    const bb = (b.length < 2 ? '0' : '') + b

    return `#${rr}${gg}${bb}`
  },
  lighten(color: string, percent: number) {
    return this.shadeColor(color, percent)
  },
  darken(color: string, percent: number) {
    return this.shadeColor(color, percent * -1)
  },
}
