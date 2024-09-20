import {Response} from "express";

export interface ApiResponse<T> {
    success: boolean,
    result?: T
}

type TypedResponse<T> = Omit<Response, 'json'> & { json(data: T): Response };

export type AppResponse<T> = TypedResponse<ApiResponse<T>>;
