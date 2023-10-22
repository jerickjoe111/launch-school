# Practice Problems: Narrowing with Type Guards

1. Will the following code result in a type error or execute without any issues?

```ts
type Video = {
  title: string;
  creator: string;
};

function printVideoInfo(videoOrVideos: Video | Video[]) {
  if ("length" in videoOrVideos) {
    videoOrVideos.forEach(v => console.log(`"${v.title}" by ${v.creator}`));
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}

printVideoInfo({
  title: "Introduction to TypeScript",
  creator: "John Doe",
});
```

The code will not raise any issues.

2. Will the following code result in a type error or execute without any issues?

```ts
type Video = {
  title: string;
  creator: string;
  length: number;
};

function printVideoInfo(videoOrVideos: Video | Video[]) {
  if ("length" in videoOrVideos) {
    videoOrVideos.forEach((v) =>
      console.log(`"${v.title}" by ${v.creator}`)
    );
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}

printVideoInfo({
  title: "Introduction to TypeScript",
  creator: "John Doe",
  length: 100,
});
```

We can't use the `length` property in this way: the `else` branch will never be reached, and, when, passing a single object, calling `forEach` on it will raise an error.
