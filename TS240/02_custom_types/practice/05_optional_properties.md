# Practice Problems: Optional Properties

1. Consider the following interface definition that utilizes optional properties:


```ts
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}
```

Implement a function `displayUserInfo` that takes a `UserInfo` object and returns a formatted string containing the user's information. For optional properties, display a default value (use "N/A" for email and "unknown" for age) if they are not provided.

```ts
function displayUserInfo(userInfo: UserInfo): string {
  let email = userInfo.email ? userInfo.email : "N/A";
  let age = userInfo.age ? userInfo.age : "unknown";
  return `${userInfo.name} ${email} ${age}`
}
```