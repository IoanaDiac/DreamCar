package com.example.backend_db_no_security.controller;


import com.example.backend_db_no_security.model.User;
import com.example.backend_db_no_security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;



    @GetMapping("")
    public Iterable<User> findAllUsers(){
        return userService.findAllUsers();
    }

    @PostMapping("")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public User findActionById(@PathVariable("id") Long id) {
        return userService.findUserById(id);
    }


    public void deleteUser(@PathVariable("id") Long id)
    {
        userService.deleteUserById(id);
    }


}