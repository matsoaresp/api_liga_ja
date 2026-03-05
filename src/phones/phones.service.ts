import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class PhonesService {
  constructor(
    @InjectRepository(Phone)
    private readonly phoneRepository: Repository<Phone>
  ) { }



  async create(createPhoneDto: CreatePhoneDto){
      const newPhone = await this.phoneRepository.create(createPhoneDto)
      await this.phoneRepository.save(newPhone)
      return newPhone
    }

  async update (
    id: number,
    updatePhone: UpdatePhoneDto
  ){

    const phone = await this.phoneRepository.preload({
      id,
      ...updatePhone})

    if (!phone) {
      throw new NotFoundException('Telefone não encontrado')
    }

    return this.phoneRepository.save(phone)
  }

  async findData (id: number){
    const phone = await this.phoneRepository.findOne({
      where: {id}
    })

    if (!phone){
      throw new NotFoundException ('Telefone não encontrado')
    }
    return phone;
  }

  async delete (id: number) {
    
    const phone = await this.findData(id)

    if (!phone) 
      throw new NotFoundException('Telefone não encontrado')
    return this.phoneRepository.remove(phone)
  }
  
}

