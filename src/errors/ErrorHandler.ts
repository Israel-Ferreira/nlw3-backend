import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";


interface ValidationErrors {
    [key: string] : string[];
}

const ErrorHandler: ErrorRequestHandler = (error, request,response, next) => {

    if(error instanceof ValidationError){
        let errors: ValidationErrors = {}

        error.inner.forEach(error => {
            errors[error.path] = error.errors
        })


        response.status(400).json({message: 'Validation Fails', errors})
    }


    response.status(500).json({message: 'Internal Server Error'})
}

export default ErrorHandler;