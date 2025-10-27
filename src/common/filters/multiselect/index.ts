const splitCsv = (csv?: string) =>
  (csv ?? '')
    .toLowerCase()
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

const toCsv = (list: string[]) => list.join(',')

const normalizeWithAll = (list: string[], allKey = 'all') => {
  let output = [...new Set(list)]
  if (output.length === 0) return [allKey]
  if (output.length > 1 && output.includes(allKey)) {
    output = output.filter((v) => v !== allKey)
  }
  return output
}

const toggleWithAll = (selected: string[], slug: string, allKey = 'all') => {
  if (slug === allKey) return [allKey]

  const set = new Set(selected)

  if (set.has(slug)) {
    set.delete(slug)
  } else {
    set.add(slug)
  }
  return normalizeWithAll([...set], allKey)
}

const isActive = (selected: string[], slug: string) => selected.includes(slug)

export { splitCsv, toCsv, normalizeWithAll, toggleWithAll, isActive }
