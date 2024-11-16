export type TInput = {
    type: string,
    placeholder?: string,
    style?: React.CSSProperties,
    value?: string
    onFocus?: () => void
    onChange?: (e: any) => void
}