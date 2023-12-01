import prismaDb from "@/lib/prisma-db";

const getFirstBillboard = async (storeId: string) => {
  const billboard = await prismaDb.billboard.findFirst({
    where: {
      storeId: storeId,
    },
  });

  return billboard;
};

export default getFirstBillboard;
