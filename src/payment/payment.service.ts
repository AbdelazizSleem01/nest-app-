import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const res = await this.paymentRepository.save(createPaymentDto);
    return res;
  }

  async findAll() {
    const payments = await this.paymentRepository.find();
    return payments;
  }

  async findOne(id: number) {
    const paymentOne = await this.paymentRepository.findOneBy({ id });
    return paymentOne;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const updatecurrency = await this.paymentRepository.update(
      id,
      updatePaymentDto,
    );
    return updatecurrency;
  }

  async remove(id: number) {
    const deletedCurrency = await this.paymentRepository.delete(id);
    return deletedCurrency.affected + ' Deleted Successfully';
  }
}
