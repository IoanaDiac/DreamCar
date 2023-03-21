package com.example.backend_db_no_security.Repository;


import com.example.backend_db_no_security.model.Auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long> {


    Auction save(Auction auction);
    void deleteById(Long id);
    List<Auction> findByStatus(String status);
}
