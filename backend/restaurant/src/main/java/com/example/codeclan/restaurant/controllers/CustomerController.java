package com.example.codeclan.restaurant.controllers;

import com.example.codeclan.restaurant.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/customers")
@RestController
public class CustomerController {
    @Autowired
    CustomerRepository customerRepository;
}
