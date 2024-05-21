import Link from "next/link";

export const VariantSelector = (props: { variants: number[], selectedValue: number }) => {

    const { selectedValue, variants } = props
    return (
        <div className="flex flex-wrap gap-3">
            {variants.map((variant) => (
                <Link key={variant} href={`?variant=${variant}`}>
                    <div className={`p-2 rounded-md  ${variant !== selectedValue && 'hover:bg-neutral-200'} ${variant === selectedValue ? 'bg-black text-neutral-100' : 'bg-neutral-100'}`}>{variant}</div>
                </Link>
            ))}
        </div>
    )
};
