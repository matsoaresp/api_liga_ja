import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePhoneDto {

    @IsNotEmpty()
    numero: string

}
