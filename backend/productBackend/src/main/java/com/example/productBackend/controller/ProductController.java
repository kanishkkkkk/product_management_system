package com.example.productBackend.controller;

import com.example.productBackend.model.Product;
import com.example.productBackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
    @Autowired
    private ProductRepository  productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public Product addNewProduct(@RequestBody Product product){
        return productRepository.save(product);

    }

}
