package com.example.backend_db_no_security.service;


import com.example.backend_db_no_security.model.Product;

public interface ProductService {

    Product saveProduct(Product product);

    Product findProductById(Long id);

    Iterable<Product> findAllProducts();

    void deleteProductById(Long id);

}
