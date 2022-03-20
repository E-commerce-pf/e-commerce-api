# Review routes

The review routes allow to create and find reviews.

## Create or update review

```http
  POST https*://< Base URL >/api/review/
```

| Parameters  | Query method | Data type | Description  |
| :--------   | :-----       | :-------  | :----------  |
| `userId`    | Body         | `UUID4`   | User's id    |
| `productId` | Body         | `UUID4`   | Product's id |
| `comment`   | Body         | `string`  | Comment sent |
| `score`     | Body         | `integer` | Score given  |

If the user had already reviewed this product, their review will be updated. Otherwise, a new review will be created.

Response:

```javascript
{
  status: 'Successfully updated review.'
}

OR

{
  success: 'Successfully added review.', 
  result: newReview.id
}
```
---
---
&nbsp;

## Get highest voted reviews

```http
  GET https*://< Base URL >/api/review/mostvoted
```

| Parameters  | Query method | Data type | Description                 |
| :--------   | :-----       | :-------  | :----------                 |
| `number`    | Body         | `integer` | Amount of reviews to return |

Response:

```javascript
{
  mostVotedReviews: [...mostVotedReviews]
}
```