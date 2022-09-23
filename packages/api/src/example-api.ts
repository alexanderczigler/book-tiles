import KoaRouter from '@koa/router';

const router = new KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = '📚 Book Tiles API';
});

router.get('/search', async (ctx) => {
  const { query } = ctx.request;
  if (!query.freeTextQuery) {
    ctx.status = 400;
    ctx.body = { errorMessage: 'Missing parameter: freeTextQuery' };
    return;
  }

  ctx.body = { results: [], freeTextQuery: ctx.request.query.freeTextQuery };
});

router.get('/echo/:param', async (ctx) => {
  ctx.body = { param: ctx.params.param };
});

router.post('/', async (ctx) => {
  ctx.body = ctx.request.body;
  ctx.set('X-Iteam-Header', ctx.get('X-Iteam-Header'));
});

// NOTE: Keeping the example stuff for reference.

router.get('/tiles', async (ctx) => {
  ctx.body = [
    {
      title: 'Ghosts',
      cover: 'https://cdn.thestorygraph.com/ao5gyu1swunqoit0shtyayjzgc5i'
    }
  ]
})

export default router;
