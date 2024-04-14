import {IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    email: string;

    @IsString()
    @MinLength(5)
    password: string;

    @IsOptional()
    nickname?: string
}