import type { PropsWithChildren } from "@/variables/types/global.types";

interface IBaseLayoutProps extends PropsWithChildren {
    showBreadcrumb?: boolean
    isHome?: boolean
}

export type { IBaseLayoutProps }