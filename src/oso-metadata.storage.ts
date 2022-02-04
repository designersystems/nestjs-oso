export class OsoMetadataStorageHost {
  private classes = new Array<[Function, Record<string, any> | null]>();

  addClass(metadata: Function, params?: Record<string, any>): void {
    this.classes.push([metadata, params]);
  }

  getClasses(): Array<[Function, Record<string, any> | null]> {
    return this.classes;
  }
}

const globalRef = global as any;
export const OsoMetadataStorage: OsoMetadataStorageHost =
  globalRef.OsoMetadataStorage ||
  (globalRef.OsoMetadataStorage = new OsoMetadataStorageHost());
