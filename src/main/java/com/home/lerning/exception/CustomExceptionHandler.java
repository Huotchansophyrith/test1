package com.home.lerning.exception;

import com.home.lerning.dto.ResponseDTO;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import javax.validation.ConstraintViolationException;
import java.util.List;

@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler({
            RequestException.class,
            MethodArgumentNotValidException.class,
            ConstraintViolationException.class,
            MethodArgumentTypeMismatchException.class
    })
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ResponseDTO methodArgumentNotValidExceptionHandler(Exception ex) {
        String errorMsg;
        if (ex instanceof MethodArgumentNotValidException) {
            MethodArgumentNotValidException mex = (MethodArgumentNotValidException) ex;
            List<FieldError> errors = mex.getBindingResult().getFieldErrors();
            errorMsg = errors.get(0).getDefaultMessage();
        } else {
            errorMsg = ex.getLocalizedMessage();
        }

        ResponseDTO responseDto = new ResponseDTO();
        responseDto.setMessage(errorMsg);
        responseDto.setStatus(HttpStatus.BAD_REQUEST.getReasonPhrase());
        responseDto.setStatusCode(HttpStatus.BAD_REQUEST.value());
        return responseDto;
    }

    /* @ExceptionHandler(DataAccessException.class)
     @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
     @ResponseBody*/
    public ResponseDTO dataAccessExceptionHandler(DataAccessException ex) {
        ResponseDTO responseDto = new ResponseDTO();
        responseDto.setMessage(ex.getLocalizedMessage());
        responseDto.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
        responseDto.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
        return responseDto;
    }
}
