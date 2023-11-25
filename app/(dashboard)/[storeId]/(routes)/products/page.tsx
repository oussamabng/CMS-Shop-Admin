import { format } from "date-fns";
import { formatter } from "@/lib/utils";

import prismaDb from "@/lib/prisma-db";
import { ProductClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const Products = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismaDb.product.findMany({
    where: { storeId: params.storeId },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
  });

  const formattedProducts: ProductColumn[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    isFeatured: product.isFeatured,
    isArchived: product.isArchived,
    category: product.category.name,
    size: product.size.name,
    color: product.color.value,
    price: formatter.format(product.price.toNumber()),
    createdAt: format(product.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default Products;
