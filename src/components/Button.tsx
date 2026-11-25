import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = {
    variant?: Variant,
} & ComponentProps<"button">

type Variant = "primary" | "secondary" | "delete"

export function Button({ variant = "primary", className, ...props }: ButtonProps) {

    return (
        <button
            {...props}
            className={twMerge(
                getVariantStyles(variant),
                className,
                "rounded px-2 py-1 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
            )}
        />
    )
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-violet-600 hover:bg-violet-500"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "delete":
            return "hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Invalid variant: ${variant satisfies never}`)
    }
}