import SingleProduct from "../../components/SingleProduct";
import { useRouter } from "next/router";

export default function SingleProductPage(props) {
  const router = useRouter();

  console.log(router);

  return <SingleProduct id={router.query.id} />;
}
