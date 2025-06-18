import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('user_messages')
export class UserMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column('text')
    message: string;

    @CreateDateColumn()
    created_at: Date;
}