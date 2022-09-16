import { GenericObject } from "../api.types";

interface CustomSocialNetworkGroupsAPIMethods {
  groups(filter?: any, select?: any): Promise<GenericObject>;
}

export interface SocialNetworkGroups
  extends CustomSocialNetworkGroupsAPIMethods {}
