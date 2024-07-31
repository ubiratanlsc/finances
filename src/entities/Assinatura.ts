import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('assinatura')
export class Assinatura {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    nome: string;

    @Column('float')
    valor: number;

    @Column({ nullable: true })
    ativo: boolean;

    @Column()
    data: string;

    @Column()
    cartao: string;

    @Column()
    categoria: string;

    @Column()
    subcategoria: string;

    @Column()
    conta: string;

}

