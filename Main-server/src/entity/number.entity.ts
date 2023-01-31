import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roulette {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;
}