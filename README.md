# Interview Questions - Blog Task

## Question - 4: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums let you define a group of named values that you can use in your code. Instead of using plain numbers or strings, you give those values meaningful names. This makes your code easier to understand and manage. An enum can be defined using the `enum` keyword.

### Numeric Enum
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

### String Enum
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


