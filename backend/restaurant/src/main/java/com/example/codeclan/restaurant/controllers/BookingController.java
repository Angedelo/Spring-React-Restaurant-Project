package com.example.codeclan.restaurant.controllers;

import com.example.codeclan.restaurant.repositories.BookingRepository;
import com.example.codeclan.restaurant.repositories.TabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/tabels")
@RestController
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;
}
