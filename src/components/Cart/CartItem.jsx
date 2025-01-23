import React from "react";

export default function CartItem() {
  return (
    <tr class="cart-item">
      <td></td>
      <td class="cart-image">
        <img src="img/products/product2/1.png" alt="" />
        <i class="bi bi-x delete-cart" data-id="2"></i>
      </td>
      <td>Ridley High Waist</td>
      <td>$100.00</td>
      <td class="product-quantity">1</td>
      <td class="product-subtotal">$100.00</td>
    </tr>
  );
}
