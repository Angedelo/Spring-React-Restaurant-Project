package com.example.codeclan.restaurant.configurations;

import com.example.codeclan.restaurant.models.Booking;
import com.example.codeclan.restaurant.models.Customer;
import com.example.codeclan.restaurant.models.Tabel;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class SpringDataRestConfig extends RepositoryRestConfigurerAdapter {


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Customer.class, Tabel.class, Booking.class);
    }
}
