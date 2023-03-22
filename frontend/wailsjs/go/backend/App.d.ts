// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {backend} from '../models';

export function Close():Promise<void>;

export function CreateCategory(arg1:backend.Category):Promise<void>;

export function CreateProduct(arg1:backend.Product):Promise<void>;

export function Database():Promise<void>;

export function DeleteCategoryById(arg1:number):Promise<void>;

export function DeleteProductById(arg1:number):Promise<void>;

export function GetAllCategories():Promise<Array<backend.Category>>;

export function GetAllProducts():Promise<Array<backend.ProductWithCategory>>;

export function GetAllProviders():Promise<Array<backend.Provider>>;

export function GetProductById(arg1:number):Promise<any>;

export function UpdateByProvider(arg1:number,arg2:string):Promise<void>;

export function UpdateProduct(arg1:number,arg2:backend.Product):Promise<void>;
