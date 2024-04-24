for (let i = 1; i <= 5; i++) {
  let str = '*';
  for (let x = 1; x < i; x++) {
    str += '*';
  }
  console.log(str);
}

for (let i = 5; i >= 1; i--) {
  let str = '';
  for (let x = 0; x < i; x++) {
    str += '*';
  }
  console.log(str);
}
