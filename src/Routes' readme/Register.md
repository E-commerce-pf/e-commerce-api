# Register route

The register route allows to create a new account.
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
## Create user

```http
  POST https*://< Base URL >/api/register/
```

| Parameters        | Query method | Data type | Description     |
| :--------         | :-----       | :-------  | :----------     |
| `name`            | Body         | `string`  | User's name     |
| `lastName`        | Body         | `string`  | User's surname  |
| `email`           | Body         | `string`  | User's email    |
| `password`        | Body         | `string`  | User's password |
| `country`         | Body         | `string`  | User's country  |
| `loginWithSocial` | Body         | `Boolean` | Whether the account is being created through a social media link | 

Response:

```javascript
{
  status: "User created successfuly", 
  user: {...userData}
}
```