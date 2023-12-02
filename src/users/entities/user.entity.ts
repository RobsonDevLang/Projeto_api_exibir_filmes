import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
<<<<<<< HEAD

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    password:string

    @Column()
    email:string
    
=======
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_movie: string;

    @Column()
    descricao_movie: string;



>>>>>>> 31cc072060ac5873fd01c1cdae20bda844cf1be8
}
