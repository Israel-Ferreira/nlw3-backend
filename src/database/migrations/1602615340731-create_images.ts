import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602615340731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const imagesTable: Table = new Table({
            name: "images",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: 'path',
                    type: 'varchar'
                },

                {
                    name: 'orphanage_id',
                    type: 'integer'
                }

            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ["orphanage_id"],
                    referencedTableName: "orphanages",
                    referencedColumnNames: ["id"],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        })

        await queryRunner.createTable(imagesTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images")
    }

}
