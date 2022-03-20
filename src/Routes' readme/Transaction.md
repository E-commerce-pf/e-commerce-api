# INCOMPLETE - DON'T USE THIS
# Transaction route

The transaction route allows to create new transactions.

---
## Create transaction

```http
  POST https*://< Base URL >/api/transaction/:productId/:userId
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `productId`       | Params       | `UUID4`   | Target product's id     |
| `userId`          | Params       | `UUID4`   | Target user's id     |

Response:

```javascript
{
  status: "Transaction created successfuly"
}
```