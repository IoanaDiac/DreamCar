package com.example.backend_db_no_security.controller;


import com.example.backend_db_no_security.model.Product;
import com.example.backend_db_no_security.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;



    @GetMapping("")
    public Iterable<Product> findAllProducts(){
        return productService.findAllProducts();
    }

    @PostMapping("")
    public Product saveProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    @GetMapping("/{id}")
    public Product findActionById(@PathVariable("id") Long id) {
        return productService.findProductById(id);
    }


    public void deleteProduct(@PathVariable("id") Long id)
    {
        productService.deleteProductById(id);
    }


}