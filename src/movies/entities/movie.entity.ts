import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
<<<<<<< HEAD
export class Movie {
=======
export class MovieEntity {
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

<<<<<<< HEAD
    @Column()
    descripition: string

    @Column()
    url: string

}

=======
    
}
>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
