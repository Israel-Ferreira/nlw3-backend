import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity("orphanages")
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column({name: "opening_hours", nullable: true})
    opening_hours: string;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column({name: "open_on_weekends", nullable: true, default: false})
    open_on_weekends: boolean;
}