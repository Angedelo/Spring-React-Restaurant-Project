package com.example.codeclan.restaurant.repositories;

import com.example.codeclan.restaurant.models.Tabel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TabelRepository extends JpaRepository<Tabel, Long> {
}
