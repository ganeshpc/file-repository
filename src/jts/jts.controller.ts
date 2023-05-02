import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JtDto } from 'src/dto/jt.dto';

@Controller('jts')
export class JtsController {
  @Post('query')
  isJtPresent(@Body() jtDto: JtDto): boolean {
    console.log(jtDto.id);
    return true;
  }

  @Post('download')
  getJt(@Body() jtDto: JtDto) {
    console.log(jtDto.id);
    return null;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadJt(@UploadedFile() file: Express.Multer.File) {
    console.log('here');
    console.log(file);
    return 'file printed bye';
  }
}
