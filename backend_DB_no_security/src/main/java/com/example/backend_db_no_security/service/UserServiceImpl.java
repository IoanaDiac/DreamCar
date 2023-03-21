package com.example.backend_db_no_security.service;

import com.example.backend_db_no_security.Repository.UserRepository;
import com.example.backend_db_no_security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserServiceImpl  implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUserById(Long id) {
        if(userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }
    }
}