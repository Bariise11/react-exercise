import { useState } from "react";


const Blog = () => {
    const [products, setproducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const handleProduct = (e) => {
        setProductName(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleAddItem = () => {
        if (productName.trim() !== "" && price.trim() !== "") {
             const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(price),
            quantity: 1
        };
        setproducts([...products, newProduct]);
        setProductName("");
        setPrice("");

        }
       
    }
    const removeProduct = (id) => {
        const updateProducts = products.filter((product) => product.id !== id);
        setproducts(updateProducts);
    }
      // Function to handle increasing quantity
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setproducts(updatedProducts);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setproducts(updatedProducts);
  };

   // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );



    return (
        <div>
            <h1>Simple Shopping Cart</h1>
            <div>
            <h2>Add a Product</h2>
            <input type="text"
            value={productName}
            onChange={handleProduct} 
            placeholder="Product Name"
            />
            <input type="number"
            value={price}
            onChange={handlePrice} 
            placeholder="Price"
            />
            <button onClick={handleAddItem}>Add to Cart</button>
            </div>
             {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                 <div>
                  Quantity:
                  <button onClick={() => decreaseQuantity(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
          
        </div>
    )
}
export default Blog;