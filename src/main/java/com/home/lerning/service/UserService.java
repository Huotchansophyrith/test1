package com.home.lerning.service;

import com.home.lerning.dto.ResponseDTO;
import com.home.lerning.dto.user.CreateUserDto;
import com.home.lerning.dto.user.UpdateUserDto;
import com.home.lerning.exception.RequestException;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    ResponseDTO findAll();

    ResponseDTO findById(int userId) throws RequestException;

    ResponseDTO findAvailableUsername(String username);

    ResponseDTO create(CreateUserDto createUserDto) throws RequestException;

    ResponseDTO update(UpdateUserDto userUpdateDto) throws RequestException;

    ResponseDTO delete(int id) throws RequestException;
}
