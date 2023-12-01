"use client";

import { useState, useEffect } from "react";

import { StoreModal } from "@/components/modals/store-modal";
import { PreviewModal } from "@/client-components/preview-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
      <PreviewModal />
    </>
  );
};
