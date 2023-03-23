package com.home.lerning.dto;

import com.home.lerning.constant.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseDTO {
    private String message;
    private String status = Status.SUCCESS.value();
    private int statusCode = HttpStatus.OK.value();
    private Object data = null;

    public ResponseDTO(String message) {
        this.message = message;
    }

    public ResponseDTO(String message, Object data) {
        this.message = message;
        this.data = data;
    }

    public ResponseDTO(String message, String status, int statusCode) {
        this.message = message;
        this.status = status;
        this.statusCode = statusCode;
    }
}
