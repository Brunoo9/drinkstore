function* generarCod(num = 1) {
  while (true) {
    num++;
    if (num < 10 || num === 9) {
      num = "0" + num;
    }
    yield "P-" + num;
  }
}

export default generarCod;
