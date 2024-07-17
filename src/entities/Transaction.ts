import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transaction')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('float')
    valor: number;

    @Column()
    data: string;

    @Column()
    hora: string;

    @Column()
    local: string;

    @Column()
    cartao: string

    @Column()
    categoria: string

    @Column()
    subcategoria: string
}

