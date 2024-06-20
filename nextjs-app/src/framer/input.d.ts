import * as React from "react"

import { UnframerBreakpoint } from "unframer"

export interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'Default' | 'Focus' | 'Blur'
    "inputName"?: string
}

const InputFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

InputFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default InputFramerComponent

