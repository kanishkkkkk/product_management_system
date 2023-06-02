package com.example.productBackend.model;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private int id;
    @Column(name = "productName")
    private String productName;
    @Column(name = "desciption")
    private String description;
    @Column(name = "price")
    private double price;
    @Column(name = "imageURL")
    private String URL;

    public Product() {
    }

    public Product(int id, String productName, String description, double price, String URL) {
        super();
        this.id = id;
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.URL = URL;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", URL=" + URL +
                '}';
    }
};

