package com.example.backend_db_no_security.service;


import com.example.backend_db_no_security.model.Auction;

public interface AuctionService {


    Auction saveAuction(Auction auction);

    Auction findAuctionById(Long id);

    Iterable<Auction> findAllAuctions();

    void deleteAuctionById(Long id);

    void updateAuction(Long id, Auction auction);

}
