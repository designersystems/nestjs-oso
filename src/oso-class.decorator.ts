import { OsoMetadataStorage } from './oso-metadata.storage';

export function OsoClass(params?: Record<string, any>): ClassDecorator {
  return target => {
    OsoMetadataStorage.addClass(target, params);
  };
}
