import database from "infra/database.js";

async function status(request, response) {
  const updatetAt = new Date().toISOString();

  const maxConnectionsQueryResult = await database.query(
    "SHOW max_connections;",
  );
  const maxConnections = maxConnectionsQueryResult.rows[0].max_connections;

  const postgresVersionQueryResult = await database.query(
    "SHOW server_version;",
  );
  const version = postgresVersionQueryResult.rows[0].server_version;

  const dbName = process.env.POSTGRES_DB;
  const openedConnectionsQueryResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [dbName],
  });
  const openedConnections = openedConnectionsQueryResult.rows[0].count;

  response.status(200).json({
    updated_at: updatetAt,
    dependencies: {
      database: {
        max_connections: maxConnections,
        opened_connections: openedConnections,
        version: version,
      },
    },
  });
}

export default status;

/*
{
  updated_at: '2022-12-06T03:30:55.000Z',
  dependencies: {
    database: {
      max_connections: 100,
      opened_connections: 9
    }
  }
}
  */
