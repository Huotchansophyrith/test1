package com.home.lerning.repository;

import com.home.lerning.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
    Iterable<User> findAllByStatus(boolean status);
    Iterable<User> findByUsernameStartsWith(String username);
    User findByIdAndStatus(int id, boolean status);
}
