import { Knex, knex } from "knex";

export default class KnexConnection {
  private readonly connection: Knex;

  constructor() {
    const configParams: Knex.Config = {
      client: "pg",
      connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "password",
        database: "db_app_tasks",
      },
    };

    this.connection = knex(configParams);
  }

  getInstance(): Knex {
    return this.connection;
  }
}