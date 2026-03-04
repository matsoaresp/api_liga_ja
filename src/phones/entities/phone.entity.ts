import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('phones')
export class Phone {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    numero: string;

    @Column({nullable: true})
    tipo: string;

    @Column({nullable: true})
    proprietario: string;
}
