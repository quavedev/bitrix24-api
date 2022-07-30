import { CrudListCallProps, GenericObject } from "../../api.types";

interface CustomFileAPIMethods {
  getFields(): Promise<GenericObject>;
  get(id: string, data: GenericObject): Promise<GenericObject>;
  rename(id: string, newName: string): Promise<GenericObject>;
  copyTo(id: string, targetFolderId: string): Promise<GenericObject>;
  moveTo(id: string, targetFolderId: string): Promise<GenericObject>;
  delete(id: string): Promise<GenericObject>;
  markDeleted(id: string): Promise<GenericObject>;
  restore(id: string): Promise<GenericObject>;
  uploadVersion(id: string, fileContent: any): Promise<GenericObject>;
  restoreFromVersion(id: string, versionId: string): Promise<GenericObject>;
  getVersions(id: string, options: CrudListCallProps): Promise<GenericObject>;
  getExternalLink(id: string): Promise<GenericObject>;
}

export interface FileApiType extends CustomFileAPIMethods {}
