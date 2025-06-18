import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserMessagesTable1700000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE user_messages (
             id INT AUTO_INCREMENT PRIMARY KEY,
             username VARCHAR(255) NOT NULL,
             message TEXT NOT NULL,
             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user_messages`);
    }
}