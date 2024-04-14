import {CommonEntity} from "../common/common.entity";
import {Column, Entity} from "typeorm";

@Entity()
export class User extends CommonEntity {
    @Column()
    email!: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    provider!: string;

    @Column({ nullable: true })
    providerId!: string;

    @Column({ nullable: true })
    nickname!: string;
}