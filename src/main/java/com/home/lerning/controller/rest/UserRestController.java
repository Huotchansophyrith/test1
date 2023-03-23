package com.home.lerning.controller.rest;

import com.home.lerning.dto.ResponseDTO;
import com.home.lerning.dto.user.CreateUserDto;
import com.home.lerning.dto.user.UpdateUserDto;
import com.home.lerning.exception.RequestException;
import com.home.lerning.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/users")
public class UserRestController {
    private UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseDTO findAll() {
        return this.userService.findAll();
    }

    @GetMapping("/{userId}")
    public ResponseDTO findById(@PathVariable int userId) throws RequestException {
        return this.userService.findById(userId);
    }

    @GetMapping("/username/{username}")
    public ResponseDTO findAvailableUsername(@PathVariable String username) {
        return this.userService.findAvailableUsername(username);
    }

    @PostMapping
    public ResponseDTO create(@RequestBody CreateUserDto createUserDto) {
        return this.userService.create(createUserDto);
    }

    @PutMapping
    public ResponseDTO update(@RequestBody UpdateUserDto userUpdateDto) {
        return this.userService.update(userUpdateDto);
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseDTO delete(@PathVariable int userId) {
        return this.userService.delete(userId);
    }
}
