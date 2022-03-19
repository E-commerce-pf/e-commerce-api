# Cart route

The cart route allows to add and remove elements from the user's cart.

---
&nbsp;
## Modify user's cart

```http
  PUT https*://< Base URL >/cart
```

| Parameters  | Query method | Options           | Data type | Description                                                |
| :---------  | :----------- | :------           | :-------- | :----------                                                |
| `userId`    | Body         |                   | `UUID4`   | Target user's id                                                  |
| `productId` | Body         |                   | `UUID4`   | Target product's id                                               |
| `method`    | Body         | `update`, `remove`| `string`  | Action that will be applied to the user's cart                    |
| `amount`    | Body         |                   | `integer` | Amount of target product that will be modified on the user's cart |

`remove` method deletes the product from the cart. If you want to lower the amount of product, use `update`.

Response:

```javascript
{
    status: 'Operation complete', 
    cart: [...user.cart]
}
```
