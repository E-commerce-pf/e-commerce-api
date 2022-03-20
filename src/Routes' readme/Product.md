# Product routes

The product routes allow to get all or one particular product.

&nbsp;  
&nbsp;  
This route require an user token sent as a header:

```javascript
{
    headers: {
        token: `${User access token}`,
    }
}
```
---
&nbsp;
## Get products

```http
  GET https*://< Base URL >/api/product/:id
```

| Parameters  | Query method | Options        | Data type         | Description   |
| :---------  | :----------- | :------        | :--------         | :----------   |
| `id`        | Params       | `all`, `UUID4` | `string`, `UUID4` | Product's id  |


You can get all the products by sending `all` as an id. 

Response:

```javascript
{
  product: {...product}
}

OR

{
  total: products.length,
  products: [
      {...product1},
      {...product2},
      ...
      ]
}
```