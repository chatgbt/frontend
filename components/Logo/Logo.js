
export default function Logo({weight, short}) {
    return (
        <span className={`text-indigo-${weight + 100} font-goldman hover:text-indigo-${weight - 100}`}>
        {!short && (
                <span className={`lowercase`}>chat</span>
            )}<span className={`text-rose-${weight} font-saira-stencil-one subpixel-antialiased font-bold uppercase`}>gbt</span>
        </span>
    )
}