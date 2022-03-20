# Admin routes

The admin routes allow for high-level control over most in-app functionalities.
&nbsp;  
&nbsp;  
All of these routes require an admin token sent as a header:

```javascript
{
    headers: {
        token: `${Admin access token}`,
    }
}
```
---
&nbsp;
## Update product data

```http
  PUT https*://< Base URL >/api/admin/product/update/:id
```

| Parameters   | Query method | Data type       | Description                                            |
| :--------    | :-----       |:-------         | :----------                                            |
| `id`         | Params       |`UUID4`          |  Product's id                                          |
| `title`      | Body         |`string`         |  Product's title                                       |
| `description`| Body         |`string`         |  Product's description                                 |
| `image`      | Body         |`string`         |  Product's image, preferably an URL                    |
| `price`      | Body         |`integer`        |  Product's price                                       |
| `discount`   | Body         |`float`          |  Product's discount multiplier, in decimals e.g. `0.1` |
| `stock`      | Body         |`integer`        |  Product's stock                                       |
| `sales`      | Body         |`integer`        |  Product's sales                                       |
| `categories` | Body         |`array:string[]` |  Product's categories                                  |

Response:

```javascript
{
  status:'Product updated',
  success: {
    ...productData
  }
}
```
---
---
&nbsp;
## Delete product

```http
  DELETE https*://< Base URL >/api/admin/product/delete/:id
```

| Parameters  | Query method | Data type | Description   |
| :--------   | :-----       |:-------   | :----------   |
| `id`        | Params       |`UUID4`    |  Product's id |

Response:

```javascript
{
  status: `Product ${product.title} deleted`
}
```
---
---
&nbsp;
## Get transactions

```http
  GET https*://< Base URL >/api/admin/transactions/find/:id
```

| Parameters  | Query method | Options        | Data type        | Description   |
| :--------   | :-----       | :--------      |:-------          | :----------   |
| `id`        | Params       | `all`, `UUID4` |`string`, `UUID4` | Product's id  |

You can get all the transactions by sending `all` as an id.  
&nbsp;  
Response:

```javascript
{
  transaction: {...transaction}
}

OR

{
  total: transactions.length,
  transactions: [
      {...transaction1},
      {...transaction2},
      ...
      ]
}
```
---
---
&nbsp;
## Update transaction

```http
  PUT https*://< Base URL >/api/admin/transactions/update/:id
```

| Parameters  | Query method | Data type  | Description   |
| :--------   | :-----       | :-------   | :----------   |
| `id`        | Params       | `UUID4`    | Product's id  |
| `state`     | Body         | `string`   | Product's id  |

Response:

```javascript
{
  transaction: {...transaction}
}

OR

{
  transactions: [
      {...transaction1},
      {...transaction2},
      ...
      ]
}
```
---
---
&nbsp;
## Update user

```http
  PUT https*://< Base URL >/api/admin/user/update/:id
```

| Parameters       | Query method | Data type                           | Description   |
| :--------        | :-----         | :-------                          | :----------   |
| `id`             | Params         | `UUID4`                           | User's id  |
| `name`           | Body           | `string`                          | User's name  |
| `lastName`       | Body           | `string`                          | User's surname  |
| `email`          | Body           | `string`                          | User's email  |
| `password`       | Body           | `string`                          | User's password  |
| `isAdmin`        | Body           | `boolean`                         | User's admin status  |
| `country`        | Body           | `string`                          | User's country  |
| `postedProducts` | Body           | `array:string[]`                  | Users's posted products list  |
| `cart`           | Body           | `array:{id:UUID4, amount:string}` | User's cart. Please note that there are routes specifically created to modify it, use them. |
| `history`        | Body           | `array:string[]`   | User's purchase history. You really shouldn't modify it manually.  |

Response:

```javascript
{
  status: 'User updated',
  success: {
    ...userData
  }
}
```
---
---
&nbsp;
## Delete user

```http
  DELETE https*://< Base URL >/api/admin/user/delete/:id
```

| Parameters  | Query method | Data type  | Description |
| :--------   | :-----       | :-------   | :---------- |
| `id`        | Params       | `UUID4`    | User's id   |

Response:

```javascript
{
  status: `User '${user.name+' '+user.lastName}' deleted`
}
```
---
---
&nbsp;
## Create categories

```http
  POST https*://< Base URL >/api/admin/categories/create
```

| Parameters   | Query method | Data type        | Description          |
| :--------    | :-----       | :-------         | :----------          |
| `categories` | Body         | `array:string[]` | List of new categories  |

Response:

```javascript
{
  status: 'Categories created:', 
  newCategories: [...newCategories]
}
```
---
---
&nbsp;
## Delete categories

```http
  DELETE https*://< Base URL >/api/admin/categories/delete
```

| Parameters   | Query method | Data type        | Description          |
| :--------    | :-----       | :-------         | :----------          |
| `categories` | Body         | `array:string[]` | List of categories to delete  |

Response:

```javascript
{
  status: 'Categories deleted', 
  selectedCategories: [...selectedCategories]
}
```