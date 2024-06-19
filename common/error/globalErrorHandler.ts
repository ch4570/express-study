import {NextFunction, Response} from "express";
import {CustomError} from "./customError";

export const globalErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.statusCode).json({
        message: err.message,
        statusCode: err.statusCode,
    })
}