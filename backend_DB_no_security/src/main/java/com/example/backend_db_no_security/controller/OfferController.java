
package com.example.backend_db_no_security.controller;

import com.example.backend_db_no_security.model.Offer;
import com.example.backend_db_no_security.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/offers")
@CrossOrigin("*")
public class OfferController {

    @Autowired
    private OfferService offerService;



    @GetMapping("")
    public Iterable<Offer> findAllOffers(){
        return offerService.findAllOffers();
    }

    @PostMapping("")
    public Offer saveOffer(@RequestBody Offer offer){
        return offerService.saveOffer(offer);
    }

    @GetMapping("/{id}")
    public Offer findActionById(@PathVariable("id") Long id) {
        return offerService.findOfferById(id);
    }


    public void deleteOffer(@PathVariable("id") Long id)
    {
        offerService.deleteOfferById(id);
    }


}
