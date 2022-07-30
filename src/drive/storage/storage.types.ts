import { CrudListCallProps, GenericObject } from "../../api.types";

interface CustomStorageAPIMethods {
  getFields(): Promise<GenericObject>;
  addFolder(id: string, data: GenericObject): Promise<GenericObject>;
  get(id: string): Promise<GenericObject>;
  getChildren(id: string, options: CrudListCallProps): Promise<GenericObject>;
  getForApp(): Promise<GenericObject>;
  getList(options: CrudListCallProps): Promise<GenericObject>;
  getTypes(): Promise<GenericObject>;
  rename(id: string, newName: string): Promise<GenericObject>;
  uploadFile(
    id: string,
    fileContent: any,
    data: GenericObject,
    generateUniqueName?: boolean,
    rights?: GenericObject[]
  ): Promise<GenericObject>;
}

export interface StorageApiType extends CustomStorageAPIMethods {}
