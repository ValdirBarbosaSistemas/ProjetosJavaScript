//Middleware = Chain of Responsability (Padrão GOF)
//Função Middleware (VER NO VÍDEO DO CURSO)

/**
 * O padrão middleware é um conceito que será usado/abordado
 * quando chegar no conceito de API com o Express, que é uma
 * biblioteca do node para aplicações de api's no backend
 */
const passo1 = (ctx, next) => {
  ctx.valor1 = "mid1";
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "mid2";
  next();
};

const passo3 = (ctx) => {
  ctx.valor3 = "mid3";
};

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length && 
    middlewares[indice] (ctx, () => execPasso(indice + 1))
  }
  execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)