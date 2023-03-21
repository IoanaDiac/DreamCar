package com.example.backend_db_no_security.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
@Entity
@Table(name = "auction")
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "target_price")
    private Double targetPricePerProduct;

    @Column(name = "expiration_date")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date expirationDate;

    @Column(name = "number_of_products")
    private Integer numberOfProducts;

    @Column(name = "status")
    private Integer status;


    @Column(name = "description")
    private String description;

    @ManyToOne
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @JoinColumn(name = "product_id")
    private Product product;

    @JsonIgnore
    @OneToMany(mappedBy = "auction", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Offer> offers;

    public Auction() {
    }


    public Auction(Long id, String name, Double targetPricePerProduct, Date expirationDate, Integer numberOfProducts, Integer status, String description, Product product, List<Offer> offers) {
        this.id = id;
        this.name = name;
        this.targetPricePerProduct = targetPricePerProduct;
        this.expirationDate = expirationDate;
        this.numberOfProducts = numberOfProducts;
        this.status = status;
        this.description = description;
        this.product = product;
        this.offers = offers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getTargetPricePerProduct() {
        return targetPricePerProduct;
    }

    public void setTargetPricePerProduct(Double targetPricePerProduct) {
        this.targetPricePerProduct = targetPricePerProduct;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Integer getNumberOfProducts() {
        return numberOfProducts;
    }

    public void setNumberOfProducts(Integer numberOfProducts) {
        this.numberOfProducts = numberOfProducts;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public List<Offer> getOffers() {
        return offers;
    }

    public void setOffers(List<Offer> offers) {
        this.offers = offers;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
