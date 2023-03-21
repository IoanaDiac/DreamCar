package com.example.backend_db_no_security.service;

import com.example.backend_db_no_security.Repository.AuctionRepository;
import com.example.backend_db_no_security.model.Auction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuctionServiceImpl implements AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;
    @Override
    public Auction saveAuction(Auction auction) {
        return auctionRepository.save(auction);
    }

    @Override
    public Auction findAuctionById(Long id) {
        return auctionRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<Auction> findAllAuctions() {
        return auctionRepository.findAll();
    }

    @Override
    public void deleteAuctionById(Long id) {
        if(auctionRepository.existsById(id)) {
            auctionRepository.deleteById(id);
        }
    }

    @Override
    public void updateAuction(Long id, Auction auction) {
        if(auctionRepository.existsById(id)) {
            Auction auctionedit = auctionRepository.findById(id).get();
            auctionedit.setStatus(auction.getStatus());
            auctionedit.setExpirationDate(auction.getExpirationDate());
            auctionedit.setNumberOfProducts(auction.getNumberOfProducts());
            auctionedit.setTargetPricePerProduct(auction.getTargetPricePerProduct());
            auctionedit.setDescription(auction.getDescription());
        }
}}
