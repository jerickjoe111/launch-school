# Practice Problems: Object Values at Runtime

1. Consider the following TypeScript code:

```ts
type UserSettings = {
  readonly colorScheme: string;
  readonly notifications: ReadonlyArray<string>;
};

const userSettings: UserSettings = {
  colorScheme: "dark",
  notifications: ["email", "push"],
};

(userSettings as any).colorScheme = "light";
(userSettings as any).notifications.push("sms");
```

The code above is trying to bypass the TypeScript check to modify the `colorScheme` property and the notifications array. Will this code throw an error or run without issues? Also, take a guess at the output of the following code:

```ts
console.log(userSettings.colorScheme);
console.log(userSettings.notifications);
```

```
light
["email", "push", "sms"]
```

The code will run without issues. TypeScript types do not affect the runtime behavior of JavaScript code, hence our `userSettings` object has been mutated unexpectedly (against our intentions when we defined its type). This also illustrates the importance of being cautious when using type casting or bypassing TypeScript checks.
