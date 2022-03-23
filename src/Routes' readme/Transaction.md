# INCOMPLETE - DON'T USE THIS
# Transaction route

The transaction route allows to create/update  transactions.

---
## Create transaction

```http
  POST https*://< Base URL >/api/transaction/:productId/
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `productId`       | Params       | `UUID4`   | Target product's id     |
| `isSell`          | Body         | `true or false`| indicates if the product is sold or bought    |
| `state`           | Body         | `process, complete or canceled`   | Default is process    |

Response:

```javascript
{
  status: "Transaction created successfuly",
  transaction
}
```


---
## Update transaction

```http
  PUT https*://< Base URL >/api/transaction/:transactionId/
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `state`           | Body         | `process, complete or canceled`   | Default is process    |

Response:

```javascript
{
  status: "Successfully updated transaction",
  transaction
}
```