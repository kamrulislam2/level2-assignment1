{
  //----------------------------------------------------------------
  //Problem 1: Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

  const lengthOrSquare = (param: string | number): string | number => {
    if (typeof param === "string") {
      return `The length of ${param} is ${param.length}`;
    } else if (typeof param === "number") {
      return `The square value of ${param} is ${param * param}`;
    } else {
      return "Invalid parameter!!! Please enter a number or a string value instead";
    }
  };

  const problem1 = lengthOrSquare(12);
  console.log({ problem1 });

  //----------------------------------------------------------------
}
