package com.example.codeclan.restaurant;

import com.example.codeclan.restaurant.repositories.BookingRepository;
import com.example.codeclan.restaurant.repositories.CustomerRepository;
import com.example.codeclan.restaurant.repositories.TabelRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	TabelRepository tabelRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

}
