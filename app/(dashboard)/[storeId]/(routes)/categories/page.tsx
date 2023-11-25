import { format } from "date-fns";

import prismaDb from "@/lib/prisma-db";
import { CategoryClient } from "./components/client";
import { CategoryColumn } from "./components/columns";

const Categories = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismaDb.category.findMany({
    where: { storeId: params.storeId },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      billboard: true,
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: format(category.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default Categories;
