import { IProducts } from "./props.type";

export interface ITContext {
	contextProperties: IContextProperties;
}

export interface IContextProperties {
	isLoading: boolean;
    products: IProducts[];
}

// Initial values

export const initialContextProperties: IContextProperties = {
	isLoading: true,
    products: [],
};

export const initialContext: ITContext = {
	contextProperties: initialContextProperties,
};