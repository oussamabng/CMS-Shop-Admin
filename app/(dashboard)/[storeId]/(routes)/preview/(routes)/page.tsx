import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/client-components/billboard";
import ProductList from "@/client-components/product-list";
import Container from "@/client-components/ui/container";

export const revalidate = 0;

const HomePage = async ({ params }: { params: { storeId: string } }) => {
  const products = await getProducts(params.storeId, { isFeatured: true });
  const billboard = await getBillboard(
    params.storeId,
    "845ee657-fb47-4d43-82b7-8e07b102ab12"
  );
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
