import { CrudListCallProps, GenericObject } from "../../api.types";

interface CustomFolderAPIMethods {
  get(id: string): Promise<GenericObject>;
  getChildren(id: string, options: CrudListCallProps): Promise<GenericObject>;
  addSubfolder(id: string, data: GenericObject): Promise<GenericObject>;
  copyTo(id: string, targetFolderId: string): Promise<GenericObject>;
  moveTo(id: string, targetFolderId: string): Promise<GenericObject>;
  rename(id: string, newName: string): Promise<GenericObject>;
  deleteTree(id: string): Promise<GenericObject>;
  markDeleted(id: string): Promise<GenericObject>;
  restore(id: string): Promise<GenericObject>;
  getExternalLink(id: string): Promise<GenericObject>;
  uploadFile(
    id: string,
    fileContent: any,
    data: GenericObject
  ): Promise<GenericObject>;
}

export interface FolderApiType extends CustomFolderAPIMethods {}
