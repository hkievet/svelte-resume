export function makeDate(dateStr: string) {
    const date = new Date(dateStr)
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
}