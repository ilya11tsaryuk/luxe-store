import Link from "next/link";

export const VariantSelector = (props: { variants: number[], selectedValue: string }) => {

    const { selectedValue, variants } = props
    const currentVal = Number(selectedValue)
    return (
        <div className="flex flex-wrap gap-3">
            {variants.map((variant) => (
                <Link key={variant} href={`?variant=${variant}`}>
                    <div className={`p-2 rounded-md  ${variant !== currentVal && 'hover:bg-neutral-200'} ${variant === currentVal ? 'bg-black text-neutral-100' : 'bg-neutral-100'}`}>{variant}</div>
                </Link>
            ))}
        </div>
    )
};
