import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    marque: string;

    @Column()
    photos: string;

}
