import {BadRequestException, Injectable} from "@nestjs/common";
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
        const nicknameExists = await this.userRepository.exists({
            where: {
                nickname: createUserDto.nickname,
            }
        });

        if (nicknameExists) {
            throw new BadRequestException('이미 존재하는 nickname 입니다.');
        }

        const emailExists = await this.userRepository.exists({
            where: {
                email: createUserDto.email,
            }
        });

        if (emailExists) {
            throw new BadRequestException('이미 존재하는 email 입니다.');
        }


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

    async getUserByEmail(email: string) {
        return this.userRepository.findOne({
            where: {
                email,
            },
        });
    }
}
