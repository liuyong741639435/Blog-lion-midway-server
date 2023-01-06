import { DecoratorManager, Provide } from '@midwayjs/decorator';
// import { InjectEntityModel } from '@midwayjs/orm';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';

console.log('Photo:', new Photo());

function InjectEntityModel(modelKey?: any, connectionName = 'default') {
  return createCustomPropertyDecorator('__orm_model_key__', {
    modelKey,
    connectionName,
  });
}

function createCustomPropertyDecorator(
  decoratorKey: string,
  metadata: any,
  impl = true
): PropertyDecorator {
  return function (target: any, propertyName: string): void {
    attachClassMetadata(
      'inject_custom_property',
      {
        propertyName,
        key: decoratorKey,
        metadata,
        impl,
      },
      target,
      propertyName
    );
  };
}

function attachClassMetadata(
  decoratorNameKey: any,
  data: any,
  target,
  groupBy?: string,
  groupMode?: any
) {
  return new DecoratorManager().attachMetadata(
    decoratorNameKey,
    data,
    target,
    undefined,
    groupBy,
    groupMode
  );
}

@Provide()
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;

  // save
  async savePhoto() {
    // create a entity object
    let photo = new Photo();
    photo.name = 'Me and Bears';
    // photo.description = 'I am near polar bears';
    // photo.filename = 'photo-with-bears.jpg';
    // photo.views = 1;
    // photo.isPublished = true;
    console.log('this.photoModel', this.photoModel);
    // save entity
    const photoResult = await this.photoModel.save(photo);

    // save success
    console.log('photo id = ', photoResult.id);
  }
}
