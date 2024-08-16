{
  //----------------------------------------------------------------
  // Problem 2: Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

  interface Person {
    name: string;
    age: number;
    address?: {
      city: string;
      street: string;
    };
    phone?: string;
  }

  const person: Person = {
    name: "Kamrul Islam",
    age: 26,
    address: {
      city: "Chittagong",
      street: "Textile, 2 no gate",
    },
    phone: "018390000000",
  };

  const getAddressCity = (
    param: Person | undefined
  ): string | number | undefined => {
    return param?.address?.city;
  };

  const problem2 = getAddressCity(person);
  console.log(problem2);
  //----------------------------------------------------------------
}
