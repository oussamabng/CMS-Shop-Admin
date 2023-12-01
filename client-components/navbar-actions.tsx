"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import Button from "@/client-components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const cart = useCart();
  const router = useRouter();
  const params = useParams();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push(`/${params.storeId}/preview/cart`)}
        className="flex items-center rounded-full px-4 py-2"
      >
        <ShoppingBag size={20} className="text-white dark:text-black" />
        <span className="ml-2 text-sm font-medium text-white dark:text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
