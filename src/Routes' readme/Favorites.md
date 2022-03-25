# INCOMPLETE - DON'T USE THIS
# favorite route

The favorite route allows to create/delete and get favorites.

---
## Add to favorite 

```http
  POST https*://< Base URL >/api/favorite/
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `productId`       | Body      | `UUID4`   | Target product's id     |
| `userId`          | Body      | `UUID4`   | Target user's id     |

Response:

```javascript
{
  status: "Product added to favorites"
}
```


---
---
## Remove to favorite 

```http
  DELETE https*://< Base URL >/api/favorite/
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `favoriteId`      | Body      | `UUID4`   | Target favorite's id     |
| `userId`          | Body      | `UUID4`   | Target user's id     |

Response:

```javascript
{
  status: "Product removed to favorites"
}
```


---
---
## Get favorites

```http
  GET https*://< Base URL >/api/favorite/
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `userId`          | Body      | `UUID4`   | Target user's id     |

Response:

```javascript
{
  favorites: [
      {
          id,product
      },
  ]
}
```


---