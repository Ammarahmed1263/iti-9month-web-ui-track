interface User {
  name: string;
  age: number;
}

const userName: Pick<User, "name"> = {
  name: "ammar",
};

interface Profile {
  username?: string;
  email?: string;
}

const testProfile: Required<Profile> = {
  username: "john_doe",
  email: "john@example.com",
};

const colors: Record<"red" | "blue" | "green", string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

console.log(colors.red);
console.log(colors["red"]);

interface Person {
  name: string;
  age: number;
  email: string;
}

type basicPerson = Pick<Person, "name" | "email">;

const testPerson: basicPerson = {
  name: "ammar",
  email: "ammar@example.com",
};

type PersonAge = Omit<Person, "age">;

const testPerson2: PersonAge = {
  name: "ammar",
  email: "ammar@example.com",
};

type Colors = "red" | "green" | "blue" | "yellow";

type PrimaryColors = Exclude<Colors, "yellow">;

// const test: PrimaryColors = 'yellow';

type TwoColors = Extract<Colors, "red" | "blue">;

// const test2: TwoColors = "green";

type MaybeString = string | null | undefined;
type StrType = NonNullable<MaybeString>;

// const test3: StrType = undefined;
