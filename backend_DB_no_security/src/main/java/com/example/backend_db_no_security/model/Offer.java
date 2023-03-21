package com.example.backend_db_no_security.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
@Entity
@Table(name = "offer")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "offer_id")
    private Long id;

    @Column(name = "price_per_product")
    private Double pricePerProduct;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private Integer status;

    @ManyToOne
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @JoinColumn(name = "auction_id")
    private Auction auction;

    @ManyToOne
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    @JoinColumn(name = "user_id")
    private User user;

    public Offer() {
    }

    public Offer(Double pricePerProduct, String description, Integer status, Auction auction, User user) {
        this.pricePerProduct = pricePerProduct;
        this.description = description;
        this.status = status;
        this.auction = auction;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPricePerProduct() {
        return pricePerProduct;
    }

    public void setPricePerProduct(Double pricePerProduct) {
        this.pricePerProduct = pricePerProduct;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Auction getAuction() {
        return auction;
    }

    public void setAuction(Auction auction) {
        this.auction = auction;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}