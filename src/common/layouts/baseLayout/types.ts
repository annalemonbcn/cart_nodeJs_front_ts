import type { PropsWithChildren } from "@/variables/types/global.types";

interface IBaseLayoutProps extends PropsWithChildren {
    showBreadcrumb?: boolean
    isMyAccount?: boolean
}

export type { IBaseLayoutProps }