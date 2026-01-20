function Test(target: any) {
  console.log("Decorator executed");
}

@Test
class Demo {
  value = 10;
}

console.log("File executed");