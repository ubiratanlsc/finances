import {MigrationInterface, QueryRunner} from "typeorm";

export class assinaturas1722385143637 implements MigrationInterface {
    name = 'assinaturas1722385143637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assinatura" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar, "valor" float NOT NULL, "ativo" boolean, "data" varchar NOT NULL, "cartao" varchar NOT NULL, "categoria" varchar NOT NULL, "subcategoria" varchar NOT NULL, "conta" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "valor" float NOT NULL, "parcela" float NOT NULL, "quantidadeParcelas" integer NOT NULL, "data" text NOT NULL, "hora" varchar NOT NULL, "local" varchar NOT NULL, "cartao" varchar NOT NULL, "categoria" varchar NOT NULL, "subcategoria" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "assinatura"`);
    }

}
