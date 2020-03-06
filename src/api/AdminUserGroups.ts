import { ListPage } from '../models/ListPage';
import { UserGroup } from '../models/UserGroup';
import { UserGroupAssignment } from '../models/UserGroupAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class AdminUserGroups {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
        this.DeleteUserAssignment = this.DeleteUserAssignment.bind(this);
        this.ListUserAssignments = this.ListUserAssignments.bind(this);
        this.SaveUserAssignment = this.SaveUserAssignment.bind(this);
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TUserGroup extends UserGroup>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TUserGroup>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TUserGroup>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/usergroups`, { params: { ...options,  filters: options.filters, accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroup Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TUserGroup extends UserGroup>(userGroup: UserGroup, accessToken?: string ): Promise<RequiredDeep<TUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/usergroups`, userGroup, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TUserGroup extends UserGroup>(userGroupID: string,  accessToken?: string ): Promise<RequiredDeep<TUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/usergroups/${userGroupID}`, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroupID ID of the user group.
    * @param userGroup Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TUserGroup extends UserGroup>(userGroupID: string, userGroup: UserGroup, accessToken?: string ): Promise<RequiredDeep<TUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/usergroups/${userGroupID}`, userGroup, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(userGroupID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/usergroups/${userGroupID}`, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TUserGroup extends UserGroup>(userGroupID: string, userGroup: PartialDeep<UserGroup>,  accessToken?: string ): Promise<RequiredDeep<TUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/usergroups/${userGroupID}`, userGroup, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroupID ID of the user group.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteUserAssignment(userGroupID: string, userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/usergroups/${userGroupID}/assignments/${userID}`, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param options.userGroupID ID of the user group.
    * @param options.userID ID of the user.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListUserAssignments<TUserGroupAssignment extends UserGroupAssignment>( options: { userGroupID?: string, userID?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TUserGroupAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/usergroups/assignments`, { params: { ...options,  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * @param userGroupAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveUserAssignment(userGroupAssignment: UserGroupAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/usergroups/assignments`, userGroupAssignment, { params: {  accessToken, impersonating } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * AdminUserGroups.As().List() // lists AdminUserGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminUserGroups();