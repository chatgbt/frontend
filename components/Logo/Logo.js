import React from "react";

// components

export default function Logo({weight, short}) {
    return (
        <span className={`text-indigo-${weight + 100} hover:text-indigo-${weight - 100}`}>
        {!short && (
                <span className={`uppercase`}>chat</span>
            )}<span className={`text-rose-${weight} subpixel-antialiased font-bold uppercase`}>gbt</span>
        </span>
    )
}