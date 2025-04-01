Bun.serve({
  port: 3001,
  routes: {
    "/api/lyrics": {
      POST: async (req) => {
        const body = await req.json();
        console.log(JSON.stringify(body, null, 4));
        return Response.json({ created: true, ...body });
      },
    },
    "/api/music": {
      POST: async (req) => {
        const body = await req.json();
        console.log(JSON.stringify(body, null, 4));
        return Response.json({ created: true, ...body });
      },
    },
  },
});
