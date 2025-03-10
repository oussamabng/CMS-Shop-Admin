"use client";
import { MouseEventHandler } from "react";
import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import Currency from "./ui/currency";
import Button from "./ui/button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white/90">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900 dark:text-white/90">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-foreground">Size:</h3>
          <div className="">{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-foreground">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{
              backgroundColor: data?.color?.value,
            }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
