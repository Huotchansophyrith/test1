package com.home.lerning.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CreateUserDto {
    private String fullName;
    private String username;
    private String password;
    @Pattern(regexp = "^true$|^false$", message = "status's value must be boolean type: true or false!")
    private String status = "true";
    private Date createDate = new Date();
    private Date modifyDate = new Date();
}
