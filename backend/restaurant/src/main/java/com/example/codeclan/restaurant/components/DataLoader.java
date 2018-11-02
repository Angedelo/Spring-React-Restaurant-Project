package com.example.codeclan.restaurant.components;

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
    }
}
