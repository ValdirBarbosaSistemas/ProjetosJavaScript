function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg === "string") {
        reject("Cai no erro!!!");
        return;
      }
      resolve(msg);
      return;
    }, tempo);
  });
}
