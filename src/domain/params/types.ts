const paginationParams = ['page', 'limit'] as const
type PaginationParams = (typeof paginationParams)[number]

const urlParams = ['category', 'minPrice', 'maxPrice', 'color', 'size', 'brand'] as const
type UrlParams = (typeof urlParams)[number]

const otherParams = ['query', 'sort'] as const
type OtherParams = (typeof otherParams)[number]

const params = [...paginationParams, ...urlParams, ...otherParams] as const
type Params = (typeof params)[number]

export type { Params, UrlParams, PaginationParams, OtherParams }
export { params, urlParams, paginationParams, otherParams }
