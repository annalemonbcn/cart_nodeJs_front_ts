const getNestedValue = (obj: any, path: string) => path.split('.').reduce((acc, part) => acc?.[part], obj)

export { getNestedValue }
