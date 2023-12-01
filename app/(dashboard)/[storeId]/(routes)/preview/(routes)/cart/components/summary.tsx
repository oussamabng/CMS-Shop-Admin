"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import Button from "@/client-components/ui/button";
import Currency from "@/client-components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const { items, removeAll } = useCart();
  const [loading, setLoading] = useState(false);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    if (items.length === 0) {
      return toast.info("No items in cart");
    }
    setLoading(true);
    const response = await axios.post(`/api/${params.storeId}/checkout`, {
      productIds: items.map((item) => item.id),
    });
    window.location = response.data.url;
    setLoading(false);
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed successfully");
      removeAll();
    }

    if (searchParams.get("cancel")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button disabled={loading} onClick={onCheckout} className="mt-6 w-full">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
