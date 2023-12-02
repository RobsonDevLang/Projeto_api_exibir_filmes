import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MovieEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    
}
