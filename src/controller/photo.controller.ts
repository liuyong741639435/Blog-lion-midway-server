import { Controller, Get } from '@midwayjs/decorator';
import { PhotoService } from '../service/photo.server';

@Controller('/proto')
export class ProtoController {
  @Get('/')
  async home(): Promise<string> {
    const p = new PhotoService();
    p.savePhoto();
    return 'Hello ProtoController!';
  }
}
