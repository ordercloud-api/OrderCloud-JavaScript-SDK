import { ListPageWithFacets } from '../models/ListPageWithFacets';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Product } from '../models/Product';
import { ListPage } from '../models/ListPage';
import { Spec } from '../models/Spec';
import { Supplier } from '../models/Supplier';
import { Variant } from '../models/Variant';
import { ProductAssignment } from '../models/ProductAssignment';
import { PartyType } from '../models/PartyType';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Products {
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
        this.DeleteAssignment = this.DeleteAssignment.bind(this);
        this.ListSpecs = this.ListSpecs.bind(this);
        this.ListSuppliers = this.ListSuppliers.bind(this);
        this.SaveSupplier = this.SaveSupplier.bind(this);
        this.RemoveSupplier = this.RemoveSupplier.bind(this);
        this.ListVariants = this.ListVariants.bind(this);
        this.GetVariant = this.GetVariant.bind(this);
        this.SaveVariant = this.SaveVariant.bind(this);
        this.PatchVariant = this.PatchVariant.bind(this);
        this.GenerateVariants = this.GenerateVariants.bind(this);
        this.ListAssignments = this.ListAssignments.bind(this);
        this.SaveAssignment = this.SaveAssignment.bind(this);
    }

   /**
    * Get a list of products. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.supplierID ID of the supplier.
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
    public async List(listOptions?: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: Searchable<'Products.List'>, sortBy?: Sortable<'Products.List'>, page?: number, pageSize?: number, filters?: Filters<Required<Product>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPageWithFacets<Product>>>;
    public async List<TProduct extends Product>(listOptions?: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: Searchable<'Products.List'>, sortBy?: Sortable<'Products.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TProduct>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPageWithFacets<TProduct>>>;
    public async List<TProduct extends Product>(listOptions: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: Searchable<'Products.List'>, sortBy?: Sortable<'Products.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TProduct>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPageWithFacets<TProduct>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new product. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/create|api docs} for more info 
    * 
    * @param product Required fields: Name, QuantityMultiplier
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create(product: Product,requestOptions?: RequestOptions ): Promise<RequiredDeep<Product>>;
    public async Create<TProduct extends Product>(product: Product,requestOptions?: RequestOptions ): Promise<RequiredDeep<TProduct>>;
    public async Create<TProduct extends Product>(product: Product,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products`, { ...requestOptions, data: product, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single product. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/get|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get(productID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Product>>;
    public async Get<TProduct extends Product>(productID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TProduct>>;
    public async Get<TProduct extends Product>(productID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param product Required fields: Name, QuantityMultiplier
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save(productID: string, product: Product,requestOptions?: RequestOptions ): Promise<RequiredDeep<Product>>;
    public async Save<TProduct extends Product>(productID: string, product: Product,requestOptions?: RequestOptions ): Promise<RequiredDeep<TProduct>>;
    public async Save<TProduct extends Product>(productID: string, product: Product,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/products/${productID}`, { ...requestOptions, data: product, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/delete|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(productID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(productID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async Delete(productID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a product. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/patch|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param product 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch(productID: string, product: PartialDeep<Product>, requestOptions?: RequestOptions ): Promise<RequiredDeep<Product>>;
    public async Patch<TProduct extends Product>(productID: string, product: PartialDeep<Product>, requestOptions?: RequestOptions ): Promise<RequiredDeep<TProduct>>;
    public async Patch<TProduct extends Product>(productID: string, product: PartialDeep<Product>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/products/${productID}`, { ...requestOptions, data: product, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/delete-assignment|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteAssignment(productID: string, buyerID: string, listOptions?: { userID?: string, userGroupID?: string }, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteAssignment(productID: string, buyerID: string, listOptions?: { userID?: string, userGroupID?: string }, requestOptions?: RequestOptions ): Promise<void>;
    public async DeleteAssignment(productID: string, buyerID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}/assignments/${buyerID}`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product specs. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-specs|api docs} for more info 
    * 
    * @param productID ID of the product.
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
    public async ListSpecs(productID: string, listOptions?: { search?: string, searchOn?: Searchable<'Products.ListSpecs'>, sortBy?: Sortable<'Products.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters<Required<Spec>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Spec>>>;
    public async ListSpecs<TSpec extends Spec>(productID: string, listOptions?: { search?: string, searchOn?: Searchable<'Products.ListSpecs'>, sortBy?: Sortable<'Products.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSpec>>>;
    public async ListSpecs<TSpec extends Spec>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Products.ListSpecs'>, sortBy?: Sortable<'Products.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters<Required<TSpec>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSpec>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/specs`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product suppliers. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-suppliers|api docs} for more info 
    * 
    * @param productID ID of the product.
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
    public async ListSuppliers(productID: string, listOptions?: { search?: string, searchOn?: Searchable<'Products.ListSuppliers'>, sortBy?: Sortable<'Products.ListSuppliers'>, page?: number, pageSize?: number, filters?: Filters<Required<Supplier>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Supplier>>>;
    public async ListSuppliers<TSupplier extends Supplier>(productID: string, listOptions?: { search?: string, searchOn?: Searchable<'Products.ListSuppliers'>, sortBy?: Sortable<'Products.ListSuppliers'>, page?: number, pageSize?: number, filters?: Filters<Required<TSupplier>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TSupplier>>>;
    public async ListSuppliers<TSupplier extends Supplier>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Products.ListSuppliers'>, sortBy?: Sortable<'Products.ListSuppliers'>, page?: number, pageSize?: number, filters?: Filters<Required<TSupplier>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSupplier>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/suppliers`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save-supplier|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveSupplier(productID: string, supplierID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async SaveSupplier(productID: string, supplierID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async SaveSupplier(productID: string, supplierID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/products/${productID}/suppliers/${supplierID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Remove a supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/remove-supplier|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async RemoveSupplier(productID: string, supplierID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async RemoveSupplier(productID: string, supplierID: string, requestOptions?: RequestOptions ): Promise<void>;
    public async RemoveSupplier(productID: string, supplierID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/products/${productID}/suppliers/${supplierID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product variants. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-variants|api docs} for more info 
    * 
    * @param productID ID of the product.
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
    public async ListVariants(productID: string, listOptions?: { search?: string, searchOn?: Searchable<'Products.ListVariants'>, sortBy?: Sortable<'Products.ListVariants'>, page?: number, pageSize?: number, filters?: Filters<Required<Variant>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<Variant>>>;
    public async ListVariants<TVariant extends Variant>(productID: string, listOptions?: { search?: string, searchOn?: Searchable<'Products.ListVariants'>, sortBy?: Sortable<'Products.ListVariants'>, page?: number, pageSize?: number, filters?: Filters<Required<TVariant>> }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TVariant>>>;
    public async ListVariants<TVariant extends Variant>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Products.ListVariants'>, sortBy?: Sortable<'Products.ListVariants'>, page?: number, pageSize?: number, filters?: Filters<Required<TVariant>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TVariant>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/variants`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single product variant. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/get-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GetVariant(productID: string, variantID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<Variant>>;
    public async GetVariant<TVariant extends Variant>(productID: string, variantID: string, requestOptions?: RequestOptions ): Promise<RequiredDeep<TVariant>>;
    public async GetVariant<TVariant extends Variant>(productID: string, variantID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/${productID}/variants/${variantID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product variant. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveVariant(productID: string, variantID: string, variant: Variant,requestOptions?: RequestOptions ): Promise<RequiredDeep<Variant>>;
    public async SaveVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant,requestOptions?: RequestOptions ): Promise<RequiredDeep<TVariant>>;
    public async SaveVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/products/${productID}/variants/${variantID}`, { ...requestOptions, data: variant, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a product variant. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/patch-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async PatchVariant(productID: string, variantID: string, variant: Variant,requestOptions?: RequestOptions ): Promise<RequiredDeep<Variant>>;
    public async PatchVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant,requestOptions?: RequestOptions ): Promise<RequiredDeep<TVariant>>;
    public async PatchVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/products/${productID}/variants/${variantID}`, { ...requestOptions, data: variant, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Generate a variants. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/generate-variants|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.overwriteExisting Overwrite existing of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async GenerateVariants(productID: string, listOptions?: { overwriteExisting?: boolean }, requestOptions?: RequestOptions ): Promise<RequiredDeep<Product>>;
    public async GenerateVariants<TProduct extends Product>(productID: string, listOptions?: { overwriteExisting?: boolean }, requestOptions?: RequestOptions ): Promise<RequiredDeep<TProduct>>;
    public async GenerateVariants<TProduct extends Product>(productID: string, listOptions: { overwriteExisting?: boolean } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products/${productID}/variants/generate`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-assignments|api docs} for more info 
    * 
    * @param listOptions.productID ID of the product.
    * @param listOptions.priceScheduleID ID of the price schedule.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the product assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListAssignments(listOptions?: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<ProductAssignment>>>;
    public async ListAssignments<TProductAssignment extends ProductAssignment>(listOptions?: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number }, requestOptions?: RequestOptions ): Promise<RequiredDeep<ListPage<TProductAssignment>>>;
    public async ListAssignments<TProductAssignment extends ProductAssignment>(listOptions: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/products/assignments`, { ...requestOptions, impersonating, params: { ...listOptions,   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save-assignment|api docs} for more info 
    * 
    * @param productAssignment Required fields: ProductID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveAssignment(productAssignment: ProductAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveAssignment(productAssignment: ProductAssignment,requestOptions?: RequestOptions ): Promise<void>;
    public async SaveAssignment(productAssignment: ProductAssignment,requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/products/assignments`, { ...requestOptions, data: productAssignment, impersonating, params: {   } } )
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
     * Products.As().List() // lists Products using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Products();