import { PartialType } from '@nestjs/swagger';
import { CreateFranchiseDto } from './create-franchise.dto';

export class UpdateFranchiseDto extends PartialType(CreateFranchiseDto) {}
