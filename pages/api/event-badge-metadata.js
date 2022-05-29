export default function handler(req, res) {
  res.status(200).json({
    name: "True Interactive Event Badge",
    description: "A dynamic NFT event badge that allows entrance to live events. The nft itself is your ticket, schedule, collectible, and preview of the live event.",
    image: "https://storageapi.fleek.co/e0b96245-b6e5-4816-9856-ac47eedc62e6-bucket/True-Interactive-Services/EventBadge/TIA_thumbnail.gif",
    external_link: "https://event-badge-nft.vercel.app/nft/",
    seller_fee_basis_points: 500,
    fee_recipient: "0x896A1abF5dc45105Cb9268A73876f62E4dC7dFe7"
  });
}