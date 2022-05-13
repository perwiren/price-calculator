import Link from "next/link";

type Props = {
    sku: string;
}

const ProductCard: React.FC<Props> = ({ sku }) => {
    return (
        <Link href={{ pathname: "/products/[sku]", query: { sku: sku } }}>
            <a className="p-4 
                bg-amber-400 
                rounded-lg 
                shadow-lg 
                text-center 
                hover:bg-blue-500 
                hover:text-white 
                transition-colors">{sku}</a>
        </Link>
    )
}

export default ProductCard;