type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrayOrNumArray = ToArray<string | number>;

const saon: StrArrayOrNumArray = [1, 2, 3]

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type StrArrayOrNumArrayA = ToArrayNonDist<string | number>;

const saona: StrArrayOrNumArrayA = ["a", 1];
