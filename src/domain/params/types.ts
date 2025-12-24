const genderParams = ['women', 'men'] as const
type GenderParam = (typeof genderParams)[number]

const paginationParams = ['page', 'limit'] as const
type PaginationParams = (typeof paginationParams)[number]

const urlParams = ['category', 'minPrice', 'maxPrice', 'color', 'size', 'brand', 'gender'] as const
type UrlParams = (typeof urlParams)[number]

const otherParams = ['query', 'sort'] as const
type OtherParams = (typeof otherParams)[number]

const params = [...genderParams, ...paginationParams, ...urlParams, ...otherParams] as const
type Params = (typeof params)[number]

export type { Params, UrlParams, PaginationParams, OtherParams, GenderParam }
export { params, urlParams, paginationParams, otherParams, genderParams }
