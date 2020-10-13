import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602596198484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const orphanagesTable = new Table({
            name: "orphanages",
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
                    name: "name",
                    type: "varchar"
                },


                {
                    name: "latitude",
                    type: "decimal",
                    precision: 2,
                    scale: 10
                },

                {
                    name: "longitude",
                    type: "decimal",
                    precision: 2,
                    scale: 10
                },

                {
                    "name": "about", 
                    "type": "text"
                },

                {
                    "name": "instructions", 
                    "type": "text"
                }, 

                {
                    name: "open_on_weekends",
                    type: "boolean",
                    default: false,
                },

                {
                    name: "opening_hours",
                    type: "varchar"
                }
            ]
        })

        await queryRunner.createTable(orphanagesTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orphanages");
    }

}
