import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        const user = this.userRepository.create({
            email: createUserDto.email,
            password: createUserDto.password,
            nickname: createUserDto.nickname,
        });
        return this.userRepository.save(user);
    }

    async findById(id: number) {
        return this.userRepository.findOne({ where: { id } })
    }
}
