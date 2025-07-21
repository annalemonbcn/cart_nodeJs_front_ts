function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> {
  return (el: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(el)
      } else if (ref && 'current' in ref) {
        ;(ref as React.MutableRefObject<T | null>).current = el
      }
    })
  }
}

export { mergeRefs }
