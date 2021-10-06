import { useRouter } from "next/dist/client/router";
import Pagination from "../components/Pagination";
import Products from "../components/Products";

export default function OrderPage() {
  // const { query } = useRouter();
  // const page = parseInt(query.page);
  return (
    <div>
      <Pagination />
      <Products />
      <Pagination />
    </div>
  );
}
