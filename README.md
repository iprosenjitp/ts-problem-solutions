# Interview Questions - Blog Task

## Question - 4: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

### Answer
Enums let you define a group of named values that you can use in your code. Instead of using plain numbers or strings, you give those values meaningful names. This makes your code easier to understand and manage. An enum can be defined using the `enum` keyword.

**Numeric Enum**
By default, enums will initialize the first value to `0` and add `1` to each additional value. But if we set the value of the first numeric enum, the rest will auto-increment from that. And we also can assign unique number values for each enum value. Then the values will not incremented automatically.

```typescript
enum MonthDays2025 {
    January = 31,
    February = 28,
    March = 31,
    April = 30,
    May = 31,
    June = 30,
    July = 31,
    August = 31,
    September = 30,
    October = 31,
    November = 30,
    December = 31
}

let mayDaysCount = MonthDays2025.May;
console.log(mayDaysCount); // 31
```

**String Enum**
In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

```typescript
enum CourseInfo {
    name = "Next Level Web Development",
    Level = "Level - 2",
    currentBatch = "Batch - 05",
}

let currBatch = CourseInfo.currentBatch;
console.log(currBatch); // Batch - 05
```

## Question - 6: How does TypeScript help in improving code quality and project maintainability?

### Answer
TypeScript improves code quality and project maintainability in several key ways:

**1. Static Typing**
TypeScript lets you define types for variables, function parameters, return values, and more. This helps catch type-related errors at compile time, not at runtime.

```typescript
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// add("2", 3); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// add(2, 3) // 5

```

**2. Support for Modern JavaScript Features**
TypeScript supports all modern JavaScript (ES6+) features and compiles them down to older versions if needed for compatibility.

**3. Improved Readability and Self-Documentation**
Types act as documentation. When someone reads your code, they can immediately understand what kind of data is expected or returned.

**4. Early Bug Detection and Improved Performance**
TypeScript’s static typing plays a key role in boosting code quality by identifying errors early in the development process. By checking types at compile time, it helps catch issues before the code runs, reducing the chances of runtime bugs and unpredictable behavior. This proactive error detection streamlines debugging, saves development time, and leads to more robust and dependable applications.

**4. Strong Community and Expanding Ecosystem**
TypeScript is backed by an active and expanding community. Major frameworks like React, Angular, and Vue offer robust TypeScript integration. With plenty of tools, guides, and learning resources available, it’s easier than ever for developers to get started and smoothly incorporate TypeScript into their projects.
