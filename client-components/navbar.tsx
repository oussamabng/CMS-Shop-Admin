import Link from "next/link";

import Container from "@/client-components/ui/container";
import MainNav from "@/client-components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/client-components/navbar-actions";

export const revalidate = 0;

interface NavbarProps {
  params: {
    storeId: string;
  };
}

const Navbar: React.FC<NavbarProps> = async ({ params }) => {
  const categories = await getCategories(params.storeId);
  return (
    <header className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link
            href={`/${params.storeId}/preview`}
            className="ml-4 flex lg:ml-0 gap-x-2"
          >
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
