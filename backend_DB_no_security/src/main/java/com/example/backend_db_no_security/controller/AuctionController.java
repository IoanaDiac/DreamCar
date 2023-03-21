package com.example.backend_db_no_security.controller;


import com.example.backend_db_no_security.model.Auction;
import com.example.backend_db_no_security.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auctions")
@CrossOrigin("*")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;



    @GetMapping("")
    public Iterable<Auction> findAllAuctions(){
        return auctionService.findAllAuctions();
    }

    @PostMapping("")
    public Auction saveAuction(@RequestBody Auction auction){
        return auctionService.saveAuction(auction);
    }

    @GetMapping("/{id}")
    public Auction findActionById(@PathVariable("id") Long id) {
        return auctionService.findAuctionById(id);
    }

    @PutMapping("/{id}")
    public void updateFootballer(@PathVariable Long id, @RequestBody Auction auction) {
        auctionService.updateAuction(id, auction);
    }

    public void deleteAuction(@PathVariable("id") Long id)
    {
        auctionService.deleteAuctionById(id);
    }


}