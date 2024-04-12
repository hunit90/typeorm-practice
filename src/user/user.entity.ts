import {CommonEntity} from "../common/common.entity";
import {Column, Entity} from "typeorm";

@Entity()
export class User extends CommonEntity {
    @Column()
    email!: string;

    @Column()
    provider!: string;

    @Column()
    providerId!: string;

    @Column({ nullable: true })
    nickname!: string;
}