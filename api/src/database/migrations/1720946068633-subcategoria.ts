import {MigrationInterface, QueryRunner} from "typeorm";

export class subcategoria1720946068633 implements MigrationInterface {
    name = 'subcategoria1720946068633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "valor" float NOT NULL, "data" varchar NOT NULL, "hora" varchar NOT NULL, "local" varchar NOT NULL, "cartao" varchar NOT NULL, "categoria" varchar NOT NULL, "subcategoria" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_usuarios" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_usuarios"("id", "name", "email") SELECT "id", "name", "email" FROM "usuarios"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`ALTER TABLE "temporary_usuarios" RENAME TO "usuarios"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" RENAME TO "temporary_usuarios"`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" string PRIMARY KEY NOT NULL, "name" string NOT NULL, "email" string)`);
        await queryRunner.query(`INSERT INTO "usuarios"("id", "name", "email") SELECT "id", "name", "email" FROM "temporary_usuarios"`);
        await queryRunner.query(`DROP TABLE "temporary_usuarios"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
