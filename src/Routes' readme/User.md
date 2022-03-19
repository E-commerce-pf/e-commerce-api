# User routes

The user routes allow to log into an account, find an account's posted products [pointless] and find an user.

---
## Log into an account

```http
  POST https*://< Base URL >/api/user/login
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `email`           | Body       | `UUID4`   | User's email    |
| `password`        | Body       | `UUID4`   | User's password |
| `loginWithSocial` | Body       | `UUID4`   | Whether the user is login in through a social media account    |

Response:

```javascript
{
  status: 'New user created'
}
```
---
---
&nbsp;
## Find user

```http
  GET https*://< Base URL >/api/user/find/:userId
```

| Parameters | Query method | Data type | Description      |
| :--------  | :-----       | :-------  | :----------      |
| `userId`    | Params      | `UUID4`   | Target user's id |

Response:

```javascript
{
    user: {...userData}           
}
```