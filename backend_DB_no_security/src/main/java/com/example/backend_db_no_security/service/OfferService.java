package com.example.backend_db_no_security.service;


import com.example.backend_db_no_security.model.Offer;

public interface OfferService {

    Offer saveOffer(Offer offer);

    Offer findOfferById(Long id);

    Iterable<Offer> findAllOffers();

    void deleteOfferById(Long id);

}
