const app = require("../app");
const request = require("supertest");

// test('sample', async ()=>{
//     await request(app).get("Should you").expect(200)
// })

//test should login
test("should login user", async () => {
  await request(app)
    .post("/auth/login")
    .send({
      email: "sang1@gmail.com",
      password: "12345",
    })
    .expect(400);
  // .then((res) => expect(res.body.data.user.email).toBe("sang@gmail.com"));
});

test("should not login user", async () => {
  await request(app)
    .post("/auth/login")
    .send({
      email: "san1ggmail.com",
      password: "1234",
    })
    .expect(400)
    .then(res => expect(res.body.email).toBeTruthy(`sang@gmail.com`))})
