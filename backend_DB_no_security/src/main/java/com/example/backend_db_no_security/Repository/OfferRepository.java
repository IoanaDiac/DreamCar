package com.example.backend_db_no_security.Repository;


import com.example.backend_db_no_security.model.Auction;
import com.example.backend_db_no_security.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long>{

    Optional<Offer> findById(Long id);
    Offer save(Offer offer);
    void deleteById(Long id);
    List<Offer> findByAuction(Auction auction);
}
