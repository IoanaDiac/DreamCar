package com.example.backend_db_no_security.service;

import com.example.backend_db_no_security.Repository.OfferRepository;
import com.example.backend_db_no_security.model.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OfferServiceImpl  implements OfferService {

    @Autowired
    private OfferRepository offerRepository;
    @Override
    public Offer saveOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    @Override
    public Offer findOfferById(Long id) {
        return offerRepository.findById(id).orElse(null);
    }

    @Override
    public Iterable<Offer> findAllOffers() {
        return offerRepository.findAll();
    }

    @Override
    public void deleteOfferById(Long id) {
        if(offerRepository.existsById(id)) {
            offerRepository.deleteById(id);
        }
    }
}