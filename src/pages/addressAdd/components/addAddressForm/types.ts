/**
 * Recursively constructs a union type of dot-separated keys for a given object type T.
 * If a key's value is an object, it traverses into that object to generate nested keys.
 * If a key's value is an array, it stops recursion at that key.
 * The result is a type representing all possible dot-separated key paths within the object.
 */
type DotNestedKeys<T> = {
  [K in keyof T & string]: T[K] extends object ? (T[K] extends Array<any> ? K : `${K}.${DotNestedKeys<T[K]>}`) : K
}[keyof T & string]

export type { DotNestedKeys }
