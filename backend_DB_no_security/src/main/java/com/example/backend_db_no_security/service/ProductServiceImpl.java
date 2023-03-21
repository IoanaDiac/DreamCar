package com.example.backend_db_no_security.service;

import com.example.backend_db_no_security.Repository.ProductRepository;
import com.example.backend_db_no_security.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductServiceImpl  implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public void deleteProductById(Long id) {
        if(productRepository.existsById(id)) {
            productRepository.deleteById(id);
        }
    }
}