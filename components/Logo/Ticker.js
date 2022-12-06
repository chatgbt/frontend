
export default function Ticker({ weight }) {
    return (
        <span className={`font-saira-stencil-one text-rose-${weight + 100} uppercase subpixel-antialiased hover:text-rose-${weight - 100}`}>
            agi
        </span>
    )
}