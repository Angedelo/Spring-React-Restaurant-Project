package com.example.codeclan.restaurant.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "totalGuests")
    private int totalGuests;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "tabel_id", nullable = false)
    private Tabel tabel;

    public Booking(String date, int totalGuests, Customer customer, Tabel tabel) {
        this.date = date;
        this.totalGuests = totalGuests;
        this.customer = customer;
        this.tabel = tabel;
        this.id = id;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getTotalGuests() {
        return totalGuests;
    }

    public void setTotalGuests(int totalGuests) {
        this.totalGuests = totalGuests;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Tabel getTabel() {
        return tabel;
    }

    public void setTabel(Tabel tabel) {
        this.tabel = tabel;
    }
}
