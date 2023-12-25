// type MessageOf<T extends { message: unknown }> = T["message"];
// type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

// interface Email {
//   message: string;
// }

// interface Dog {
//   bark(): void;
// }

// type EmailMessageContents = MessageOf<Email>;

// const emc: EmailMessageContents = "balabalabala...";

// type DogMessageContents = MessageOf<Dog>;

// const dmc: DogMessageContents = "srror" as never;

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;

type Num = Flatten<number[]>;
