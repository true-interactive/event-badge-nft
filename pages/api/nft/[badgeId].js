export default function handler(req, res) {
    const { badgeId } = req.query;
    const data = {
        startDate: new Date("June 6, 2022 11:00:00").getTime(),
        endDate: new Date("June 6, 2022 13:00:00").getTime(),
        eventName: "Chainlink Spring 2022 Hackathon Closing Ceremony",
        eventId: 2,
        purchaseDate: Date.now()
    };
    const expiredData = {
        startDate: new Date("May 28, 2022 00:00:00").getTime(),
        endDate: new Date("June 6, 2022 11:00:00").getTime(),
        eventName: "Awesome You Did It Concert - Hackathon Judging Period",
        eventId: 1,
        purchaseDate: Date.now()
    }

    if (badgeId < 100) {
        res.status(200).json({
            name: "True Interactive Event Badge",
            description: "A dynamic NFT event badge that allows entrance to live events. The nft itself is your ticket, schedule, collectible, and preview of the live event.",
            image: "https://storageapi.fleek.co/e0b96245-b6e5-4816-9856-ac47eedc62e6-bucket/True-Interactive-Services/EventBadge/TIA_thumbnail.gif",
            custom_fields: {
                eventID: expiredData.eventId,
                eventName: expiredData.eventName,
                badgeId: badgeId,
                purchaseDate: Date.now(),
                startDate: expiredData.startDate,
                endDate: expiredData.endDate
            },
            youtube_url: "https://www.youtube.com/watch?v=FzzOiUzE9Rg",
            external_url: "https://event-badge-nft.vercel.app/nft/",
            animation_url: `event-badge-nft.vercel.app/nft/${badgeId}`
        });
    }
    else {
        res.status(200).json({
            name: "True Interactive Event Badge",
            description: "A dynamic NFT event badge that allows entrance to live events. The nft itself is your ticket, schedule, collectible, and preview of the live event.",
            image: "https://storageapi.fleek.co/e0b96245-b6e5-4816-9856-ac47eedc62e6-bucket/True-Interactive-Services/EventBadge/TIA_thumbnail.gif",
            custom_fields: {
                eventID: data.eventId,
                eventName: data.eventName,
                badgeId: badgeId,
                purchaseDate: Date.now(),
                startDate: data.startDate,
                endDate: data.endDate
            },
            youtube_url: "https://www.youtube.com/watch?v=FzzOiUzE9Rg",
            external_url: "https://event-badge-nft.vercel.app/nft/",
            animation_url: `event-badge-nft.vercel.app/nft/${badgeId}`
        });
    }
}