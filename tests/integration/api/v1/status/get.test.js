<<<<<<< HEAD
import orchestrator from "tests/orchestrator.js";
=======
import orchestrator from "tests/orchestrator";
>>>>>>> fix-npm-test

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

<<<<<<< HEAD
afterAll(async () => {
  await orchestrator.waitForAllServices();
});

=======
>>>>>>> fix-npm-test
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
