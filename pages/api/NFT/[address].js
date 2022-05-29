export default function handler(req, res) {
    res.status(200).json({
        name: "True Interactive Event Badge",
        description: "A dynamic NFT event badge that allows entrance to live events. The nft itself is your ticket, schedule, collectible, and preview of the live event.",
        image: "NEEDS UPDATING",
        custom_fields: {
            eventID: "NEEDS UPDATING",
            badgeNumber: 1,
            purchaseDate: Date.now()
        },
    });
}