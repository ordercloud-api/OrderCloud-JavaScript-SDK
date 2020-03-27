import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Buyer } from '../models/Buyer';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Buyers {
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
    }

   /**
    * Get a list of buyers. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List(listOptions?: { search?: string, searchOn?: Searchable<'Buyers.List'>, sortBy?: Sortable<'Buyers.List'>, page?: number, pageSize?: number, filters?: Filters<Required<Buyer>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Buyer>>>;
    public async List<TBuyer extends Buyer>(listOptions?: { search?: string, searchOn?: Searchable<'Buyers.List'>, sortBy?: Sortable<'Buyers.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TBuyer>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TBuyer>>>;
    public async List<TBuyer extends Buyer>(listOptions: { search?: string, searchOn?: Searchable<'Buyers.List'>, sortBy?: Sortable<'Buyers.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TBuyer>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TBuyer>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new buyer. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/create|api docs} for more info 
    * 
    * @param buyer Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create(buyer: Buyer,requestOptions?: RequestOptions ): Promise<RequiredDeep<Buyer>>;
    public async Create<TBuyer extends Buyer>(buyer: Buyer,requestOptions?: RequestOptions ): Promise<RequiredDeep<TBuyer>>;
    public async Create<TBuyer extends Buyer>(buyer: Buyer,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/buyers`, { ...requestOptions, data: buyer, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get(buyerID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Buyer>>;
    public async Get<TBuyer extends Buyer>(buyerID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TBuyer>>;
    public async Get<TBuyer extends Buyer>(buyerID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/buyers/${buyerID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a buyer. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param buyer Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save(buyerID: string, buyer: Buyer,requestOptions?: RequestOptions ): Promise<RequiredDeep<Buyer>>;
    public async Save<TBuyer extends Buyer>(buyerID: string, buyer: Buyer,requestOptions?: RequestOptions ): Promise<RequiredDeep<TBuyer>>;
    public async Save<TBuyer extends Buyer>(buyerID: string, buyer: Buyer,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/buyers/${buyerID}`, { ...requestOptions, data: buyer, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(buyerID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(buyerID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(buyerID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/buyers/${buyerID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param buyer 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch(buyerID: string, buyer: PartialDeep<Buyer>, requestOptions?: RequestOptions ): Promise<RequiredDeep<Buyer>>;
    public async Patch<TBuyer extends Buyer>(buyerID: string, buyer: PartialDeep<Buyer>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TBuyer>>;
    public async Patch<TBuyer extends Buyer>(buyerID: string, buyer: PartialDeep<Buyer>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/buyers/${buyerID}`, { ...requestOptions, data: buyer, impersonating, params: {   } } )
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
     * Buyers.As().List() // lists Buyers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Buyers();