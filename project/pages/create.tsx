import PageTitle from "../components/PageTitle";
import { Product } from "@prisma/client";
import { post } from "../lib/api";
import { useState } from "react";

function Create() {
  const [product, setProduct] = useState<Product>({
    photo: "",
    name: "",
    description: "",
    price: 0,
  });

  async function onSubmit(event: any) {
    event.preventDefault();
    await post<Product>("/api/addProduct", {
      description: product?.description!,
      name: product?.name!,
      photo: "/products/1.png",
      price: product?.price!,
    });
  }

  return (
    <>
      {/* using this fragment (<></>) because we want to return a head and a body as siblings but react only accepts 1 child */}
      <PageTitle title="Home Page" />
      <main>
        <h1>Create Product</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-2 text-black">
          <input
            type="text"
            placeholder="Nome do Produto"
            name="name"
            value={product?.name}
            onChange={e => setProduct({ ...product, name: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="Descrição do Produto"
            name="description"
            value={product?.description}
            onChange={e =>
              setProduct({ ...product, description: e.target.value })
            }
          ></input>
          <input
            type="number"
            placeholder="Preço do Produto"
            name="price"
            value={product?.price}
            onChange={e =>
              setProduct({ ...product, price: e.target.valueAsNumber })
            }
          ></input>
          <input type="file"></input>
          <button type="submit" className="bg-gray-6">
            Adicionar
          </button>
        </form>
      </main>
    </>
  );
}

export default Create;
