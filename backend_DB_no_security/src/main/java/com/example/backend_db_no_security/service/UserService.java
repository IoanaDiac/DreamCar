package com.example.backend_db_no_security.service;


import com.example.backend_db_no_security.model.User;

public interface UserService {

    User saveUser(User user);

    User findUserById(Long id);

    Iterable<User> findAllUsers();

    void deleteUserById(Long id);
}
