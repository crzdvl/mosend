import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ChunkDto {
  @ApiProperty({
    required: true,
    default: 5,
  })
  @IsNotEmpty()
    partNumber: number;

  @ApiProperty({
    required: true,
    default: 'some text',
  })
  @IsNotEmpty()
    body: Buffer;

  @ApiProperty({
    required: true,
    default: '15',
  })
  @IsNotEmpty()
    contentLength: number;
}
