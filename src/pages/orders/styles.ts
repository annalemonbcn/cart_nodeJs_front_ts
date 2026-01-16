import styled from 'styled-components'
import { StyledProductList } from '@/common/categoryPage/styles'
import { t } from '@/styles/themeHelpers'

const SkeletonContainer = styled.div`
  width: 100%;
`

const OrdersContainer = styled(StyledProductList)``

const ContinueShoppingButtonContainer = styled.div`
  margin-top: ${t.space('md')};
`

export { SkeletonContainer, OrdersContainer, ContinueShoppingButtonContainer }
