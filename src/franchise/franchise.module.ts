import { FranchiseService } from './franchise.service';
import { FranchiseController } from './franchise.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [FranchiseController],
  providers: [FranchiseService]
})
export class FranchiseModule {}
