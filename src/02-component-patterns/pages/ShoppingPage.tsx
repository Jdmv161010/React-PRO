import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe-mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1> <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark text-white ">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white ">
          <ProductImage className="custom-image" />
          <ProductTitle title="Producto prueba" className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ background: "yellow" }}>
          <ProductImage />
          <ProductTitle title="Producto prueba" />
          <ProductButtons
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
