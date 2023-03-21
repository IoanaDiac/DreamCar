package com.example.backend_db_no_security.Repository;

import com.example.backend_db_no_security.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

    Optional<Product> findById(Long id);
    Product save(Product product);
    void deleteById(Long id);
    Optional<Product> findByName(String name);
}
