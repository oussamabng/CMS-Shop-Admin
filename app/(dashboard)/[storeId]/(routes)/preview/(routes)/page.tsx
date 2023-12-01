import getBillboard from "@/actions/get-billboard";
import getFirstBillboard from "@/actions/get-first-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/client-components/billboard";
import ProductList from "@/client-components/product-list";
import Container from "@/client-components/ui/container";

export const revalidate = 0;

const HomePage = async ({ params }: { params: { storeId: string } }) => {
  const products = await getProducts(params.storeId, { isFeatured: true });
  const billboard = await getFirstBillboard(params.storeId);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard data={billboard} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
