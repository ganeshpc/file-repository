import {
  Controller,
  Get,
  Post,
  Query,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { diskStorage } from 'multer';
import * as path from 'path';
import { JtDto } from 'src/dto/jt.dto';

@Controller('jts')
export class JtsController {
  @Post('query')
  isJtPresent(@Query() jtDto: JtDto): boolean {
    console.log(jtDto.id);
    return true;
  }

  @Get('download')
  getJt(@Query() jtDto: JtDto): StreamableFile {
    const file = createReadStream(
      path.join(process.env.FILE_STORAGE, jtDto.id),
    );
    return new StreamableFile(file);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => cb(null, process.env.FILE_STORAGE),
        filename: (req, file, cb) => cb(null, file.originalname),
      }),
    }),
  )
  uploadJt(@UploadedFile() file: Express.Multer.File): string {
    console.log(file.mimetype);
    console.log(file.originalname);
    return 'file printed bye';
  }
}
