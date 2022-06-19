export type Dictionary<T = unknown> = {
  [key: string]: T
}

export function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ')
}

export function parseNumber(value: string): number {
  const parsed = parseFloat(value)
  if (isNaN(parsed)) {
    throw new Error(`Value '${value}' is not a number.`)
  }
  return parsed
}

export function parseBoolean(value: string): boolean {
  switch (value) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      throw new Error(`Value '${value}' is not a boolean.`)
  }
}
