import {
    Column,
    CreateDateColumn,
    Entity,
    Generated, OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn
} from "typeorm";
import {ProfileModel} from "./profile.entity";

export enum Role {
    USER = 'user',
    ADMIN = 'admin',
}

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;



    @OneToOne(() => ProfileModel, (profile) => profile.user)
    profile: ProfileModel;
}
