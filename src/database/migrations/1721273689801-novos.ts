import {MigrationInterface, QueryRunner} from "typeorm";

export class novos1721273689801 implements MigrationInterface {
    name = 'novos1721273689801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "valor" float NOT NULL, "data" varchar NOT NULL, "hora" varchar NOT NULL, "local" varchar NOT NULL, "cartao" varchar NOT NULL, "categoria" varchar NOT NULL, "subcategoria" varchar NOT NULL, "recorrente" text NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
