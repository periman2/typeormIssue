import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ length: 600 })
    public firstname: string;

    @Column({ length: 600 })
    public lastname: string;

    //After running once and creating the database then try to connect again by restarting the program using {synchronize: true} setting and you will see promise rejection error.
    //If you comment those two columns out I can connect any number of times wihout a problem.

    //Bug elements
    @CreateDateColumn()
    public createdAt: string;

    @UpdateDateColumn()
    public updatedAt: string;
    //Bug elements end.

}