package com.example.codeclan.restaurant.components;

import com.example.codeclan.restaurant.models.Booking;
import com.example.codeclan.restaurant.models.Customer;
import com.example.codeclan.restaurant.models.Tabel;
import com.example.codeclan.restaurant.repositories.BookingRepository;
import com.example.codeclan.restaurant.repositories.CustomerRepository;
import com.example.codeclan.restaurant.repositories.TabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    TabelRepository tabelRepository;

    @Autowired
    BookingRepository bookingRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){
        Tabel tabel1 = new Tabel(1, 4);
        tabelRepository.save(tabel1);

        Tabel tabel2 = new Tabel(2, 8);
        tabelRepository.save(tabel2);

        Customer customer1 = new Customer("Alice");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Matty");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Reilly");
        customerRepository.save(customer3);

        Booking booking1 = new Booking("01.02.03", 4, customer1, tabel1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking("09.08.07", 2, customer2, tabel1);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking("05.05.05", 8, customer3, tabel2);
        bookingRepository.save(booking1);
    }
}
