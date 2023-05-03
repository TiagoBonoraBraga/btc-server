import { Module } from '@nestjs/common';
import { FranchiseService } from './franchise.service';
import { FranchiseController } from './franchise.controller';

@Module({
  controllers: [FranchiseController],
  providers: [FranchiseService]
})
export class FranchiseModule {}
