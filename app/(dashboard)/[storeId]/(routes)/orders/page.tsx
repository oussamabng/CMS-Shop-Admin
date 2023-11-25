import { format } from "date-fns";
import { formatter } from "@/lib/utils";

import prismaDb from "@/lib/prisma-db";
import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";

const Orders = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismaDb.order.findMany({
    where: { storeId: params.storeId },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    isPaid: order.isPaid,
    address: order.address,
    phone: order.phone,
    products: order.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      order.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),
    createdAt: format(order.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default Orders;
