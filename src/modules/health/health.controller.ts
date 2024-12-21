import { Controller, Get } from '@nestjs/common';
import { HealthResponseDto } from './dto/health.response.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('health')
export class HealthController {
  @Get('check')
  @ApiOkResponse({ type: HealthResponseDto })
  check(): HealthResponseDto {
    return { status: true };
  }
}
