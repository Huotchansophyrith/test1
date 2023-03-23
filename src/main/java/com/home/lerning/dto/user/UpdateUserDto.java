package com.home.lerning.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class UpdateUserDto  extends CreateUserDto{
    @Positive(message = "id must greater than 0!")
    @NotNull(message = "id must be not missing!")
    private Integer id;
}
